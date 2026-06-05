import React, { forwardRef } from "react";

export const DashboardSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 rounded-2xl p-4 font-sans ${className}`} {...props}>
    <div className="flex items-center justify-between mb-4">
      <div className="h-3 w-24 bg-neutral-200 rounded animate-pulse" />
      <div className="h-7 w-7 rounded-lg bg-neutral-200 animate-pulse" />
    </div>
    <div className="grid grid-cols-2 gap-2 mb-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="p-3 bg-neutral-50 rounded-xl">
          <div className="h-2 w-12 bg-neutral-200 rounded animate-pulse mb-2" />
          <div className="h-5 w-16 bg-neutral-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
    <div className="h-24 bg-neutral-100 rounded-xl animate-pulse mb-3" />
    <div className="space-y-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-neutral-200 animate-pulse shrink-0" />
          <div className="h-2 flex-1 bg-neutral-100 rounded animate-pulse" />
        </div>
      ))}
    </div>
  </div>
));
DashboardSkeleton.displayName = "DashboardSkeleton";
