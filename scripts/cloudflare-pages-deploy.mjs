/**
 * Cloudflare dashboard "Deploy command" — must NOT call wrangler in Git CI.
 *
 * Git-connected Pages / Workers Builds upload `out/` automatically after
 * `npm run build`. Running `wrangler pages deploy` again fails with auth
 * errors when CLOUDFLARE_API_TOKEN lacks Pages permissions.
 *
 * Manual upload from your machine: npm run pages:upload
 *
 * Usage: node scripts/cloudflare-pages-deploy.mjs
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function isRemoteBuildEnvironment() {
  if (process.env.FORCE_PAGES_UPLOAD === "1") return false;

  return (
    process.env.CI === "true" ||
    process.env.CI === "1" ||
    process.env.CF_PAGES === "1" ||
    process.env.WORKERS_CI === "1" ||
    Boolean(process.env.CF_PAGES_URL) ||
    Boolean(process.env.CF_PAGES_COMMIT_SHA) ||
    root.includes("buildhome") ||
    process.cwd().includes("buildhome") ||
    !process.stdin.isTTY
  );
}

if (isRemoteBuildEnvironment()) {
  console.log(
    "✓ Remote/CI build — skipping wrangler pages deploy (Cloudflare publishes out/ automatically).",
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
