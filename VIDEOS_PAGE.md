# Videos Page - IBSFINtech

## Overview
A modern, sleek videos page that showcases all IBSFINtech videos, webinars, and company content with embedded players and thumbnails.

## Features

### 🎥 Video Collection
- **25+ videos** including product demos, client testimonials, interviews, and webinars
- **YouTube thumbnails** automatically loaded for each video
- **Embedded video player** that opens in a modal without leaving the page
- **Duration indicators** for each video

### 🔍 Search & Filtering
- **Real-time search** across video titles and descriptions
- **Category filtering**:
  - All Videos
  - Solution Overview
  - Product Videos
  - Client Testimonials
  - Interviews
  - Company Events
  - Webinars
- **Dynamic count** showing number of videos in each category

### 📱 Responsive Design
- **Grid view** (default) - perfect for desktop and tablet
- **List view** - optimized for mobile and detailed browsing
- **Toggle buttons** to switch between view modes
- **Responsive grid** that adapts to screen size

### 🎬 Video Categories

#### IBSFINtech Videos
- Solution Overview
- InTReaX® Treasury Management
- VNDZY® Vendor Management
- Client Benefits & Testimonials
- Leadership Interviews
- Company Events

#### Webinar Series
- **"Rise of Digital Corporate Treasury"** (10 parts)
  - Collaboration with LSEG (London Stock Exchange Group)
  - 2021 series covering digital transformation
  - Expert insights and panel discussions

#### Visual Identity Launch
- **14th Anniversary Celebration** (6 parts)
  - Industry leader insights
  - Chairman's message
  - Technology showcase
  - Client success stories

### 🚀 Performance Features
- **Lazy loading** of YouTube thumbnails
- **Modal-based player** to avoid page reloads
- **Optimized thumbnails** using YouTube's CDN
- **Minimal bandwidth usage** - videos only load when played

### 🎨 UI/UX Features
- **Hover effects** with smooth transitions
- **Play button overlays** on thumbnails
- **Series badges** for multi-part content
- **Category color coding** for easy identification
- **Smooth animations** and micro-interactions

## Technical Implementation

### Frontend
- **Next.js 13** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React hooks** for state management

### Video Integration
- **YouTube Embed API** for video playback
- **Modal dialog** for inline video viewing
- **Autoplay support** when videos are opened
- **Responsive iframe** that maintains aspect ratio

### CSS Features
- **Custom modal styles** for video player
- **Line clamping** for text overflow
- **Backdrop blur** effects
- **Smooth transitions** and hover states

## File Structure
```
app/resources/videos/
└── page.tsx          # Main videos page component

globals.css           # Modal and utility styles
```

## Navigation
The videos page is accessible via:
- **Main navigation**: Resources → Videos
- **URL**: `/resources/videos`

## Future Enhancements
- Video playlists and collections
- User favorites and watch history
- Video analytics and engagement metrics
- Integration with YouTube API for real-time data
- Video transcripts and captions
- Social sharing functionality

## Browser Support
- Modern browsers with ES6+ support
- Responsive design for all device sizes
- YouTube embed compatibility
- CSS Grid and Flexbox support

## Performance Notes
- Thumbnails are loaded from YouTube CDN
- Videos only load when played (modal)
- Minimal JavaScript bundle impact
- Optimized for Core Web Vitals
