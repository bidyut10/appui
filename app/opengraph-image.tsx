import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.displayName} — free React UI components`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px",
          border: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            color: "#737373",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#22c55e",
            }}
          />
          MIT licensed · copy-paste · React & Next.js
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              color: "#171717",
              maxWidth: 980,
            }}
          >
            {siteConfig.displayName}
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: "#525252",
              maxWidth: 920,
            }}
          >
            Free production-ready UI components for React and Next.js
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#a3a3a3",
          }}
        >
          <span>{siteConfig.url.replace("https://", "")}</span>
          <span>TypeScript · Tailwind CSS v4</span>
        </div>
      </div>
    ),
    size,
  );
}
