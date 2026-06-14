import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Card Skeleton built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type CardSkeletonProps = ComponentPropsWithoutRef<"div">;

export const CardSkeleton = forwardRef<HTMLDivElement, CardSkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-skeleton"
      className={cn(
        "w-64 rounded-xl border border-neutral-100 bg-white p-4 shadow-sm",
        className,
      )}
      {...props}
    >
      <div className="mb-4 h-32 w-full animate-pulse rounded-lg bg-neutral-200"></div>
      <div className="space-y-3">
        <div className="h-3 w-full animate-pulse rounded bg-neutral-200"></div>
        <div className="h-3 w-5/6 animate-pulse rounded bg-neutral-200"></div>
        <div className="h-3 w-2/3 animate-pulse rounded bg-neutral-200"></div>
      </div>
    </div>
  ),
);

CardSkeleton.displayName = "CardSkeleton";
