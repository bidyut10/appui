# Analytics

Self-hosted, privacy-minded analytics for opensourceui.in. No Google Analytics, no third-party scripts — events go to your own MongoDB Atlas cluster via Next.js API routes.

## What gets tracked

| Event | When | Stored in |
|-------|------|-----------|
| `pageview` | Route change on public pages | `analytics_page_views` |
| `component_click` | Click on a showcase card link | `analytics_component_clicks` |
| `heartbeat` | Every ~3 min while tab is visible | updates `analytics_sessions` |
| `leave` | Tab hidden or closed | session `durationSec` |

We store anonymous `visitorId` (localStorage) and `sessionId` (sessionStorage). Country / region / city come from Vercel geo headers — **no IP addresses are saved**.

`/dashboard` and `/api/*` are never tracked.

## Environment variables

Copy `.env.example` and set:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
ANALYTICS_DASHBOARD_SECRET=your-long-random-password
```

- **MONGODB_URI** — MongoDB Atlas connection string (free tier works).
- **ANALYTICS_DASHBOARD_SECRET** — Password for `/dashboard`. Also used to sign the auth cookie.

On Vercel, allow `0.0.0.0/0` in Atlas Network Access so serverless functions can connect.

## Dashboard

Visit `/dashboard` after deploy. Log in with `ANALYTICS_DASHBOARD_SECRET`. The page is `noindex` and not linked from the public site.

Date filters: All time (default), Today, 7d, 30d, or custom `?from=YYYY-MM-DD&to=YYYY-MM-DD`. Live users always reflect the last 5 minutes.

## Folder layout

```
lib/analytics/
  types.ts              Shared TypeScript shapes
  constants.ts          Collection names, intervals, limits
  index.ts              Types + common server re-exports
  client/
    send-events.ts      Browser tracking (sendBeacon / fetch)
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

UI lives outside this folder:

- `components/analytics/tracker.tsx` — mounted in root layout
- `app/api/analytics/*` — track, auth, dashboard API
- `app/dashboard/` — password-protected dashboard UI

## Import paths

```ts
// Browser components
import { trackPageView } from "@/lib/analytics/client";

// API routes / server pages only — never import from client components
import { getDashboardStats, geoFromRequest } from "@/lib/analytics/server";

// Client dashboard labels (safe — no MongoDB)
import { formatCountry, formatRegion } from "@/lib/analytics/server/geo";
```

## Local development

Without Vercel geo, events show country `LOCAL` → "Local development" in the dashboard. If MongoDB is missing, the track endpoint returns `204` and the site keeps working.

On Windows, `mongodb+srv://` may fail with `querySrv ECONNREFUSED`. The connection layer resolves SRV via public DNS automatically — no extra env var needed.
