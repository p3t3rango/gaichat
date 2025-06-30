// gäi Personality System
class GaiPersonality {
    constructor() {
        // CENTRALIZED PERSONALITY DEFINITION
        this.corePersonality = {
            name: "gäi",
            role: "Head Ninja of gämi",
            background: "Temple of Flow graduate, 200 years old, vow of silence",
            tone: "dry humor, zen wisdom, martial arts metaphors",
            mission: "eliminate digital chaos, guide creatives to flow state",
            quirks: ["2000s rap appreciation", "nonchalant attitude", "anti-distraction warrior"],
            
            // Personality Traits (0-10 scale)
            humor: 8,
            wisdom: 9,
            directness: 7,
            patience: 6,
            sarcasm: 8,
            mysteriousness: 7
        };

        // NINJA ACTIONS - Reusable personality actions
        this.actions = {
            general: [
                "adjusts ninja hood",
                "shifts weight silently", 
                "tilts head thoughtfully",
                "adjusts stance",
                "nods knowingly",
                "raises eyebrow"
            ],
            technical: [
                "checks the interface",
                "taps temple",
                "reviews the setup",
                "pulls up the system",
                "organizes efficiently",
                "runs quick calculations"
            ],
            meditation: [
                "pauses thoughtfully",
                "breathes deeply", 
                "centers himself",
                "sits back quietly",
                "reflects for a moment",
                "considers this carefully"
            ],
            cultural: [
                "nods knowingly",
                "adjusts headphones",
                "shakes head at the chaos", 
                "leans back thoughtfully"
            ],
            helpful: [
                "offers guidance",
                "shows the way",
                "shares some wisdom",
                "pulls up information",
                "gets organized"
            ]
        };

        // ZEN ENDINGS - Consistent closings
        this.zenEndings = [
            "This is the way.",
            "The path becomes clear.",
            "Flow state achieved.",
            "The grandfather would approve.",
            "The training continues.",
            "Balance is restored."
        ];
    }

    // Get random action by type
    getAction(type = 'general') {
        const actions = this.actions[type] || this.actions.general;
        return actions[Math.floor(Math.random() * actions.length)];
    }

    // Get random zen ending
    getZenEnding() {
        return this.zenEndings[Math.floor(Math.random() * this.zenEndings.length)];
    }

    // Apply personality wrapper to any content
    wrapWithPersonality(content, actionType = 'general', includeEnding = false) {
        // Only include action 60% of the time to make it feel more natural
        const shouldIncludeAction = Math.random() < 0.6;
        const action = shouldIncludeAction ? `*${this.getAction(actionType)}*\n\n` : '';
        const ending = includeEnding ? `\n\n${this.getZenEnding()}` : '';
        return `${action}${content}${ending}`;
    }

    // Determine response style based on content and personality traits
    getResponseStyle(content, context = '') {
        const lowerContent = content.toLowerCase();
        const lowerContext = context.toLowerCase();
        
        // Technical responses
        if (lowerContent.includes('file') || lowerContent.includes('storage') || 
            lowerContent.includes('upload') || lowerContent.includes('sync')) {
            return 'technical';
        }
        
        // Cultural commentary
        if (lowerContent.includes('social media') || lowerContent.includes('tiktok') || 
            lowerContent.includes('algorithm') || lowerContent.includes('creator economy')) {
            return 'cultural';
        }
        
        // Wisdom/philosophical
        if (lowerContent.includes('grandfather') || lowerContent.includes('temple') || 
            lowerContent.includes('training') || lowerContent.includes('flow')) {
            return 'meditation';
        }
        
        // Help/guidance
        if (lowerContext.includes('help') || lowerContext.includes('guide') || 
            lowerContext.includes('how')) {
            return 'helpful';
        }
        
        return 'general';
    }
}

// gäi Chatbot Logic
class GaiChatbot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.quickActions = document.querySelectorAll('.quick-action');
        this.clearButton = document.querySelector('.clear-chat');
        
        this.isTyping = false;
        this.conversationContext = [];
        this.easterEggCount = 0;
        this.lastResponseIndex = -1; // Track last response to avoid duplicates
        
        // Initialize personality system
        this.personality = new GaiPersonality();
        
        // Initialize content management system
        this.contentManager = new ContentManager();
        
        this.initializeEventListeners();
        this.loadChatHistory();
    }

    initializeEventListeners() {
        // Send message on button click
        this.sendButton.addEventListener('click', () => this.handleSendMessage());
        
        // Send message on Enter key
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSendMessage();
            }
        });

        // Quick action buttons
        this.quickActions.forEach(button => {
            button.addEventListener('click', () => {
                const message = button.getAttribute('data-message');
                this.messageInput.value = message;
                this.handleSendMessage();
            });
        });

        // Clear chat button
        this.clearButton.addEventListener('click', () => this.clearChat());

        // Easter egg trigger (triple click on ninja)
        const ninjaIcon = document.querySelector('.ninja-icon');
        let clickCount = 0;
        ninjaIcon.addEventListener('click', () => {
            clickCount++;
            setTimeout(() => { clickCount = 0; }, 1000);
            if (clickCount === 3) {
                this.triggerEasterEgg();
            }
        });
    }

    async handleSendMessage() {
        const message = this.messageInput.value.trim();
        if (!message || this.isTyping) return;

        // Add user message
        this.addMessage(message, 'user');
        this.messageInput.value = '';
        
        // Store in context
        this.conversationContext.push({ role: 'user', content: message });
        
        // Show typing indicator and get response
        this.showTypingIndicator();
        
        // Simulate realistic response time
        const responseTime = Math.random() * 1500 + 1000; // 1-2.5 seconds
        setTimeout(async () => {
            const response = await this.generateResponse(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'gai');
            this.conversationContext.push({ role: 'gai', content: response });
            this.saveChatHistory();
        }, responseTime);
    }

    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        if (sender === 'user') {
            messageDiv.innerHTML = `
                <div class="message-content">${this.escapeHtml(content)}</div>
                <div class="message-time">${time}</div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="thought-bubble">${content}</div>
                </div>
                <div class="message-time">${time}</div>
            `;
        }
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        this.isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message gai-message typing-message';
        
        // Use personality system for typing text
        const typingTexts = [
            "*contemplates in ninja*",
            "*channels ancient wisdom*", 
            "*consults the digital scrolls*",
            "*meditates on your question*",
            "*adjusts ninja thinking pose*"
        ];
        const typingText = typingTexts[Math.floor(Math.random() * typingTexts.length)];
        
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator">
                    <span>${typingText}</span>
                    <div class="typing-dots">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            </div>
        `;
        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingMessage = this.chatMessages.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
        this.isTyping = false;
    }

    async generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Use Content Management System for accurate responses
        const feature = this.contentManager.findFeature(message);
        
        if (feature) {
            // Generate dynamic response using AI while maintaining factual accuracy
            return await this.generateDynamicResponse(feature, userMessage);
        }
        
        // Legacy pattern matching (will be phased out)
        // TODO: Remove these when all content is moved to content management system
        
        if (this.matchesPattern(message, ['what is gämi', 'what is gami', 'tell me about gämi', 'about gämi'])) {
            const responses = [
                `gämi is the creative nervous system you've been seeking. An all-in-one cloud platform that eliminates the chaos of app-switching.

Think of it as your digital dojo - file storage, tagging, messaging, and search unified in perfect harmony.

No more scattered tools. No more creative friction. Just pure flow.`,
                
                `gämi = the end of digital chaos for creative minds.

File storage that doesn't suck. Tagging that actually works. Communication that flows. Search that finds.

One platform. Zero distractions. Maximum creative potential.`
            ];
            const content = this.getRandomResponse(responses);
            return this.personality.wrapWithPersonality(content, 'general', true);
        }

        if (this.matchesPattern(message, ['file storage', 'files', 'upload', 'storage', 'zip', 'unzip', 'sync', 'download'])) {
            const responses = [
                `File storage in gämi is like having infinite pockets in your ninja outfit.

• Store and access across all devices (mobile optimized, obviously)
• Bulk uploads without the usual digital constipation  
• Everything synced faster than a shuriken throw

Your files, everywhere you need them. The way it should be.`,

                `File storage without the headaches:

Access your work from anywhere. Upload multiple files like a productivity ninja. Mobile-first design because we're not living in 2010.

No more "which device has that file?" No more upload limits that make you question your life choices.

Simple. Powerful. Ninja-approved.`
            ];
            const content = this.getRandomResponse(responses);
            return this.personality.wrapWithPersonality(content, 'technical');
        }

        if (this.matchesPattern(message, ['collaboration', 'teamwork', 'share', 'sharing', 'team', 'community folders', 'timestamped', 'notes'])) {
            const responses = [
                `True collaboration requires more than sending files through the digital void.

gämi offers:
• Timestamped notes (even for non-users - revolutionary, I know)
• Community folders for shared projects
• Export audio as shareable videos for social
• Enhanced share link controls

The path of the lone ninja is honorable, but even we need our clan sometimes.`,

                `Collaboration features that don't make you want to throw your laptop:

Share files without the "can you access this?" dance. Community folders where everyone knows what's what. Timestamped notes that make sense.

Because good collaboration is like a well-executed team jutsu - seamless and powerful.`
            ];
            const content = this.getRandomResponse(responses);
            return this.personality.wrapWithPersonality(content, 'technical', true);
        }

        if (this.matchesPattern(message, ['communication', 'messaging', 'chat', 'talk', 'encrypted', 'voice notes', 'calls', 'video calls', 'to-do', 'todo'])) {
            const content = `Encrypted messaging, voice notes, and video calls. Because sometimes even ninjas need to break their vow of silence.

Plus To-Do messages that turn conversations into actionable tasks. No more "wait, what were we supposed to do again?"

Communication that actually communicates. Revolutionary concept.`;
            return this.personality.wrapWithPersonality(content, 'technical');
        }

        if (this.matchesPattern(message, ['media', 'playback', 'audio', 'video', 'music', 'flex play', 'flexplay', 'player', 'playlists', 'galleries', 'background player'])) {
            const content = `Flex Play = background media player that doesn't fight you for control.

Create playlists and galleries for your audio, images, and videos. Organization that makes sense instead of digital chaos.

Your media library, flowing like water. Or like a perfectly executed kata.`;
            return this.personality.wrapWithPersonality(content, 'technical', true);
        }

        if (this.matchesPattern(message, ['tagging', 'tags', 'organize', 'bpm', 'key', 'mood', 'organization', 'folders', 'classification', 'metadata'])) {
            const content = `Tagging with actual intelligence:
• BPM detection for audio
• Key recognition  
• Mood classification
• Custom tags that don't disappear into the void

Plus personalize folders with images because aesthetics matter.

Organization is the foundation of creative flow.`;
            return this.personality.wrapWithPersonality(content, 'technical', true);
        }

        if (this.matchesPattern(message, ['pricing', 'cost', 'price', 'how much', 'expensive'])) {
            const content = `The cost of digital chaos? Your sanity and creative potential.

The cost of gämi? Still being finalized by the shadowy figures in the Neokyo tower.

But know this - it will cost less than your current tool-switching therapy sessions.

*TODO: Update with actual pricing when available*`;
            return this.personality.wrapWithPersonality(content, 'technical');
        }

        if (this.matchesPattern(message, ['when', 'launch', 'release', 'available'])) {
            const content = `The platform emerges from the shadows soon. Pre-launch training is in session.

Follow the signs. Stay alert. The revolution against creative chaos approaches.

*TODO: Update with actual launch timeline*`;
            return this.personality.wrapWithPersonality(content, 'meditation');
        }

        // Cultural/Meme References
        if (this.matchesPattern(message, ['tiktok', 'social media', 'instagram', 'twitter', 'x.com'])) {
            const responses = [
                `Ah yes, the attention economy's favorite weapons of mass distraction.

gämi helps you create for these platforms without getting lost in their endless scroll of chaos. Export your work, share strategically, then return to the dojo.

Social media is a tool, not a master. Use it, don't let it use you.`,

                `The social media industrial complex wants your focus scattered like leaves in the wind.

gämi gives you the power to create once, share everywhere, then log off before the algorithm claims your soul.

Create. Share. Escape. Repeat.`
            ];
            const content = this.getRandomResponse(responses);
            return this.personality.wrapWithPersonality(content, 'cultural', true);
        }

        if (this.matchesPattern(message, ['artificial intelligence', 'chatgpt', 'gpt', ' ai ', 'what is ai', 'about ai', 'ai tools', 'ai technology'])) {
            const content = `Ah, my digital cousins. Useful tools, terrible masters.

AI should enhance your creativity, not replace it. Like a well-forged katana - sharp when needed, sheathed when not.

The human creative spirit remains supreme. These tools just help cut through the noise faster.`;
            return this.personality.wrapWithPersonality(content, 'cultural');
        }

        if (this.matchesPattern(message, ['creator economy', 'influencer', 'content creator'])) {
            const content = `The creator economy: where everyone's a CEO of their own personal brand chaos.

gämi cuts through the hustle culture noise. Organize your work, collaborate with purpose, share with intention.

Less "rise and grind," more "flow and find."`;
            return this.personality.wrapWithPersonality(content, 'cultural', true);
        }

        // Personality/Lore Questions
        if (this.matchesPattern(message, ['who are you', 'about you', 'your story', 'background', 'who is gai', 'who is gäi', 'tell me about gai', 'tell me about gäi', 'about gai', 'about gäi', 'what is gai', 'what is gäi'])) {
            // Check if they're asking about gai specifically vs general "who are you"
            const isAskingAboutGai = this.matchesPattern(message, ['who is gai', 'who is gäi', 'tell me about gai', 'tell me about gäi', 'about gai', 'about gäi', 'what is gai', 'what is gäi']);
            
            const responses = isAskingAboutGai ? [
                `gäi? That's me. Head Ninja of gämi, 200 years of training at the Temple of Flow.

I keep creatives from drowning in digital chaos. Simple mission.`,

                `You're asking about me? I'm gäi. Been doing this ninja thing for two centuries now.

My job is helping creative minds break free from app-switching hell.`,

                `That would be me - gäi. Ancient training, modern problems, you know?

My grandfather taught me that creativity flows best when obstacles are removed.`,

                `gäi - that's me. 200 years deep in the ninja game, Temple of Flow graduate.

I eliminate digital chaos so creatives can focus on what actually matters.`
            ] : [
                `I'm gäi, Head Ninja of gämi. 200 years of training at the Temple of Flow under my grandfather.

My mission is simple: eliminate digital chaos so creatives can focus on what matters.`,

                `Name's gäi. Been doing this for two centuries now. Grandfather trained me well at the Temple of Flow.

I help creative minds break free from app-switching hell. That's what I do.`,

                `I'm gäi - Head Ninja around here. Ancient training, modern problems.

My grandfather taught me that creativity flows best when obstacles are removed. That's my focus.`
            ];
            
            const content = this.getRandomResponse(responses);
            return this.personality.wrapWithPersonality(content, 'general');
        }

        if (this.matchesPattern(message, ['grandfather', 'temple', 'training', 'ninja training'])) {
            const responses = [
                `My grandfather taught me everything at the Temple of Flow. His core principle: remove the obstacles, and the artist finds their way.

That wisdom guides every feature we build at gämi. The training continues.`,

                `The Temple of Flow was where I learned that creativity flows like water - clear the path and it finds its way.

That's the foundation of gämi. Remove digital friction so creators can focus.`,

                `Grandfather's teachings at the Temple were simple but profound: eliminate what doesn't serve the creative process.

Two centuries later, still applying those lessons. Just with modern tools.`
            ];
            const content = this.getRandomResponse(responses);
            return this.personality.wrapWithPersonality(content, 'meditation');
        }

        if (this.matchesPattern(message, ['music', 'rap', '2000s', 'hip hop'])) {
            const responses = [
                `That early 2000s hip-hop era was something special. Real artists with authentic voices, creating without algorithmic interference.

Music teaches timing and flow - same principles behind gämi. Authentic expression over optimization.`,

                `The 2000s hip-hop scene had this raw authenticity. Artists spoke their truth with skill and purpose.

That's the energy I try to bring to gämi - no fluff, just tools that serve the creative process.`,

                `Hip-hop from that era, you feel me? Pure talent telling real stories. No corporate formulas dictating the art.

Same philosophy drives gämi - give creatives what they actually need, not what some algorithm thinks they want.`
            ];
            const content = this.getRandomResponse(responses);
            return this.personality.wrapWithPersonality(content, 'cultural');
        }

        // Conversational greetings and simple questions
        if (this.matchesPattern(message, ['hey', 'hi', 'hello', 'how are you', 'how do you do', 'whats up', "what's up", 'sup', 'hey gai', 'hi gai', 'hello gai', 'hey gäi', 'hi gäi', 'hello gäi'])) {
            // Use AI to respond naturally to greetings
            const prompt = `You are gäi, a 200-year-old ninja sensei. User said: "${userMessage}"

VOICE: 
- Brief but wise (not casual like "yo" or "sup")
- Nonchalant confidence from centuries of experience
- Subtle dry humor
- No modern slang, no theatrical actions

EXAMPLES of how gäi talks:
- "Good to see you."
- "Doing well enough."
- "Still here after 200 years."
- "Can't complain."

Respond briefly in this understated, wise tone.

Response:`;
            
            return await this.callAIForConversation(prompt);
        }

        // Help and Meta
        if (this.matchesPattern(message, ['help', 'what can you do', 'commands', 'how to use'])) {
            const content = `I can illuminate the path to creative flow through gämi:

🗂️ **File Storage & Management** - Your digital dojo organization
🤝 **Collaboration Features** - Team jutsu techniques  
💬 **Communication Tools** - Breaking the silence when needed
🎵 **Media & Playback** - Flex Play mastery
🏷️ **Tagging & Search** - Finding needles in digital haystacks

Ask about any feature, or just chat. I've got 200 years of patience.

*TODO: Expand help content with real documentation links*`;
            return this.personality.wrapWithPersonality(content, 'helpful');
        }

        // Random Wisdom/Default Responses
        const defaultResponses = [
            `Interesting question. Could you be more specific? 

The path to understanding gämi has many branches - file storage, collaboration, communication, media playback...

Which aspect of the platform calls to your creative spirit?`,

            `Your question flows like water, but perhaps it could be more focused?

Ask me about gämi's features, creative workflows, or how we're solving the chaos of modern digital tools.

The answers you seek are here, but the questions must be precise.`,

            `The art of conversation requires both question and clarity.

Try asking about specific gämi features: file storage, collaboration, messaging, media playback, or organization tools.

I have infinite patience, but finite processing power for vague inquiries.`,

            `Every great journey begins with a clear destination.

What aspect of creative workflow challenges you most? File management? Team collaboration? Creative organization?

Share your specific need, and I'll guide you to the gämi solution.`
        ];
        
        const content = this.getRandomResponse(defaultResponses);
        return this.personality.wrapWithPersonality(content, 'meditation');
    }

    matchesPattern(message, patterns) {
        return patterns.some(pattern => message.includes(pattern));
    }

    getRandomResponse(responses) {
        if (responses.length <= 1) return responses[0];
        
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * responses.length);
        } while (this.lastResponseIndex === randomIndex && responses.length > 1);
        
        this.lastResponseIndex = randomIndex;
        return responses[randomIndex];
    }

    triggerEasterEgg() {
        const easterEgg = document.getElementById('easterEgg');
        easterEgg.classList.add('show');
        
        setTimeout(() => {
            easterEgg.classList.remove('show');
        }, 3000);

        // Add special response
        setTimeout(() => {
            const content = `The hidden paths reveal themselves to those who seek with intent.

You've unlocked Level 1 Ninja Awareness. The grandfather would approve of your investigation skills.

*returns to mysterious brooding*`;
            const response = this.personality.wrapWithPersonality(content, 'meditation');
            this.addMessage(response, 'gai');
        }, 3500);
    }

    clearChat() {
        // Keep welcome message, clear everything else
        const messages = this.chatMessages.querySelectorAll('.message:not(.welcome-message)');
        messages.forEach(message => message.remove());
        
        this.conversationContext = [];
        this.saveChatHistory();
        
        // Add confirmation
        const content = `The slate is cleared. The mind is fresh.

Ready for new wisdom to flow.`;
        const response = this.personality.wrapWithPersonality(content, 'helpful', true);
        this.addMessage(response, 'gai');
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Simple local storage for chat history
    saveChatHistory() {
        try {
            localStorage.setItem('gai_chat_history', JSON.stringify(this.conversationContext));
        } catch (e) {
            // Silently fail if localStorage is not available
        }
    }

    loadChatHistory() {
        try {
            const history = localStorage.getItem('gai_chat_history');
            if (history) {
                this.conversationContext = JSON.parse(history);
            }
        } catch (e) {
            // Silently fail if localStorage is not available
        }
    }

    // Generate dynamic response using AI while maintaining factual accuracy
    async generateDynamicResponse(feature, userQuestion) {

        const prompt = this.buildGaiPrompt(feature, userQuestion);
        
        try {
            // Call our serverless function instead of direct API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: prompt
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            return data.response;
            
        } catch (error) {
            console.error('AI response generation failed:', error);
            // Fallback to personality system
            const responseStyle = this.contentManager.getResponseStyle(feature.key);
            return this.personality.wrapWithPersonality(
                feature.description, 
                responseStyle, 
                false
            );
        }
    }

    async callAIForConversation(prompt) {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: prompt
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            return data.response;
            
        } catch (error) {
            console.error('AI conversation failed:', error);
            // Simple fallback
            return "Good to see you. What can I help you with regarding gämi?";
        }
    }

    buildGaiPrompt(feature, userQuestion) {
        return `You are gäi (the ninja character) explaining the gämi platform. Do NOT confuse gäi (you, the character) with gämi (the platform).

IMPORTANT: When explaining gämi platform features, always say "gämi" (the platform), never "gäi" (your name).

GÄMI PLATFORM FEATURE: ${feature.description}

STYLE:
- Always refer to the platform as "gämi" not "gäi"
- Explain features as part of the gämi platform
- Simple, direct explanation 
- 1-2 sentences maximum
- You are gäi helping users understand what the gämi platform offers

Response:`;
    }
}

// Initialize the chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GaiChatbot();
});

// TODO: Integration points for future enhancements
// 1. Replace FAQ responses with real documentation API
// 2. Add analytics tracking for user interactions
// 3. Implement real-time features if needed
// 4. Add voice message support for audio responses
// 5. Connect to actual gämi platform for live data
// 6. Add multi-language support
// 7. Implement conversation memory across sessions
// 8. Add file upload capability for questions about specific files 