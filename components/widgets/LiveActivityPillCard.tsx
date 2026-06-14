import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Bike } from "@/icons/Bike";

/**
 * Live Activity Pill Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type LiveActivityPillCardProps = {
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  progress?: number;
  eta?: string;
} & ComponentPropsWithoutRef<"div">;

export const LiveActivityPillCard = forwardRef<
  HTMLDivElement,
  LiveActivityPillCardProps
>(
  (
    {
      className,
      icon = <Bike size={16} />,
      title = "Ride to Park Street",
      subtitle = "3.2 km remaining",
      progress = 68,
      eta = "8 min",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="live-activity-pill-card"
      className={cn("w-full max-w-xs font-sans", className)}
      {...props}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-white">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-neutral-900">
            {title}
          </p>
          <p className="text-[11px] text-neutral-500">{subtitle}</p>
          <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-teal-500"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-bold text-neutral-800">
          {eta}
        </span>
      </div>
    </div>
  ),
);

LiveActivityPillCard.displayName = "LiveActivityPillCard";
