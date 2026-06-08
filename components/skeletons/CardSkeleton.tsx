import React, { forwardRef } from "react";

export const CardSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-64 rounded-xl border border-neutral-100 bg-white p-4 shadow-sm ${className}`}
      {...props}
    >
      <div className="mb-4 h-32 w-full animate-pulse rounded-lg bg-neutral-200"></div>
      <div className="space-y-3">
        <div className="h-3 w-full animate-pulse rounded bg-neutral-200"></div>
        <div className="h-3 w-5/6 animate-pulse rounded bg-neutral-200"></div>
        <div className="h-3 w-2/3 animate-pulse rounded bg-neutral-200"></div>
      </div>
    </div>
  );
});
CardSkeleton.displayName = "CardSkeleton";
