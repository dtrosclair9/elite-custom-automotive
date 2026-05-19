# Client Website Template — Claude Instructions

This is a reusable Next.js starter for local contractor/service business websites.
Built by Dayne Trosclair (Strykora). First deployed for Southdown Renovations (Thibodaux, LA).

---

## How to Start a New Client Site

### Step 1 — Collect this info from the client

**Business Info**
- [ ] Business name (e.g., "Southdown Renovations")
- [ ] Owner's name (e.g., "Branton Vicknair")
- [ ] Owner's hometown (e.g., "Labadieville, LA") — for About page story
- [ ] City & state (e.g., "Thibodaux, LA")
- [ ] County/parish served (e.g., "Lafourche Parish")
- [ ] Other cities served (for service area section on About page)
- [ ] Phone number (display format + raw format for tel: links)
- [ ] Email address(es) — see Contact Form section below
- [ ] Number of locations (single vs. multi-location)
- [ ] Domain name (e.g., "southdownrenovations.com")
- [ ] Facebook URL (or other social links)

**Services**
- [ ] Full list of services offered (with short descriptions if possible)
- [ ] Which service to feature as the hero background image
- [ ] Identify the highest-ticket service(s) — these get dedicated SEO landing pages (see Step 4)

**Brand / Visual**
- [ ] Logo file (PNG with transparent background preferred)
- [ ] Primary brand color (hex) — becomes "primary" in Tailwind
- [ ] Accent color (hex) — becomes "accent" in Tailwind
- [ ] 6–10 project photos (named descriptively, e.g., kitchen-white.jpg)

**About / Story**
- [ ] Owner's background story (2–4 paragraphs for About page)
- [ ] 3 core values or selling points

---

### Step 2 — Copy this template

```bash
cp -r ~/Documents/client-website-template ~/Documents/CLIENT_SLUG
cd ~/Documents/CLIENT_SLUG
npm install
```

---

### Step 3 — Do a global find-and-replace for all placeholders

Search the entire project for these strings and replace them:

| Placeholder | Replace with |
|---|---|
| `CLIENT_NAME` | Business name (e.g., "Southdown Renovations") |
| `CLIENT_SLUG` | URL-safe name (e.g., "southdown-renovations") |
| `CLIENT_DOMAIN` | Domain (e.g., "southdownrenovations.com") |
| `CLIENT_CITY` | City (e.g., "Thibodaux") |
| `CLIENT_STATE` | State abbreviation (e.g., "LA") |
| `CLIENT_COUNTY` | County/parish (e.g., "Lafourche Parish") |
| `CLIENT_PHONE_DISPLAY` | Phone (e.g., "(985) 228-3384") |
| `CLIENT_PHONE_RAW` | Phone for tel: link (e.g., "+19852283384") |
| `CLIENT_EMAIL` | Primary contact email |
| `CLIENT_FACEBOOK_URL` | Facebook URL |
| `OWNER_NAME` | Owner's full name |
| `OWNER_HOMETOWN` | Owner's hometown (e.g., "Labadieville, Louisiana") |
| `PRIMARY_COLOR` | Primary brand color hex (e.g., "#1C2B4A") |
| `PRIMARY_COLOR_LIGHT` | Lighter shade (e.g., "#243660") |
| `PRIMARY_COLOR_DARK` | Darker shade (e.g., "#131E35") |
| `ACCENT_COLOR` | Accent color hex (e.g., "#C9A84C") |
| `ACCENT_COLOR_LIGHT` | Lighter accent (e.g., "#D4BA70") |
| `ACCENT_COLOR_DARK` | Darker accent (e.g., "#A88630") |
| `GEO_LAT` | Business latitude (look up on Google Maps) |
| `GEO_LNG` | Business longitude |

---

### Step 4 — Build all pages

#### Standard pages (build every time)
- **`src/app/page.tsx`** — services grid with "Learn More" links to each service page, gallery preview, about snippet, CTA with cities list
- **`src/app/services/page.tsx`** — full services array (titles, taglines, descriptions, bullet points, images). Each service card links to its own `/services/[slug]` page.
- **`src/app/about/page.tsx`** — owner story paragraphs, values, service area cities
- **`src/app/gallery/page.tsx`** — photos array (src, alt, category, title) and categories filter list
- **`src/app/contact/page.tsx`** — contact form (see Contact Form section)

#### High-ticket service landing pages (build every time — do not skip)

Identify the 1–3 highest-ticket services for this client's niche. For each one, create a dedicated SEO landing page at:

```
/services/[service-slug]-[city-slug]-[state]
```

Examples:
- `/services/roof-replacement-thibodaux-la`
- `/services/kitchen-remodel-thibodaux-la`
- `/services/hvac-installation-houma-la`

Each high-ticket service page must include:
- **H1:** "[Service Name] in [City], [State]" — exact match to what people search
- **Intro paragraph (P-tag):** 2–3 sentences explaining the service with city name used naturally
- **Why choose us section** — 3–4 H3 subheadings with supporting paragraphs
- **What's included section** — bulleted list or icon grid
- **Service area callout** — mentions surrounding cities/parishes
- **Strong CTA** — phone number, contact form link, or inline mini-form
- **Full metadata** — see SEO Standards section below
- **JSON-LD schema** — Service schema with provider, areaServed, and serviceType

Link to these pages from:
1. The services grid on the homepage (each service card has a "Learn More →" link)
2. The main `/services` page (same card links)
3. The nav — either as a dropdown under "Services" or as a featured link

---

### Step 5 — Add images

Drop all client photos into `public/images/`. Update every `src="/images/..."` reference in the code to match the actual filenames. Every image must have a descriptive, keyword-rich `alt` tag (e.g., `alt="metal roof installation in Thibodaux Louisiana"` — not `alt="photo1"`).

---

### Step 6 — Set up the contact form

**Always use Dayne's test email first (`daynetrosclair@icloud.com`), then swap to the client's real email before launch.**

#### Single-location clients → Formspree (default)

1. Go to formspree.io, create a new form, copy the form ID (e.g., `xykbnlna`)
2. Add the form ID as a placeholder `FORMSPREE_ID` — replace during find-and-replace in Step 3
3. The form submits to one email address. Done.

#### Multi-location clients → One Formspree form per location

When a client has 2+ locations that need submissions routed to different email addresses:

1. Create a separate Formspree form for each location, each connected to its own email
2. Add a location selector to the form (dropdown or radio buttons)
3. On selection, the frontend dynamically swaps the Formspree endpoint URL to the matching form ID
4. No API keys needed — same Formspree setup, just one form ID per location

Example:
```
Location A → FORMSPREE_ID_LOCATION_A
Location B → FORMSPREE_ID_LOCATION_B
```

#### Complex routing or 3+ locations → Resend (fallback)

If Formspree becomes unwieldy (3+ locations, custom email templates, CC logic):
- Use Resend (resend.com) — one API key stored in Vercel environment variables
- Next.js API route at `/api/contact` handles routing logic server-side
- Only reach for this if Formspree genuinely can't do it

---

### Step 7 — Deploy to Vercel

```bash
git init
git add .
git commit -m "Initial commit"
# Create repo on GitHub, then:
git remote add origin https://github.com/USERNAME/CLIENT_SLUG.git
git push -u origin main
```

Connect the GitHub repo to Vercel. Every `git push` to main auto-deploys.

**Important:** Make sure your git email matches your GitHub account email:
```bash
git config --global user.email "your-github-email@example.com"
```

---

## SEO Standards — Apply to Every Page Without Exception

Every page must be fully crawlable and indexable. These are non-negotiable.

### Metadata (every page)

```tsx
export const metadata: Metadata = {
  title: "[Primary Keyword] | [Business Name]",        // 50–60 chars
  description: "[2-sentence description with city and primary keyword]",  // 150–160 chars
  alternates: { canonical: "https://CLIENT_DOMAIN/page-slug" },
  openGraph: {
    title: "...",
    description: "...",
    url: "https://CLIENT_DOMAIN/page-slug",
    siteName: "CLIENT_NAME",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
}
```

### Heading hierarchy (every page)

- **One H1 per page** — contains the primary keyword + city. Never skip or duplicate.
- **H2s** — section headings. Each major section gets one. Include keywords naturally.
- **H3s** — subsection headings under H2s. Use for feature lists, FAQs, why-choose-us items.
- **Never skip levels** — don't jump from H1 to H3. The hierarchy must be clean.
- **P-tags** — every section needs supporting paragraph copy. No headings floating without body text below them.

### URL slugs

- Always lowercase, hyphen-separated, no underscores
- Include the primary keyword + city for service pages: `/services/roof-replacement-thibodaux-la`
- Keep them short and descriptive — no stop words, no dates
- Never use `/page1`, `/service`, or generic slugs

### JSON-LD schema (required per page type)

| Page | Schema Type |
|---|---|
| Homepage | `LocalBusiness` + `WebSite` |
| Services index | `ItemList` |
| Individual service page | `Service` (with `provider`, `areaServed`, `serviceType`) |
| About | `AboutPage` + `Person` (owner) |
| Contact | `ContactPage` |
| Gallery | `ImageGallery` |

### Additional crawlability requirements

- `sitemap.ts` must include every page including all high-ticket service landing pages
- `robots.ts` must allow all crawlers (no accidental blocks)
- No `noindex` tags on any live page
- Internal links: every page must be reachable from at least one other page (no orphan pages)
- Navigation must include links to all top-level pages
- Every service card on the homepage and services page links to its individual service page

---

## Design Variation Guidelines

Every site should feel unique to the client — not like a reskin of the same template. The quality, cleanliness, and layout structure can stay consistent, but vary these elements intentionally with each build:

### Things to vary per site

- **Hero style** — full-bleed photo with overlay, split layout (text left / image right), video background, gradient with no photo, centered text with CTA buttons only
- **Services section layout** — icon cards in a grid, horizontal rows with image + text alternating, large cards with background photos, numbered list style
- **About section** — photo left / text right, text left / photo right, full-width banner with quote overlay, team-style layout if multiple people
- **Gallery** — masonry grid, uniform square grid, carousel/slider, before/after pairs
- **CTA sections** — dark full-width banner, split color block, floating card over image, simple centered text
- **Footer** — minimal one-row, multi-column with service links, dark vs. light, with/without map embed

### Things to keep consistent

- Overall quality and cleanliness
- Mobile responsiveness
- Font system (headings vs. body distinction)
- Consistent use of `primary` and `accent` color tokens
- Button styles and hover states
- Section spacing rhythm

**Before starting any build, note which layout variants were used on recent sites (Southdown Renovations, Acadia Pools, All Out Window Tinting) and deliberately choose different options for the new client.**

---

## Tech Stack

- **Framework:** Next.js 15 (App Router), TypeScript
- **Styling:** Tailwind CSS with custom `primary` + `accent` color tokens
- **Fonts:** Inter (body) + Playfair Display (headings) via `next/font/google`
- **Contact form:** Formspree (default) — see Contact Form section for multi-location and complex cases
- **Hosting:** Vercel (auto-deploys on every git push to main)
- **Images:** `next/image` with avif/webp optimization

## Tailwind Conventions

- `.btn-primary` / `.btn-outline` — CTA button styles (defined in globals.css)
- `.section-padding` — consistent vertical padding for sections
- `.container-wide` — max-width container with padding
- `.section-label` — small accent-colored uppercase label above headings
- Color tokens: `primary` (main brand), `accent` (highlight/CTA)
  - In Tailwind: `bg-primary`, `text-accent`, `border-primary-dark`, etc.
