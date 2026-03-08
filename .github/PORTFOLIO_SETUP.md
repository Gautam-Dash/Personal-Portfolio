# Gautam Dash Portfolio - Setup Complete! 🎉

Your modern, responsive portfolio website is ready to use!

## ⚡ Quick Start (3 Steps)

### 1️⃣ Install Node.js
Download from: https://nodejs.org/ (LTS version)

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Development Server
```bash
npm run dev
```
Then open `http://localhost:3000` in your browser

## 📋 What's Included

### ✅ Complete Portfolio Sections
- **Hero Section**: Eye-catching introduction with CTAs
- **About**: Professional summary with key metrics (30%, 99.9%, 95%, 5K+)
- **Skills**: Organized by category (Languages, Backend, AI/ML, Databases, etc.)
- **Experience**: Timeline format with EY internship details
- **Projects**: Featured AI projects with technologies
- **Certifications**: Your 3 professional certifications
- **Contact**: Email, phone, social links, and resume download

### 🎨 Design Features
- Dark modern theme with gradient accents
- Smooth animations (Framer Motion)
- Fully responsive (iOS, Android, tablets, desktop, laptop, MacBook)
- Glassmorphism effects
- SEO optimized
- TypeScript for type safety

### 📱 Responsive Breakpoints
- Mobile: iPhone (375px - 430px)
- Tablet: iPad (768px)
- Desktop: 1024px+
- Large: 1280px+
- Ultra-wide: 1536px+

## 🔧 Before You Deploy

### 1. Update Your Resume Link
In `src/data/portfolio.ts`, replace `YOUR_RESUME_ID`:

```typescript
resume: 'https://drive.google.com/file/d/YOUR_RESUME_ID/view',
```

**How to get it:**
1. Upload your resume to Google Drive
2. Right-click → Share → "Get link"
3. Copy the file ID from URL: `https://drive.google.com/file/d/FILE_ID/view`

### 2. Verify All Links (Already Done!)
- ✅ GitHub: https://github.com/Gautam-Dash
- ✅ LinkedIn: https://linkedin.com/in/gautam-dash-117a2520a
- ✅ Email: gautamdash.dev@gmail.com
- ✅ Phone: +91-7077248302
- ✅ HackerRank: https://www.hackerrank.com/profile/gautamdashhh

### 3. Customize Colors (Optional)
Edit `tailwind.config.ts`:
```typescript
accent: {
  primary: '#6366f1',    // Indigo - change this
  secondary: '#ec4899',  // Pink - change this
}
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended) ⭐
**Easiest way - takes 2 minutes**

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. Go to https://vercel.com
3. Click "New Project" → Select your GitHub repo
4. Click "Deploy"
5. Your site is live! 🎉

**Your URL:** `portfolioname.vercel.app`

### Option 2: GitHub Pages
**Free hosting on `yourusername.github.io`**

1. Create a GitHub repo: `yourusername.github.io`
2. Push your code there
3. GitHub Pages auto-deploys! ✨

### Option 3: Netlify
**Also easy - drag & drop or Git**

1. Go to https://netlify.com
2. Click "New site from Git"
3. Connect your GitHub repo
4. Deploy settings:
   - Build: `npm run build`
   - Publish: `.next`
5. Deploy! 🚀

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| Framework | Next.js 14 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Components | 8 (Hero, About, Skills, Experience, Projects, Certifications, Contact, Navigation) |
| Data File | `src/data/portfolio.ts` |
| Responsive | Yes (All devices) |
| Dark Theme | Yes |
| SEO | Optimized |

## 📁 File Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx           ← Home page (main content)
│   │   ├── layout.tsx          ← Meta tags & structure
│   │   └── globals.css         ← Global styles
│   ├── components/             ← All sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Navigation.tsx
│   ├── data/
│   │   └── portfolio.ts        ← ⭐ EDIT THIS FOR YOUR INFO
│   └── lib/
│       └── animations.ts
├── public/                     ← Add images here
├── README.md
├── INSTRUCTIONS.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── .gitignore
```

## 🎯 What to Customize

### Essential
1. **Resume Link** → `src/data/portfolio.ts` line ~27
2. **Email** → Update in Contact section (optional - works as-is)

### Nice-to-Have
1. Add your photo
2. Update section descriptions
3. Customize colors
4. Add project screenshots

### Not Needed
- Navigation (auto-generated from sections)
- Meta tags (auto-optimized)
- Responsive design (already works!)

## 💡 Tips

1. **Test Mobile**: Use DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
2. **Check Lighthouse**: Right-click → Inspect → Lighthouse tab
3. **Deploy Early**: Don't wait for perfection - deploy first!
4. **Update Often**: Keep your portfolio fresh
5. **Add Analytics**: Google Analytics for tracking (optional)

## 🚨 Common Questions

**Q: Do I need to install Node.js?**
A: Yes, download from nodejs.org

**Q: Can I use yarn/pnpm instead of npm?**
A: Yes! `yarn install` or `pnpm install`

**Q: How do I make it live?**
A: Use Vercel (easiest), GitHub Pages, or Netlify (follow steps above)

**Q: Can I edit the design?**
A: Yes! All in `src/components/` and `tailwind.config.ts`

**Q: Is the resume download working?**
A: Replace `YOUR_RESUME_ID` with your actual Google Drive file ID

**Q: Can I add custom fonts?**
A: Yes! Add to `tailwind.config.ts` and `src/app/layout.tsx`

## 📞 Quick Reference

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Run production build locally
npm run lint     # Check code quality
npm run export   # Export as static site (if enabled)
```

## ✨ You're All Set!

Everything is configured and ready to use. Just run:

```bash
npm install
npm run dev
```

Then customize your information and deploy!

---

**Good luck with your portfolio! 🚀**

*Questions? Check README.md for more detailed documentation.*
