# Gautam Dash Portfolio - Project Instructions

## Project Setup Complete ✅

This is a modern, responsive portfolio website built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

### Step 1: Install Node.js
If you haven't already, download and install Node.js from https://nodejs.org/ (LTS version recommended)

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Visit `http://localhost:3000` in your web browser

## 📱 Fully Responsive Design

The portfolio is optimized for all devices:
- ✅ iOS (iPhone, iPad)
- ✅ Android phones and tablets
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Tablets and iPads
- ✅ Ultra-wide displays

## 🎨 Key Features

### Dark Modern Theme
- Beautiful gradient backgrounds
- Smooth animations with Framer Motion
- Glassmorphism effects
- Responsive navigation

### Sections Included
1. **Hero** - Welcome section with CTA buttons
2. **About** - Professional summary with key metrics
3. **Skills** - Organized by category
4. **Experience** - Work history and education
5. **Projects** - Featured projects with tech stack
6. **Certifications** - Professional certifications
7. **Contact** - Social links and resume download

## 🔧 Customization Guide

### 1. Update Your Information
Edit `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: 'Gautam Dash',
    title: 'AI Engineer | Backend Developer | Python Developer',
    email: 'gautamdash.dev@gmail.com',
    // ... update with your info
  },
  // ... update other sections
}
```

### 2. Resume Download Link
Replace `YOUR_RESUME_ID` with your Google Drive file ID:

1. Upload your resume to Google Drive
2. Right-click → Share → Get link
3. Copy the file ID from the URL: `https://drive.google.com/file/d/FILE_ID/view`
4. Update the resume URL in `src/data/portfolio.ts`

### 3. Social Links
Update all social profile URLs in `src/data/portfolio.ts`:
- GitHub
- LinkedIn
- HackerRank
- Email

### 4. Customize Colors
Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  accent: {
    primary: '#6366f1',    // Change from indigo to any color
    secondary: '#ec4899',  // Change from pink to any color
  }
}
```

## 📦 Build for Production

### Option 1: Build Static Site (For GitHub Pages)
```bash
npm run build
npm run export  # (After updating next.config.js with output: 'export')
```

### Option 2: Build for Deployment (Vercel/Netlify)
```bash
npm run build
npm start  # For testing locally
```

## 🌐 Deployment Options

### Option 1: Vercel (Easiest) ⭐ Recommended
1. Push code to GitHub
2. Visit https://vercel.com
3. Click "New Project" → Select your repo
4. Click "Deploy"
5. Your site is live!

### Option 2: GitHub Pages
1. Update `next.config.js` to use static export
2. Build: `npm run build`
3. Push to GitHub `gh-pages` branch
4. Enable GitHub Pages in Settings
5. Your site is live at `https://username.github.io`

### Option 3: Netlify
1. Push to GitHub
2. Visit https://netlify.com
3. Click "New site from Git"
4. Select your repo
5. Build command: `npm run build`
6. Publish: `.next` or `out` folder
7. Deploy!

## 📊 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Navigation.tsx
│   ├── data/
│   │   └── portfolio.ts  # All your portfolio content
│   └── lib/
│       └── animations.ts # Animation definitions
├── public/               # Static assets (add images here)
├── package.json
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── README.md            # Project documentation
```

## 🎓 Tips for Best Results

1. **Professional Photo**: Add a professional headshot in the About section
2. **Project Images**: Add screenshots of your projects
3. **Custom Domain**: For GitHub Pages, use a custom domain (nautilus.dev/etc)
4. **Google Analytics**: Add tracking to monitor visitors
5. **SEO**: Update metadata in `layout.tsx` with your name
6. **Email Configuration**: Your email links work out of the box
7. **Mobile Testing**: Test on actual mobile devices

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001  # Run on port 3001 instead
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### TypeScript errors
```bash
# Make sure TypeScript is properly installed
npm install --save-dev typescript
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🎉 You're All Set!

Your portfolio is ready to go! Start the dev server and begin customizing with your information.

```bash
npm run dev
```

Good luck with your portfolio! 🚀
