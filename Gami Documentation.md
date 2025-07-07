# Gämi Documentation

## What is gämi?

gämi is an all-in-one cloud platform for creative entrepreneurs. It offers file storage, tagging, integrated messaging, and powerful search. Designed to eliminate app-switching fatigue and cluttered workflows, gämi is the creative nervous system for your digital life. With gämi, you can organize, collaborate, and create seamlessly—everything you need, unified in one place.


### **Time Stamp Notes**

Quick Description

Allows users to leave precise feedback on specific moments in audio and video files, accessible to both gämi users and non-gämi users through shareable links.

Access Method

From file view: Tap three dots (•••) on an audio/video file → "Create Link" → Toggle "Timestamp Notes" ON

From chat: Tap a received file → Create timestamp note link

UI Elements: File options menu, share link creation interface, timestamp note toggle

Primary Functions

Leave time-specific comments on audio/video content

Enable collaborative feedback without app-switching

Share with external collaborators (no gämi account required)

Real-time collaboration on media files

**User Flow (Basic)**

1. Select an audio or video file in gämi (from All Files, Shared, or chat)  
2. Tap three dots (•••) → Select "Create Link"  
3. Toggle the "Timestamp Notes" feature ON  
4. Configure link settings (expiration, access permissions)  
5. Share the generated link with collaborators  
6. Recipients click the link → Can play media and add timestamped comments  
7. All feedback appears in real-time for the link creator

**Integration Points**

* **Community Folders**: Files in shared folders can be made into timestamp note links by any folder member.  
* **Share Links**: Uses the same configurable link system (passwords, expiration, view limits).  
* **Chat Integration**: Files received in chat can be converted to timestamp note links.  
* **File Management**: Timestamp note links appear in the "Timestamps" filter section and "Shared with me".  
* **Notifications**: The creator receives alerts when new timestamp notes are added.

**Common Questions/Issues**

* Q: Do people need gämi accounts to leave timestamp notes?  
  A: No, anyone with the link can participate.  
* Q: How long do timestamp note links last?  
  A: You set the expiration when creating the link (hours, days, or custom duration).  
* Q: Where do I find my timestamp note links?  
  A: Go to All Files → Sort by → "Timestamps" or check the "Shared with me" section.  
* Q: Can I see timestamp notes on files in Community Folders?  
  A: Yes, but a timestamp note link must be created first \- the feature doesn't exist until someone generates the link.

---

### **Home Screen Modules**

Quick Description

Customizable widgets that can be enabled/disabled on the home screen to provide quick access to frequently used features. Users can choose up to 9 different modules and arrange them based on their workflow needs.

Access Method

From the home screen: Tap the settings icon (⚙️) in the top right → Access customization

UI Elements: Toggle switches for each module, module grid icons

**Available Modules**

* **Pinned Chats**  
  * **Function**: Quick access to frequently used conversations  
  * **Display**: Shows profile pictures of pinned contacts in a square format  
  * **Use Case**: Jump directly to important conversations without Browse the full chat list  
* **All Files**  
  * **Function**: Quick preview of your All Files page  
  * **Display**: Shows folders first, then files, sorted alphabetically  
  * **Use Case**: Quick overview of your file structure without navigating to the full All Files view  
* **Pin Files**  
  * **Function**: Quick access to specifically pinned files and folders  
  * **Display**: Card view showing pinned items with visual previews  
  * **Use Case**: Instant access to files you're currently working on (more temporary than Favorites)  
* **Recents**  
  * **Function**: Shows recently accessed files  
  * **Display**: Shows files in their native format/preview  
  * **Use Case**: Continue working on recently opened files  
* **Favorites**  
  * **Function**: Bookmark system for important files  
  * **Display**: Card view with file previews and artwork  
  * **Use Case**: Another way to organize your favorite files/folders for easier access  
* **Playlists**  
  * **Function**: Quick access to created playlists  
  * **Display**: Card view with custom artwork and playlist names  
  * **Use Case**: Jump directly to curated music collections  
* **Tags**  
  * **Function**: Tag management and quick filtering  
  * **Display**: Colored tag buttons with search functionality  
  * **Use Case**: Quickly filter files by tags or create new tags  
* **Shared**  
  * **Function**: Files you've shared with others  
  * **Display**: List view showing shared files with recipient indicators  
  * **Use Case**: Track what you've shared and manage sharing permissions  
* **Shared with me**  
  * **Function**: Files others have shared with you  
  * **Display**: List view showing files with sender information  
  * **Use Case**: Access files others have given you permission to view/edit

**User Flow (Basic)**

1. From the home screen → Tap the settings icon (⚙️)  
2. Toggle modules ON/OFF based on your workflow  
3. Enabled modules appear as modules on the home screen  
4. Modules can be reordered by preference  
5. Each module shows a "See all" option to view the complete section

**Integration Points**

* **Profile Settings**: Customization preferences are saved to the user profile.  
* **All Files**: Modules link directly to corresponding sections in All Files.  
* **Search**: Each module integrates with global search functionality.  
* **File Management**: All modules connect to the main file organization system.

**Common Questions/Issues**

* Q: How many modules can I have active at once?  
  A: All 9 modules can be enabled simultaneously if desired.  
* Q: Can I reorder the modules on my home screen?  
  A: Currently, modules appear in a set order, but you can choose which ones to display.  
* Q: What's the difference between Pin Files and Favorites?  
  A: Pin Files are for temporary quick access (current projects), while Favorites are bookmarks for important files.  
* Q: If I turn off a module, do I lose my pinned/favorite files?  
  A: No, turning off a module only hides it from the home screen \- your data is preserved.  
* Q: Can I access these sections if the module is turned off?  
  A: Yes, all sections are still accessible through All Files and the main navigation.

---

### **File Management system**

Quick Description

A comprehensive file organization and navigation system that allows users to view, sort, filter, and manage all their files and folders from a central hub with swipe gestures and advanced organizational options.

Access Method

From the bottom navigation: Tap "All Files"

From home screen modules: Tap "See all" on any file-related module (goes to All Files filtered by that module type)

UI Elements: File list, sort options, filter dropdown, three-dot menus (•••), plus button (+), swipe gestures

**Primary Functions**

* Browse all files and folders in organized views  
* Sort and filter files by multiple criteria  
* Upload new content through various methods  
* Manage individual file/folder actions via swipe gestures and menus  
* Quick access to specialized file categories

**Main Navigation Structure**

* **File List View**  
  * **Display**: Shows folders first (alphabetically), then files  
  * **File Info**: Name, date/time stamp, file type icons  
  * **Custom Artwork**: Folders and files can have custom artworks for quicker visual search  
  * **gämi Artwork**: Users can add artworks created by gämi  
* **Sort By Options** (Top right "Sort by")  
  * **Name**: A-Z or Z-A alphabetical sorting  
  * **Date**: Newest first or oldest first sorting  
  * **Note**: File size sorting will be implemented in future updates  
* **Filter Categories** (Dropdown menu)  
  * All Files, Videos, Photos, Music, Documents, Shared, Shared w/ Me, Favorite Files, Recents, Timestamps, Playlists  
* **Add/Upload Options** (+ Button)  
  * Add friends, New folder, Upload file(s), Upload from gallery, Take a Picture, Direct Uploads (paste a download link)  
* **File Actions** (Three-dot menu •••)  
  * For Individual Files: Pin File, Send File to Chat, Share File, Add to favorites, Create tag, Download, View Details, Delete, Rename, Duplicate, Move File  
  * For Folders: Unpin Folder, Share Folder, Add to favorites, Create tag, View Details, Delete, Rename, Duplicate, Move File  
* **Swipe Gestures**  
  * Files \- Left to Right Swipe: Send File to Chat, Apple Share, Create gämi Share Link  
  * Files \- Right to Left Swipe: Create tag, View Details, Delete  
  * Folders \- Left to Right Swipe: Send to Chat, Apple Share, Create gämi Link  
  * Folders \- Right to Left Swipe: Create gämi Share Link

**User Flow (Basic)**

1. Tap "All Files" from the bottom navigation.  
2. Browse files.  
3. Use "Sort by" or the filter dropdown to organize.  
4. Use swipe gestures or the ••• menu for actions.  
5. Tap the \+ button to add content.

**Integration Points**

* Home Screen Modules, Search, Tags, Share Links, Community Folders, File Details, gämi Messaging

**Common Questions/Issues**

* **Q: How do I add custom artwork to files?** A: Tap ••• → "View Details" → "Upload Folder Art".  
* **Q: What's Direct Upload?** A: Paste a download link, and gämi downloads it directly to your account.  
* **Q: What's the difference between the three swipe sharing options?** A: Send to Chat (gämi messaging), Apple Share (system sharing), Create gämi Link (advanced secure sharing).  
* **Q: Why do folders and files have different right swipe options?** A: Folders only show "Create gämi Link," while files show tagging, details, and delete.  
* **Q: Can I control how many times someone views my shared file?** A: Yes, with preview limits and time expiration settings.  
* **Q: What's the difference between Pin File and Add to favorites?** A: Pin File is for temporary access; Favorites are permanent bookmarks.  
* **Q: How do I share a file with timestamp notes?** A: Tap ••• → "Share File" → Toggle "Time stamping notes" ON.

---

### **Playlists**

Quick Description

A music collection and management system that allows users to organize audio files into curated playlists with custom artwork, enabling easy access to organized music libraries for personal enjoyment and sharing.

**Access Method**

* From the home screen: Playlists module  
* From All Files: Filter dropdown → Select "Playlists"  
* From music files: Add individual audio files

**Primary Functions**

* Create and organize music playlists  
* Add custom artwork  
* Share playlists with gämi sharing system  
* Access playlists across all devices  
* Share playlist links with non-gämi users for listening and feedback

**Playlist Creation and Management**

* **Creating New Playlists**: From a music file (••• → "Add to Playlist" → "Create New Playlist"), from a folder (tap playlist icon), or from the Playlists section (+ button).  
* **Adding Files to Playlists**: Individually, in bulk, or via drag and drop.  
* **Playlist Customization**: Custom artwork, gämi artwork, playlist names, reordering songs.

**Display and Navigation**

* **Home Screen Module**: Shows recent playlists.  
* **All Files Integration**: Appears as a filter option.

**Playlist Actions (Three-dot menu •••)**

* Play Playlist, Share Playlist, Add to favorites, Rename, Edit Artwork, Delete, Add Files

**User Flow (Basic)**

1. Navigate to the Playlists section.  
2. Create a new playlist or select an existing one.  
3. Add audio files.  
4. Organize and save the playlist.

**Integration Points**

* File Management, Home Screen Modules, Sharing System, Tags System, Search, Sync, Music Player

**Common Questions/Issues**

* **Q: Can I add the same song to multiple playlists?** A: Yes.  
* **Q: What happens if I delete an audio file from my library?** A: It is removed from any playlists.  
* **Q: Can I share playlists with people who don't have gämi?** A: Yes, using gämi's share link system.  
* **Q: How do I reorder songs?** A: Tap and hold to drag and reorder.  
* **Q: Can I add custom artwork?** A: Yes.  
* **Q: Can I create playlists from files in Community Folders?** A: Yes.  
* **Q: Do playlists sync across my devices?** A: Yes.

---

### **Community Folders**

Quick Description

A collaborative shared workspace that allows multiple users to access, contribute to, and manage files within a unified folder structure with controlled permissions and real-time collaboration features.

**Access Method**

* From All Files, by converting regular folders, or from the home screen.

**Primary Functions**

* Create shared workspaces  
* Grant multi-user access  
* Enable real-time collaboration  
* Manage member permissions

**Community Folder Creation and Management**

* **Creating**: Convert an existing folder via share settings.  
* **Adding Members and Permissions**: Invite collaborators and set permission levels (view, edit, upload, admin).  
* **File Management**: Shared access, real-time updates, and file sharing based on permissions.

**Integration with Other Features**

* **Timestamp Notes**: Any member can create timestamp note links for audio/video files.  
* **File Sharing and Links**: Members can create share links based on their permissions.  
* **Search and Organization**: Contents appear in search results and can be tagged.

**User Flow (Basic)**

1. Create or access a community folder.  
2. Invite collaborators and set permissions.  
3. Members can then view, contribute, and collaborate.

**Permission Management**

* **Access Levels**: Viewer, Contributor, Editor, Admin.  
* **File Operations by Permission Level**: All levels can create timestamp notes; Contributor+ can upload; Editor+ can organize; Admin has full control.

**Integration Points**

* File Management, Sharing System, Communication, Search, Tags, Sync, Home Screen

**Common Questions/Issues**

* **Q: How do I create a community folder?** A: Convert an existing folder through sharing settings.  
* **Q: Who can create timestamp note links in community folders?** A: Any member.  
* **Q: Can I control member permissions?** A: Yes, through different access levels.  
* **Q: Where do community folders appear?** A: In your All Files view.  
* **Q: Do changes sync in real-time?** A: Yes.

---

### **Communication Features**

Quick Description

A comprehensive encrypted messaging ecosystem that combines text messaging, voice notes, voice calls, and video calls within a secure, integrated platform.

**Access Method**

* From the bottom navigation: Tap "Comms"  
* From the home screen: Pinned Chats module

**Primary Functions**

* Encrypted text messaging, voice notes, voice calls, and video calls  
* Contact management and friend requests  
* File sharing within conversations

**Main Communication Interface**

* **Navigation Tabs**: New Chat, Add friends, Requests, Contacts  
* **Chats Section**: Pinned Chats, Chat List, Group Chats  
* **Messages vs Call History Toggle**

**Encrypted Messaging Features**

* **Text Messaging**: End-to-end encrypted individual and group chats.  
* **Voice Notes**: Secure, asynchronous audio messages.  
* **File Sharing Integration**: Share files directly from gämi storage.

**Voice and Video Calling**

* **Encrypted Voice and Video Calls**: Secure communication with features like screen sharing.  
* **Call History Management**: A complete log of all calls.

**Contact and Friend Management**

* **Adding Friends**: A request-based system to control your network.  
* **Contact Organization**: An organized list of approved connections.

**Security and Privacy Features**

* **End-to-End Encryption**: For all messages, voice notes, and calls.  
* **Privacy Controls**: A request-based system to prevent unsolicited messages.

**User Flow (Basic)**

1. Navigate to the Comms section.  
2. Add and manage friends.  
3. Start conversations and exchange messages, voice notes, or files.  
4. Initiate voice or video calls.

**Integration Points**

* File Management, Community Folders, Timestamp Notes, Home Screen, Sharing System, Search, Notifications

**Common Questions/Issues**

* **Q: Are my messages encrypted?** A: Yes, all communications use end-to-end encryption.  
* **Q: Can people message me without being friends first?** A: No.  
* **Q: Can I make group calls?** A: Group messaging is supported.  
* **Q: Where can I see my call history?** A: In the "Call History" tab in the Comms section.

---

### **Tagging \+ Thresholds & Migration Assistant**

Quick Description

An advanced file organization system with automated metadata detection that instantly tags audio files with key, BPM, and genre information, combined with a powerful migration tool.

**Access Method**

* From file details (••• → "View Details" → Tags section), swipe gestures, search, or the migration tool.

**Primary Functions**

* **Auto-Detection**: Automatically extracts key and BPM from audio files.  
* **Smart Tagging**: AI-powered genre and mood suggestions.  
* **Threshold Filtering**: Search files within specific BPM ranges.  
* **Migration Assistant**: One-click import from Dropbox, Google Drive, and Box.

**Auto-Tagging System**

* **Automatic Metadata Detection**: Identifies key and BPM instantly.  
* **AI-Powered Suggestions**: Suggests genre and mood tags for user approval.  
* **Supported Audio Formats**: .wav, .mp3, .mp4, .m4a.

**Migration Assistant**

* **Supported Platforms**: Dropbox, Google Drive, Box, Local Storage.  
* **Migration Process**: One-click import with background processing and progress tracking.  
* **Auto-Processing During Migration**: Bulk tagging and genre analysis.

**Advanced Threshold Filtering**

* **Threshold Search Capabilities**: Search by BPM ranges (e.g., "90-120") and musical keys.  
* **Smart Filter Logic**: Combine threshold ranges with other tags for precise results.

**Tag Management Interface**

* **Color-Coded Organization**: Assign colors to tags for visual identification.  
* **Tag Creation and Editing**: Add manual tags, get AI suggestions, and manage tags in bulk.

**User Flow (Migration)**

1. Access the Migration Assistant.  
2. Select the source platform and authenticate.  
3. Initiate the one-click migration.  
4. Files are processed and tagged in the background.

**User Flow (Manual Tagging)**

1. Navigate to a file's details.  
2. View auto-detected tags and add new ones.  
3. Select colors and save.

**Integration Points**

* File Management, Search System, Home Screen, Sharing, Community Folders, Migration Tools, AI Assistant

**Common Questions/Issues**

* **Q: Do I have to manually add BPM and key?** A: No, gämi does it automatically.  
* **Q: What happens when I migrate from Dropbox?** A: All audio files get automatically tagged.  
* **Q: How do I find only R\&B tracks between 90-120 BPM?** A: Apply the BPM threshold first, then the R\&B tag.  
* **Q: Do my tags transfer when I share files?** A: Yes, through gämi's threshold sharing feature.

---

### **FLEX PLAY (FLEXIBLE MULTIMEDIA EXPERIENCE)**

Quick Description

gämi's integrated multimedia philosophy that allows seamless audio playback while navigating throughout the entire application without interruption.

**Access Method**

* Simply tap any audio file to start playback.

**Primary Functions**

* **Uninterrupted Navigation**: Move freely between all gämi features while music plays.  
* **Smart File Progression**: Automatically skips non-audio files in a folder.  
* **Universal Compatibility**: Works with all audio formats.

**How Flex Play Works**

* **Continuous Playback Philosophy**: Start music and navigate anywhere in gämi without it stopping.  
* **Intelligent File Handling**: Automatically skips non-audio content and progresses to the next music file.

**Competitive Advantage**

* Unlike other platforms that stop playback when you switch views, gämi provides true multitasking and a seamless workflow.

**Technical Implementation**

* A persistent background audio engine and an always-accessible mini-player.

**User Flow (Natural Music Experience)**

1. Tap an audio file in any folder.  
2. Navigate freely through the app—viewing PDFs, chatting, managing files.  
3. The music continues to play, auto-advancing to the next audio file.

**Real-World Scenarios**

* A producer can play a beat while reviewing a contract PDF and checking messages.  
* A team member can listen to a demo track while reviewing a project brief in a Community Folder.

**Integration Points**

* Integrates with all major features: File Management, Communication, Sharing, Collaboration, and Organization.

**Common Questions/Issues**

* **Q: How is this different from other cloud storage music playback?** A: gämi's playback is uninterrupted, unlike other platforms.  
* **Q: Does music stop when I open a PDF?** A: No.  
* **Q: What happens with mixed content folders?** A: gämi intelligently skips non-audio files.  
* **Q: Is this a separate player?** A: No, it's built into the core experience.

---

### **Export Snippets**

Quick Description

A professional social media content generator that creates polished 15, 30, or 60-second video snippets from audio files with custom artwork.

**Access Method**

* From an individual music file: Tap the share icon → "Export Snippets".

**Primary Functions**

* **Professional Video Creation**: Generates high-quality video snippets with cover art.  
* **Multiple Duration Options**: 15, 30, or 60-second clips.  
* **Fine-Tune Selection**: Precisely choose the audio portion.  
* **Visual Customization**: Multiple color schemes and background options.  
* **Direct Social Sharing**: Export directly to social media.

**Snippet Customization Options**

* **Duration Selection**: 15, 30, or 60 seconds.  
* **Precise Selection**: Use a timeline scrubber and waveform visualization.

**Creation Workflow**

1. Configure title and description.  
2. Select the audio segment using the waveform tool.  
3. Choose color and visual customization.  
4. Generate and share the snippet.

**Technical Specifications**

* **Output Quality**: Optimized for social media platforms with high-fidelity audio.  
* **Performance Features**: Fast, background, and cloud-based generation.

**Integration Points**

* File Management, Artwork System, Sharing Infrastructure, Social Platforms, Communication

**Platform Optimization**

* Formatted for Instagram Stories/Reels, TikTok, Twitter/X, and YouTube Shorts.

**Professional Use Cases**

* Music promotion, client previews, social marketing, and collaboration.

**Common Questions/Issues**

* **Q: Can I create snippets from playlists?** A: Currently available for individual files only.  
* **Q: What's the difference between this and screen recording?** A: Export Snippets creates much higher quality, professional content.  
* **Q: Can I choose the exact part of the song?** A: Yes, with the timeline scrubber.  
* **Q: Do I need to upload cover art separately?** A: No, it uses the file's existing artwork.  
* **Q: Is there a limit to how many snippets I can create?** A: No.

