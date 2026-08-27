import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  devIndicators: false,

  images: {
    unoptimized: true,
    qualities: [75, 100],
  },

  skipTrailingSlashRedirect: true,
};

// Dev-only PostHog proxy (/ingest). Production uses vercel.json rewrites on Vercel
// and functions/ingest/[[path]].js + public/_redirects on Cloudflare Pages.
if (process.env.NODE_ENV === "development") {
  nextConfig.rewrites = async () => [
    {
      source: "/ingest/static/:path*",
      destination: "https://us-assets.i.posthog.com/static/:path*",
    },
    {
      source: "/ingest/:path*",
      destination: "https://us.i.posthog.com/:path*",
    },
  ];
}

export default nextConfig;
