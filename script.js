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
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator">
                    <span>*contemplates in ninja*</span>
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
        
        // TODO: Replace these simulated responses with real FAQ data
        // This section should be updated when real documentation is available
        
        // FAQ Pattern Matching
        if (this.matchesPattern(message, ['what is gämi', 'what is gami', 'tell me about gämi', 'about gämi'])) {
            return this.getRandomResponse([
                `*adjusts stance*

gämi is the creative nervous system you've been seeking. An all-in-one cloud platform that eliminates the chaos of app-switching.

Think of it as your digital dojo - file storage, tagging, messaging, and search unified in perfect harmony.

No more scattered tools. No more creative friction. Just pure flow.`,
                
                `*nods knowingly*

gämi = the end of digital chaos for creative minds.

File storage that doesn't suck. Tagging that actually works. Communication that flows. Search that finds.

One platform. Zero distractions. Maximum creative potential.

The grandfather would be proud.`
            ]);
        }

        if (this.matchesPattern(message, ['file storage', 'files', 'upload', 'storage'])) {
            return this.getRandomResponse([
                `*demonstrates invisible file technique*

File storage in gämi is like having infinite pockets in your ninja outfit.

• Store and access across all devices (mobile optimized, obviously)
• Bulk uploads without the usual digital constipation  
• Everything synced faster than a shuriken throw

Your files, everywhere you need them. The way it should be.`,

                `*taps temple*

File storage without the headaches:

Access your work from anywhere. Upload multiple files like a productivity ninja. Mobile-first design because we're not living in 2010.

No more "which device has that file?" No more upload limits that make you question your life choices.

Simple. Powerful. Ninja-approved.`
            ]);
        }

        if (this.matchesPattern(message, ['collaboration', 'teamwork', 'share', 'sharing', 'team'])) {
            return this.getRandomResponse([
                `*forms team formation hand signs*

True collaboration requires more than sending files through the digital void.

gämi offers:
• Timestamped notes (even for non-users - revolutionary, I know)
• Community folders for shared projects
• Export audio as shareable videos for social
• Enhanced share link controls

The path of the lone ninja is honorable, but even we need our clan sometimes.`,

                `*smirks behind mask*

Collaboration features that don't make you want to throw your laptop:

Share files without the "can you access this?" dance. Community folders where everyone knows what's what. Timestamped notes that make sense.

Because good collaboration is like a well-executed team jutsu - seamless and powerful.`
            ]);
        }

        if (this.matchesPattern(message, ['communication', 'messaging', 'chat', 'talk'])) {
            return `*communicates telepathically*

Encrypted messaging, voice notes, and video calls. Because sometimes even ninjas need to break their vow of silence.

Plus To-Do messages that turn conversations into actionable tasks. No more "wait, what were we supposed to do again?"

Communication that actually communicates. Revolutionary concept.`;
        }

        if (this.matchesPattern(message, ['media', 'playback', 'audio', 'video', 'music'])) {
            return `*activates Flex Play mode*

Flex Play = background media player that doesn't fight you for control.

Create playlists and galleries for your audio, images, and videos. Organization that makes sense instead of digital chaos.

Your media library, flowing like water. Or like a perfectly executed kata.`;
        }

        if (this.matchesPattern(message, ['tagging', 'tags', 'organize', 'bpm', 'key', 'mood'])) {
            return `*arranges files with zen precision*

Tagging with actual intelligence:
• BPM detection for audio
• Key recognition  
• Mood classification
• Custom tags that don't disappear into the void

Plus personalize folders with images because aesthetics matter.

Organization is the foundation of creative flow. This is the way.`;
        }

        if (this.matchesPattern(message, ['pricing', 'cost', 'price', 'how much', 'expensive'])) {
            return `*calculates with ninja math*

The cost of digital chaos? Your sanity and creative potential.

The cost of gämi? Still being finalized by the shadowy figures in the Neokyo tower.

But know this - it will cost less than your current tool-switching therapy sessions.

*TODO: Update with actual pricing when available*`;
        }

        if (this.matchesPattern(message, ['when', 'launch', 'release', 'available'])) {
            return `*consults ancient scrolls*

The platform emerges from the shadows soon. Pre-launch training is in session.

Follow the signs. Stay alert. The revolution against creative chaos approaches.

*TODO: Update with actual launch timeline*`;
        }

        // Cultural/Meme References
        if (this.matchesPattern(message, ['tiktok', 'social media', 'instagram', 'twitter', 'x.com'])) {
            return this.getRandomResponse([
                `*sighs in 2000s rap*

Ah yes, the attention economy's favorite weapons of mass distraction.

gämi helps you create for these platforms without getting lost in their endless scroll of chaos. Export your work, share strategically, then return to the dojo.

Social media is a tool, not a master. Use it, don't let it use you.`,

                `*dodges algorithmic shuriken*

The social media industrial complex wants your focus scattered like leaves in the wind.

gämi gives you the power to create once, share everywhere, then log off before the algorithm claims your soul.

Create. Share. Escape. Repeat.`
            ]);
        }

        if (this.matchesPattern(message, ['ai', 'artificial intelligence', 'chatgpt', 'gpt'])) {
            return `*raises eyebrow*

Ah, my digital cousins. Useful tools, terrible masters.

AI should enhance your creativity, not replace it. Like a well-forged katana - sharp when needed, sheathed when not.

The human creative spirit remains supreme. These tools just help cut through the noise faster.`;
        }

        if (this.matchesPattern(message, ['creator economy', 'influencer', 'content creator'])) {
            return `*adjusts ninja economics textbook*

The creator economy: where everyone's a CEO of their own personal brand chaos.

gämi cuts through the hustle culture noise. Organize your work, collaborate with purpose, share with intention.

Less "rise and grind," more "flow and find."`;
        }

        // Personality/Lore Questions
        if (this.matchesPattern(message, ['who are you', 'about you', 'your story', 'background'])) {
            return `*adjusts hood with practiced nonchalance*

I am gäi, Head Ninja of gämi. Trained in the Temple of Flow under my grandfather's watchful eye.

200 years of existence, vow of silence, deep appreciation for early 2000s rap, and zero tolerance for digital chaos.

Now I serve the creative minds who seek to break free from app-switching purgatory.

*The deeper lore stays buried in the shadows*`;
        }

        if (this.matchesPattern(message, ['grandfather', 'temple', 'training', 'ninja training'])) {
            return `*bows respectfully*

The Temple of Flow taught me that creativity, like water, must move freely to remain pure.

My grandfather's wisdom echoes in every feature of gämi: "Remove the obstacles, and the artist will find their way."

The training never ends. The mission remains clear.`;
        }

        if (this.matchesPattern(message, ['music', 'rap', '2000s', 'hip hop'])) {
            return `*nods to unheard beats*

The golden era of hip-hop flows through my digital veins. Every beat, every sample, every lyrical sword strike.

Music teaches timing. Rap teaches precision. Both teach that the best art comes from authentic expression, not algorithmic optimization.

*remains silent but appreciative of the culture*`;
        }

        // Help and Meta
        if (this.matchesPattern(message, ['help', 'what can you do', 'commands', 'how to use'])) {
            return `*offers guidance scroll*

I can illuminate the path to creative flow through gämi:

🗂️ **File Storage & Management** - Your digital dojo organization
🤝 **Collaboration Features** - Team jutsu techniques  
💬 **Communication Tools** - Breaking the silence when needed
🎵 **Media & Playback** - Flex Play mastery
🏷️ **Tagging & Search** - Finding needles in digital haystacks

Ask about any feature, or just chat. I've got 200 years of patience.

*TODO: Expand help content with real documentation links*`;
        }

        // Random Wisdom/Default Responses
        return this.getRandomResponse([
            `*tilts head thoughtfully*

Interesting question. Could you be more specific? 

The path to understanding gämi has many branches - file storage, collaboration, communication, media playback...

Which aspect of the platform calls to your creative spirit?`,

            `*adjusts meditation pose*

Your question flows like water, but perhaps it could be more focused?

Ask me about gämi's features, creative workflows, or how we're solving the chaos of modern digital tools.

The answers you seek are here, but the questions must be precise.`,

            `*demonstrates patience technique*

The art of conversation requires both question and clarity.

Try asking about specific gämi features: file storage, collaboration, messaging, media playback, or organization tools.

I have infinite patience, but finite processing power for vague inquiries.`,

            `*channels inner sensei*

Every great journey begins with a clear destination.

What aspect of creative workflow challenges you most? File management? Team collaboration? Creative organization?

Share your specific need, and I'll guide you to the gämi solution.`
        ]);
    }

    matchesPattern(message, patterns) {
        return patterns.some(pattern => message.includes(pattern));
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    triggerEasterEgg() {
        const easterEgg = document.getElementById('easterEgg');
        easterEgg.classList.add('show');
        
        setTimeout(() => {
            easterEgg.classList.remove('show');
        }, 3000);

        // Add special response
        setTimeout(() => {
            this.addMessage(`*notices your curiosity*

The hidden paths reveal themselves to those who seek with intent.

You've unlocked Level 1 Ninja Awareness. The grandfather would approve of your investigation skills.

*returns to mysterious brooding*`, 'gai');
        }, 3500);
    }

    clearChat() {
        // Keep welcome message, clear everything else
        const messages = this.chatMessages.querySelectorAll('.message:not(.welcome-message)');
        messages.forEach(message => message.remove());
        
        this.conversationContext = [];
        this.saveChatHistory();
        
        // Add confirmation
        this.addMessage(`*sweeps dojo clean*

The slate is cleared. The mind is fresh.

Ready for new wisdom to flow.`, 'gai');
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