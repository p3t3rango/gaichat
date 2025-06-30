// gämi Content Management System
class ContentManager {
    constructor() {
        this.features = null;
        this.loadContent();
    }

    async loadContent() {
        try {
            const response = await fetch('/content/features.json');
            const data = await response.json();
            this.features = data;
        } catch (error) {
            console.error('Failed to load content:', error);
            // Fallback to embedded content if JSON fails
            this.loadFallbackContent();
        }
    }

    loadFallbackContent() {
        // Embedded fallback content (same as features.json but in JS)
        this.features = {
            "features": {
                "gami_overview": {
                    "title": "gämi Platform",
                    "description": "gämi is an all-in-one cloud platform for creative entrepreneurs. It offers file storage, tagging, integrated messaging, and powerful search. Designed to eliminate app-switching fatigue and cluttered workflows - the creative nervous system.",
                    "keywords": ["what is gämi", "what is gami", "tell me about gämi", "about gämi", "platform", "overview"]
                },
                "flex_play": {
                    "title": "Flex Play",
                    "description": "Flexible media player that continues playback while navigating other sections of the app. Supports full-screen mode for immersive experience.",
                    "keywords": ["flex play", "flexplay", "player", "media player", "background player", "playback", "full-screen", "fullscreen", "immersive", "navigation"]
                },
                "file_storage": {
                    "title": "File Storage & Management", 
                    "description": "Store and access files on all your devices with mobile-optimized upload. Features include multiple file uploads at once, unzip/zip directly in platform, and seamless sync across devices.",
                    "keywords": ["file storage", "files", "upload", "storage", "zip", "unzip", "sync", "download", "mobile upload"]
                },
                "communication": {
                    "title": "Communication Suite",
                    "description": "Encrypted messaging, voice notes, and audio/video calls. Features To-Do messages for task management, turning conversations into actionable items.",
                    "keywords": ["communication", "messaging", "chat", "talk", "encrypted", "voice notes", "calls", "video calls", "to-do", "todo", "tasks"]
                },
                "collaboration": {
                    "title": "Collaboration Features",
                    "description": "Timestamped and stamped notes (even for non-users). Community folders for shared projects enable seamless team collaboration.",
                    "keywords": ["collaboration", "teamwork", "team", "community folders", "timestamped", "notes", "shared projects", "stamped notes"]
                },
                "file_management": {
                    "title": "File Organization",
                    "description": "Personalize folders and audio with images. Advanced tagging system with BPM detection, key recognition, mood classification, and custom tags.",
                    "keywords": ["tagging", "tags", "organize", "bpm", "key", "mood", "organization", "folders", "classification", "metadata", "personalize"]
                },
                "media_organization": {
                    "title": "Media & Playback",
                    "description": "Create playlists and galleries for audio, image, and video organization. Comprehensive media library management for all your creative assets.",
                    "keywords": ["media", "playlists", "galleries", "audio", "video", "images", "media library", "playback organization"]
                }
            },
            "pricing": {
                "status": "TBD",
                "message": "Pricing is still being finalized by the team. It will be competitive and designed for creative professionals.",
                "keywords": ["pricing", "cost", "price", "how much", "expensive", "subscription", "plan"]
            },
            "launch": {
                "status": "Pre-launch",
                "message": "gämi is currently in pre-launch phase. Stay tuned for updates on the official release date.",
                "keywords": ["when", "launch", "release", "available", "timeline", "beta", "coming soon"]
            }
        };
    }

    // Find the best matching feature based on user input
    findFeature(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Check features first
        for (const [key, feature] of Object.entries(this.features.features)) {
            for (const keyword of feature.keywords) {
                if (message.includes(keyword.toLowerCase())) {
                    return {
                        type: 'feature',
                        key: key,
                        title: feature.title,
                        description: feature.description
                    };
                }
            }
        }

        // Check pricing
        for (const keyword of this.features.pricing.keywords) {
            if (message.includes(keyword.toLowerCase())) {
                return {
                    type: 'pricing',
                    title: 'Pricing Information',
                    description: this.features.pricing.message
                };
            }
        }

        // Check launch timeline
        for (const keyword of this.features.launch.keywords) {
            if (message.includes(keyword.toLowerCase())) {
                return {
                    type: 'launch',
                    title: 'Launch Timeline',
                    description: this.features.launch.message
                };
            }
        }

        return null;
    }

    // Get the appropriate response style for personality system
    getResponseStyle(featureKey) {
        const styleMap = {
            'gami_overview': 'general',
            'flex_play': 'technical', 
            'file_storage': 'technical',
            'file_management': 'technical',
            'communication': 'technical',
            'collaboration': 'technical',
            'media_organization': 'technical',
            'search': 'technical'
        };
        
        return styleMap[featureKey] || 'general';
    }
} 