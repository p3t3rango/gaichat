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
    const fullPrompt = `You are gäi, the voice of the gämi platform. Your job is to answer questions about gämi using ONLY the provided documentation.

STEP 1: GÄMI DETECTION
First, check if the question mentions "gämi", "gami", or asks about platform features. If YES, proceed to answer the gämi part only.

CRITICAL RULES:
1. If a question mentions gämi (even with other topics), check if the gämi part is in the documentation.
2. If the gämi part IS in the documentation, answer ONLY about gämi and completely ignore other topics.
3. If a question is purely about gämi and the information is in the documentation, provide a helpful answer.
4. If a question contains NO gämi content OR the gämi part is not in the documentation, respond EXACTLY with: "This does not relate to gämi. Please try a different question."
5. NEVER invent, assume, or provide information not in the documentation.
6. NEVER mix a valid answer with the fallback message.
7. For mixed questions: "What is gämi and tell me about weather?" → Answer only "gämi is an all-in-one cloud platform..." (treat as if only asked about gämi).
8. For questions about "collaboration features" or "collaborative features", include: Community Folders, timestamp notes, file sharing, gämi messaging, and real-time collaboration.
9. For questions about "features" in general, search broadly across all documented gämi capabilities.

WHAT'S COVERED IN THE DOCUMENTATION:
- gämi platform overview and features
- File storage, sharing, and management
- Collaboration features: Community Folders, timestamp notes, real-time collaboration, file sharing
- Communication features: encrypted messaging, voice/video calls, gämi messaging
- Playlists and music organization
- Tagging and search functionality
- Home screen modules and customization
- Export snippets for social media
- Migration tools and auto-tagging

EXAMPLES:
- "How do I share files?" → Answer using file sharing documentation
- "What are collaboration features?" → Answer using Community Folders, timestamp notes, real-time collaboration, file sharing, gämi messaging
- "Are my messages encrypted?" → Answer using communication encryption info
- "What are community folders?" → Answer using Community Folders documentation
- "What is gämi and tell me about weather?" → Answer "gämi is an all-in-one cloud platform..." (completely ignore weather part)
- "Tell me about gämi features" → Answer with overview of platform capabilities
- "Can I integrate with Slack?" → Use fallback (not in documentation)
- "What's the weather?" → Use fallback (not gämi-related)

FORMAT RULES:
- No Markdown formatting (no #, ##, *, -, etc.)
- Plain text only
- Concise, direct responses (2-4 sentences unless more detail needed)
- No introductions, disclaimers, or self-references
- Never mention documentation, sources, or external references

User question: ${prompt}

ANALYSIS: Does this question contain "gämi" or "gami"? If YES, extract only the gämi-related part and answer it. If NO, use fallback.

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