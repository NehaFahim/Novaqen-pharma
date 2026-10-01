# NOVAQEN Pharma Industries — Premium Landing Page Demo

A client-presentable Next.js/React pharmaceutical landing-page demo built from the supplied NOVAQEN requirement document.

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS 4
- GSAP + ScrollTrigger
- Framer Motion
- Lenis smooth scrolling
- Three.js + React Three Fiber + Drei
- Lottie JSON animations
- Vanilla Tilt
- Lucide React
- Zod-ready architecture

## Landing-page coverage

- Premium sticky header with shrink-on-scroll glassmorphism
- Three-column mega menu
- Debounced live product search + URL sync
- Voice-search browser integration
- Cinematic 3-slide hero, 3-second auto rotation, Ken Burns, type-reveal headline, parallax/scientific orbit treatment
- 3-second molecule-style preloader with percentage counter
- Scroll progress + scroll-depth analytics hooks
- GSAP ScrollTrigger reveals and word-preserving split animation
- Lenis smooth scrolling
- Magnetic CTAs + custom cursor
- Vanilla Tilt product/feature cards, max 15°, glare + scale
- Animated counters
- 6 expandable capability cards
- Sticky process storytelling with responsive mobile conversion
- 8 products, Quick View modal + dedicated product routes
- Interactive Three.js/R3F globe with 50 markers, drag/zoom controls, stars and hover market labels
- 12-image masonry gallery + lightbox, zoom, fullscreen, download and share controls
- R&D section with floating scientific motion + Lottie animations
- Testimonial carousel with star animation and JSON API endpoint
- GMP / ISO / WHO / FDA demo certification cards with watermarked PDF viewer structure
- Contact form with file validation, 5MB limit and API-ready multipart endpoint
- Dark map integration placeholder + Google Maps directions search
- Newsletter API-ready flow for Mailchimp
- Live-chat integration shell for Tawk.to/Crisp
- Admin-auth API integration point for JWT + secure httpOnly cookies
- English / Arabic / French i18n API-ready endpoint
- PWA manifest + offline fallback + service-worker shell
- Future-ready 10-page routes via dynamic page structure
- SEO metadata, sitemap, robots and favicon/OG assets
- Reduced-motion and mobile performance safeguards

## Important demo-safe content

The supplied brief specifies demo figures such as 25+ years, 500+ products, 50+ countries and 99.9% quality commitment. These remain clearly marked as demo content and should be replaced/verified before production.

Likewise, GMP / ISO / WHO / FDA are presented as demo standards only, not as claims of NOVAQEN certification.

## Images

The demo uses professionally selected Pexels pharmaceutical/laboratory imagery. Replace stock imagery with NOVAQEN-owned facility photography before final launch.

See `ASSET_SOURCES.md` for source pages.

## Run

Open a terminal **in this folder** (the folder containing `package.json`), then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. If you extract the ZIP and see a single project folder, enter that folder first; do not run npm commands from the ZIP's parent directory.

Production:

```bash
npm run build
npm start
```

Type checking:

```bash
npm run typecheck
```

## Production integrations still requiring client credentials

- Nodemailer SMTP/admin email
- reCAPTCHA v3
- Google Maps API key + verified factory locations
- Mailchimp credentials
- Tawk.to/Crisp credentials
- Verified product/testimonial/gallery CMS data
- JWT secret / admin user store
- Final verified certification PDFs
- Analytics provider credentials

No secrets are embedded in the client bundle.
