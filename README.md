# opensourceui

[![Live site](https://img.shields.io/badge/live-opensourceui.in-000000?style=flat-square)](https://opensourceui.in)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Deploy with Vercel](https://img.shields.io/badge/deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/new/clone?repository-url=https://github.com/bidyut10/appui)

Live site: [opensourceui.in](https://opensourceui.in)

Copy-paste UI components for React and Next.js — Next.js 16, Tailwind v4, icons from [nexticons.in](https://nexticons.in). Every component on the homepage runs live.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bidyut10/appui)

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

No shadcn, no MUI, no Radix underneath. Just React, Tailwind, and SVG.

## Design principles

**Copy-paste first.** Each component lives in its own file with sensible defaults. Paste it into a Next.js app, fix import paths, and it should render.

**Light theme, clean surfaces.** White or near-white backgrounds, neutral borders, restrained accents. No purple-gradient-everything.

**Consistent API.** Interactive components use `forwardRef`. Props extend native HTML types. Classes merge through `cn()`. Client components use `"use client"` only when needed.

**Real demo content.** Cards ship with names, numbers, and labels that look like real UI—not empty gray boxes.

**Icons as components.** Hand-written SVGs in `icons/`. Files use kebab-case (`arrow-right.tsx`). Exports stay PascalCase (`ArrowRight`).

**Organized by purpose.** Clocks in `clocks/`, dropdowns in `dropdowns/`, travel widgets in `travel/`. Easy to find what you need.

## Folder structure

```
app/
  layout.tsx              Site layout, fonts, SEO metadata
  page.tsx                Homepage
  Box.tsx                 Preview wrapper for the grid
  globals.css             Tailwind v4 import
  components/[slug]/      Detail + copy-code pages
  dashboard/              Password-protected analytics UI (/dashboard)
  api/analytics/          track, auth, dashboard API routes
  robots.ts               Robots.txt
  sitemap.ts              Sitemap
  manifest.ts             Web app manifest

components/
  activity/               Focus, DND widgets
  analytics/
    tracker.tsx           Invisible pageview / heartbeat tracker
  audio/                  Recorders, earbuds, voice assistant
  battery/                Battery face widget
  bluetooth/              Bluetooth toggle widget
  calender/               iOS calendar, activity calendar
  cards/                  Social, polaroid, notepad, receipt cards
  clocks/                 Analog & iOS digital clocks
  compass/                Compass widget
  dropdowns/              User menu, context menu
  github/                 Contribution graph card
  loaders/
    page-loader-overlay.tsx  Full-screen loader (dashboard + nav)
  map-location/           iOS map location widget
  mockups/                Phone, laptop, browser frames
  notifications/          Apple-style notification banner
  profile/                Blob profile card
  stopwatch/              Stopwatch widget
  torch/                  Flashlight face widget
  travel/                 Flight, ride, scooter, agenda widgets
  wifi/                   Wi-Fi toggle widget

icons/
  actions/                Arrows, chevrons, chat
  activity/               Check, bookmark, edit, etc.
  brands/                 Apple, GitHub, Tailwind, etc.
  elements/               Bell, user, battery, etc.
  keys/                   Play, pause, settings, etc.

lib/
  cn.ts                   cn() — clsx + tailwind-merge
  utils.ts                Re-exports cn (legacy import path)
  site.ts                 Site name, URL, SEO constants
  analytics/              Self-hosted MongoDB analytics (see below)
  showcase/
    showcase.tsx          ← edit this: imports + showcaseRows
    server.ts             copy-code file reader (don't edit)
    index.ts              re-exports (don't edit)
    highlight-code.tsx    syntax highlighting

types/
  types.tsx               Shared TypeScript types

public/                   Static assets (images, favicon)
```

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
git clone https://github.com/bidyut10/appui.git
cd appui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The homepage renders every showcased component in a scrollable grid.

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

There is no `npm install` step. Copy the file you want from `components/` into your project and update imports. Most components need:

- `@/lib/cn` — copy `lib/cn.ts` (and install `clsx` + `tailwind-merge`)
- Icons from `@/icons/...` — copy the icon files the component imports
- `next/image` if the component uses images

Keep `"use client"` if the file has it. Components without it can render as server components.

To add a component, edit **`lib/showcase/showcase.tsx`**:

```tsx
import { MyNewCard } from "@/components/cards/my-new-card";

export const showcaseRows = [
  // triple row
  [
    c(
      "my-new-card",
      <MyNewCard />,
      "components/cards/my-new-card.tsx",
      "MyNewCard",
    ),
    c(
      "instagram-post",
      <InstagramPostCard />,
      "components/cards/instagram-post-card.tsx",
      "InstagramPostCard",
    ),
    c(
      "threads-post",
      <ThreadsPostCard />,
      "components/cards/threads-post-card.tsx",
      "ThreadsPostCard",
    ),
  ],
  // double row
  [
    c(
      "instagram-post",
      <InstagramPostCard />,
      "components/cards/instagram-post-card.tsx",
      "InstagramPostCard",
    ),
    c(
      "threads-post",
      <ThreadsPostCard />,
      "components/cards/threads-post-card.tsx",
      "ThreadsPostCard",
    ),
  ],
  // single row
  [
    c(
      "github-contribution",
      <GithubContributionCard />,
      "components/github/github-contribution.tsx",
      "GithubContributionCard",
    ),
  ],
];
```

Each inner array = one row (1, 2, or 3 items). Import at the top, add `c(...)` to a row. Nothing else to update.

## Analytics

Privacy-first, self-hosted analytics — no third-party scripts. Events are stored in your own MongoDB Atlas database and viewed at `/dashboard` (password-protected, not indexed).

### Setup

Add to `.env.local` (see `.env.example`):

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
ANALYTICS_DASHBOARD_SECRET=choose-a-long-random-password
```

Deploy with those env vars on Vercel. In Atlas, allow `0.0.0.0/0` under Network Access so serverless functions can connect.

### What is tracked

- Page views on public routes (debounced)
- Component card clicks from the homepage grid
- Sparse heartbeats while a tab is visible (~every 3 minutes)
- Session duration when the user leaves the tab

Anonymous `visitorId` and per-tab `sessionId` only. Country / region / city from Vercel geo — **no IP addresses stored**. `/dashboard` and `/api/*` are excluded.

### Dashboard

Open `/dashboard` and sign in with `ANALYTICS_DASHBOARD_SECRET`. Filter by All time, Today, 7d, 30d, or a custom date range. "Live users" always reflects the last 5 minutes.

### Code layout

Logic lives in `lib/analytics/` (`client/` for browser helpers, `server/` for API + MongoDB). The invisible tracker is `components/analytics/tracker.tsx`, mounted in the root layout.

Full details: [`lib/analytics/README.md`](lib/analytics/README.md).

Analytics is optional — the public site works without any env vars.

## Deploy on Vercel

This project is built for [Vercel](https://vercel.com). Connect the GitHub repo and deploy:

1. Fork or clone [github.com/bidyut10/appui](https://github.com/bidyut10/appui)
2. Import the project in [Vercel](https://vercel.com/new)
3. Add env vars from `.env.example` only if you want the analytics dashboard

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bidyut10/appui)

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup, adding components, and PR guidelines.

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md).

## Security

To report a vulnerability, see [SECURITY.md](./SECURITY.md). Do not open public issues for security problems.

## Project links

- Website: [opensourceui.in](https://opensourceui.in)
- Repository: [github.com/bidyut10/appui](https://github.com/bidyut10/appui)
- Author: [Bidyut Kundu](https://x.com/BidyutKundu12)

## License

[MIT](./LICENSE) — free for personal and commercial use. Attribution is appreciated but not required.

If something breaks in your setup, open an issue on [GitHub](https://github.com/bidyut10/appui/issues).
