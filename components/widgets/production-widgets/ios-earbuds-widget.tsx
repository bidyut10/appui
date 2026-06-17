"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

// Inline SVG — left and right bud groups with gradient fills for a subtle 3D look
function AirPodsPair() {
  return (
    <svg viewBox="0 0 120 80" className="h-19 w-27" aria-hidden>
      <defs>
        <linearGradient id="earbuds-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E8ED" />
        </linearGradient>
        <linearGradient id="earbuds-stem" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F7" />
          <stop offset="100%" stopColor="#D1D1D6" />
        </linearGradient>
      </defs>

      <g transform="translate(14 4)">
        <path
          d="M28 6 C38 6 44 14 44 24 C44 34 38 40 28 40 C18 40 12 34 12 24 C12 14 18 6 28 6 Z"
          fill="url(#earbuds-body)"
          stroke="#D1D1D6"
          strokeWidth="0.75"
        />
        <ellipse cx="28" cy="24" rx="8" ry="10" fill="#E5E5EA" opacity="0.45" />
        <rect
          x="24"
          y="38"
          width="8"
          height="26"
          rx="4"
          fill="url(#earbuds-stem)"
          stroke="#C7C7CC"
          strokeWidth="0.5"
        />
        <rect x="25" y="58" width="6" height="4" rx="2" fill="#AEAEB2" />
      </g>

      <g transform="translate(58 4)">
        <path
          d="M28 6 C38 6 44 14 44 24 C44 34 38 40 28 40 C18 40 12 34 12 24 C12 14 18 6 28 6 Z"
          fill="url(#earbuds-body)"
          stroke="#D1D1D6"
          strokeWidth="0.75"
        />
        <ellipse cx="28" cy="24" rx="8" ry="10" fill="#E5E5EA" opacity="0.45" />
        <rect
          x="24"
          y="38"
          width="8"
          height="26"
          rx="4"
          fill="url(#earbuds-stem)"
          stroke="#C7C7CC"
          strokeWidth="0.5"
        />
        <rect x="25" y="58" width="6" height="4" rx="2" fill="#AEAEB2" />
      </g>
    </svg>
  );
}

// name — device label shown at the bottom; connected — drives the status dot and subtitle
export type IosEarbudsWidgetProps = {
  name?: string;
  connected?: boolean;
} & ComponentPropsWithoutRef<"div">;

// iOS-style earbuds card: header, AirPods illustration, device name + connection state
export const IosEarbudsWidget = forwardRef<HTMLDivElement, IosEarbudsWidgetProps>(
  ({ className, name = "AirPods Pro", connected = true, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="minimal-earbuds-widget"
      className={cn(
        "flex h-44 w-44 max-w-full flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg shadow-black/5 select-none",
        className,
      )}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", sans-serif',
      }}
      {...props}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
          Audio
        </p>
        <span
          aria-hidden
          className={cn(
            "h-2 w-2 shrink-0 rounded-full",
            connected ? "bg-[#34C759]" : "bg-neutral-300",
          )}
        />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <AirPodsPair />
      </div>

      <div className="text-center">
        <p className="text-[12px] font-semibold text-neutral-900">{name}</p>
        <p className="mt-0.5 text-[10px] font-medium text-neutral-400">
          {connected ? "Connected" : "Tap to connect"}
        </p>
      </div>
    </div>
  ),
);

IosEarbudsWidget.displayName = "IosEarbudsWidget";
