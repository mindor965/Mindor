# GitHub Pages Deployment Guide

This guide will help you deploy your React application to GitHub Pages.

## Prerequisites

1. Make sure your code is pushed to a GitHub repository
2. The repository should be named `Mindor-tech` (case-sensitive)
3. Your GitHub username is `priyanshu-101`

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click "Save"

3. **The GitHub Action will automatically:**
   - Build your React app
   - Deploy it to the `gh-pages` branch
   - Make it available at: https://priyanshu-101.github.io/Mindor-tech

### Option 2: Manual Deployment

If you prefer to deploy manually:

```bash
npm run deploy
```

This will:
- Build your application
- Deploy it to the `gh-pages` branch
- Make it available on GitHub Pages

## Important Notes

- The site will be available at: https://priyanshu-101.github.io/Mindor-tech
- Any changes pushed to the `main` branch will automatically trigger a new deployment
- The first deployment might take a few minutes to become available
- Make sure all your routes work correctly with the base path `/Mindor-tech/`

## Troubleshooting

1. **If the site doesn't load:**
   - Check that GitHub Pages is enabled in repository settings
   - Verify the repository name matches exactly: `Mindor-tech`
   - Wait a few minutes for the first deployment

2. **If routes don't work:**
   - Make sure you're using React Router correctly
   - Check that the base path is configured properly in `vite.config.js`

3. **If build fails:**
   - Check the GitHub Actions tab in your repository
   - Review the build logs for any errors 