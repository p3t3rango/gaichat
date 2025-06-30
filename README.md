# gäi Chat - Your Ninja Guide to gämi

A web-based chatbot embodying **gäi**, the ninja sensei who guides users through the **gämi** creative platform. This chatbot answers FAQs while reinforcing the mythos and personality of both brands.

## 🥷 About gäi

gäi is the Head Ninja of gämi, trained in the Temple of Flow. He communicates through thought bubbles, offering wise yet witty guidance with dry humor and martial arts metaphors. His mission: eliminate digital chaos and guide creatives to their flow state.

## 🌟 Features

- **Authentic Personality**: Captures gäi's ninja wisdom and dry wit
- **Interactive Chat**: Modern chat interface with typing indicators
- **FAQ Responses**: Simulated responses about gämi's features (ready for real data)
- **Cultural Relevance**: Commentary on creative industry trends and digital culture  
- **Easter Eggs**: Hidden interactions for curious users
- **Mobile Responsive**: Optimized for all devices
- **Brand Consistent**: Uses gämi's brand color (#2944FE) throughout

## 🚀 Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/p3t3rango/gaichat.git
   cd gaichat
   ```

2. Open `index.html` in your browser, or run a local server:
   ```bash
   # Python 3
   python -m http.server 3000
   
   # Node.js (if you have serve installed)
   npx serve .
   ```

3. Visit `http://localhost:3000`

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

Or connect your GitHub repository directly to Vercel for automatic deployments.

## 🔧 TODO Sections

The codebase includes clearly marked `TODO` sections for easy integration of real data:

- **FAQ Responses** (script.js): Replace simulated responses with real documentation
- **Help Content**: Update with actual documentation links
- **Pricing Info**: Add real pricing when available
- **Launch Timeline**: Update with actual dates
- **Integration Points**: API connections for live data

## 🎨 Customization

### Brand Colors
The primary brand color `#2944FE` is defined in CSS variables. Update in `styles.css`:

```css
:root {
    --brand-primary: #2944FE;
    /* ... other colors */
}
```

### Personality Responses
Update gäi's responses in the `generateResponse()` method in `script.js`. Each response maintains his character while providing helpful information.

## 📱 Technical Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (static hosting)
- **Storage**: LocalStorage for chat history

## 🎯 Features Explained

### Chat Interface
- Modern bubble-style messages
- Typing indicators with ninja-themed text
- Smooth animations and transitions
- Quick action buttons for common questions

### Personality Engine
- Pattern matching for user questions
- Multiple response variations for natural conversation
- Cultural references and meme awareness
- Contextual responses based on conversation flow

### User Experience
- Auto-scroll to new messages
- Mobile-optimized touch interactions
- Clear chat history functionality
- Visual feedback for all interactions

## 🔮 Future Enhancements

- Real-time API integration with gämi platform
- Voice message support
- Multi-language support
- Advanced conversation memory
- Analytics and user behavior tracking
- File upload capability for specific questions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes (keeping gäi's personality intact)
4. Test thoroughly on mobile and desktop
5. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details

---

*Built with ninja precision for the creative minds using gämi* 🥷✨ 