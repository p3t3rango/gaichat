# API Integration Guide

## Environment Variables Setup

### Local Development

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Claude API key:
   ```
   CLAUDE_API_KEY=sk-ant-api03-your-actual-key-here
   ```

### Vercel Deployment

1. **Via Vercel Dashboard:**
   - Go to your project settings in Vercel
   - Navigate to "Environment Variables"
   - Add a new variable:
     - Name: `CLAUDE_API_KEY`
     - Value: `[Your Claude API key here]`
     - Environment: Production (and Preview if needed)

2. **Via Vercel CLI:**
   ```bash
   vercel env add CLAUDE_API_KEY
   # Then paste your API key when prompted
   ```

## Security Note

⚠️ **IMPORTANT**: For security, you should:

1. **Never commit API keys** to version control
2. **Use environment variables** for all sensitive data
3. **Regenerate API keys** if they're ever accidentally exposed

## Integration Steps

Once environment variables are set up, you can integrate real Claude API responses:

1. **Update script.js** to use the API instead of simulated responses
2. **Add API error handling** for network issues
3. **Implement rate limiting** to avoid API limits
4. **Add loading states** for better UX

## Future Enhancement: Real API Integration

```javascript
// Example API integration (for future implementation)
async function callClaudeAPI(message) {
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: message,
            personality: 'gai-ninja-sensei'
        })
    });
    
    return await response.json();
}
```

This would require creating a serverless function in Vercel to handle the API calls securely. 