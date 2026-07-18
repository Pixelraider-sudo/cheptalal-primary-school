# Cheptalal Primary School — Website v4 (Production)

**React 19 · TypeScript · Vite 8 · React Router v7 · Framer Motion · Lucide React · React Helmet Async**

## Quick Start
```bash
cp .env.example .env.local   # fill in your keys
npm install
npm run dev                  # → http://localhost:5173
npm run build                # production build → dist/
npm run preview              # preview production build
```

## Pages (11 routes)
| Route | Page |
|---|---|
| `/` | Home — all sections |
| `/about` | School history, mission, profile |
| `/curriculum` | CBC philosophy + interactive journey |
| `/teachers` | Staff directory |
| `/news` | News + upcoming events |
| `/gallery` | Filterable gallery + lightbox |
| `/achievements` | Awards timeline |
| `/calendar` | Interactive academic calendar |
| `/admissions` | Process + FAQ + downloads |
| `/contact` | Form + map + info |
| `*` | Branded 404 |

## What Was Added in v4
- **react-helmet-async** — unique title, description, canonical, OG, Twitter Card, geo meta per page
- **JSON-LD structured data** — EducationalOrganization, WebSite+SearchAction, BreadcrumbList, FAQPage per page
- **Breadcrumb nav** — semantic `<ol>` on every inner page
- **Route-level lazy loading** — every page is a separate JS chunk (~2–8 KB each)
- **Manual code splitting** — framer-motion, lucide-react, react-helmet in separate cached vendor chunks
- **Input sanitization** — `src/utils/sanitize.ts` strips HTML/special chars before any submission
- **Analytics abstraction** — `src/lib/analytics.ts` tracks admissions clicks, phone, email, WhatsApp, downloads, gallery views, form success
- **ContactForm** — inline field-level validation errors with `aria-invalid` + `aria-describedby`
- **Security headers** — X-Frame-Options, CSP, HSTS, Referrer-Policy, Permissions-Policy via `vercel.json`
- **PWA** — `manifest.json` with all icon sizes, shortcuts, screenshots + generated icons
- **robots.txt** — professional with Disallow rules + both sitemap references
- **sitemap.xml + sitemap-index.xml** — all 10 public pages with changefreq + priority
- **Print stylesheet** — clean printed output for calendar/admissions
- **Ultra-wide + micro-mobile** — responsive down to 320px, up to 2000px+
- **Custom scrollbar** — branded green
- **Text selection** — branded green-light

## Before Going Live
1. Replace `REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE` in `SEOHead.tsx` with real GSC token
2. Update `SITE.url` in `src/lib/seo.ts` with real domain
3. Update all `sitemap.xml` + `robots.txt` URLs with real domain
4. Wire up `ContactForm.tsx` backend (see TODO comment — Formspree recommended)
5. Replace Unsplash image URLs with real school photos
6. Replace placeholder phone/email in `src/data/content.ts`
7. Add GA4 snippet to `index.html` and set `VITE_GA_ID` in `.env`
8. Upload real OG image to `/public/og-image.jpg` (1200×630px)

## Deploy
```bash
git add . && git commit -m "feat: v4 SEO + PWA + performance + security" && git push
```
Vercel auto-deploys. `vercel.json` handles SPA routing + security headers + asset caching.
