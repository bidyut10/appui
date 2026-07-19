"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type MapBackgroundProps = Readonly<{
  className?: string;
}>;

// Simplified map tiles — water, parks, and roads
function MapBackground({ className }: MapBackgroundProps) {
  return (
    <svg
      viewBox="0 0 176 176"
      className={cn("h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <rect width="176" height="176" fill="#FAFAFA" />

      <path
        d="M176 120 C130 108 95 130 55 118 C30 110 10 115 0 108 L0 176 L176 176 Z"
        fill="#E8F2FA"
      />
      <path
        d="M176 0 L100 0 C88 48 78 96 68 144 L62 176 L176 176 Z"
        fill="#F0F5EE"
      />

      <path
        d="M-10 52 C48 38 96 62 150 46 C168 40 178 44 186 38"
        stroke="#FFFFFF"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M-10 98 C42 84 88 108 138 92 C162 84 174 90 186 82"
        stroke="#FFFFFF"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M54 -10 C48 42 44 94 40 146 C38 164 36 176 34 186"
        stroke="#FFFFFF"
        strokeWidth="11"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M118 -10 C122 50 126 98 130 146 C132 164 134 176 136 186"
        stroke="#FFFFFF"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M16 -10 C28 56 40 108 52 160 C58 172 62 180 66 186"
        stroke="#FFFFFF"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  );
}

type MapPinMarkerProps = Readonly<{
  city: string;
}>;

// Centered iOS-blue pin with the city name below it
function MapPinMarker({ city }: MapPinMarkerProps) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <svg
          width="24"
          height="32"
          viewBox="0 0 28 36"
          aria-hidden
          className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.12)]"
        >
          <path
            d="M14 36C14 36 26 20.5 26 12C26 5.4 20.6 0 14 0S2 5.4 2 12C2 20.5 14 36 14 36Z"
            fill="#007AFF"
          />
          <circle cx="14" cy="12" r="4.5" fill="white" />
        </svg>
        <p className="mt-1 text-[11px] leading-none font-semibold text-neutral-800 text-shadow-sm">
          {city}
        </p>
      </div>
    </div>
  );
}

// city — label shown under the map pin (defaults to "Kolkata")
export type IosMapLocationWidgetProps = Readonly<
  {
    city?: string;
  } & ComponentPropsWithoutRef<"div">
>;

// iOS Maps-style location card — light map background with a centered teardrop pin
export const IosMapLocationWidget = forwardRef<
  HTMLDivElement,
  IosMapLocationWidgetProps
>(({ className, city = "Kolkata", ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="ios-map-location-widget"
      className={cn(
        "relative h-44 w-44 max-w-full overflow-hidden rounded-3xl border border-neutral-100 bg-white font-sans shadow-lg shadow-black/5 select-none",
        className,
      )}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", sans-serif',
      }}
      {...props}
    >
      <MapBackground />
      <MapPinMarker city={city} />
    </div>
  );
});

IosMapLocationWidget.displayName = "IosMapLocationWidget";
