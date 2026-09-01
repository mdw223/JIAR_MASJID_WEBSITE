# JIAR Masjid Website

Mobile-first prototype for [Jamaat Ibad Ar-Rahman](https://ibadarrahman.org/) built with Next.js 15, deployed on Vercel.

## Features

- Homepage with hero, live prayer times (Aladhan API), services, news, Jumu'ah schedule
- Two masjid location pages (Fayetteville St. & Parkwood)
- Full site navigation mirroring ibadarrahman.org
- Donation page with category links to Mohid/PayPal
- Mobile-responsive design (green/orange JIAR theme)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_SITE_URL` — canonical site URL
- `NEXT_PUBLIC_PHONE` — main phone number
- `NEXT_PUBLIC_EMAIL` — contact email

## Deployment

Push to GitHub and connect to Vercel. See `docs/03-vercel.md` for setup.

## Post-Prototype Roadmap

See `docs/TODO.md` for deferred features (admin panel, WhatsApp flyers, analytics, etc.) and `docs/PRICE_ANALYSIS.md` for hosting options.
