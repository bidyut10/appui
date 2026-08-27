/**
 * Proxies PostHog requests from /ingest/* to PostHog's US endpoints.
 * Used on Cloudflare Pages so NEXT_PUBLIC_POSTHOG_HOST=/ingest works in production.
 */
export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  const ingestPrefix = "/ingest/";

  if (!url.pathname.startsWith(ingestPrefix)) {
    return new Response("Not found", { status: 404 });
  }

  const path = url.pathname.slice(ingestPrefix.length);
  const targetOrigin = path.startsWith("static/")
    ? "https://us-assets.i.posthog.com"
    : "https://us.i.posthog.com";

  const targetUrl = new URL(`${targetOrigin}/${path}`);
  targetUrl.search = url.search;

  const headers = new Headers(request.headers);
  headers.set("Host", targetUrl.host);

  const init = {
    method: request.method,
    headers,
    redirect: "follow",
  };

  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = request.body;
  }

  return fetch(targetUrl.toString(), init);
}
