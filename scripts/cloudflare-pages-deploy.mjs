/**
 * Deploy script for Cloudflare dashboard "Deploy command".
 *
 * On Cloudflare CI (Git-connected Pages / Workers Builds), the platform uploads
 * `out/` automatically after a successful build. Running `wrangler pages deploy`
 * again causes auth errors or duplicate deploys — so we exit 0 in CI.
 *
 * Locally: runs `wrangler pages deploy` for manual uploads.
 *
 * Usage: node scripts/cloudflare-pages-deploy.mjs
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function isCloudflareCI() {
  return (
    process.env.CF_PAGES === "1" ||
    Boolean(process.env.CF_PAGES_URL) ||
    Boolean(process.env.CF_PAGES_COMMIT_SHA) ||
    process.env.WORKERS_CI === "1"
  );
}

if (isCloudflareCI()) {
  console.log(
    "✓ Cloudflare CI detected — skipping wrangler pages deploy (platform publishes out/ after build).",
  );
  process.exit(0);
}

const wranglerBin = path.join(root, "node_modules", "wrangler", "bin", "wrangler.js");
const result = spawnSync(
  process.execPath,
  [wranglerBin, "pages", "deploy", "out", "--project-name=opensourceui"],
  { cwd: root, stdio: "inherit", env: process.env },
);

process.exit(result.status ?? 1);
