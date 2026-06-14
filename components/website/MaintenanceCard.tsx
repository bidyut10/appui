import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Settings } from "@/icons/Settings";

/**
 * Maintenance Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type MaintenanceCardProps = {
  title?: string;
  description?: string;
  progress?: number;
  estimatedTime?: string;
} & ComponentPropsWithoutRef<"div">;

export const MaintenanceCard = forwardRef<
  HTMLDivElement,
  MaintenanceCardProps
>(
  (
    {
      className,
      title = "Under Maintenance",
      description = "We're making improvements. Expected back online in ~2 hours.",
      progress = 65,
      estimatedTime = "Estimated: 4:30 PM IST",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="maintenance-card"
      className={cn(
        "w-72 rounded-2xl border border-neutral-100 bg-white p-6 text-center font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div
        data-slot="maintenance-card-icon"
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-neutral-50 text-amber-500"
      >
        <Settings />
      </div>
      <h3
        data-slot="maintenance-card-title"
        className="mb-1 text-base font-semibold text-neutral-900"
      >
        {title}
      </h3>
      <p
        data-slot="maintenance-card-description"
        className="mb-4 text-xs leading-relaxed text-neutral-500"
      >
        {description}
      </p>
      <div
        data-slot="maintenance-card-progress"
        className="mb-3 h-1.5 overflow-hidden rounded-full bg-neutral-100"
      >
        <div
          className="h-full animate-pulse rounded-full bg-amber-500"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
      <p className="font-mono text-[10px] text-neutral-400">{estimatedTime}</p>
    </div>
  ),
);

MaintenanceCard.displayName = "MaintenanceCard";
