import React, { forwardRef } from "react";

export const TableSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-80 bg-white border border-neutral-100 rounded-2xl overflow-hidden font-sans ${className}`} {...props}>
    <div className="px-4 py-3 border-b border-neutral-100 flex gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-2.5 flex-1 bg-neutral-200 rounded animate-pulse" />
      ))}
    </div>
    {[1, 2, 3, 4, 5].map((row) => (
      <div key={row} className="px-4 py-3 border-b border-neutral-50 flex items-center gap-4">
        <div className="w-6 h-6 rounded-full bg-neutral-200 animate-pulse shrink-0" />
        <div className="h-2 flex-1 bg-neutral-100 rounded animate-pulse" />
        <div className="h-2 w-12 bg-neutral-100 rounded animate-pulse" />
        <div className="h-2 w-8 bg-neutral-100 rounded animate-pulse" />
      </div>
    ))}
  </div>
));
TableSkeleton.displayName = "TableSkeleton";
