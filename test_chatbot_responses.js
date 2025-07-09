const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const TEST_CASES_FILE = path.join(__dirname, 'test_questions.json');
const OUTPUT_CSV_FILE = path.join(__dirname, 'chatbot_test_results.csv');
const API_URL = 'https://gaichat.vercel.app/api/chat';

// Add delay between requests to avoid rate limiting
const DELAY_MS = 2000; // 2 seconds between requests

function getTimestamp() {
  return new Date().toISOString().replace('T', ' ').substring(0, 19);
}

function escapeCSV(str) {
  if (!str) return '';
  return '"' + String(str).replace(/"/g, '""') + '"';
}

function analyzeFailure(expectedType, response, question) {
  const lowerResponse = response.toLowerCase();
  
  if (expectedType === 'gami_answer') {
    if (lowerResponse.includes('this does not relate to gämi')) {
      return 'FAIL: False fallback';
    }
    if (lowerResponse.includes('error')) {
      return 'FAIL: API error';
    }
    return 'PASS';
  }
  
  if (expectedType === 'fallback') {
    if (lowerResponse.includes('this does not relate to gämi')) {
      return 'PASS';
    }
    if (lowerResponse.includes('error')) {
      return 'FAIL: API error';
    }
    return 'FAIL: Should have used fallback';
  }
  
  return 'PASS';
}

function suggestPromptTweak(failureType) {
  if (failureType === 'FAIL: False fallback') {
    return 'Clarify that the fallback should only be used if no relevant information is found in the documentation.';
  }
  if (failureType === 'FAIL: Should have used fallback') {
    return 'Reinforce that only Gämi-related questions should be answered.';
  }
  if (failureType === 'FAIL: API error') {
    return 'Check API/server availability or rate limiting.';
  }
  return 'Review system prompt for clarity.';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  const testCases = JSON.parse(fs.readFileSync(TEST_CASES_FILE, 'utf8'));
  
  console.log(`Running ${testCases.length} tests with ${DELAY_MS}ms delays...`);
  
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
  
  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const timestamp = getTimestamp();
    const userId = 'test-script';
    const sessionId = uuidv4();
    const question = testCase.question;
    const tags = testCase.tags || '';
    let response = '';
    let quality = '';
    let followUp = 'N';
    let followUpNotes = '';
    
    console.log(`Testing ${i + 1}/${testCases.length}: "${question}"`);
    
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
    
    // Add delay between requests (except for the last one)
    if (i < testCases.length - 1) {
      console.log(`Waiting ${DELAY_MS}ms before next test...`);
      await sleep(DELAY_MS);
    }
  }
  
  const csvContent = rows.map(row => row.join(',')).join('\n');
  fs.writeFileSync(OUTPUT_CSV_FILE, csvContent, 'utf8');
  console.log(`Test results written to ${OUTPUT_CSV_FILE}`);
  
  // Summary
  const failures = rows.slice(1).filter(row => row[6] !== 'PASS').length;
  const total = rows.length - 1;
  console.log(`\nSummary: ${total - failures}/${total} tests passed (${failures} failures)`);
}

main(); 