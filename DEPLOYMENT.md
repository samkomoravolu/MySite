# GitHub Pages Deployment Guide

## Prerequisites
1. Your repository must be public
2. GitHub Pages must be enabled in your repository settings

## Setup Steps

### 1. Enable GitHub Pages
- Go to your repository Settings
- Scroll down to "Pages" section
- Set Source to "GitHub Actions"

### 2. Build and Deploy
1. Commit and push your changes to the main branch
2. The GitHub Action will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

### 3. Check Deployment
- Go to Actions tab to see build progress
- Once complete, your site will be available at: `https://samkomoravolu.github.io/home`

## Troubleshooting

### Blank Page Issues
- Check browser console for errors
- Ensure all image paths are relative (starting with `./Images/` not `/Images/`)
- Verify the build completed successfully in Actions

### Routing Issues
- The 404.html and routing script in index.html handle SPA routing
- All routes should work correctly after deployment

### Build Failures
- Check Actions tab for error details
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

## Local Testing
Run `npm run build` locally to test the build process before pushing.
