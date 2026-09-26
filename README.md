# Skander Ben Jannette — Marketing Website

Professional website for a Performance Marketer & Media Buyer. Built with
Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and `next-intl` for
English / French / Arabic localization with full RTL support.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to
`/en` (or `/fr`, `/ar`).

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you have:

- `NEXT_PUBLIC_SITE_URL` — canonical site URL, used in metadata/sitemap.
- `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`
  — each is optional; leave blank to keep that integration disabled.

## Project structure

- `src/app/[locale]/…` — pages (home, about, services, case-studies, insights, contact)
- `src/components/` — `ui/` primitives, `layout/`, `sections/` (homepage blocks),
  `case-studies/`, `testimonials/`, `contact/`, `seo/`, `analytics/`
- `src/content/` — structured, localized content data (services, case studies,
  testimonials, companies, stats, articles) — edit these files to update copy
- `src/messages/{en,fr,ar}.json` — UI strings (nav, buttons, section headings)
- `src/i18n/` — `next-intl` routing/navigation config
- `public/images/` — real client testimonial screenshots and campaign
  dashboard evidence, organized by type

## Known gaps to fill in

- **Headshot**: no real photo of Skander was provided. The hero/about
  sections use a placeholder avatar with a `// TODO` marker — search for
  "replace with real headshot" to find both spots.
- **French copy**: translated from the Arabic/English source by the site
  builder (not supplied by the client) — worth a native-speaker review pass.
- **CTA destinations**: "Book a call" currently links to WhatsApp
  (`src/lib/site-config.ts`); swap in a Calendly/scheduling link if preferred.
- **Contact form delivery**: submissions are validated, rate-limited and
  logged server-side (`src/app/api/contact/route.ts`) but not yet wired to an
  email/CRM — pick a provider (e.g. Resend) and fill in the `TODO` there.
- **Blog/Insights**: no articles were supplied; `src/content/articles.ts` is
  empty and the page shows an empty state until real posts are added.
- **Company logos**: only names were available (no logo image files), so
  companies are shown as a styled text treatment — swap in real logos in
  `src/content/companies.ts` + `public/images/logos/` when available.
