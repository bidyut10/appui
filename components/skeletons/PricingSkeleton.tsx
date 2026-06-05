import React, { forwardRef } from "react";

export const PricingSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-56 bg-white border border-neutral-100 rounded-2xl p-5 font-sans ${className}`} {...props}>
    <div className="h-2.5 w-16 bg-neutral-200 rounded animate-pulse mb-3" />
    <div className="h-8 w-20 bg-neutral-200 rounded animate-pulse mb-4" />
    <div className="space-y-2.5 mb-5">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-neutral-200 animate-pulse shrink-0" />
          <div className="h-2 flex-1 bg-neutral-100 rounded animate-pulse" />
        </div>
      ))}
    </div>
    <div className="h-10 bg-neutral-200 rounded-xl animate-pulse" />
  </div>
));
PricingSkeleton.displayName = "PricingSkeleton";
