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
                    "variations": [
                        "gämi = the creative nervous system you've been seeking. File storage, tagging, messaging, search - unified in one platform. No more app-switching fatigue, no more digital chaos.",
                        "All-in-one cloud platform designed for creative minds. File storage that works, tagging that makes sense, messaging that flows, search that finds. The end of scattered workflows.",
                        "Your digital dojo. One platform handling file storage, smart tagging, integrated messaging, and powerful search. Built to eliminate the chaos of juggling multiple tools."
                    ],
                    "keywords": ["what is gämi", "what is gami", "tell me about gämi", "about gämi", "platform", "overview"]
                },
                "flex_play": {
                    "title": "Flex Play",
                    "description": "Flexible media player that continues playback while navigating other sections of the app. Supports full-screen mode for immersive experience.",
                    "variations": [
                        "Flex Play = media player that doesn't interrupt your flow. Keeps playing while you navigate the app, plus full-screen mode when you want total immersion.",
                        "Background media player that actually works. Continue playback while jumping between sections. Full-screen available when you need that immersive experience.",
                        "Media player with ninja-level flexibility. Playback continues seamlessly as you navigate. Full-screen mode for when you want to dive deep."
                    ],
                    "keywords": ["flex play", "flexplay", "player", "media player", "background player", "playback", "full-screen", "fullscreen", "immersive", "navigation"]
                },
                "file_storage": {
                    "title": "File Storage & Management", 
                    "description": "Store and access files on all your devices with mobile-optimized upload. Features include multiple file uploads at once, unzip/zip directly in platform, and seamless sync across devices.",
                    "variations": [
                        "File storage that doesn't make you question your life choices. Access files on any device, bulk upload multiple files, mobile-optimized interface. Plus zip/unzip right in the platform.",
                        "Your files, everywhere you need them. Mobile-first upload, bulk file handling, seamless device sync. Zip and unzip without leaving the platform.",
                        "File storage like having infinite pockets in your ninja outfit. Upload from mobile, handle multiple files at once, sync across devices instantly."
                    ],
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
                    // Use variation if available, otherwise use main description
                    let description = feature.description;
                    if (feature.variations && feature.variations.length > 0) {
                        description = feature.variations[Math.floor(Math.random() * feature.variations.length)];
                    }
                    
                    return {
                        type: 'feature',
                        key: key,
                        title: feature.title,
                        description: description
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