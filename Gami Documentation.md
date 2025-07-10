"gämi".

```markdown
gämi Developer Documentation

Time Stamp Notes

Quick Description
Allows users to leave precise feedback on specific moments in audio and video files, accessible to both gämi users and non-gämi users through shareable links.

Access Method
From file view: Tap three dots (...) on audio/video file -> "Create Link" -> Toggle "Timestamp Notes" ON
From chat: Tap received file -> Create timestamp note link
UI Elements: File options menu, share link creation interface, timestamp note toggle

Primary Functions
Leave time-specific comments on audio/video content
Enable collaborative feedback without app-switching
Share with external collaborators (no gämi account required)
Real-time collaboration on media files

User Flow (Basic)
Select audio or video file in gämi (from All Files, Shared, or chat)
Tap three dots (...) -> Select "Create Link"
Toggle "Timestamp Notes" feature ON
Configure link settings (expiration, access permissions)
Share generated link with collaborators
Recipients click link -> Can play media and add timestamped comments
All feedback appears in real-time for link creator

Integration Points
Community Folders: Files in shared folders can be made into timestamp note links by any folder member
Share Links: Uses same configurable link system (passwords, expiration, view limits)
Chat Integration: Files received in chat can be converted to timestamp note links
File Management: Timestamp note links appear in "Timestamps" filter section and "Shared with me"
Notifications: Creator receives alerts when new timestamp notes are added

Common Questions/Issues
Q: Do people need gämi accounts to leave timestamp notes?
A: No, anyone with the link can participate
Q: How long do timestamp note links last?
A: You set the expiration when creating the link (hours, days, or custom duration)
Q: Where do I find my timestamp note links?
A: Go to All Files -> Sort by -> "Timestamps" or check "Shared with me" section
Q: Can I see timestamp notes on files in Community Folders?
A: Yes, but a timestamp note link must be created first - the feature doesn't exist until someone generates the link

Home Screen Modules

Quick Description
Customizable widgets that can be enabled/disabled on the home screen to provide quick access to frequently used features. Users can choose up to 9 different modules and arrange them based on their workflow needs.

Access Method
From home screen: Tap settings icon in top right -> Access customization
UI Elements: Toggle switches for each module, module grid icons

Available Modules
Pinned Chats
Function: Quick access to frequently used conversations
Display: Shows profile pictures of pinned contacts in square format
Use Case: Jump directly to important conversations without Browse full chat list
All Files
Function: Quick preview of your All Files page
Display: Shows folders first, then files, sorted alphabetically
Use Case: Quick overview of your file structure without navigating to full All Files view
Pin Files
Function: Quick access to specifically pinned files and folders
Display: Card view showing pinned items with visual previews
Use Case: Instant access to files you're currently working on (more temporary than Favorites)
Recents
Function: Shows recently accessed files
Display: Shows files in their native format/preview
Use Case: Continue working on recently opened files
Favorites
Function: Bookmark system for important files
Display: Card view with file previews and artwork
Use Case: Another way to organize your favorite files/folders for easier access
Playlists
Function: Quick access to created playlists
Display: Card view with custom artwork and playlist names
Use Case: Jump directly to curated music collections
Tags
Function: Tag management and quick filtering
Display: Colored tag buttons with search functionality
Use Case: Quickly filter files by tags or create new tags
Shared
Function: Files you've shared with others
Display: List view showing shared files with recipient indicators
Use Case: Track what you've shared and manage sharing permissions
Shared with me
Function: Files others have shared with you
Display: List view showing files with sender information
Use Case: Access files others have given you permission to view/edit

User Flow (Basic)
From home screen -> Tap settings icon
Toggle modules ON/OFF based on your workflow
Enabled modules appear as modules on home screen
Modules can be reordered by preference
Each module shows "See all" option to view complete section

Integration Points
Profile Settings: Customization preferences saved to user profile
All Files: Modules link directly to corresponding sections in All Files
Search: Each module integrates with global search functionality
File Management: All modules connect to main file organization system

Common Questions/Issues
Q: How many modules can I have active at once?
A: All 9 modules can be enabled simultaneously if desired
Q: Can I reorder the modules on my home screen?
A: Currently modules appear in set order, but you can choose which ones to display
Q: What's the difference between Pin Files and Favorites?
A: Pin Files are for temporary quick access (current projects), Favorites are bookmarks for important files
Q: If I turn off a module, do I lose my pinned/favorite files?
A: No, turning off a module only hides it from home screen - your data is preserved
Q: Can I access these sections if the module is turned off?
A: Yes, all sections are still accessible through All Files and the main navigation

File Management system

Quick Description
Comprehensive file organization and navigation system that allows users to view, sort, filter, and manage all their files and folders from a central hub with swipe gestures and advanced organizational options.

Access Method
From bottom navigation: Tap "All Files"
From home screen modules: Tap "See all" on any file-related module (goes to All Files filtered by that module type)
UI Elements: File list, sort options, filter dropdown, three-dot menus (...), plus button (+), swipe gestures

Primary Functions
Browse all files and folders in organized views
Sort and filter files by multiple criteria
Upload new content through various methods
Manage individual file/folder actions via swipe gestures and menus
Quick access to specialized file categories

All Files Design Layout
File List View
Display: Shows folders first (alphabetically), then files
File Info: Name, date/time stamp, file type icons
Custom Artwork: Folders and files can have custom artworks for quicker visual search
gämi Artwork: Users can add artworks created by gämi
Sort By Options (Top right "Sort by")
Name: A-Z or Z-A alphabetical sorting
Date: Newest first or oldest first sorting
Note: File size sorting will be implemented in future updates
Filter Categories (Dropdown menu)
All Files: Complete file library
Videos: .mp4, .mov, and other video formats
Photos: .jpg, .png, .gif and image formats
Music: .mp3, .wav, .m4a and audio formats
Documents: .pdf, .doc, .txt and document formats
Shared: Files you've shared with others
Shared w/ Me: Files others have shared with you
Favorite Files: Files you've marked as favorites
Recents: Recently accessed files
Timestamps: Files with active timestamp note links
Playlists: Created playlist collections
Add/Upload Options (+ Button)
Add friends: Invite people to gämi
New folder: Create new folder
Upload file(s): Select files from device storage
Upload from gallery: Select from photo/video gallery
Take a Picture: Use camera to capture new photo
File Actions (Three-dot menu ...)
For Individual Files:
Pin File: Add to quick access
Send File to Chat: Share directly in conversation
Share File: Create share links with custom settings
Add to favorites: Bookmark for long-term access
Create tag: Add organizational tags
Download: Save to device
View Details: See file information and properties
Delete: Remove file
Rename: Change file name
Duplicate: Create copy
Move File: Relocate to different folder
For Folders:
Unpin Folder: Remove from quick access (if pinned)
Share Folder: Create share links for entire folder
Add to favorites: Bookmark folder
Create tag: Add organizational tags
View Details: See folder information
Delete: Remove folder
Rename: Change folder name
Duplicate: Create copy
Move File: Relocate folder
Swipe Gestures
Files - Left to Right Swipe (Options appear on left):
Send File to Chat: Direct sharing within gämi messaging
Apple Share: Native iOS sharing options (AirDrop, Messages, Mail, etc.)
Create gämi Share Link: Advanced secure sharing with custom settings
Files - Right to Left Swipe (Options appear on right):
Create tag: Quick tagging action
View Details: (Info button) - File details and management
Delete: Quick delete action
Folders - Left to Right Swipe (Options appear on left):
Only shows "Create gämi Share Link" option
Folders - Right to Left Swipe (Options appear on right):
Create tag: Quick tagging action
View Details: (Info button) - File details and management
Delete: Quick delete action

User Flow (Basic)
Tap "All Files" from bottom navigation
Browse files (folders appear first, then files alphabetically)
Use "Sort by" to change between Name and Date organization
Use filter dropdown to view specific file types
Tap ... on any file/folder for full action menu OR use swipe gestures for quick actions
Tap + button to add content or invite friends
Tap individual files to open/preview

Integration Points
Home Screen Modules: "See all" links filter All Files by module type
Search: Global search icon searches through all files
Tags: Color-coded tag system for advanced organization
Share Links: Configurable sharing with multiple security options
Community Folders: Shared folders appear in main file list
File Details: Comprehensive metadata and access management
gämi Messaging: Direct file sharing integration

Common Questions/Issues
Q: How do I add custom artwork to files? A: Tap ... -> "View Details" -> "Upload Folder Art" button
Q: What's the difference between the three swipe sharing options? A: Send to Chat = gämi messaging, Apple Share = system sharing, Create gämi Link = advanced secure sharing
Q: Why do folders and files have different right swipe options? A: Folders only show Create gämi Link on right swipe, while files show tagging, details, and delete
Q: Can I control how many times someone views my shared file? A: Yes, use "Share File" with preview limits and time expiration settings
Q: What's the difference between Pin File and Add to favorites? A: Pin File is for temporary quick access, Favorites are permanent bookmarks
Q: How do I share a file with timestamp notes? A: Tap ... -> "Share File" -> Toggle "Time stamping notes" ON (for audio/video files)

Playlists

Quick Description
Music collection and management system that allows users to organize audio files into curated playlists with custom artwork, enabling easy access to organized music libraries for personal enjoyment and sharing.

Access Method
From home screen: Playlists module (if enabled) -> Shows recent playlists with "See all" option
From All Files: Filter dropdown -> Select "Playlists" to view all created playlists
From music files: Add individual audio files to existing or new playlists
UI Elements: Playlist cards with custom artwork, playlist names, creation dates, three-dot menus (...)

Primary Functions
Create and organize music playlists from audio files
Add custom artwork to playlists for visual organization
Share playlists with other users through gämi sharing system
Access playlists across all devices with gämi sync
Manage playlist content through file actions
Share playlist links with non-gämi users for listening and feedback via comments and likes

Playlist Creation and Management
Creating New Playlists
From music file: Tap ... on audio file -> "Add to Playlist" -> "Create New Playlist"
From Folder: Tap playlist icon in folder to turn folder into a playlist
From Playlists section: Navigate to Playlists -> Tap + button -> "New Playlist"
Name playlist and optionally add custom artwork during creation
Adding Files to Playlists
Individual files: Tap ... on audio file -> "Add to Playlist" -> Select existing playlist
Multiple files: Select multiple audio files -> Bulk add to playlist
Drag and drop: Drag audio files onto playlist (desktop/web interface)
Playlist Customization
Custom Artwork: Add visual identifiers to playlists for quick recognition
gämi Artwork: Use artwork created by gämi's AI system
Playlist Names: Descriptive titles for easy identification
File Organization: Reorder songs within playlists

Playlist Display and Navigation
Home Screen Module
Shows recent or frequently accessed playlists
Displays custom artwork and playlist names
"See all" option to view complete playlist library
Quick access to play or manage playlists
All Files Integration
Playlists appear as a filter option in All Files
Shows all created playlists in chronological order
Each playlist displays: Name, custom artwork, creation date
Standard file actions available (...) for playlist management

Playlist Actions (Three-dot menu ...)
Play Playlist: Start playback of all songs in playlist
Share Playlist: Create share links with custom permissions
Add to favorites: Bookmark frequently used playlists
Rename: Change playlist name
Edit Artwork: Update custom artwork
Delete: Remove playlist (files remain in library)
Add Files: Browse and add additional audio files

User Flow (Basic)
Navigate to Playlists section (Home module or All Files filter)
Tap + to create new playlist OR select existing playlist
For new playlist: Name it and optionally add custom artwork
Add audio files by Browse music library or using file actions
Organize songs within playlist by reordering
Save playlist - accessible across all devices
Share playlist using gämi's sharing system if desired
Share playlist links with non-gämi users for listening and feedback via comments and likes

Integration Points
File Management: Audio files can be added to playlists from any location in gämi
Home Screen Modules: Playlists module provides quick access to music collections
Sharing System: Playlists use same secure sharing options as individual files
Tags System: Playlists can be tagged for advanced organization
Search: Global search finds playlists by name or content
Sync: Playlists automatically sync across all user devices
Music Player: Integration with gämi's audio playback system

Common Questions/Issues
Q: Can I add the same song to multiple playlists? A: Yes, audio files can be included in unlimited playlists without duplicating storage
Q: What happens to my playlist if I delete an audio file? A: The file is removed from the playlist but the playlist structure remains intact
Q: Can I share playlists with people who don't have gämi? A: Yes, using gämi's share link system with customizable access permissions
Q: How do I change the order of songs in a playlist? A: Tap and hold songs within the playlist to drag and reorder them
Q: Can I add custom artwork to my playlists? A: Yes, upload custom images or use gämi-generated artwork for visual organization
Q: Where do my playlists appear in the All Files section? A: Select "Playlists" from the filter dropdown to view all your created playlists
Q: Can I create playlists from files in Community Folders? A: Yes, any audio files you have access to can be added to your personal playlists
Q: Do playlists sync across my devices? A: Yes, all playlists automatically sync across all devices logged into your gämi account

Community Folders

Quick Description
Collaborative shared workspace that allows multiple users to access, contribute to, and manage files within a unified folder structure with controlled permissions and real-time collaboration features.

Access Method
From All Files: Community folders appear integrated within main file list
From sharing: Convert regular folders to community folders through sharing settings
From home screen: Community folders may appear in relevant modules
UI Elements: Shared folder icons, member indicators, standard folder actions (...)

Primary Functions
Create shared workspaces for team collaboration
Grant multiple users access to folder contents
Enable real-time file sharing and collaboration
Manage member permissions and access levels
Maintain version control and file organization within shared space

Community Folder Creation and Management
Creating Community Folders
From existing folder: Convert regular folders to community folders through share settings
Permission setup: Define who can access, edit, upload, and manage the folder
Member management: Add collaborators by username
Access control: Set different permission levels for different members
Adding Members and Permissions
Invite collaborators: Add people through sharing interface
Permission levels: Configure what each member can do (view, edit, upload, admin)
Member visibility: See who has access to the community folder
Access management: Add or remove members as needed
File Management Within Community Folders
Shared access: All authorized members can access folder contents
File operations: Members can upload, download, organize files based on permissions
Real-time updates: Changes sync across all member devices
File sharing: Any member can create timestamp note links or share individual files from the community folder

Integration with Other Features
Timestamp Notes Integration
Universal access: Any member of a community folder can create timestamp note links for audio/video files
Collaborative feedback: Members can leave timestamped comments without folder admin needing to create links
Example workflow: In a music production community folder, any member can swipe on a new mix version and create a timestamp note link for collaborative feedback
File Sharing and Links
Member privileges: Community folder members can create share links for any files they have access to
Link management: Share links created from community folder files are tracked in the creator's "Shared" section
Access inheritance: Share links maintain the security and access patterns of the community folder
Search and Organization
Global search: Community folder contents appear in member search results
Tagging system: Files in community folders can be tagged for organization
File filtering: Community folder files integrate with All Files filtering system

User Flow (Basic)
Create or access community folder through sharing interface
Invite collaborators by adding their email/username
Set permission levels for each member
Members receive access and can view/contribute to folder
Upload, organize, and share files within the collaborative space
Use timestamp notes, sharing, and other features on community folder content
Manage member access and permissions as needed

Permission Management
Access Levels
Viewer: Can view/preview
Contributor: Can view, download, and upload files
Editor: Can view, download, upload, and organize files
Admin: Full access including member management and folder settings
File Operations by Permission Level
All levels: Can create timestamp note links for collaborative feedback
Contributor+: Can upload new files to the community folder
Editor+: Can organize, rename, and manage folder structure
Admin: Can add/remove members and modify folder settings

Integration Points
File Management: Community folders appear in main All Files navigation
Sharing System: Uses same secure sharing infrastructure as individual files
Communication: Integration with gämi messaging for team collaboration
Search: Community folder contents searchable by all members
Tags: Community folder files can be tagged and filtered
Sync: Real-time synchronization across all member devices
Home Screen: May appear in relevant home screen modules for quick access

Common Questions/Issues
Q: How do I create a community folder? A: Convert an existing folder to a community folder through the sharing settings and add members
Q: Who can create timestamp note links in community folders? A: Any member with access to the folder can create timestamp note links for audio/video files
Q: What happens when I leave a community folder? A: You lose access to all folder contents, but files you personally uploaded may remain depending on folder settings
Q: Can I control what members can do in the community folder? A: Yes, set different permission levels (Viewer, Contributor, Editor, Admin) for different members
Q: Where do community folders appear in my file system? A: They appear integrated within your All Files view alongside your personal folders
Q: Can members share files from community folders externally? A: Yes, members can create share links for community folder files based on their permission level
Q: How do I manage who has access to a community folder? A: Admins can add/remove members and modify permissions through the folder sharing settings
Q: Do changes in community folders sync in real-time? A: Yes, all changes sync immediately across all member devices
Q: Can I tag files in community folders? A: Yes, community folder files can be tagged and organized like personal files

Communication Features

Quick Description
Comprehensive encrypted messaging ecosystem that combines text messaging, voice notes, voice calls, and video calls within a secure, integrated platform designed to reduce context switching and maintain privacy for creative collaboration. Adding contacts in gämi are through a Request-Based System: Control who can contact you through friend requests

Access Method
From bottom navigation: Tap "Comms" to access main communication hub
From home screen: Pinned Chats module provides quick access to recent conversations
UI Elements: New Chat, Add friends, Requests, Contacts tabs; Messages and Call History sections; Chat avatars and conversation list

Primary Functions
Encrypted chat messaging with individual users and groups
Voice notes for asynchronous audio communication
Voice calls and video calls with end-to-end encryption
Contact management and friend requests system
File sharing integration within conversations
Call history tracking and management
File database between users are one click away while in chat

Main Communication Interface
Navigation Tabs
New Chat: Start new conversations with contacts
Add friends: Send connection requests to other users
Requests: Manage incoming connection requests
Contacts: View and organize your contact list
Chats Section
Pinned Chats: Quick access to frequent conversation partners
Chat List: All active conversations with recent messages preview
Group Chats: Multi-person conversations
Message Previews: Shows last message content and timestamp
Messages vs Call History Toggle
Messages Tab: Text conversations, voice notes, shared files
Call History Tab: Complete record of voice and video calls
Filter Options: All, Unread, Group (for messages); All, Missed (for calls)

Encrypted Messaging Features
Text Messaging
End-to-end encryption: All messages secured with encryption
Individual & Group Chats: One-on-one and multi-person conversations
Message Status: Delivery and read receipts
Rich Text Support: Enhanced messaging capabilities
Voice Notes
Encrypted Voice Messages: Secure audio recording and playback
Asynchronous Communication: Leave voice messages for later playback
Voice Note Integration: Seamlessly mixed with text messages
Playback Controls: Standard audio controls within chat interface
File Sharing Integration
Direct File Sharing: Share files from gämi storage directly in conversations
Community Folder Access: Share files from collaborative workspaces
Timestamp Note Integration: Create collaborative feedback links from shared files
File Previews: View shared content without leaving conversation

Voice and Video Calling
Voice Calls
Encrypted Voice Calls: Secure audio communication
Call History Tracking: Complete record with timestamps
Missed Call Notifications: Clear indication of missed communications
Contact Integration: Easy calling from contact list
Video Calls
Encrypted Video Calls: Secure video communication with full encryption
Screen Sharing: Share screen content during video calls
Full-Screen Mode: Immersive video call experience
Call Management: Standard video call controls and features

Call History Management
Complete Call Log: All voice and video calls tracked with timestamps
Call Status Indicators: Incoming, missed, outgoing call identification
Call Duration: Length of completed calls recorded
Quick Actions: Ability to call back directly from history

Contact and Friend Management
Adding Friends
Friend Requests: Send and receive connection requests
Contact Approval: Control who can communicate with you
Request Management: Accept or decline incoming requests
Privacy Control: Avoid unsolicited messages and maintain secure network
Contact Organization
Contact List: Organized view of all approved connections
Profile Information: Contact details and communication preferences
Availability Status: See who's online or available for communication
Contact Search: Find contacts quickly within your network

Security and Privacy Features
Encryption Standards
End-to-End Encryption: All communications secured from device to device
Message Privacy: Only sender and recipient can read messages
Call Encryption: Voice and video calls fully encrypted
Secure File Sharing: Files shared through conversations maintain encryption
Privacy Controls
Request-Based System: Control who can contact you through friend requests
No Unsolicited Messages: Protection from spam and unwanted communication
Secure Contact Network: Only approved contacts can initiate communication
Safe Communication Hub: Distraction-free environment for professional collaboration

User Flow (Basic)
Navigate to Comms section from bottom navigation
Add friends through "Add friends" tab or contact sharing
Manage incoming requests in "Requests" tab
Start conversations through "New Chat" or select existing chat
Exchange encrypted messages, voice notes, or shared files
Initiate voice or video calls from chat interface or contacts
Access call history and message history as needed

Integration Points
File Management: Direct integration with All Files for sharing content
Community Folders: Share files from collaborative workspaces in conversations
Timestamp Notes: Create collaborative feedback links from shared files within chats
Home Screen: Pinned Chats module provides quick access from home
Sharing System: Files shared in conversations use gämi's secure sharing infrastructure
Search: Global search includes conversation content and contact names
Notifications: Real-time alerts for messages, calls, and connection requests

Common Questions/Issues
Q: Are my messages really encrypted? A: Yes, all text messages, voice notes, and calls use end-to-end encryption
Q: Can people message me without being friends first? A: No, users must send a friend request that you approve before they can message you
Q: How do I share files in conversations? A: Files from your gämi storage can be shared directly within chat conversations
Q: Can I make group calls? A: Group messaging is supported; group calling capabilities may vary
Q: Where can I see my call history? A: Switch to the "Call History" tab in the Comms section to see all voice and video calls
Q: How do I add new contacts? A: Use the "Add friends" tab to send connection requests to other gämi users
Q: Can I share files from Community Folders in chats? A: Yes, files from collaborative workspaces can be shared in conversations
Q: What happens to missed calls? A: Missed calls appear in your call history and you'll receive notifications
Q: Can I leave voice messages if someone doesn't answer? A: Yes, voice notes provide asynchronous voice communication within conversations

Tagging + Thresholds

Quick Description
Advanced file organization system with manual input and automated metadata detection that instantly tags audio files with key and BPM information, combined with powerful threshold search capabilities that allow precise filtering within specific parameter ranges.

Access Method
From file details: Tap ... -> "View Details" -> Tags section with color-coded tag management
From search: Global search with tag filtering and threshold ranges
From upload: Auto-tagging applied immediately upon file upload
UI Elements: Tag input field, color selection palette, threshold range search interface

Primary Functions
Auto-Detection: Automatically extract key and BPM from audio files upon upload
Manual Tagging: Add custom genre, mood, and organizational tags
Threshold Filtering: Search files within specific BPM ranges and parameter thresholds
Advanced Search: Combine tag filters with threshold ranges for precise file discovery
Visual Organization: Color-coded tag system for quick visual identification

Auto-Tagging System
Automatic Metadata Detection
Key Detection: Automatically identifies musical key from audio file metadata
BPM Detection: Extracts tempo information and saves as searchable tags
Instant Processing: Tags applied immediately upon file upload or access
Background Processing: Large libraries processed efficiently without blocking usage
Manual Tagging System
Genre Classification: Manually add relevant genre tags (Soul, Trap, Reggaeton, R&B, etc.)
Mood Classification: Add mood tags ("Chill Vibe", "Energetic", "Dark", etc.)
Custom Categories: Create project-specific or workflow-based organizational tags
User Control: Complete control over all non-technical tag assignments

Supported Audio Formats
Primary Formats: .wav, .mp3, .mp4, .m4a
Metadata Sources: Embedded file metadata and audio analysis
Processing Queue: Background job system handles large volumes efficiently

Advanced Threshold Filtering
Threshold Search Capabilities
BPM Ranges: Search for files within specific tempo ranges (e.g., "90-120 BPM")
Key Filtering: Find files in specific musical keys
Combined Filters: Mix threshold ranges with genre/mood tags
Range Syntax: Use "tag-90-120" format for precise range searches
Smart Filter Logic
Sequential Filtering: Apply threshold first, then genre filters for precise results
AND Logic: When threshold applied first, additional tags filter within that range
OR Logic: Alternative search modes for broader results
Filter Preservation: Maintain search context across different filter applications
Search Examples
"90-120" -> All files between 90-120 BPM
"90-120" + "R&B" -> Only R&B tracks within 90-120 BPM range
"Cm" + "Trap" -> Trap music in C minor key
"Chill" + "100-110" -> Chill vibes between 100-110 BPM

Tag Management Interface
Color-Coded Organization
Visual Tags: Each tag assigned specific color for quick visual identification
Color Palette: Wide range of colors available for tag categorization
Custom Colors: Users can assign preferred colors to tag categories
Visual Search: Quickly identify files by tag color patterns
Tag Creation and Editing
Manual Tags: Add custom descriptive tags for genre, mood, project, or any organizational need
Bulk Tagging: Apply tags to multiple files simultaneously
Tag Management: Edit, rename, or remove tags as needed
Smart Organization: Organize files using your preferred categorization system
Tag Categories
Technical Tags: Key, BPM, tempo-related metadata
Genre Tags: Musical style classifications (Hip-Hop, Jazz, Electronic, etc.)
Mood Tags: Emotional characteristics (Happy, Dark, Energetic, Chill)
Custom Tags: User-defined organizational categories

User Flow (Manual Tagging)
Navigate to file in All Files or through search
Tap ... -> "View Details" -> Tags section
View auto-detected tags (Key, BPM) already applied
Add additional tags using "Add Another Tag" field
Select colors for new tags from color palette
Save tags for immediate searchability and organization

Integration Points
File Management: Tags integrate with All Files filtering and search
Search System: Global search includes tag-based filtering with threshold ranges
Home Screen: Tagged files appear in relevant modules based on organization
Sharing: Tag data transfers with shared files (threshold sharing feature)
Community Folders: Tagged files maintain organization in collaborative spaces
AI Assistant: Tags provide context for AI-powered file management and suggestions

Common Questions/Issues
Q: Do I have to manually add BPM and key to my music? A: No! gämi automatically detects and tags key and BPM for all audio files
Q: Can I search for specific BPM ranges? A: Yes! Use threshold syntax like "90-120" to find all files in that BPM range
Q: How do I find only R&B tracks between 90-120 BPM? A: Apply the BPM threshold first (90-120), then add the R&B tag - only R&B within that range will show
Q: Does gämi suggest genres automatically? A: No, genre and mood tags are manually added by you for complete control over your organization system
Q: Do my tags transfer when I share files? A: Yes! Tag data transfers to recipients through gämi's threshold sharing feature
Q: Can I organize tags by color? A: Yes! Each tag can be assigned a specific color for visual organization and quick identification
Q: What audio formats support auto-tagging? A: All major formats including .wav, .mp3, .mp4, and .m4a support automatic key and BPM detection
Q: Can I create custom tags beyond BPM and key? A: Absolutely! Add genre, mood, project, or any custom organizational tags you need

Migration Assistant

Quick Description
One-click migration tool that seamlessly imports entire libraries from Dropbox, Google Drive, or Box while automatically processing and organizing all audio files with intelligent tagging, transforming chaotic file collections into smartly organized creative workspaces.

Access Method
From onboarding: Migration Assistant prominently featured during account setup
From settings: Migration tools available in account management section
From home screen: Quick migration option for new users
UI Elements: Platform selection, authentication flow, progress tracking, completion dashboard

Primary Functions
One-Click Import: Complete library migration from major cloud platforms
Automatic Organization: Intelligent file processing and smart categorization during transfer
Background Processing: Large libraries processed efficiently without blocking platform usage
Progress Tracking: Real-time updates on migration status and completion
Folder Structure Preservation: Maintains original organization while adding gämi enhancements

Supported Migration Sources
Primary Platforms
Dropbox: Complete account migration with full folder structure preservation
Google Drive: Direct import with automatic organization and file processing
Box: Enterprise-grade migration with access control preservation
Local Storage: Desktop and mobile device file imports and organization

Migration Scope Options
Full Library Migration: Import entire account contents with complete folder structure
Selective Migration: Choose specific folders or file types for targeted import
Incremental Migration: Periodic imports to keep libraries synchronized
Custom Filtering: Exclude specific file types or folders during migration process

Auto-Processing During Migration
Intelligent Audio File Processing
Automatic Tagging: All audio files receive key and BPM tags during migration
Genre Analysis: AI suggests genre classifications for entire music library
Metadata Extraction: Preserve and enhance existing file information
Smart Organization: Files automatically categorized by detected characteristics
File Enhancement Process
Background Job Processing: Large audio libraries processed without user interruption
Queue Management: Systematic processing of files based on priority and type
Error Handling: Robust processing with detailed reporting of any issues
Progress Notifications: Real-time updates on auto-tagging completion status
Organization Intelligence
Folder Structure Analysis: Understand existing organization patterns
Content Recognition: Identify project folders, sample libraries, and collaborative spaces
Duplicate Detection: Identify and manage duplicate files across libraries
Access Pattern Learning: Analyze usage patterns to optimize organization

Migration Process Flow
Initial Setup
Platform Selection: Choose source platform (Dropbox, Google Drive, Box)
Authentication: Secure OAuth connection to source account
Scope Configuration: Select full migration or specific folders/file types
Preview Analysis: Review migration scope and estimated processing time
Migration Execution
One-Click Initiation: Start complete migration process with single action
Background Transfer: Files transferred while user can immediately use gämi
Real-Time Processing: Audio files automatically tagged as they're imported
Progress Tracking: Live updates on transfer status and completion percentage
Post-Migration Organization
Auto-Organization Results: Review automatically applied tags and organization
Smart Recommendations: AI suggestions for further organization improvements
Access Verification: Confirm all files accessible and properly organized
Optimization Suggestions: Recommendations for workflow improvements

Advanced Migration Features
Intelligent File Handling
Format Recognition: Automatic identification and appropriate handling of all file types
Metadata Preservation: Maintain creation dates, modification history, and file properties
Version Control: Handle multiple versions of files with smart organization
Collaborative Context: Preserve sharing permissions and collaborative relationships
Processing Optimization
Bandwidth Management: Efficient transfer protocols optimized for large libraries
Storage Optimization: Intelligent compression and storage allocation
Background Priority: Non-intrusive processing that doesn't impact daily workflow
Resume Capability: Migration can be paused and resumed without data loss
Quality Assurance
Transfer Verification: Comprehensive validation of successful file migration
Data Integrity Checks: Ensure no corruption or loss during transfer process
Completeness Reports: Detailed reporting on migration success and any issues
Rollback Options: Safe migration with ability to address any concerns

Post-Migration Benefits
Immediate Organization Improvements
Searchable Library: All audio content immediately searchable by BPM, key, and genre
Visual Organization: Custom artwork and color-coded tags for better navigation
Smart Filtering: Advanced threshold search capabilities for precise content discovery
Collaborative Enhancement: Files ready for Community Folder organization and sharing
Workflow Integration
Seamless Access: All migrated content immediately available across gämi features
Enhanced Collaboration: Files ready for timestamp notes and collaborative feedback
Playlist Creation: Auto-tagged music ready for intelligent playlist organization
Share Link Generation: All content ready for advanced sharing with custom permissions

Migration Analytics and Insights
Processing Reports
File Type Breakdown: Detailed analysis of migrated content by format and category
Auto-Tagging Results: Summary of BPM and key detection success rates
Organization Metrics: Statistics on folder structure and file organization improvements
Storage Analysis: Breakdown of storage usage and optimization opportunities
Workflow Recommendations
Usage Optimization: Suggestions based on file types and organization patterns
Collaboration Opportunities: Recommendations for Community Folder organization
Feature Adoption: Guidance on leveraging gämi features with migrated content
Efficiency Improvements: Workflow suggestions based on content analysis

Common Questions/Issues
Q: How long does migration take for large libraries? A: Migration is three-click but processes in background - you can use gämi immediately while files are being transferred and organized
Q: Will all my music files get automatically tagged during migration? A: Yes! Every audio file receives automatic BPM and key tags during the migration process
Q: Can I migrate from multiple platforms? A: Yes! Migration Assistant supports Dropbox, Google Drive, Box, and local storage imports
Q: What happens to my folder organization during migration? A: Your existing folder structure is preserved while gämi adds enhanced organization through auto-tagging and smart categorization
Q: Can I continue using my original platform during migration? A: Yes! Migration doesn't affect your source platform - it creates an enhanced copy in gämi
Q: Do I need to manually organize files after migration? A: No! Auto-tagging and AI organization happen automatically, though you can add custom tags and organization as desired
Q: What if migration is interrupted or fails? A: Migration can be safely resumed from where it left off, with comprehensive error reporting and rollback options
Q: How does migration handle duplicate files? A: Smart duplicate detection identifies and helps manage duplicate files across your library
Q: Can I migrate specific folders instead of my entire library? A: Yes! Choose selective migration to import only specific folders or file types
Q: Will my file sharing permissions be preserved? A: Collaborative context and sharing relationships are analyzed and preserved where possible, with recommendations for gämi-enhanced collaboration

FLEX PLAY (FLEXIBLE MULTIMEDIA EXPERIENCE)

Quick Description
gämi's integrated multimedia philosophy that allows seamless audio playback while navigating throughout the entire application - unlike other platforms that limit you to single-window listening, gämi lets you play music and interact with PDFs, photos, chats, and all other features without interruption.

Access Method
Natural Integration: Simply tap any audio file to start playback - no special mode required
Universal Playback: Works from any location: All Files, playlists, Community Folders, shared content
Cross-Platform: Available on both mobile and web app
UI Elements: Standard audio player controls, persistent mini-player, background playback indicators

Primary Functions
Uninterrupted Navigation: Move freely between all gämi features while music continues playing
Smart File Progression: Automatically skips non-audio files and plays next music file in folder
Universal Compatibility: Works with all audio formats and playback scenarios
Background Intelligence: Music continues regardless of what other tasks you're performing
Seamless Integration: No separate "player mode" - just natural multimedia experience

How Flex Play Works
Continuous Playback Philosophy
Play Anywhere, Do Anything: Start music from any folder and navigate freely throughout gämi
No Interruption: Unlike Dropbox/Google Drive that stop playback when you switch views
Cross-Feature Compatibility: Chat, view PDFs, browse photos, manage files - all while music plays
Smart Navigation: Player intelligently handles mixed-content folders
Intelligent File Handling
Auto-Skip Non-Audio: When playing from folders with mixed content, automatically skips documents/photos
Next Audio File: Seamlessly progresses to next music file without getting caught on previews
Folder Awareness: Understands folder context and plays audio content in sequence
Format Recognition: Works with .mp3, .wav, .m4a, .mp4 and all supported audio formats

Universal App Integration
File Management: Browse and organize files while music plays
Communication: Chat with collaborators without stopping playback
Document Viewing: Read PDFs and view images while listening
Sharing: Create share links and manage permissions during playback
Collaboration: Work in Community Folders with background music

Competitive Advantage
What Other Platforms Do
Dropbox: Stops playback when switching between files or folders
Google Drive: Limited to single-file focus, no background playback
Box: No integrated multimedia experience across platform features
Traditional Cloud Storage: Treats media as static files, not integrated experience
What gämi Does Differently
True Multitasking: Full app functionality available during audio playback
Seamless Workflow: No context switching between "listening" and "working"
Smart Media Handling: Understands content types and user intent
Professional Integration: Designed for creative workflows where music enhances productivity

Technical Implementation
Background Playback System
Persistent Audio Engine: Music continues regardless of user interface changes
Memory Efficient: Lightweight playback that doesn't impact other app functions
Cross-Platform Consistency: Same experience on mobile and web applications
Smart Resource Management: Optimized for performance across all gämi features
Player Interface Integration
Mini-Player Controls: Always-accessible playback controls during navigation
Full Player Access: Return to detailed player interface anytime
Progress Preservation: Maintains playback position across all app interactions
Volume and Control Management: Standard audio controls available throughout experience

User Flow (Natural Music Experience)
Navigate to any folder containing audio files (mixed with other content types)
Tap any audio file - music begins playing immediately
Navigate freely: open PDFs, browse photos, check messages, manage files
Music continues seamlessly, auto-advancing to next audio file in folder
Use persistent mini-player controls for basic playback management
Return to full player interface when desired - all without interruption
Switch between folders, features, and tasks while maintaining continuous playback

Real-World Scenarios
Creative Workflow Example
Producer opens project folder with beats, PDFs, and reference images
Starts playing beat #1, immediately moves to review contract PDF
Checks messages with client while beat continues
Reviews reference photos for album artwork
Beat #1 ends, automatically advances to beat #2
Entire workflow completed without ever stopping music
Collaboration Example
Team member shares Community Folder with mixed content
Starts playing demo track, simultaneously reviews project brief document
Sends chat message about track while it's still playing
Opens images folder to view artwork concepts
Music seamlessly continues throughout entire collaboration session

Integration Points
File Management: All file operations available during playback
Communication: Full chat and calling functionality while listening
Sharing: Create and manage share links without stopping music
Collaboration: Community Folder work enhanced by background audio
Organization: Tag files, create playlists, manage content during playback
Cross-Platform: Consistent experience between mobile and web app

Common Questions/Issues
Q: How is this different from other cloud storage music playback? A: Other platforms stop music when you switch files or folders - gämi never interrupts your workflow
Q: Does music stop when I open a PDF or image? A: Never! Music continues while you view any content type in gämi
Q: What happens when there are documents mixed with music files? A: gämi intelligently skips non-audio content and advances to the next music file
Q: Can I use all gämi features while music is playing? A: Yes! Chat, file management, sharing, collaboration - everything works during playback
Q: Is this a separate player I have to open? A: No! It's built into how gämi handles all audio - just tap any music file and experience the difference
Q: Does this work the same on web and mobile? A: Yes! Flex Play is consistent across all gämi platforms
Q: Can I control playback while doing other tasks? A: Yes! Mini-player controls are always accessible, plus you can return to full player anytime
Q: What if I'm working in a Community Folder with others? A: You can listen to audio content while collaborating - music enhances rather than interrupts teamwork

Export Snippets

Quick Description
Professional social media content generator that creates polished 15, 30, or 60-second video snippets from audio files with custom artwork, eliminating the need for screen recording and providing shareable content optimized for social platforms. Precisely choose which portion of track to feature with fine-tune selection scrubbing.

Access Method
From individual music files: Tap share icon (next to volume button on the left) -> "Export Snippets" (currently not available in playlists)

Primary Functions
Professional Video Creation: Generate high-quality video snippets with cover art and audio waveforms
Multiple Duration Options: Create 15, 30, or 60-second clips for different social platforms
Fine-Tune Selection: Precisely choose which portion of track to feature in snippet
Visual Customization: Multiple color schemes + Using cover art in backdrop
Direct Social Sharing: Export directly to social media, messages, or email (apple share window)
Cover Art Integration: Automatically incorporates file artwor

Snippet Customization Options
Duration Selection
15 Second Snippets: Perfect for Instagram Stories, TikTok previews, quick shares
30 Second Snippets: Ideal for Instagram Reels, Twitter videos, platform standards
60 Second Snippets: Extended previews for YouTube Shorts, detailed showcases
Precise Selection: Choose exact start/end points within the audio file

Creation Workflow
File Upload and Setup
Title Configuration: Add custom title for snippet (e.g., "Sneak Peek")
Description Options: Optional description field for additional context
Artwork Integration: Automatically uses existing cover art or allows custom upload
Quality Settings: Professional output optimized for social media platforms
Selection and Timing (Creation Interface)
Audio Scrubbing: Precise timeline control for selecting perfect snippet moment using waveform visualization
Loop Preview: Test selected portion before finalizing export
Fine-Tune Boundaries: Adjust start/end points with frame-level precision using visual waveform
Duration Validation: Ensure snippet meets selected time requirements (15/30/60s)
Waveform Selection Tool: Visual waveform displayed during creation process to help select optimal audio segments
Color and Visual Customization
Background Selection: Choose from transparent, gradient, or color-pulled themes based on your artwork
Color Palette: Multiple color options
Layout Consistency: Professional arrangement of artwork and text elements

User Flow (Basic)
Navigate to individual audio file in All Files or during playback
Tap share icon (next to volume button) -> Select "Export Snippets" option
Choose snippet duration (15, 30, or 60 seconds)
Use timeline scrubber and waveform visualization to select perfect audio segment
Preview selection with loop playback
Select color customization options based on your uploaded artwork
Customize title, description, and visual elements
Generate final snippet with professional layout (artwork and title only - no waveform in final post)
Share directly to social media platforms or save to device

Technical Specifications
Output Quality
Video Resolution: Optimized for social media platforms (vertical and square ratios)
Audio Quality: High-fidelity audio preservation in snippet format
Format Compatibility: Supports all major social media platform requirements
Performance Features
Fast Generation: Quick processing for immediate social sharing needs
Background Processing: Create snippets without interrupting other gämi workflows
Batch Creation: Generate multiple snippets from same audio file with different settings
Cloud Processing: Server-side generation for consistent quality across devices

Integration Points
File Management: Works with any audio file in gämi storage system
Artwork System: Integrates with gämi's cover art and visual management
Sharing Infrastructure: Uses gämi's secure sharing system for snippet distribution
Social Platforms: Direct export to Instagram, TikTok, Twitter, YouTube, and more
Communication: Share snippets through gämi chat system with collaborators
Analytics: Track snippet engagement and sharing metrics (future enhancement)

Platform Optimization
Social Media Formats
Instagram Stories: 15-second vertical format with transparent overlay options
Instagram Reels: 30-second format optimized for engagement
TikTok: 15-30 second vertical format with dynamic visual elements
Twitter/X: 30-second format suitable for tweet attachments
YouTube Shorts: 60-second format for extended previews
Email/Messages: Universal format for direct sharing

Professional Use Cases
Music Promotion: Artists sharing new releases with professional presentation
Client Previews: Producers sending polished previews instead of raw files
Social Marketing: Labels creating consistent branded content for campaigns
Collaboration: Team members sharing work-in-progress with visual context
Portfolio Building: Creators showcasing work with professional visual identity

Common Questions/Issues
Q: Can I create snippets from playlists? A: Currently, Export Snippets is available for individual music files only - playlist support is planned for future updates
Q: What's the difference between this and screen recording? A: Export Snippets creates professional video content with cover art and waveforms - much higher quality than screen recordings
Q: Can I choose exactly which part of the song to feature? A: Yes! Use the timeline scrubber to select precise start/end points for your snippet
Q: Are there different visual styles available? A: Yes! Choose from transparent backgrounds, gradient themes, or color-matched designs based on your artwork
Q: What social media platforms work with these snippets? A: All major platforms - Instagram, TikTok, Twitter, YouTube, plus direct sharing via messages and email
Q: Do I need to upload cover art separately? A: No! Export Snippets automatically uses your file's existing artwork and integrates it into professional layouts
Q: Can I create multiple snippets from the same song? A: Yes! Create different duration snippets or highlight different sections of the same track
Q: Is there a limit to how many snippets I can create? A: No limits - create as many professional snippets as you need for your social media strategy
Q: Do snippets maintain the original audio quality? A: Yes! High-fidelity audio is preserved while optimizing file size for easy sharing

PRICING MODEL & SUBSCRIPTION PLANS

Quick Description
Transparent, tiered subscription model designed to scale with creators' needs, offering flexible monthly and annual options with comprehensive features across all plans.

Access Method
From app: Profile -> Account Settings -> Subscription management
From web: Profile settings -> Billing & subscription
UI Elements: Monthly/Annual toggle, "Buy Now" button, plan comparison cards

Plan Structure
Lite Plan (FREE)
Storage: 3 GB
Contact Limit: 9 contacts
Price: $0.00/month
Access: "Try for free" button
Features Included:
Encrypted Messaging & Calling
Tagging
Time Stamp Notes
Unzip/Zip functionality
Community Folders
Export Snippets
Configurable Share Links
Built in File Share
Flex Media Player

Pro Plan (PAID)
Storage: 3 TB of storage
Contact Limit: Unlimited contacts
Monthly: $18/month
Annual: $15.69/month (billed $188.28 annually)
Savings: Save $21+ annually with annual plan
Additional Features:
All Lite Plan features
Unlimited Upload Size
Deliver up to 250 GB files
Priority support

Subscription Management
Plan Switching
Monthly <-> Annual toggle in subscription interface
Immediate upgrade/downgrade processing
Pro-rated billing adjustments
Payment Processing
App Store purchases: 15% platform fee applies
Direct billing: Full pricing retained
Annual plans: Upfront payment with significant savings

Integration Points
Profile System: Subscription status displays in user profile
Storage Management: Real-time storage usage tracking (shows "16% of 15.0 GB used")
Feature Access: Plan-based feature availability controls
File Sharing: Upload limits enforced based on subscription tier
Contact Management: Contact limits based on plan level

Common Questions/Issues
Q: Can I switch between monthly and annual billing? A: Yes, changes take effect at your next billing cycle with pro-rated adjustments
Q: What happens if I exceed my storage limit? A: You'll receive notifications to upgrade or manage storage usage
Q: Are there any hidden fees? A: No hidden fees; app store purchases include 15% platform fee
Q: Can I downgrade my plan? A: Yes, downgrades process at the end of your current billing cycle
Q: What's included in the free plan? A: All core gämi features with 3GB storage and up to 9 contacts
Q: How much do I save with annual billing? A: $21+ annually ($18/month vs $15.69/month when paid annually)
```