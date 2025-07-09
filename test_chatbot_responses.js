const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const readline = require('readline');

const TEST_CASES_FILE = path.join(__dirname, 'test_questions.json');
const OUTPUT_CSV_FILE = path.join(__dirname, 'chatbot_test_results.csv');
const API_URL = 'https://gaichat.vercel.app/api/chat';

function getTimestamp() {
  return new Date().toISOString().replace('T', ' ').substring(0, 19);
}

function escapeCSV(str) {
  if (!str) return '';
  return '"' + String(str).replace(/"/g, '""') + '"';
}

function analyzeFailure(expectedType, response, question) {
  if (expectedType === 'gami_answer' && response.trim().toLowerCase().startsWith('this does not relate to gämi')) {
    return 'FAIL: False fallback';
  }
  if (expectedType === 'fallback' && !response.trim().toLowerCase().startsWith('this does not relate to gämi')) {
    return 'FAIL: Real answer to non-gämi question';
  }
  if (expectedType === 'gami_answer' && response.toLowerCase().includes('this does not relate to gämi')) {
    return 'FAIL: Fallback appended to answer';
  }
  return 'PASS';
}

function suggestPromptTweak(failureType) {
  if (failureType === 'FAIL: False fallback') {
    return 'Clarify that the fallback should only be used if no relevant information is found in the documentation.';
  }
  if (failureType === 'FAIL: Fallback appended to answer') {
    return 'Explicitly instruct not to append the fallback message after a valid answer.';
  }
  if (failureType === 'FAIL: Real answer to non-gämi question') {
    return 'Reinforce that only Gämi-related questions should be answered.';
  }
  return '';
}

async function promptUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => rl.question(question, ans => {
    rl.close();
    resolve(ans);
  }));
}

async function applySystemPromptChange(suggestion) {
  const chatJsPath = path.join(__dirname, 'api', 'chat.js');
  let content = fs.readFileSync(chatJsPath, 'utf8');
  // Replace the fullPrompt assignment string with the new suggestion
  content = content.replace(
    /const fullPrompt = `([\s\S]*?)`;/,
    `const fullPrompt = \
` +
      '`' + suggestion.replace(/`/g, '\`') + '`;'
  );
  fs.writeFileSync(chatJsPath, content, 'utf8');
}

async function applyDocumentationChange(suggestion) {
  const docPath = path.join(__dirname, 'Gami Documentation.md');
  fs.appendFileSync(docPath, `\n\n# Suggested Addition/Change\n${suggestion}\n`, 'utf8');
}

async function getLLMFeedback(userMessage, flagged, systemPrompt, documentation) {
  // Use the deployed Claude/Anthropic API endpoint directly with a neutral system prompt
  const apiUrl = 'https://gaichat.vercel.app/api/chat'; // Replace with direct Claude API if available
  const metaPrompt = `You are an expert in prompt engineering and documentation for LLM-based chatbots.\n\nHere is the current system prompt:\n${systemPrompt}\n\nHere is the current documentation:\n${documentation}\n\nHere is the flagged test case:\nUser question: ${flagged.question}\nLLM response: ${flagged.response}\nFailure reason: ${flagged.suggestion}\n\nUser instruction: ${userMessage}`;
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: metaPrompt })
  });
  const data = await res.json();
  return data.response || JSON.stringify(data);
}

async function interactiveReview(flaggedTests) {
  // Read system prompt and documentation once for all flagged tests
  const chatJsPath = path.join(__dirname, 'api', 'chat.js');
  const docPath = path.join(__dirname, 'Gami Documentation.md');
  const chatJsContent = fs.readFileSync(chatJsPath, 'utf8');
  const docContent = fs.readFileSync(docPath, 'utf8');
  // Extract the fullPrompt string from chat.js
  const systemPromptMatch = chatJsContent.match(/const fullPrompt = `([\s\S]*?)`;/);
  const systemPrompt = systemPromptMatch ? systemPromptMatch[1] : '';
  const documentation = docContent;

  for (const flagged of flaggedTests) {
    console.log(`\n---\nTest: ${flagged.question}\nResponse: ${flagged.response}\nSuggested Change: ${flagged.suggestion}\nFile: ${flagged.file}\n`);
    let satisfied = false;
    let finalSuggestion = flagged.suggestion;
    while (!satisfied) {
      const ans = await promptUser('Approve change? (y = yes, n = no, e = edit suggestion, l = LLM feedback): ');
      if (ans === 'e') {
        finalSuggestion = await promptUser('Enter your edited suggestion: ');
      } else if (ans === 'l') {
        const userMsg = await promptUser('Enter your question or instruction for the LLM: ');
        const llmReply = await getLLMFeedback(userMsg, flagged, systemPrompt, documentation);
        console.log(`LLM Suggestion: ${llmReply}`);
        finalSuggestion = llmReply;
      } else if (ans === 'y') {
        if (flagged.file === 'api/chat.js') {
          await applySystemPromptChange(finalSuggestion);
          console.log('System prompt updated.');
        } else if (flagged.file === 'Gami Documentation.md') {
          await applyDocumentationChange(finalSuggestion);
          console.log('Documentation updated.');
        }
        satisfied = true;
      } else {
        console.log('Change skipped.');
        satisfied = true;
      }
    }
  }
}

async function main() {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  const testCases = JSON.parse(fs.readFileSync(TEST_CASES_FILE, 'utf8'));
  const rows = [
    [
      'Timestamp',
      'User ID',
      'Session ID',
      'User Question',
      'LLM Response',
      'Tags / Topics',
      'Response Quality Notes',
      'Follow-Up Needed (Y/N)',
      'Follow-Up Notes'
    ]
  ];
  for (const testCase of testCases) {
    const timestamp = getTimestamp();
    const userId = 'test-script';
    const sessionId = uuidv4();
    const question = testCase.question;
    const tags = testCase.tags || '';
    let response = '';
    let quality = '';
    let followUp = 'N';
    let followUpNotes = '';
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: question })
      });
      const data = await res.json();
      response = data.response || JSON.stringify(data);
      quality = analyzeFailure(testCase.expectedType, response, question);
      if (quality !== 'PASS') {
        followUp = 'Y';
        followUpNotes = suggestPromptTweak(quality);
      }
    } catch (err) {
      response = 'ERROR: ' + err.message;
      quality = 'FAIL: API error';
      followUp = 'Y';
      followUpNotes = 'Check API/server availability.';
    }
    rows.push([
      timestamp,
      userId,
      sessionId,
      escapeCSV(question),
      escapeCSV(response),
      escapeCSV(tags),
      escapeCSV(quality),
      followUp,
      escapeCSV(followUpNotes)
    ]);
  }
  const csvContent = rows.map(row => row.join(',')).join('\n');
  fs.writeFileSync(OUTPUT_CSV_FILE, csvContent, 'utf8');
  console.log(`Test results written to ${OUTPUT_CSV_FILE}`);
}

main(); 