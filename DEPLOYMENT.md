# Deployment Guide

## ✅ Build Files Created Successfully!

Your static build files are now in the **`out`** folder.

## 📁 What's in the `out` folder:

```
out/
├── _next/              # JavaScript, CSS, and other assets
├── index.html          # Your homepage
├── 404.html            # 404 error page
├── robots.txt          # SEO robots file
├── sitemap.xml         # SEO sitemap
├── favicon.png         # Your favicon
└── placeholder.svg     # Placeholder image
```

## 🚀 Deployment Options

### Option 1: cPanel / Traditional Web Hosting

1. **Compress the `out` folder** (optional but recommended)
2. **Upload to your server:**
   - Via FTP: Upload all contents of the `out` folder to `public_html` or `www` directory
   - Via cPanel File Manager: Upload and extract the zip
3. **Done!** Your site will be live at your domain

### Option 2: Netlify (Free & Easy)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `out` folder
3. Your site is live instantly!

### Option 3: Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 4: GitHub Pages

1. Push the `out` folder contents to a `gh-pages` branch
2. Enable GitHub Pages in repository settings
3. Your site will be at `username.github.io/repo-name`

## 🔄 Rebuilding for Production

Whenever you make changes, run:

```bash
npm run build
```

This will regenerate the `out` folder with your latest changes.

## 📝 Important Notes

- The `out` folder contains **all static files** needed for deployment
- No Node.js or npm required on the server
- Works on any static hosting (Apache, Nginx, cPanel, etc.)
- Images are unoptimized for compatibility with static hosting

## 🌐 Your Site Configuration

- **Site URL:** https://farookhridoy.com
- **Build Output:** `out/` folder
- **Entry Point:** `index.html`

## ⚙️ What Changed in Your Config

Added to `next.config.ts`:
- `output: 'export'` - Enables static HTML export
- `images.unoptimized: true` - Makes images work on static hosting

Added to `app/robots.ts` and `app/sitemap.ts`:
- `export const dynamic = 'force-static'` - Makes routes static

## 🎯 Quick Deploy Checklist

- [ ] Run `npm run build`
- [ ] Check that `out` folder exists
- [ ] Upload `out` folder contents to your server
- [ ] Test your live site
- [ ] Verify robots.txt and sitemap.xml are accessible

---

**Need help?** The `out` folder is ready to deploy to any web server!
