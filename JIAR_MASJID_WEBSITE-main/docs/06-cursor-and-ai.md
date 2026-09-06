# Using Cursor AI to build your website

Cursor helps you customize this template with AI. Follow this workflow for best results.

## Before you start

1. Read [00-which-template.md](./00-which-template.md) — pick the right template
2. Copy `.env.example` to `.env.local` and fill in what you know
3. Gather: business info, logo, reference website URLs, portfolio images

## Recommended workflow

### Step 1: Plan mode

In Cursor, use **Plan mode** before big changes. The AI researches your project and proposes a plan without editing files until you approve.

### Step 2: Interview with `/ask-me`

Use the **ask-me** command or ask the AI to interview you with questions about:

- Business name, services, contact info
- Reference websites you like (paste 2–3 URLs)
- Light/dark theme, colors, tone
- Which sections you need
- Logo and images

Answer thoroughly. More context = better results.

### Step 3: Approve the plan, then implement

Only switch to **Agent mode** and say "implement the plan" after you review and approve.

### Step 4: Iterate in small steps

After the first build:

- "Make the hero headline shorter"
- "Change primary color to match my logo"
- "Add a fourth service card"

Small requests work better than "redo everything."

## Which template affects your prompt

**website-template:** Reference sites guide *mood and colors*. AI customizes content and styling within the existing layout.

**customizable-website-template:** Reference sites guide *layout and structure*. Tell AI to rebuild `app/page.tsx` and components to match your URLs. Say explicitly: "Do not just recolor — match the layout."

## Copy-paste prompts

See the README in your template repo for a full prompt block to paste into Cursor.

## Project skill

This repo includes a Cursor skill in `.cursor/skills/` that reminds the AI to interview you and plan first. It activates when you mention building, customizing, or designing your website.

## Tips for better AI results

1. **Paste reference URLs** — AI can fetch and analyze public websites
2. **Attach your logo** — say the file path so AI can extract colors
3. **Be specific about CTAs** — "contact form primary, phone in header"
4. **Say what to keep** — "Keep the contact form and Resend setup working"
5. **Use Plan mode** for layout changes; Agent mode for small edits

## What not to do

- Don't ask AI to commit secrets — keep API keys in `.env.local` only
- Don't skip planning for a full redesign
- Don't expect pixel-perfect clones of complex sites in one prompt

## Student resources

See [07-student-resources.md](./07-student-resources.md) for GitHub Student Pack and Cursor access options.
