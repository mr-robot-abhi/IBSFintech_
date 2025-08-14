# Netlify Deployment Guide for IBSFINtech Website

## Overview
This project has been configured for static export and deployment on Netlify with serverless functions for dynamic functionality.

## Configuration Changes Made

### 1. Next.js Configuration (`next.config.js`)
- Added `output: 'export'` for static generation
- Added `trailingSlash: true` for better static hosting compatibility
- Images are set to `unoptimized: true` for static export

### 2. Netlify Configuration (`netlify.toml`)
- Build command: `npm run build`
- Publish directory: `out`
- Node.js version: 18
- NPM version: 9
- Functions configured with esbuild bundler

### 3. API Routes Converted to Netlify Functions
The following API routes have been converted to Netlify Functions:
- `/api/chatbot` → `/.netlify/functions/chatbot`
- `/api/contact` → `/.netlify/functions/contact`
- `/api/demo-request` → `/.netlify/functions/demo-request`

### 4. Frontend Updates
All frontend components have been updated to use the new Netlify Function endpoints.

## Environment Variables Required

Set these environment variables in your Netlify dashboard:

### For Chatbot Function:
- `HUGGINGFACE_API_TOKEN`: Your Hugging Face API token

### For Contact and Demo Request Functions:
- `SMTP_HOST`: SMTP server host (e.g., smtp.gmail.com)
- `SMTP_PORT`: SMTP server port (e.g., 587)
- `SMTP_USER`: SMTP username/email
- `SMTP_PASS`: SMTP password/app password
- `CONTACT_EMAIL`: Email where contact form submissions should be sent
- `SALES_EMAIL`: Email where demo requests should be sent

## Deployment Steps

1. **Connect your repository to Netlify**
2. **Set build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
3. **Set environment variables** (see above)
4. **Deploy**

## Build Process

The build process will:
1. Generate static HTML files in the `out` directory
2. Include all necessary assets (CSS, JS, images)
3. Create Netlify Functions for dynamic functionality

## Static Export Limitations

With static export:
- ✅ All pages are pre-rendered as static HTML
- ✅ Fast loading and good SEO
- ✅ Works with CDN caching
- ❌ No server-side rendering
- ❌ No dynamic API routes (handled by Netlify Functions)

## Troubleshooting

### Build Fails with "out directory not found"
- Ensure `output: 'export'` is set in `next.config.js`
- Check that the build command completes successfully

### Functions Not Working
- Verify environment variables are set correctly
- Check Netlify Function logs in the dashboard
- Ensure function dependencies are installed

### Images Not Loading
- Verify images are in the `public` directory
- Check that `images: { unoptimized: true }` is set in Next.js config

## Local Development

For local development with functions:
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify dev`
3. Functions will be available at `/.netlify/functions/*`

## Production Considerations

- Set up proper CORS headers if needed
- Configure rate limiting for functions
- Set up monitoring and logging
- Consider using Netlify Forms as an alternative to custom contact forms
