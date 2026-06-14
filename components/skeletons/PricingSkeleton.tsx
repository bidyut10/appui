import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Pricing Skeleton built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type PricingSkeletonProps = ComponentPropsWithoutRef<"div">;

export const PricingSkeleton = forwardRef<HTMLDivElement, PricingSkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="pricing-skeleton"
      className={cn(
        "w-64 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-3 h-2.5 w-16 animate-pulse rounded bg-neutral-200" />
      <div className="mb-4 h-8 w-20 animate-pulse rounded-lg bg-neutral-200" />
      <div className="mb-5 space-y-2.5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-3.5 w-3.5 shrink-0 animate-pulse rounded-full bg-neutral-200" />
            <div className="h-2 flex-1 animate-pulse rounded bg-neutral-100" />
          </div>
        ))}
      </div>
      <div className="h-10 animate-pulse rounded-lg bg-neutral-200" />
    </div>
  ),
);

PricingSkeleton.displayName = "PricingSkeleton";
