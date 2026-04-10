# Lading & Launch

Website for a Shopify-focused e-commerce agency and app company.

**Domain:** [ladingandlaunch.com](https://ladingandlaunch.com)

## Tech Stack

- **Framework:** Astro 6 (static SSG)
- **Styling:** Tailwind CSS 4 via `@tailwindcss/vite`
- **Content:** Astro Content Collections (Markdown)
- **Forms:** Formspree
- **Hosting:** Vercel (planned — currently GitHub Pages on `main`)

## Getting Started

```bash
npm install
npm run dev       # Dev server at localhost:4321
npm run build     # Static build to dist/
npm run preview   # Preview the built site
```

## Project Structure

```
src/
├── components/   # Reusable Astro components (Header, Footer, Button, Card, etc.)
├── content/      # Content collections (blog posts in Markdown)
├── layouts/      # BaseLayout with SEO meta, OG tags, JSON-LD
├── pages/        # Route pages (index, design-system, etc.)
└── styles/       # global.css — Tailwind config, BEM classes, animations
```

## Design System

A living reference page at `/design-system/` renders every component, color token, typography level, and animation. It's excluded from search engines (`noindex, nofollow`).

## CSS Architecture

The project uses BEM-named classes defined in `src/styles/global.css` via Tailwind `@apply`. Components use semantic class names (`.btn--primary`, `.card`, `.section--cream`) rather than long utility strings in markup. One-off layout utilities are still written as inline Tailwind where appropriate.

## Branch Strategy

- `main` — Current live site (legacy React SPA). Will be replaced when the Astro rebuild is complete.
- `develop` — Astro rebuild in progress. All new work merges here first.
- `feature/*` — Feature branches off `develop` for each piece of work.

## Deployment

Currently deployed via GitHub Pages from `main`. The Astro rebuild on `develop` will migrate to Vercel once it's ready to go live.
