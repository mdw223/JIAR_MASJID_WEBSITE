# Namecheap custom domain on Vercel

Connect a domain you bought on Namecheap to your Vercel project.

## 1. Add domain in Vercel

1. Vercel project → **Settings** → **Domains**
2. Add both:
   - `yourbusiness.com`
   - `www.yourbusiness.com`
3. Vercel shows the DNS records you need

## 2. Configure DNS in Namecheap

1. [namecheap.com](https://www.namecheap.com) → **Domain List** → **Manage**
2. **Advanced DNS** tab
3. Remove conflicting records (old GitHub Pages CNAME, URL redirects on `@`)

Add these records:

| Type | Host | Value |
|------|------|-------|
| A Record | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com.` |

(TTL: Automatic)

## 3. Choose primary domain

In Vercel Domains, set one as primary:

- Redirect `yourbusiness.com` → `www.yourbusiness.com`, or
- Redirect `www` → apex

Most businesses use **www** as primary.

## 4. Update site URL env var

In Vercel **Environment Variables**:

```bash
NEXT_PUBLIC_SITE_URL=https://www.yourbusiness.com
```

Redeploy after changing.

## 5. Wait for DNS and SSL

- DNS propagation: 5–30 minutes typical, up to 48 hours
- Vercel issues SSL automatically when DNS is correct
- Domain status in Vercel should show **Valid**

Check propagation: [dnschecker.org](https://dnschecker.org)

## 6. Resend DNS (if using contact form)

If you verified your domain in Resend, add those DNS records in Namecheap too (TXT, MX, etc. as shown by Resend). Email and website DNS live in the same Advanced DNS panel.

## Troubleshooting

- **Invalid configuration in Vercel:** Double-check A and CNAME values; remove old records
- **www works but apex doesn't:** Ensure A record for `@` exists
- **Still shows old site:** DNS cache — wait or try incognito

## Alternative: Vercel nameservers

For simpler DNS long-term, use Vercel DNS nameservers (Vercel Domains → **Use Vercel DNS**) and update nameservers in Namecheap under **Domain → Nameservers**.
