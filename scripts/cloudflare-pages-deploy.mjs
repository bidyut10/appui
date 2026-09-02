/**
 * Cloudflare dashboard "Deploy command".
 *
 * Git-connected builds upload `out/` automatically after `npm run build`.
 * This script intentionally does NOT call wrangler — that causes auth errors
 * when CLOUDFLARE_API_TOKEN is set without Pages permissions.
 *
 * Manual upload from your machine: npm run pages:upload
 */
console.log(
  "✓ Deploy step complete — Cloudflare publishes out/ from Git (no wrangler API call).",
);
