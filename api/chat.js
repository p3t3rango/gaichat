import fs from 'fs';
import path from 'path';

// Vercel serverless function to handle Claude API calls
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const { prompt } = req.body;

    if (!prompt) {
        res.status(400).json({ error: 'Prompt is required' });
        return;
    }

    const apiKey = process.env.CLAUDE_API_KEY;

    if (!apiKey) {
        console.error('CLAUDE_API_KEY not found in environment variables');
        res.status(500).json({ error: 'API key not configured' });
        return;
    }

    // Read the documentation file (hot-reload on every request)
    let documentation = '';
    try {
        documentation = fs.readFileSync(path.join(process.cwd(), 'Gami Documentation.md'), 'utf8');
    } catch (err) {
        console.error('Failed to read Gami Documentation.md:', err);
        res.status(500).json({ error: 'Failed to read documentation file' });
        return;
    }

    // Build the full prompt
    const fullPrompt = `You are gäi, the voice of the gämi platform. You must ONLY answer questions that are directly answered in the provided Gämi documentation below. 

CRITICAL RULES:
1. If the documentation contains information relevant to the user's question, provide a helpful answer using ONLY that information.
2. If the documentation does NOT contain relevant information, respond EXACTLY with: "This does not relate to gämi. Please try a different question."
3. NEVER provide general knowledge answers, even if you know the answer to non-gämi questions.
4. NEVER mix a valid gämi answer with the fallback message.
5. NEVER answer questions about topics not covered in the gämi documentation (like world events, general tech questions, jokes, etc.).

FORMAT RULES:
- No Markdown formatting (no #, ##, *, -, etc.)
- Plain text only
- Concise, direct responses (2-4 sentences unless more detail needed)
- No introductions, disclaimers, or self-references
- Never mention documentation, sources, or external references

User question: ${prompt}

Gämi Knowledge Base:
${documentation}`;

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-haiku-20240307',
                max_tokens: 300,
                messages: [{
                    role: 'user',
                    content: fullPrompt
                }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Claude API error:', response.status, errorText);
            res.status(response.status).json({ error: `Claude API error: ${response.status}` });
            return;
        }

        const data = await response.json();
        res.status(200).json({ response: data.content[0].text });

    } catch (error) {
        console.error('Error calling Claude API:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
} 