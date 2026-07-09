# Analytics

Two optional layers for [opensourceui.in](https://opensourceui.in):

1. **Self-hosted dashboard** — MongoDB + `/dashboard`
2. **PostHog** — product analytics in PostHog cloud

Use either, both, or neither.

## Which one do you need?

| | Self-hosted `/dashboard` | PostHog |
|---|---|---|
| Page views | Yes | Yes |
| Component clicks | Yes | Yes |
| Live users | Yes | Yes |
| Country / region | Yes | Yes |
| Session replay | No | Yes |
| Funnels / retention | No | Yes |
| Data ownership | Your MongoDB | PostHog cloud |
| Extra cost | MongoDB free tier | PostHog free tier |

**If you use PostHog, you do not need the MongoDB dashboard** unless you want your own private copy of the data. To run PostHog only, set:

```env
NEXT_PUBLIC_POSTHOG_KEY=phc_your_key
NEXT_PUBLIC_SELF_HOSTED_ANALYTICS=false
```

Then remove `MONGODB_URI` and `ANALYTICS_DASHBOARD_SECRET` from Vercel.

## What gets tracked

### MongoDB dashboard

| Event | When | Stored in |
|-------|------|-----------|
| `pageview` | Route change on public pages | `analytics_page_views` |
| `component_click` | Click on a component link in docs (sidebar, browse list, cards) | `analytics_component_clicks` |
| `heartbeat` | Every ~3 min while tab is visible | updates `analytics_sessions` |
| `leave` | Tab hidden or closed | session `durationSec` |

### PostHog (when `NEXT_PUBLIC_POSTHOG_KEY` is set)

| Event | PostHog name |
|-------|--------------|
| Page view | `$pageview` |
| Component click | `component_click` |
| Tab leave | `$pageleave` (automatic) |

We store anonymous `visitorId` (localStorage) and `sessionId` (sessionStorage). Country / region / city come from Vercel geo headers — **no IP addresses are saved**.

`/dashboard` and `/api/*` are never tracked.

## Environment variables

Copy `.env.example` to `.env.local`:

```env
# Self-hosted dashboard (optional)
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
ANALYTICS_DASHBOARD_SECRET=your-long-random-password
NEXT_PUBLIC_SELF_HOSTED_ANALYTICS=true

# PostHog (optional)
NEXT_PUBLIC_POSTHOG_KEY=phc_your_project_key_here
NEXT_PUBLIC_POSTHOG_HOST=/ingest
NEXT_PUBLIC_POSTHOG_UI_HOST=https://us.posthog.com
```

- **MONGODB_URI** — MongoDB Atlas connection string.
- **ANALYTICS_DASHBOARD_SECRET** — Password for `/dashboard`.
- **NEXT_PUBLIC_SELF_HOSTED_ANALYTICS** — Set to `false` to disable MongoDB tracking when using PostHog only.
- **NEXT_PUBLIC_POSTHOG_KEY** — PostHog project API key. Leave blank to disable PostHog.
- **NEXT_PUBLIC_POSTHOG_HOST** — Defaults to `/ingest` (proxied via `next.config.ts`).

On Vercel, allow `0.0.0.0/0` in Atlas Network Access so serverless functions can connect.

## PostHog setup

1. Sign up at [posthog.com](https://posthog.com) and create a project.
2. Copy the **Project API Key** (`phc_...`).
3. Add env vars to `.env.local` and Vercel.
4. Redeploy and check **Activity** in PostHog.

Events are sent from `lib/analytics/client/posthog.ts` via the same `trackPageView` / `trackComponentClick` helpers — no extra tracker needed.

## Dashboard

Visit `/dashboard` after deploy. Log in with `ANALYTICS_DASHBOARD_SECRET`. The page is `noindex` and not linked from the public site.

**Date filters:** All time (default), Today, Last 7 days, Last 30 days, or custom `?from=YYYY-MM-DD&to=YYYY-MM-DD`.

**Live users** always reflect the last 5 minutes, regardless of the selected date range.

The dashboard UI lives in `app/(dashboard)/dashboard/` and matches the docs site aesthetic — stat cards, ranking panels, and date-range pills.

## Folder layout

```
lib/analytics/
  types.ts              Shared TypeScript shapes
  constants.ts          Collection names, intervals, limits
  index.ts              Types + common server re-exports
  client/
    send-events.ts      Browser tracking (sendBeacon / fetch)
    posthog.ts          Optional PostHog bridge
    index.ts
  server/
    auth.ts             Dashboard password + cookie
    geo.ts              Vercel geolocation helpers
    validate.ts         Sanitize track payloads
    track-event.ts      Write events + sessions to MongoDB
    get-stats.ts        Dashboard aggregations
    date-range.ts       ?from=&to= parsing
    connection/
      db.ts             Mongo client singleton + indexes
      resolve-srv-uri.ts  Windows SRV DNS fallback
```

Related files outside `lib/analytics/`:

| Path | Purpose |
|------|---------|
| `components/system/analytics/tracker.tsx` | Invisible tracker mounted in root layout |
| `lib/docs/save-scroll-link.tsx` | Docs links that record component clicks |
| `app/api/analytics/track/route.ts` | POST endpoint for browser events |
| `app/api/analytics/auth/route.ts` | Dashboard login / logout |
| `app/api/analytics/dashboard/route.ts` | GET aggregated stats |
| `app/(dashboard)/dashboard/` | Password-protected dashboard UI |

## Import paths

```ts
// Browser components
import { trackPageView, trackComponentClick } from "@/lib/analytics/client";

// API routes / server pages only — never import from client components
import { getDashboardStats, geoFromRequest } from "@/lib/analytics/server";

// Client dashboard labels (safe — no MongoDB)
import { formatCountry, formatRegion } from "@/lib/analytics/server/geo";
```

## Local development

Without Vercel geo, events show country `LOCAL` → "Local development" in the dashboard. If MongoDB is missing, the track endpoint returns `204` and the site keeps working.

On Windows, `mongodb+srv://` may fail with `querySrv ECONNREFUSED`. The connection layer resolves SRV via public DNS automatically — no extra env var needed.
