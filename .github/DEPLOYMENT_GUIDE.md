# 🚀 Deployment Guide

Complete guide to deploy your portfolio to production.

## Option 1: Vercel (Recommended)

Vercel is made by the Next.js creator and is the easiest way to deploy.

### Step 1: Create GitHub Repository

```bash
cd c:\Users\user\Documents\Portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Click on "Sign up" (use GitHub account)
3. Click "New Project"
4. Select your `portfolio` repository
5. Keep default settings and click "Deploy"
6. Wait 30-60 seconds
7. Your portfolio is live! 🎉

**Your URL:** `https://portfolio-[random].vercel.app`

### Step 3 (Optional): Custom Domain

1. In Vercel dashboard, go to project settings
2. Click "Domains"
3. Add your custom domain (e.g., gautamdash.dev)
4. Update DNS records with your domain provider
5. Done! ✨

---

## Option 2: GitHub Pages

Free hosting directly on GitHub (no credit card needed).

### Step 1: Create GitHub Pages Repository

1. Create new repository named: `YOUR_USERNAME.github.io`
2. Clone this repository
3. Copy your portfolio files into it
4. Commit and push

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

### Step 2: Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Add this line
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### Step 3: Build and Deploy

```bash
npm run build
npm run export
```

This creates a deployment-ready site.

**Your URL:** `https://YOUR_USERNAME.github.io`

---

## Option 3: Netlify

Drag-and-drop or Git-based deployment.

### Step 1: Push to GitHub (if not already)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"
7. Done! 🎉

**Your URL:** `https://your-site-name.netlify.app`

---

## Option 4: Self-Hosted (Heroku, Railway, etc.)

### Using Railway.app (Simple & Free)

1. Go to https://railway.app
2. Create account with GitHub
3. Click "New Project" → "GitHub Repo"
4. Select your portfolio repository
5. Set environment:
   - Command: `npm run build && npm start`
6. Deploy!

**Your URL:** `https://your-app.railway.app`

---

## Deployment Summary

| Platform | Difficulty | Cost | Speed | Custom Domain |
|----------|-----------|------|-------|---------------|
| Vercel | ⭐ Easy | Free | Fast | ✅ Yes |
| GitHub Pages | ⭐ Easy | Free | Medium | ✅ Yes |
| Netlify | ⭐⭐ Medium | Free | Fast | ✅ Yes |
| Railway | ⭐⭐ Medium | Free | Fast | ✅ Yes |
| Heroku | ⭐⭐ Medium | $7/mo | Medium | ✅ Yes |

---

## After Deployment

### 1. Update Resume Download Link

In `src/data/portfolio.ts`:

```typescript
resume: 'https://drive.google.com/file/d/YOUR_RESUME_ID/view',
```

### 2. Test All Links

- [ ] Email link works
- [ ] Phone number shows dial menu
- [ ] Social links open in new tabs
- [ ] Resume downloads or opens
- [ ] Navigation works on mobile

### 3. Test Responsiveness

Open your live site on:
- [ ] Mobile phone
- [ ] Tablet
- [ ] Desktop
- [ ] Use DevTools toggle device (F12)

### 4. Check SEO

Go to https://www.seobility.net/ and check your domain.

### 5. Monitor Performance

Go to https://pagespeed.web.dev/ and test your URL.

---

## Updating Your Portfolio

After deployment, if you want to make changes:

```bash
# Make changes to your code

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Update portfolio"
git push origin main

# Deployment automatically happens!
# (Vercel, GitHub Pages, and Netlify auto-deploy on push)
```

---

## Custom Domain Setup

### For Vercel:

1. Go to Vercel project → Settings → Domains
2. Add your domain
3. Update DNS:
   - Go to your domain provider (GoDaddy, Namecheap, etc.)
   - Update DNS records to point to Vercel
   - Vercel shows you exact records needed

### For GitHub Pages:

1. Create `CNAME` file in repository root:
   ```
   your-domain.com
   ```
2. Commit and push
3. Update DNS records at domain provider
4. GitHub Pages will auto-detect!

### For Netlify:

1. Click "Set up a custom domain" in Netlify
2. Netlify will guide you through DNS setup
3. Takes 5-10 minutes to propagate

---

## Troubleshooting

### Build Fails on Deployment

1. Check `npm run build` locally
2. Look at deployment logs
3. Common issues:
   - TypeScript errors
   - Missing dependencies
   - Environment variables

### Site Looks Different After Deployment

1. Clear browser cache (Ctrl+Shift+Del)
2. Hard refresh (Ctrl+F5)
3. Check on different browser

### Resume Download Doesn't Work

1. Make sure Google Drive link is public
2. Use direct download link (add `?export=download` to URL)
3. Update the link in `src/data/portfolio.ts`

---

## Recommended: Vercel + Custom Domain Workflow

1. **Deploy to Vercel** (free, fast, automatic updates)
2. **Buy custom domain** (Namecheap ~$8/year)
3. **Connect domain** to Vercel (easy in dashboard)
4. **Enable HTTPS** (automatic with Vercel)
5. **Set up analytics** (Vercel Web Analytics is free)

This gives you:
- ✅ Professional domain
- ✅ Automatic HTTPS
- ✅ Lightning-fast deployment
- ✅ Analytics
- ✅ 0/month cost

---

## Next Steps

1. ✅ Build portfolio locally: `npm run dev`
2. ✅ Test on mobile devices
3. ✅ Choose deployment platform
4. ✅ Deploy!
5. ✅ Share with the world 🎉

---

**Your portfolio is production-ready! Time to show the world what you've got. 🚀**
