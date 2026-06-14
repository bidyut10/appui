"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type MinimalCompassWidgetProps = {
  heading?: string;
} & ComponentPropsWithoutRef<"div">;

export const MinimalCompassWidget = forwardRef<
  HTMLDivElement,
  MinimalCompassWidgetProps
>(({ className, heading = "N", ...props }, ref) => (
  <div
    ref={ref}
    data-slot="minimal-compass-widget"
    className={cn(
      "relative flex h-40 w-40 max-w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-black font-sans shadow-lg",
      className,
    )}
    {...props}
  >
    <span className="absolute top-6 font-mono text-xs font-bold text-white">
      {heading}
    </span>
    <div className="flex flex-col items-center gap-0.5">
      {Array.from({ length: 7 }).map((_, row) => (
        <div key={row} className="flex gap-0.5">
          {Array.from({ length: 7 - Math.abs(row - 3) * 2 }).map((_, col) => (
            <span
              key={col}
              className={cn(
                "h-1 w-1 rounded-full",
                row <= 2 ? "bg-white" : "bg-neutral-600",
              )}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
));

MinimalCompassWidget.displayName = "MinimalCompassWidget";
