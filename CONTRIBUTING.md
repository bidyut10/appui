# Contributing to opensourceui

Thanks for helping improve [opensourceui](https://opensourceui.in). This project is a copy-paste UI component showcase built with Next.js, React, and Tailwind CSS v4.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## Ways to contribute

- Report bugs or suggest components via [GitHub Issues](https://github.com/bidyut10/opensourceui/issues)
- Fix bugs or improve docs with a pull request
- Add new showcase components (see below)
- Improve accessibility, performance, or copy on existing components
- Update agent reference docs when adding components (see below)

## Agent kit (AI assistants)

Reference files for coding agents live in **`skills/opensource-ui/`**:

| File | Purpose |
| ---- | ------- |
| `skills/opensource-ui/SKILL.md` | Workflow and design rules for agents |
| `skills/opensource-ui/references/catalog.md` | Component index (names, slugs, routes) |
| `skills/opensource-ui/references/design.md` | Full design system |
| `skills/opensource-ui/references/implementation.md` | Repo layout and copy-paste steps |
| `skills/opensource-ui/references/source_inventory.txt` | Exact component file paths |

When you add a component, update `source_inventory.txt` and `catalog.md` if needed. See [AGENTS.md](./AGENTS.md) for how users set this up with Cursor, Claude Code, Codex, and other tools.

Cursor project rules live in **`.cursor/rules/`** (`opensource-ui.mdc`, `component-design.mdc`, `site-chrome.mdc`, `showcase-registry.mdc`, `no-sm-breakpoints.mdc`) and align with the agent kit above.

## Local development

Requirements: **Node.js 20+**, **npm**

```bash
git clone https://github.com/bidyut10/opensourceui.git
cd opensourceui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful commands

```bash
npm run dev            # start dev server
npm run build          # production build (runs check:showcase)
npm run lint           # eslint
npm run typecheck      # TypeScript check
npm run format         # prettier write
npm run format:check   # prettier check (dry run)
npm run check:showcase # verify showcase file paths
```

Analytics is **optional** for local dev. Copy `.env.example` to `.env.local` only if you want to test PostHog or Google Search Console verification.

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
- Do not commit secrets (`.env`, API keys)
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
| `app/(marketing)/`           | Homepage + privacy page                              |
| `skills/opensource-ui/`      | Agent kit for AI coding assistants                   |
| `AGENTS.md`                  | AI assistant setup guide                             |

## Questions

Open a [GitHub Issue](https://github.com/bidyut10/opensourceui/issues) or reach out on [X (@BidyutKundu12)](https://x.com/BidyutKundu12).
