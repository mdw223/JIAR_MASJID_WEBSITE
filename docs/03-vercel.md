# Deploy on Vercel

Vercel hosts your Next.js site for free and deploys automatically when you push to GitHub.

## 1. Create a Vercel account with GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your repositories

## 2. Import your project

1. Vercel dashboard → **Add New…** → **Project**
2. Find your GitHub repo and click **Import**
3. Confirm settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (default)
4. Expand **Environment Variables** and add every variable from `.env.example`
5. Click **Deploy**

## 3. Verify vercel.json

This template includes `vercel.json` with `"framework": "nextjs"`. This prevents Vercel from treating the project as a static site (which causes 404 errors).

If deploy succeeds but the site shows **404 NOT_FOUND**, check **Project Settings → General → Framework Preset** is **Next.js**, then redeploy.

## 4. Add environment variables

In **Project Settings → Environment Variables**, add all values from `.env.example`:

- `RESEND_API_KEY` (secret — do not commit to Git)
- `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
- All `NEXT_PUBLIC_*` variables

Apply to **Production**, **Preview**, and **Development**.

After adding vars, **Redeploy** from the Deployments tab.

## 5. Your live URL

After deploy, Vercel gives you a URL like:

`https://your-project.vercel.app`

## 6. Automatic deploys

Every push to `main` triggers a new production deploy. Pull requests get preview URLs.

Next: [04-resend.md](./04-resend.md) for the contact form, or [05-namecheap-domain.md](./05-namecheap-domain.md) for a custom domain.
