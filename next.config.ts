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

export default nextConfig;
