import React, { forwardRef } from "react";

export const ImageGridSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 rounded-2xl p-3 font-sans ${className}`} {...props}>
    <div className="flex items-center justify-between mb-3 px-1">
      <div className="h-3 w-28 bg-neutral-200 rounded animate-pulse" />
      <div className="h-4 w-12 bg-neutral-100 rounded-full animate-pulse" />
    </div>
    <div className="grid grid-cols-3 gap-1.5">
      <div className="col-span-2 row-span-2 aspect-square bg-neutral-200 rounded-xl animate-pulse" />
      <div className="aspect-square bg-neutral-100 rounded-xl animate-pulse" />
      <div className="aspect-square bg-neutral-100 rounded-xl animate-pulse" />
    </div>
  </div>
));
ImageGridSkeleton.displayName = "ImageGridSkeleton";
