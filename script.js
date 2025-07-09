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
        
        this.initializeEventListeners();
        this.loadChatHistory();
    }

    initializeEventListeners() {
        // Send message on button click
        this.sendButton.addEventListener('click', () => {
            console.log('Send button clicked');
            this.handleSendMessage();
        });
        
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
        // Send the user message to the backend API
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: userMessage })
            });
            if (!response.ok) {
                throw new Error('API error');
            }
            const data = await response.json();
            return data.response;
        } catch (error) {
            return "Sorry, something went wrong. Please try again.";
        }
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

    formatKnowledgeBaseResponse(response, userMessage) {
        const { title, description, type, details, matchType } = response;
        
        // Check if user is asking a specific question
        if (type === 'feature' && details.faq) {
            const specificAnswer = this.contentManager.findSpecificAnswer(userMessage, response);
            if (specificAnswer) {
                const content = `${specificAnswer.question}\n\n${specificAnswer.answer}`;
                return this.personality.wrapWithPersonality(content, 'helpful');
            }
        }

        // Build comprehensive response based on what user is asking about
        const aspect = this.contentManager.getFeatureAspect(userMessage, response);
        let content = `${title}\n\n${description}`;

        // Add relevant details based on aspect
        if (aspect === 'access' && details.access) {
            content += `\n\n**How to access:** ${details.access}`;
        } else if (aspect === 'workflow' && details.userFlow) {
            content += `\n\n**How to use:**\n${details.userFlow.map((step, i) => `${i + 1}. ${step}`).join('\n')}`;
        } else if (aspect === 'capabilities' && details.functions) {
            content += `\n\n**Key features:**\n${details.functions.map(f => `• ${f}`).join('\n')}`;
        } else if (aspect === 'troubleshooting' && details.faq) {
            // Show most relevant FAQ
            const faqEntries = Object.entries(details.faq).slice(0, 2);
            content += `\n\n**Common questions:**\n${faqEntries.map(([q, a]) => `**Q:** ${q}\n**A:** ${a}`).join('\n\n')}`;
        }

        // Add specific technical details if available
        if (details.sortOptions) {
            content += `\n\n**Sort options:** ${details.sortOptions.join(', ')}`;
        }
        if (details.filterCategories) {
            content += `\n\n**Filter categories:** ${details.filterCategories.join(', ')}`;
        }
        if (details.swipeGestures) {
            content += `\n\n**Swipe gestures:** Files - left swipe: ${details.swipeGestures.files_left_to_right.join(', ')}`;
        }
        if (details.permissionLevels) {
            content += `\n\n**Permission levels:** ${Object.entries(details.permissionLevels).map(([level, desc]) => `${level}: ${desc}`).join(', ')}`;
        }
        if (details.durationOptions) {
            content += `\n\n**Duration options:** ${Object.entries(details.durationOptions).map(([duration, desc]) => `${duration}: ${desc}`).join(', ')}`;
        }

        const responseStyle = this.contentManager.getResponseStyle(response.key || 'general');
        return this.personality.wrapWithPersonality(content, responseStyle);
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
        return `You are gäi, a 200-year-old ninja sensei. Respond in character.

Feature info: ${feature.description}

gäi's communication style:
- Brief, zen-like wisdom 
- Slightly sarcastic but helpful
- Uses subtle actions like *nods* or *adjusts hood*
- No sales-speak or enthusiasm
- Matter-of-fact tone

Question: "${userQuestion}"

Respond as gäi would - brief, wise, slightly dry:`;
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