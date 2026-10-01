# NOVAQEN Pharma Industries — Demo Delivery Notes

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production verification

```bash
npm run typecheck
npm run build
npm run start
```

## Vercel

Import this folder/repository into Vercel with the default Next.js settings. No custom build command is required.

## Demo-safe integrations

The landing page includes integration-ready endpoints for:

- Product search
- Contact form / attachment validation
- Analytics events and scroll depth
- Newsletter / Mailchimp handoff
- Testimonial JSON
- Voice search
- i18n readiness
- Admin-auth architecture placeholder

Real production credentials should be added server-side for Nodemailer, reCAPTCHA v3, Google Maps, Mailchimp, Tawk.to/Crisp and JWT administration.

## Content safety

The provided 25+ years, 500+ products, 50+ countries and 99.9% quality figures are shown as demo figures from the client brief and should be verified/replaced before production. GMP/ISO/WHO/FDA cards are explicitly presented as demo placeholders, not certification claims.

## Visual assets

The demo uses suitable Pexels-hosted pharmaceutical/laboratory imagery because no client-owned image set was supplied. Replace these URLs with NOVAQEN-owned photography before final launch.
