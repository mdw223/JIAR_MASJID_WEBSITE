# JIAR Website — Price Analysis

Comparison of hosting/architecture options vs. current **$38/month DreamHost** (+ Wix costs).

**Traffic baseline:** ~31k mobile, ~11k desktop users/month (from current site analytics).

---

## Option A — Static Prototype (Current)

| Component | Cost |
|-----------|------|
| Vercel Hobby | $0 |
| Aladhan Prayer API | $0 |
| GitHub | $0 |
| Resend (contact, when added) | $0 (free tier: 3k emails/mo) |
| **Total** | **$0/month** |

**Pros:** Cheapest, fast, reliable CDN, zero server maintenance  
**Cons:** Content changes require developer + git deploy  
**Best for:** Prototype demo, low-budget interim

---

## Option B — CMS-First

| Component | Cost |
|-----------|------|
| Vercel Pro | $20/mo |
| Sanity Free tier | $0 (up to 3 users, 10k documents) |
| Aladhan API | $0 |
| Resend | $0 |
| **Total** | **~$20/month** |

**Pros:** Non-technical editing, preview drafts, structured content  
**Cons:** CMS learning curve, vendor dependency, Sanity paid tier if outgrow free  
**Best for:** Admin/youth team posting without developer involvement

---

## Option C — Full Custom Admin

| Component | Cost |
|-----------|------|
| Vercel Pro | $20/mo |
| Supabase Pro | $25/mo |
| Vercel Blob (images) | ~$0–5/mo |
| Resend | $0 |
| **Total** | **~$25–50/month** |

**Pros:** Full control, custom roles, flyer DB, prayer override UI  
**Cons:** Highest upfront dev cost, ongoing maintenance  
**Best for:** Long-term platform with WhatsApp automation + RBAC

---

## Option D — Automation-Heavy

| Component | Cost |
|-----------|------|
| Option C stack | $25–50/mo |
| VPS for Evolution API (Hetzner/DigitalOcean) | $6–12/mo |
| **Total** | **~$30–55/month** |

**Pros:** WhatsApp → flyer pipeline, full automation  
**Cons:** Ops overhead, WhatsApp ToS risk, VPS security/maintenance  
**Best for:** Community that posts flyers daily via WhatsApp group

---

## Option E — Current Setup

| Component | Cost |
|-----------|------|
| DreamHost | $38/mo |
| Wix (if separate) | varies |
| **Total** | **$38+/month** |

**Pros:** Known quantity, no migration risk  
**Cons:** Expensive, limited UX, vendor lock-in, poor mobile experience vs modern stack

---

## One-Time Migration Costs

| Item | Estimate |
|------|----------|
| Content migration (full WordPress export) | 8–16 dev hours |
| DNS cutover + redirect map | 2–4 hours |
| Donation URL audit + Mohid integration | 2–4 hours |
| Design polish (Yunus Figma → production) | 16–40 hours |
| WhatsApp automation build | 16–24 hours |
| **Total one-time** | **~$2,000–6,000** (contractor rates) or volunteer |

---

## Payment Processing Note

If donations move in-house via Stripe (instead of Mohid/PayPal links):

- Stripe fee: **2.9% + $0.30** per transaction
- No monthly fee for standard accounts
- Requires nonprofit verification for reduced rates (2.2% + $0.30)

Current Mohid portal handles this externally — no change needed for prototype.

---

## Recommendation Matrix

| Priority | Recommended Option |
|----------|-----------------|
| Minimize cost now | **A** ($0) — prototype on Vercel Hobby |
| Non-technical posting soon | **B** ($20) — Vercel Pro + Sanity |
| WhatsApp flyers + roles | **C → D** ($30–55) — custom + Evolution API |
| Avoid migration risk | **E** ($38+) — stay on DreamHost (not recommended long-term) |

### Suggested Path

1. **Now:** Deploy Option A prototype on Vercel (free preview URL)
2. **Month 1–2:** Board approves budget → migrate to Option B for content editing
3. **Month 3+:** Add Option D automation if WhatsApp flyer workflow is validated

**Estimated savings vs current:** $18–38/month (Option A/B vs DreamHost $38)

---

## Decision Needed from JIAR Board

- [ ] Target monthly hosting budget
- [ ] Who will manage content post-launch (admin vs youth team vs developer)
- [ ] Timeline for domain migration (ibadarrahman.org)
- [ ] Approve one-time migration budget
