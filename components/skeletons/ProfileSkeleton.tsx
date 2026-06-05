import React, { forwardRef } from "react";

export const ProfileSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex items-center space-x-4 w-64 p-4 border border-neutral-100 rounded-xl bg-white shadow-sm ${className}`}
      {...props}
    >
      <div className="w-12 h-12 rounded-full bg-neutral-200 animate-pulse shrink-0"></div>
      <div className="space-y-2 flex-1">
        <div className="h-3 bg-neutral-200 rounded animate-pulse w-3/4"></div>
        <div className="h-2.5 bg-neutral-100 rounded animate-pulse w-1/2"></div>
      </div>
    </div>
  );
});
ProfileSkeleton.displayName = "ProfileSkeleton";
