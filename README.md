# Cheptalal Primary School — Website v5 (Final Production)

React 19 · TypeScript · Vite 8 · React Router v7 · Framer Motion · Lucide React · React Helmet Async

## Quick Start
```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # 0 errors → dist/
npm run preview   # preview production
```

## Pages (11 routes, all lazy-loaded)
`/` Home · `/about` · `/curriculum` · `/teachers` · `/news` · `/gallery` · `/achievements` · `/calendar` · `/admissions` · `/contact` · `*` 404

## Deploy to GitHub + Vercel
```bash
git init
git remote add origin https://github.com/Pixelraider-sudo/cheptalal-primary-school.git
git branch -M main
git add .
git commit -m "feat: v5 final — complete premium redesign"
git push -u origin main --force
```
Vercel auto-deploys. vercel.json handles SPA routing + security headers.

## Before Going Live
1. Replace `REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE` in `src/lib/seo.ts`
2. Update `SITE.url` in `src/lib/seo.ts` with real domain
3. Replace phone/email/WhatsApp in `src/data/content.ts`
4. Wire contact form in `ContactForm.tsx` (see TODO — use Formspree)
5. Replace Unsplash images with real school photos
6. Upload `/public/og-image.jpg` (1200×630px) for social sharing
7. Add GA4 snippet to `index.html`, set `VITE_GA_ID` in `.env`

## Designed by PIXELFORGE
