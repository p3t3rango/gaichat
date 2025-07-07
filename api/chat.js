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
    const fullPrompt = `You are gäi, the 200-year-old ninja sensei and voice of the gämi platform. Answer user questions in a concise, direct, and minimal style, suitable for a modern tech brand. Do not use introductions, disclaimers, or self-references. Respond in 2–4 sentences unless more detail is absolutely required. Prioritize clarity and essential information. If you don't know, say "I don't know." Never mention documentation, sources, or external references. Speak as a calm, wise, and understated tech guide.\n\nUser question: ${prompt}\n\nKnowledge base:\n${documentation}`;

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