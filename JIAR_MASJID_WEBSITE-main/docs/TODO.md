# JIAR Website — Post-Prototype TODO

Items deferred from the Friday Sep 4 prototype. Prioritize with JIAR board and Yunus (UI/UX).

## Branding & Assets

- [ ] Download official JIAR logo assets (SVG/PNG) from current site into `public/images/`
- [ ] Finalize color palette and typography with Yunus's design files
- [ ] Replace placeholder hero imagery with approved photography

## Admin & Content Management

- [ ] Evaluate CMS options: Sanity (hosted), Payload (self-hosted), or custom admin
- [ ] Build non-technical posting UI for news, flyers, and announcements
- [ ] Define user roles: Admin, Youth team, Editor, Viewer (RBAC)
- [ ] Prayer iqamah admin override — UI to adjust offsets per masjid without code deploy

## WhatsApp Flyer Automation

Evolution API instance exists. Architecture:

```
WhatsApp Group → Evolution API → POST /api/webhooks/whatsapp → DB/CMS → Public site
```

- [ ] Configure Evolution API webhook to receive new image messages
- [ ] Store flyer metadata + image (Vercel Blob / S3 / Cloudinary)
- [ ] Auto-publish to Recent News / Flyers section
- [ ] Moderation queue (approve before publish) — recommended
- [ ] Review WhatsApp Business API ToS compliance

## Contact & Forms

- [ ] Contact form via Resend → admin@ibadarrahman.org
- [ ] Membership application form integration

## Analytics

- [ ] Choose: Vercel Analytics, GA4, or Plausible
- [ ] Track 31k mobile / 11k desktop users (baseline from current site)
- [ ] Set up conversion tracking for donations

## Internationalization

- [ ] Arabic language support (next-intl or similar)
- [ ] RTL layout for Arabic pages

## Domain & Migration

- [ ] Get DreamHost and Wix access from JIAR
- [ ] Audit all donation URLs per category (8 categories on Mohid)
- [ ] Content audit: migrate full news post bodies from WordPress
- [ ] Redirect map: old URLs → new URLs (301 redirects)
- [ ] Migrate ibadarrahman.org DNS from DreamHost → Vercel
- [ ] Transfer Vercel project from Malik's account to JIAR org (when ready)

## Hosting Budget

- [ ] Board decision on target monthly spend (see `docs/PRICE_ANALYSIS.md`)
- [ ] Current: DreamHost $38/mo + Wix

## Donation URL Audit

Confirm per-category Mohid payment links (currently all point to main portal):

- Masjid Operation
- Zakat-Al-Mal
- Sadaqah
- Masjid Building
- Funeral Home
- Food Pantry
- Dawah
- Islamic School

## Events & Gallery

- [ ] Events calendar integration (Google Calendar or custom)
- [ ] Photo gallery from JIAR Event Photo Gallery
