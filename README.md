# opensourceui

Live site: [opensourceui.in](https://opensourceui.in)

This is a collection of UI components I built for my own React and Next.js projects. I got tired of pulling half-finished cards from random CodePen tabs or fighting with libraries that hide everything behind ten layers of abstraction. So I started building the pieces I actually needed — social cards, dashboards, auth forms, upload zones, Apple-style widgets, that sort of thing — and kept going until there were 250+ of them.

Everything runs on the site as a live preview. You can scroll through the full library on the homepage. Copy-and-paste code for each component is on the way; right now the focus is getting the designs right and keeping the code readable.

## Why I built this

Most UI kits either look the same (white card, gray border, blue button, done) or need you to learn their whole system before you can use one button. I wanted something closer to how I actually work: find a component that looks good, drop the file into my project, tweak the props, move on.

These components are meant to be copied, not installed as a package. No provider wrappers, no theme config files you have to decipher. Each file is self-contained. If you need a pricing card or a session heatmap widget, you grab that one file and wire it up yourself.

I also needed icons that did not require another npm dependency, so I wrote my own SVG components and paired them with [nexticons.in](https://nexticons.in) where it made sense.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **clsx** + **tailwind-merge** for class name handling

No shadcn, no MUI, no Radix underneath. Just React, Tailwind, and SVG.

## Design principles

A few rules I stuck to while building:

**Copy-paste first.** Every component lives in its own file. Props have sensible defaults so the component renders something useful with zero configuration. You should be able to paste it into a fresh Next.js app and see it work.

**Light theme, clean surfaces.** Most components use a white or near-white background, neutral borders, and restrained accent colors (teal, sky, amber, emerald). I avoided the purple-gradient-on-everything look that most AI-generated UIs fall into.

**Consistent component API.** Interactive components use `forwardRef`. Props extend the native HTML element type (`ComponentPropsWithoutRef<"div">` and similar). Classes merge through a shared `cn()` helper. Exported prop types are named and public. Components that need client-side state or event handlers get `"use client"`; everything else stays as a server component.

**Real content, not lorem ipsum boxes.** Cards ship with realistic demo data — names, numbers, chart values, ticket queues. It is easier to judge a design when the content looks like something you would actually ship.

**Icons as components.** The `icons/` folder has 84 hand-written SVG React components. They accept `size`, `color`, and `className` like any normal icon library, but there is no extra package to install.

**Organized by what things are, not by atomic design jargon.** Dashboard cards go in `dashboard/`. Dropdowns go in `dropdowns/`. You should not need a map to find a file.

## Folder structure

```
app/
  layout.tsx        Site layout, fonts, SEO metadata
  page.tsx          Homepage — renders every component in a preview grid
  Box.tsx           Preview wrapper for the showcase layout
  globals.css       Tailwind import and a few global utilities
  robots.ts         Robots.txt generation
  sitemap.ts        Sitemap generation
  manifest.ts       Web app manifest

components/
  accordions/       Accordion variants
  apple/            Apple-inspired widgets (maps, wallet, control center, etc.)
  banners/          Cookie banners, alert strips
  cards/            General-purpose cards (social, pricing, auth, media, etc.)
  dashboard/        Analytics, KPIs, charts, ops widgets
  dropdowns/        Menus, pickers, context menus
  interactive/      Upload zones, kanban, chat, timers
  marketing/        Hero sections, newsletters, CTAs
  menubar/          Menu bar components
  mockups/          Phone, browser, laptop device frames
  navbars/          Navigation bars
  searchbar/        Search inputs and command palettes
  sections/         Page sections (timeline, bento grid, empty states)
  skeletons/        Loading skeleton placeholders
  text/             Typography-focused cards and editorial layouts
  toasts/           Toast notifications
  website/          Utility UI (breadcrumbs, pagination, settings, 404)
  widgets/          Small standalone widgets (filters, steppers, pills)

icons/              84 SVG icon components (ArrowRight, Bell, User, etc.)

lib/
  utils.ts          cn() — clsx + tailwind-merge
  site.ts           Site name, URL, and SEO constants

public/             Static files (favicon, images used in demos)
```

## Icons

All icons are plain React components that return inline SVG. They live in the `icons/` directory at the project root, not inside `components/`.

Basic usage:

```tsx
import { ArrowRight } from "@/icons/ArrowRight";
import { Bell } from "@/icons/Bell";

<ArrowRight size={16} />
<Bell size={20} color="#171717" className="opacity-60" />
```

For a wider set of icons, check out [nexticons.in](https://nexticons.in) — that is what I use alongside these local ones.

## Getting started

Clone the repo and run it locally:

```bash
git clone https://github.com/bidyut10/appui.git
cd appui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The homepage is one long scrollable grid of every component.

Other commands:

```bash
npm run build    # production build
npm run start    # run the production build
npm run lint     # eslint
```

You need Node.js 18 or later.

## Using a component in your project

There is no `npm install opensourceui` step. Pick the file you want from `components/`, copy it into your project, and fix the import paths. Most components only need:

- `@/lib/utils` (the `cn` function — copy `lib/utils.ts` too)
- Whatever icons the component imports from `@/icons/`
- `next/image` if the component uses images

If the file starts with `"use client"`, keep that directive. If it does not, it can render as a server component.

## Project links

- Website: [opensourceui.in](https://opensourceui.in)
- Repository: [github.com/bidyut10/appui](https://github.com/bidyut10/appui)
- Author: [Bidyut Kundu](https://x.com/BidyutKundu12)

## License

Open source. Use these in personal or commercial projects. Attribution is appreciated but not required.

If something looks off or a component breaks in your setup, open an issue on GitHub. I am still actively adding components and tightening up the ones already there.
