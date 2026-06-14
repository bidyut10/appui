"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Infinite marquee text strip — trending taglines ticker.
 *
 * Replace demo items with your own labels.
 */
export type MarqueeTextWidgetProps = {
  items?: string[];
  speed?: number;
} & ComponentPropsWithoutRef<"div">;

export const MarqueeTextWidget = forwardRef<
  HTMLDivElement,
  MarqueeTextWidgetProps
>(
  (
    {
      className,
      items = [
        "Copy-paste UI",
        "Tailwind v4",
        "React 19",
        "TypeScript",
        "Open source",
        "No dependencies",
      ],
      speed = 22,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="marquee-text-widget"
      className={cn(
        "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white py-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <style>{`
        @keyframes marquee-text-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <p className="mb-3 px-4 text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
        Trending tags
      </p>

      <div className="relative flex overflow-hidden">
        <div
          className="flex shrink-0 gap-3 px-2"
          style={{
            animation: `marquee-text-scroll ${speed}s linear infinite`,
          }}
        >
          {[...items, ...items].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-medium text-neutral-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  ),
);

MarqueeTextWidget.displayName = "MarqueeTextWidget";
