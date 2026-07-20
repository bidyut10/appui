import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js compiling / route indicator badge in local dev
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
