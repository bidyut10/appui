# Contributing to opensourceui

Thanks for helping improve [opensourceui](https://opensourceui.in). This project is a copy-paste UI component showcase built with Next.js, React, and Tailwind CSS v4.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## Ways to contribute

- Report bugs or suggest components via [GitHub Issues](https://github.com/bidyut10/appui/issues)
- Fix bugs or improve docs with a pull request
- Add new showcase components (see below)
- Improve accessibility, performance, or copy on existing components

## Local development

Requirements: **Node.js 18+**, **npm**

```bash
git clone https://github.com/bidyut10/appui.git
cd appui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run lint     # eslint
```

Analytics is **optional** for local dev. The site works without `MONGODB_URI`. To test the dashboard, copy `.env.example` to `.env.local` and fill in the values.

## Adding a component to the showcase

1. Create your component under `components/` (match existing folder conventions).
2. Add icons under `icons/` if needed.
3. Register it in `lib/showcase/showcase.tsx`:

```tsx
import { MyNewCard } from "@/components/cards/my-new-card";

c(
  "my-new-card",
  <MyNewCard />,
  "components/cards/my-new-card.tsx",
  "MyNewCard",
  "Short description shown on the detail page.",
),
```

4. Run `npm run build` and `npm run lint` before opening a PR.

## Pull request guidelines

- Keep changes focused — one component or one fix per PR when possible
- Match existing code style (TypeScript, Tailwind, `cn()` helper)
- Use `"use client"` only when the component needs client features
- Do not commit secrets (`.env`, API keys, MongoDB URIs)
- Ensure CI passes (build + lint)

## Project structure

See the [README](./README.md#folder-structure) for the full layout. Key paths:

| Path                         | Purpose                                              |
| ---------------------------- | ---------------------------------------------------- |
| `components/`                | Copy-paste UI widgets (organized by category)        |
| `components/system/`         | App infrastructure (loaders, analytics tracker)      |
| `icons/`                     | SVG icon components                                  |
| `lib/showcase/showcase.tsx`  | Component registry + homepage grid                   |
| `lib/docs/`                  | Docs shared code (`SaveScrollLink`, `CopyCodeBlock`) |
| `app/(docs)/components/`     | Docs routes — browse, search, detail pages           |
| `app/(marketing)/`           | Homepage                                             |
| `app/(dashboard)/dashboard/` | Analytics dashboard UI                               |

## Questions

Open a [GitHub Issue](https://github.com/bidyut10/appui/issues) or reach out on [X (@BidyutKundu12)](https://x.com/BidyutKundu12).
