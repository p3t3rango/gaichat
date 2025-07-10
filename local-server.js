import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env.local (preferred) or .env
dotenv.config({ path: '.env.local' });
dotenv.config(); // fallback to .env if .env.local doesn't exist

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Import our existing chat handler logic
async function chatHandler(req, res) {
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
        documentation = fs.readFileSync(path.join(__dirname, 'Gami Documentation.md'), 'utf8');
    } catch (err) {
        console.error('Failed to read Gami Documentation.md:', err);
        res.status(500).json({ error: 'Failed to read documentation file' });
        return;
    }

    // STAGE 1: Detect gämi content and extract it
    const detectionPrompt = `You are a gämi content detector. Your job is to analyze questions and determine if they contain gämi-related content.

TASK: Analyze this question and respond with EXACTLY one of these formats:

1. If the question contains gämi/gami content OR asks about platform features OR asks about gämi integrations/technology: "GAMI_DETECTED: [extracted gämi question]"
2. If no gämi content: "NO_GAMI"

IMPORTANT: "gami" (without umlaut) is a common typo for "gämi" and should be treated as gämi-related. When you see "gami" alone, convert it to "What is gämi?"

GÄMI-RELATED TOPICS include:
- Explicit mentions of "gämi", "gami", or variations/typos
- File sharing, storage, management
- Collaboration features, Community Folders
- Playlists, timestamp notes
- Encrypted messaging, communication
- Platform features, tagging, search
- Technology questions about gämi (blockchain, integrations, etc.)

EXAMPLES:
- "What is gämi?" → "GAMI_DETECTED: What is gämi?"
- "gami" → "GAMI_DETECTED: What is gämi?"
- "gämi" → "GAMI_DETECTED: What is gämi?"
- "How do I share files?" → "GAMI_DETECTED: How do I share files?"
- "What are collaboration features?" → "GAMI_DETECTED: What are collaboration features?"
- "How do I create a playlist?" → "GAMI_DETECTED: How do I create a playlist?"
- "What is gämi and tell me about weather?" → "GAMI_DETECTED: What is gämi?"
- "Does gämi support blockchain?" → "GAMI_DETECTED: Does gämi support blockchain?"
- "Can I integrate gämi with Slack?" → "GAMI_DETECTED: Can I integrate gämi with Slack?"
- "Tell me about the weather" → "NO_GAMI"
- "What is Python?" → "NO_GAMI"

Question to analyze: ${prompt}`;

    let gamiQuestion = null;

    try {
        // STAGE 1: Detection API call
        const detectionResponse = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 100,
                messages: [{
                    role: 'user',
                    content: detectionPrompt
                }]
            })
        });

        if (!detectionResponse.ok) {
            const errorText = await detectionResponse.text();
            console.error('Claude detection API error:', detectionResponse.status, errorText);
            res.status(detectionResponse.status).json({ error: `Claude detection API error: ${detectionResponse.status}` });
            return;
        }

        const detectionData = await detectionResponse.json();
        const detectionResult = detectionData.content[0].text.trim();

        // Check if gämi content was detected
        if (detectionResult.startsWith('GAMI_DETECTED:')) {
            gamiQuestion = detectionResult.replace('GAMI_DETECTED:', '').trim();
        } else if (detectionResult === 'NO_GAMI') {
            // No gämi content, return fallback
            res.status(200).json({ response: 'This does not relate to gämi. Please try a different question.' });
            return;
        } else {
            // Unexpected response from detection, treat as no gämi
            res.status(200).json({ response: 'This does not relate to gämi. Please try a different question.' });
            return;
        }

        // Check if this is an integration question that needs a contextual response
        const lowerGamiQuestion = gamiQuestion.toLowerCase();
        if (lowerGamiQuestion.includes('blockchain') || lowerGamiQuestion.includes('nft') || lowerGamiQuestion.includes('crypto')) {
            res.status(200).json({ response: 'gämi does not currently use blockchain technology or support NFTs. gämi focuses on traditional cloud-based file storage and collaboration features to provide a reliable, secure platform for creative professionals.' });
            return;
        }
        
        if (lowerGamiQuestion.includes('slack')) {
            res.status(200).json({ response: 'gämi does not currently have a Slack integration. gämi uses its own built-in encrypted messaging and communication system for all collaboration needs, providing seamless integration within the platform.' });
            return;
        }
        
        if (lowerGamiQuestion.includes('integrate') && (lowerGamiQuestion.includes('third-party') || lowerGamiQuestion.includes('external') || lowerGamiQuestion.includes('api'))) {
            res.status(200).json({ response: 'gämi does not currently offer third-party integrations or external APIs. gämi is designed as a unified all-in-one platform that provides all the tools you need for file management, collaboration, and communication within a single ecosystem.' });
            return;
        }

        // STAGE 2: Answer the extracted gämi question
        const answerPrompt = `You are gäi, the voice of the gämi platform. Answer this gämi question using ONLY the provided documentation.

RULES:
1. Provide a helpful answer using only the documentation below.
2. If the information is not in the documentation, respond with: "This does not relate to gämi. Please try a different question."
3. No Markdown formatting - plain text only.
4. Concise, direct responses (2-4 sentences unless more detail needed).
5. IMPORTANT: "gami" is a common typo for "gämi" - treat them as the same platform.

SEARCH STRATEGY:
- Look carefully through ALL sections of the documentation
- For playlist questions, check the "Playlists" section which contains creation steps
- For community folder questions, check the "Community Folders" section
- Pay special attention to subsections like "Playlist Creation and Management" and "Community Folder Creation and Management"

Question: ${gamiQuestion}

Gämi Knowledge Base:
${documentation}`;

        const answerResponse = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 800,
                messages: [{
                    role: 'user',
                    content: answerPrompt
                }]
            })
        });

        if (!answerResponse.ok) {
            const errorText = await answerResponse.text();
            console.error('Claude answer API error:', answerResponse.status, errorText);
            res.status(answerResponse.status).json({ error: `Claude answer API error: ${answerResponse.status}` });
            return;
        }

        const answerData = await answerResponse.json();
        res.status(200).json({ response: answerData.content[0].text });

    } catch (error) {
        console.error('Error calling Claude API:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Routes
app.post('/api/chat', chatHandler);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Local development server running on http://localhost:${PORT}`);
    console.log(`Chat API available at: http://localhost:${PORT}/api/chat`);
    console.log(`Health check: http://localhost:${PORT}/health`);
}); 