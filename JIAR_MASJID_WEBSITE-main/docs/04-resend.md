# Resend setup (contact form)

The contact form sends email through [Resend](https://resend.com).

## 1. Create a Resend account

Sign up at [resend.com](https://resend.com).

## 2. Get your API key

1. Dashboard → **API Keys**
2. **Create API Key**
3. Name it (e.g. `website-contact`)
4. Copy the key — it starts with `re_`
5. Add to `.env.local` and Vercel env vars:

```bash
RESEND_API_KEY=re_your_key_here
```

You will only see the full key once. Store it safely.

## 3. Verify your sending domain

To send from `hello@yourbusiness.com`, you must verify your domain:

1. Resend → **Domains** → **Add Domain**
2. Enter your domain (e.g. `yourbusiness.com`)
3. Add the DNS records Resend shows (in Namecheap **Advanced DNS**)
4. Wait for verification (usually minutes to a few hours)

## 4. Set email env vars

```bash
CONTACT_TO_EMAIL=you@yourbusiness.com      # where submissions go
CONTACT_FROM_EMAIL=hello@yourbusiness.com  # must be on verified domain
```

## 5. Test the form

1. Run `npm run dev` locally (or use your Vercel URL)
2. Fill out the contact form and submit
3. Check `CONTACT_TO_EMAIL` inbox (and spam folder)

## Troubleshooting

| Error | Fix |
|-------|-----|
| "Email service is not configured" | Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` in Vercel |
| Resend domain error | Verify domain; `CONTACT_FROM_EMAIL` must use that domain |
| Form works locally but not on Vercel | Add env vars in Vercel dashboard and redeploy |

## Free tier

Resend offers a free tier suitable for small business contact forms. Check [resend.com/pricing](https://resend.com/pricing) for current limits.

Next: [05-namecheap-domain.md](./05-namecheap-domain.md) for your custom domain.
