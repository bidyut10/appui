import React, { forwardRef } from "react";

export const CardSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-64 p-4 border border-neutral-100 rounded-xl bg-white shadow-sm ${className}`}
      {...props}
    >
      <div className="w-full h-32 bg-neutral-200 rounded-lg animate-pulse mb-4"></div>
      <div className="space-y-3">
        <div className="h-3 bg-neutral-200 rounded animate-pulse w-full"></div>
        <div className="h-3 bg-neutral-200 rounded animate-pulse w-5/6"></div>
        <div className="h-3 bg-neutral-200 rounded animate-pulse w-2/3"></div>
      </div>
    </div>
  );
});
CardSkeleton.displayName = "CardSkeleton";
