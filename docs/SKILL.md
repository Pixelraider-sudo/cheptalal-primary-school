---
name: cheptalal-school-website
description: Build, update, extend, and deploy the Cheptalal Primary School website (React + TypeScript + Vite + Framer Motion + Lucide React). Use this skill whenever the user mentions Cheptalal Primary, the school website, wants to add pages or sections to the site, update content (teachers, news, events, achievements, calendar), change design tokens, wire up new routes, fix bugs, or prepare a deployment zip. Also trigger for any task involving school-website data files (src/data/), design system components (src/components/ui/), Framer Motion variants (src/lib/motion.ts), or icon mappings (src/lib/icons.ts).
---

# Cheptalal Primary School Website

A premium, production-ready multi-page school website for **Cheptalal Primary School**, Konoin Sub-County, Bomet County, Kenya.

## Stack
- **React 19 + TypeScript** (strict mode)
- **Vite 8** — dev server and production bundler
- **React Router v7** — client-side routing (11 routes)
- **Framer Motion** — all animations (no CSS keyframes for interactive elements)
- **Lucide React** — every icon (zero emoji anywhere)
- **Plain CSS** with design tokens (no Tailwind, no CSS-in-JS)

## Quick Commands
```bash
npm install          # first time / after pulling
npm run dev          # http://localhost:5173
npm run build        # TypeScript check + Vite production build → dist/
npm run lint         # oxlint (0 errors expected, 1 known advisory)
npm run preview      # preview production build locally
```

## Project Structure
```
src/
  types/index.ts          ← ALL TypeScript interfaces live here (single source of truth)
  data/
    content.ts            ← gallery, FAQ, testimonials, stats, navLinks, schoolInfo
    teachers.ts           ← Teacher[] array
    news.ts               ← NewsItem[] array (categoryIcon uses string key, not component)
    achievements.ts       ← Achievement[] + stats[]
    calendar.ts           ← Term[] with CalendarEvent[] per term
    events.ts             ← EventItem[] (upcoming events)
    headteacher.ts        ← HeadteacherMessage
    journey.ts            ← JourneyLevel[] (CBC PP1→Grade 6)
    schoolLife.ts         ← SchoolLifeItem[] + DownloadItem[]
  lib/
    motion.ts             ← Shared Framer Motion variants (fadeUp, slideLeft, staggerContainer, etc.)
    icons.ts              ← Maps string keys → Lucide components (newsCategoryIcons, schoolLifeIcons)
  components/
    ui/                   ← Design system: Button, Card, Section, Container, Badge,
                             Heading, StatCard, FeatureCard, GalleryCard + index.ts barrel
    Hero.tsx              ← Home hero (Framer Motion text, single image, no particles)
    StatsBar.tsx          ← Animated counters (dark green bar)
    LearningJourney.tsx   ← Interactive CBC PP1→G6 step rail + AnimatePresence panel
    HeadteacherSection.tsx
    SchoolLife.tsx        ← 6 image overlay cards
    Teachers.tsx          ← TeacherCard + TeacherGrid
    News.tsx              ← NewsCard + NewsList
    Gallery.tsx           ← Category filter + lightbox (keyboard accessible)
    FAQAccordion.tsx      ← Framer Motion AnimatePresence height animation
    Testimonials.tsx
    ContactForm.tsx       ← Full validation + success state
    EventsSection.tsx
    DownloadsSection.tsx
    Navbar.tsx            ← Sticky, scrolled shadow, More dropdown for overflow items
    Footer.tsx
    PageLoader.tsx
    ScrollToTop.tsx
    ToastProvider.tsx     ← Global toast notification context
    WhatsAppFloat.tsx
    BackToTop.tsx
  pages/
    Home.tsx              ← Hero → Stats → Features → Headteacher → CBC Journey →
                             School Life → News → Achievements teaser → Calendar CTA →
                             Testimonials → Admissions CTA
    About.tsx
    Curriculum.tsx
    Teachers.tsx
    News.tsx              ← News list + Events
    Gallery.tsx           ← Filtered gallery
    Achievements.tsx      ← Timeline by year + stats bar
    Calendar.tsx          ← Interactive term selector (3 terms, events with type badges)
    Admissions.tsx        ← Process → Requirements → Downloads → FAQ
    Contact.tsx
    NotFound.tsx          ← Branded 404
  styles/
    global.css            ← Design tokens (:root), all component class definitions
    sections.css          ← Layout-specific styles (grids, about, contact, journey, etc.)
  App.tsx                 ← BrowserRouter + all 11 routes + providers
  main.tsx                ← Entry point, CSS imports
public/
  robots.txt
  sitemap.xml
vercel.json               ← SPA rewrite: all routes → /index.html (REQUIRED for Vercel)
```

## Design System Tokens (src/styles/global.css)
```
--green: #1B5E20          primary brand green
--green-mid: #2E7D32      hover / accent green
--green-light: #E8F5E9    tint / backgrounds
--green-dark: #0A2A0C     dark sections, footer
--gold: #C8861A           primary accent
--gold-deep: #9A6610      gold hover
--gold-light: #FBF3E3     gold tint
--r-sm: 8px  --r: 12px  --r-lg: 18px
--sh / --sh2              box shadows
--space-1 through --space-9  (4px → 88px)
```

## Motion System (src/lib/motion.ts)
All animations use `EASE = [0.22, 1, 0.36, 1]` for a settled, premium feel.
- `fadeUp` — standard section/card reveal
- `slideLeft / slideRight` — directional reveals
- `scaleIn` — gallery cards
- `staggerContainer + staggerItem` — lists and grids
- `hoverLift` — card hover elevation
- `viewportOnce = { once: true, margin: '-80px' }` — standard IntersectionObserver config

Always use `whileInView` + `viewport={viewportOnce}` for scroll-triggered animations.
Never use raw CSS `@keyframes` for interactive animations — use Framer Motion.

## Icon Rules
- **Zero emoji** anywhere in the codebase
- All icons from `lucide-react`
- Data files store string keys (`'achievement'`, `'sports'`, etc.)
- `src/lib/icons.ts` maps keys → Lucide components
- Render at 300 DPI: `size={20} strokeWidth={1.75}` is the standard

## Adding New Content

### Add a teacher
Edit `src/data/teachers.ts` — add a `Teacher` object with all required fields:
`id, name, title, subject, department, photoUrl, badge`

### Add a news item
Edit `src/data/news.ts` — `categoryIcon` must be one of:
`'achievement' | 'community' | 'admissions' | 'sports' | 'facilities'`

### Add a gallery image
Edit `src/data/content.ts` → `galleryImages` array.
`category` must be one of: `'Campus' | 'Academics' | 'Events' | 'Sports' | 'Learning'`

### Add an achievement
Edit `src/data/achievements.ts` — `icon` must be one of: `'trophy' | 'medal' | 'star' | 'award'`

### Add a new page
1. Create `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add link to `navLinks` in `src/data/content.ts`
4. Add link to Footer if appropriate

## Adding a New Type
All interfaces go in `src/types/index.ts`. Never define types inline in components.

## Deployment (Vercel)
1. Push to GitHub (`Pixelraider-sudo/cheptalal-primary`)
2. Import in Vercel — auto-detects Vite
3. `vercel.json` handles SPA routing (already configured)
4. Set custom domain (`.sch.ke` requires Ministry approval letter)

**Before going live — replace these placeholders:**
- `schoolInfo.phone` → real number in `src/data/content.ts`
- `schoolInfo.email` → real email
- `schoolInfo.whatsapp` → real WhatsApp number
- All Unsplash image URLs → real school photos
- ContactForm submit handler → wire to Formspree or EmailJS (see TODO in ContactForm.tsx)
- Download links in `src/pages/Admissions.tsx` → real PDF URLs
- `schoolInfo.mapQuery` → exact GPS coordinates once confirmed

## Accessibility Checklist
- Skip link: `<a href="#main-content" className="skip-link">` in App.tsx
- All images have `alt` text
- All interactive elements have `aria-label` or visible label
- Keyboard navigation: tab order follows DOM, focus rings visible
- `aria-expanded` on FAQ, dropdown, mobile menu
- `role="tabpanel"` on CBC journey panels
- Color contrast: green on white ≥ 4.5:1 ✓

## SEO
- JSON-LD EducationalOrganization schema in `index.html`
- OG + Twitter Card meta tags in `index.html`
- `robots.txt` and `sitemap.xml` in `/public`
- Update `sitemap.xml` when adding new routes
