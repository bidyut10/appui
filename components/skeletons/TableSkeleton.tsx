import React, { forwardRef } from "react";

export const TableSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans ${className}`}
    {...props}
  >
    <div className="flex gap-4 border-b border-neutral-100 px-4 py-3">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="h-2.5 flex-1 animate-pulse rounded bg-neutral-200"
        />
      ))}
    </div>
    {[1, 2, 3, 4, 5].map((row) => (
      <div
        key={row}
        className="flex items-center gap-4 border-b border-neutral-50 px-4 py-3"
      >
        <div className="h-6 w-6 shrink-0 animate-pulse rounded-full bg-neutral-200" />
        <div className="h-2 flex-1 animate-pulse rounded bg-neutral-100" />
        <div className="h-2 w-12 animate-pulse rounded bg-neutral-100" />
        <div className="h-2 w-8 animate-pulse rounded bg-neutral-100" />
      </div>
    ))}
  </div>
));
TableSkeleton.displayName = "TableSkeleton";
