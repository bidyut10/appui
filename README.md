# opensourceui

Live site: [opensourceui.in](https://opensourceui.in)

Components I built for my own apps—Next.js, Tailwind v4, icons from [nexticons.in](https://nexticons.in). Everything on the homepage runs live. Copy-paste source is on the way.

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
  robots.ts               Robots.txt
  sitemap.ts              Sitemap
  manifest.ts             Web app manifest

components/
  activity/               Focus, DND widgets
  audio/                  Recorders, earbuds, voice assistant
  battery/                Battery face widget
  bluetooth/              Bluetooth toggle widget
  calender/               iOS calendar, activity calendar
  cards/                  Social, polaroid, notepad, receipt cards
  clocks/                 Analog & iOS digital clocks
  compass/                Compass widget
  dropdowns/              User menu, context menu
  github/                 Contribution graph card
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
    c("my-new-card", <MyNewCard />, "components/cards/my-new-card.tsx", "MyNewCard"),
    c("instagram-post", <InstagramPostCard />, "components/cards/instagram-post-card.tsx", "InstagramPostCard"),
    c("threads-post", <ThreadsPostCard />, "components/cards/threads-post-card.tsx", "ThreadsPostCard"),
  ],
  // double row
  [
    c("instagram-post", <InstagramPostCard />, "components/cards/instagram-post-card.tsx", "InstagramPostCard"),
    c("threads-post", <ThreadsPostCard />, "components/cards/threads-post-card.tsx", "ThreadsPostCard"),
  ],
  // single row
  [
    c("github-contribution", <GithubContributionCard />, "components/github/github-contribution.tsx", "GithubContributionCard"),
  ],
];
```

Each inner array = one row (1, 2, or 3 items). Import at the top, add `c(...)` to a row. Nothing else to update.

## Project links

- Website: [opensourceui.in](https://opensourceui.in)
- Repository: [github.com/bidyut10/appui](https://github.com/bidyut10/appui)
- Author: [Bidyut Kundu](https://x.com/BidyutKundu12)

## License

Open source. Use in personal or commercial projects. Attribution is appreciated but not required.

If something breaks in your setup, open an issue on GitHub.
