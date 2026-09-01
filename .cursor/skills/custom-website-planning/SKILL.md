---
name: custom-website-planning
description: >-
  Plan and build a custom layout using customizable-website-template. Use when
  the user provides reference website URLs to match, wants to rebuild the UI from
  scratch, mentions layout cloning, or uses the bare shell template.
---

# Custom Website Planning (Bare Shell)

For the **customizable-website-template** repo — minimal shell with working contact form and deploy plumbing.

## When to use

- User cloned `customizable-website-template`
- User pasted reference website URLs and wants layout/style matched closely
- User needs freedom to rebuild hero, sections, and navigation

## If wrong template

If reference sites are standard business single-page layouts and user only needs content swaps, suggest **website-template** instead. See `docs/00-which-template.md`.

## Workflow

### 1. Read project context

- `app/page.tsx` — main build surface (placeholder section)
- `components/section.tsx` — generic section wrapper
- `components/contact-form.tsx`, `site-header.tsx`, `site-footer.tsx`
- `app/api/contact/route.ts`, `lib/validations.ts`, `lib/site-config.ts`
- `docs/06-cursor-and-ai.md`

### 2. Classify reference sites

Ask user for 2–3 reference URLs. Determine:

- **Similar skeleton** to a business site → may still work here if user wants custom styling
- **Different skeleton** → plan full section-by-section rebuild

### 3. Interview with AskQuestion

- Reference URLs and what they like about each (layout, typography, colors, section order)
- Business info for env vars and copy
- Sections needed
- Logo and assets
- Light/dark preference

### 4. Plan mode — layout-first

Plan must describe:

- Section order matching references
- Component structure (`app/page.tsx` + new components)
- CSS/token changes in `globals.css`
- What stays untouched (contact API, validations, env)

**Explicit rule in plan:** Do not just recolor the placeholder — rebuild layout when references differ.

### 5. Implement

- Rebuild `app/page.tsx` and add components freely
- Extend `site-header.tsx` with nav links as sections are added
- Use `Section` wrapper for consistency
- Keep contact form section id `#contact` for header CTA

### 6. Preserve always

Do not break or delete without replacement:

- `app/api/contact/route.ts`
- `lib/validations.ts` (update service enum if dropdown options change)
- `lib/site-config.ts`
- `vercel.json`

## Contact form service options

If you change dropdown values in `contact-form.tsx`, update `lib/validations.ts` `service` enum to match exactly.
