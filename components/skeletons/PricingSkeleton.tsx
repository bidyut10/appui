import React, { forwardRef } from "react";

export const PricingSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-64 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
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
));
PricingSkeleton.displayName = "PricingSkeleton";
