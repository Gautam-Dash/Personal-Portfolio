# Gautam Dash - Portfolio Website

A modern, responsive portfolio website built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**. Featuring smooth animations with Framer Motion and a sleek dark theme perfect for showcasing AI engineering and backend development expertise.

## 🌟 Features

- ✨ **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- 🎨 **Smooth Animations**: Framer Motion animations for engaging interactions
- 📱 **Fully Responsive**: Optimized for iOS, Android, tablets, iPad, desktop, laptop, and MacBook
- ⚡ **Performance**: Optimized with Next.js App Router and Tailwind CSS
- 🎯 **SEO Friendly**: Meta tags, Open Graph, and Twitter cards configured
- 🔗 **Easy Navigation**: Smooth scrolling navigation with active section highlighting
- 📥 **Resume Download**: One-click resume download functionality
- 🔐 **TypeScript**: Full type safety with TypeScript

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About** - Professional summary with key metrics
3. **Skills** - Organized by category with visual badges
4. **Experience** - Timeline view of work history
5. **Projects** - Featured projects with technologies and achievements
6. **Certifications** - Professional certifications and achievements
7. **Contact** - Social links, email, phone, and resume download

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm/bun)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navigation.tsx      # Top navigation bar
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills section
│   │   ├── Experience.tsx      # Experience & Education
│   │   ├── Projects.tsx        # Projects section
│   │   ├── Certifications.tsx  # Certifications section
│   │   ├── Contact.tsx         # Contact & Footer
│   │   └── index.ts            # Component exports
│   ├── data/
│   │   └── portfolio.ts        # Portfolio content & data
│   └── lib/
│       └── animations.ts       # Framer Motion animation variants
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── next.config.js              # Next.js configuration
```

## 🎨 Customization

### Update Portfolio Data

Edit [`src/data/portfolio.ts`](src/data/portfolio.ts) to update:
- Personal information
- Professional summary
- Skills (organized by category)
- Work experience
- Education
- Projects
- Certifications

### Customize Colors

Update the color scheme in [`tailwind.config.ts`](tailwind.config.ts):

```typescript
colors: {
  dark: {
    bg: '#0a0e27',
    surface: '#11152e',
    border: '#1e2749',
    text: '#e0e7ff',
    muted: '#a0aec0',
  },
  accent: {
    primary: '#6366f1',      // Indigo
    secondary: '#ec4899',    // Pink
    glow: '#a78bfa',         // Purple
  },
}
```

### Update Resume Link

Replace `YOUR_RESUME_ID` in the portfolio data with your actual Google Drive file ID:

```typescript
resume: 'https://drive.google.com/file/d/PASTE_YOUR_ID_HERE/view'
```

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- **Mobile**: iOS (iPhone 12-15), Android devices
- **Tablet**: iPad, Android tablets
- **Desktop**: Laptops, MacBooks, 4K displays

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy with Vercel:**
   - Visit [Vercel](https://vercel.com)
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

### Deploy to GitHub Pages

1. **Update `next.config.js`:**
   ```javascript
   const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   npm run export
   ```

3. **Push to GitHub:**
   - Create a GitHub repo
   - Push the `out` folder to `gh-pages` branch

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select `gh-pages` branch
   - Save

**Live Site:** `https://yourusername.github.io`

### Deploy to Netlify

1. **Connect GitHub repo to Netlify**
2. **Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Deploy**

## 🛠 Technologies Used

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel, GitHub Pages, or Netlify

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "framer-motion": "^10.16.4",
    "react-icons": "^4.12.0",
    "typescript": "^5.0.0"
  }
}
```

## 🚀 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Page Load**: < 2s
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email**: gautamdash.dev@gmail.com
- **LinkedIn**: https://linkedin.com/in/gautam-dash-117a2520a
- **GitHub**: https://github.com/Gautam-Dash
- **Phone**: +91-7077248302

## 🎯 Tips for Best Results

1. **Update Resume**: Replace the Google Drive link with your actual resume URL
2. **High-quality Images**: Consider adding a professional photo in the About section
3. **Regular Updates**: Keep your projects and skills up to date
4. **SEO**: Update metadata in `src/app/layout.tsx` with your information
5. **Analytics**: Consider adding Google Analytics for tracking visitors
6. **Custom Domain**: Use a custom domain for a more professional appearance

---

**Built with ❤️ by Gautam Dash**

Last Updated: March 2024
