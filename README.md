# [Opensource UI](https://opensourceui.in) 

[![Live site](https://img.shields.io/badge/live-opensourceui.in-000000?style=flat-square)](https://opensourceui.in)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Deploy with Vercel](https://img.shields.io/badge/deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/new/clone?repository-url=https://github.com/bidyut10/opensourceui)

Live site: [opensourceui.in](https://opensourceui.in)

Premium free React/Next.js components, built with Tailwind CSS and TypeScript. No subscriptions, no paywalls. Browse **150+ components** with live previews, setup guides, and copy-ready source at `/components`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bidyut10/opensourceui)

## Why I built this

Most UI kits either look the same or need you to learn a whole system before you can use one button. I wanted something closer to how I actually work: find a component that looks good, drop the file into my project, tweak the props, move on.

These components are meant to be copied, not installed as a package. No provider wrappers, no theme config to decode. Each file is self-contained.

Icons are plain SVG React components in `icons/`—no extra npm package. I also use [nexticons.in](https://nexticons.in) alongside them.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **clsx** + **tailwind-merge** (`cn()` helper)
- **MongoDB** (optional, for self-hosted analytics)

No shadcn, no MUI, no Radix underneath. Just React, Tailwind, and SVG.

## Site routes

| Route                                | Purpose                                      |
| ------------------------------------ | -------------------------------------------- |
| `/`                                  | Marketing homepage with live component demos |
| `/components`                        | Browse all components (A–Z index)            |
| `/components?category=Audio`         | Category catalog with preview cards          |
| `/components?category=Audio&q=music` | Search results (also via header search)      |
| `/components/[slug]`                 | Component detail — preview, setup, copy code |
| `/dashboard`                         | Password-protected analytics (optional)      |

The docs section uses a three-column layout on large screens: sidebar navigation, main content, and on-page table of contents.

## Design principles

**Copy-paste first.** Each component lives in its own file with sensible defaults. Paste it into a Next.js app, fix import paths, and it should render.

**Light theme, clean surfaces.** White or near-white backgrounds, neutral borders, restrained accents.

**Consistent API.** Interactive components use `forwardRef`. Props extend native HTML types. Classes merge through `cn()`. Client components use `"use client"` only when needed.

**Real demo content.** Cards ship with names, numbers, and labels that look like real UI—not empty gray boxes.

**Icons as components.** Hand-written SVGs in `icons/`. Files use kebab-case (`arrow-right.tsx`). Exports stay PascalCase (`ArrowRight`).

**Organized by purpose.** Clocks in `clocks/`, audio in `audio/`, travel widgets in `travel/`. Easy to find what you need.

## Folder structure

```
app/
  layout.tsx                    Root layout, fonts, SEO, global widgets
  globals.css                   Tailwind v4
  loading.tsx, not-found.tsx
  robots.ts, sitemap.ts, manifest.ts

  (marketing)/                  Homepage (/)
    page.tsx
    _components/                Hero, footer, tech stack, CTAs

  (docs)/                       Component docs (/components)
    components/
      layout.tsx                Docs shell (header + sidebar)
      page.tsx                  Browse / category / search views
      [slug]/                   Detail page + copy-code blocks
      _components/
        shell/                  Header, sidebar, TOC, search
        browse/                 Catalog, browse-all, search results
        detail/                 Preview stage

  (dashboard)/                  Analytics UI (/dashboard)
    dashboard/
      page.tsx
      _components/              Login, stats panels, date filters

  _shared/                      Global client widgets
    navigation/                 Route transition loader
    scroll/                     Scroll-to-top, scroll restoration

  api/analytics/                track, auth, dashboard API routes

components/                     Copy-paste UI library (74+ widgets)
  activity/, audio/, battery/, bluetooth/, calender/, clocks/
  discord/, dropdowns/, gallery/, github/, instagram/, linkedin/
  mockups/, notifications/, pricing/, text/, travel/, twitter/
  underlines/                   AnnotatedText decorations
  system/
    loaders/                    PageLoaderOverlay
    analytics/                  AnalyticsTracker (root layout)

icons/
  actions/, activity/, brands/, elements/, keys/

lib/
  cn.ts                         clsx + tailwind-merge helper
  site.ts                       Site name, URL, author, mailto links
  shared/                       Cross-feature utilities (BOX_PATTERN, etc.)
  docs/                         Docs-only shared code (SaveScrollLink, CopyCodeBlock)
  showcase/
    showcase.tsx                Component registry — edit this to add components
    search-showcase.ts            Docs search filtering
    highlight-code.tsx            Syntax highlighting for code blocks
    scroll-restoration.ts       Scroll position on back navigation
    server.ts                   Read component source files from disk
  analytics/                    Self-hosted MongoDB analytics (see below)

types/
  types.tsx                     Shared TypeScript types

public/                         Static assets (images, favicon)
```

Route groups like `(marketing)` and `(docs)` organize files without changing URLs.

## Icons

Icons are React components that return inline SVG. Files use **kebab-case**; imports use the folder path:

```tsx
import { ArrowRight } from "@/icons/actions/arrow-right";
import { Bell } from "@/icons/elements/bell";
import { Pause } from "@/icons/keys/pause";

<ArrowRight size={16} />
<Bell size={20} color="#171717" className="opacity-60" />
```

More icons at [nexticons.in](https://nexticons.in).

## Getting started

```bash
git clone https://github.com/bidyut10/opensourceui.git
cd appui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the homepage, or [http://localhost:3000/components](http://localhost:3000/components) for the component docs.

### Commands

```bash
npm run dev      # local dev server
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint
```

Format files and sort Tailwind classes (uses `prettier-plugin-tailwindcss`):

```bash
npx prettier --write .
npx prettier --check .   # dry run
```

Node.js 18 or later.

## Using a component in your project

There is no `npm install` step for the UI library. Copy the file you want from `components/` into your project and update imports. Most components need:

- `@/lib/cn` — copy `lib/cn.ts` (and install `clsx` + `tailwind-merge`)
- Icons from `@/icons/...` — copy the icon files the component imports
- `next/image` if the component uses images

Keep `"use client"` if the file has it. Components without it can render as server components.

Each component also has a detail page at `/components/[slug]` with a live preview, setup steps, and copy-ready source.

### Adding a component to the showcase

Edit **`lib/showcase/showcase.tsx`**:

```tsx
import { MyNewCard } from "@/components/text/my-new-card";

c(
  "my-new-card",
  <MyNewCard />,
  "components/text/my-new-card.tsx",
  "MyNewCard",
  "Short description shown on the detail page.",
),
```

Add the `c(...)` entry to a row in `showcaseRows`. Each inner array is one homepage row (1, 2, or 3 items). The slug automatically powers `/components/my-new-card` and sidebar navigation.

## Analytics

Privacy-first, self-hosted analytics — no third-party scripts. Events are stored in your own MongoDB Atlas database and viewed at `/dashboard` (password-protected, not indexed).

### Setup

Copy `.env.example` to `.env.local`:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
ANALYTICS_DASHBOARD_SECRET=choose-a-long-random-password
```

Deploy with those env vars on Vercel. In Atlas, allow `0.0.0.0/0` under Network Access so serverless functions can connect.

### What is tracked

- Page views on public routes (debounced)
- Component link clicks from the docs sidebar and browse pages
- Sparse heartbeats while a tab is visible (~every 3 minutes)
- Session duration when the user leaves the tab

Anonymous `visitorId` and per-tab `sessionId` only. Country / region / city from Vercel geo — **no IP addresses stored**. `/dashboard` and `/api/*` are excluded.

### Dashboard

Open `/dashboard` and sign in with `ANALYTICS_DASHBOARD_SECRET`. Filter by All time, Today, 7d, 30d, or a custom date range. "Live users" always reflects the last 5 minutes.

### Code layout

- **Logic:** `lib/analytics/` (`client/` for browser helpers, `server/` for API + MongoDB)
- **Tracker:** `components/system/analytics/tracker.tsx` (mounted in root layout)
- **Loader:** `components/system/loaders/page-loader-overlay.tsx`
- **UI:** `app/(dashboard)/dashboard/`
- **API:** `app/api/analytics/`

Full details: [`lib/analytics/README.md`](lib/analytics/README.md).

Analytics is optional — the public site works without any env vars.

## Deploy on Vercel

This project is built for [Vercel](https://vercel.com). Connect the GitHub repo and deploy:

1. Fork or clone [github.com/bidyut10/appui](https://github.com/bidyut10/opensourceui)
2. Import the project in [Vercel](https://vercel.com/new)
3. Add env vars from `.env.example` only if you want the analytics dashboard

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bidyut10/opensourceui)

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup, adding components, and PR guidelines.

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md).

## Security

To report a vulnerability, see [SECURITY.md](./SECURITY.md). Do not open public issues for security problems.

## Project links

- Website: [opensourceui.in](https://opensourceui.in)
- Repository: [github.com/bidyut10/appui](https://github.com/bidyut10/opensourceui)
- Author: [Bidyut Kundu](https://x.com/BidyutKundu12)

## License

[MIT](./LICENSE) — free for personal and commercial use. Attribution is appreciated but not required.

If something breaks in your setup, open an issue on [GitHub](https://github.com/bidyut10/opensourceui/issues).
