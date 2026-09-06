# Local setup

Get the site running on your computer before deploying.

## Prerequisites

- **Node.js 20+** — download from [nodejs.org](https://nodejs.org)
- **Git** — [git-scm.com](https://git-scm.com)
- **Cursor** (recommended) — [cursor.com](https://cursor.com)

## Steps

### 1. Clone or copy the template

```bash
git clone git@github.com:mdw223/website-template.git my-website
cd my-website
```

(Replace `website-template` with `customizable-website-template` if using that template.)

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your values. See [04-resend.md](./04-resend.md) for the Resend API key.

You can leave optional fields empty for local dev — the site will still run; the contact form needs Resend configured to send email.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Edit content

| What to change | Where |
|----------------|-------|
| Business name, tagline (full template) | `data/site.ts` and `.env.local` |
| Phone, email, social links | `.env.local` |
| Page layout (customizable template) | `app/page.tsx` and new components |
| All sections (full template) | `data/site.ts`, `data/portfolio.ts`, `data/reviews.ts` |

## Troubleshooting

- **Port 3000 in use:** Run `npm run dev -- -p 3001`
- **Module not found:** Delete `node_modules` and run `npm install` again
- **Contact form fails:** Check `RESEND_API_KEY` and verified sender domain in Resend

Next: [02-github.md](./02-github.md) to push your project to GitHub.
