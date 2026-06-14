import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Dashboard Skeleton built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type DashboardSkeletonProps = ComponentPropsWithoutRef<"div">;

export const DashboardSkeleton = forwardRef<
  HTMLDivElement,
  DashboardSkeletonProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="dashboard-skeleton"
    className={cn(
      "w-72 rounded-2xl border border-neutral-100 bg-white p-4 font-sans",
      className,
    )}
    {...props}
  >
    <div className="mb-4 flex items-center justify-between">
      <div className="h-3 w-24 animate-pulse rounded bg-neutral-200" />
      <div className="h-7 w-7 animate-pulse rounded-lg bg-neutral-200" />
    </div>
    <div className="mb-4 grid grid-cols-2 gap-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-xl bg-neutral-50 p-3">
          <div className="mb-2 h-2 w-12 animate-pulse rounded bg-neutral-200" />
          <div className="h-5 w-16 animate-pulse rounded bg-neutral-200" />
        </div>
      ))}
    </div>
    <div className="mb-3 h-24 animate-pulse rounded-xl bg-neutral-100" />
    <div className="space-y-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-6 w-6 shrink-0 animate-pulse rounded-full bg-neutral-200" />
          <div className="h-2 flex-1 animate-pulse rounded bg-neutral-100" />
        </div>
      ))}
    </div>
  </div>
));

DashboardSkeleton.displayName = "DashboardSkeleton";
