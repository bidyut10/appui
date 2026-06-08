import React, { forwardRef } from "react";

export const ImageGridSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 rounded-2xl border border-neutral-100 bg-white p-3 font-sans ${className}`}
    {...props}
  >
    <div className="mb-3 flex items-center justify-between px-1">
      <div className="h-3 w-28 animate-pulse rounded bg-neutral-200" />
      <div className="h-4 w-12 animate-pulse rounded-full bg-neutral-100" />
    </div>
    <div className="grid grid-cols-3 gap-1.5">
      <div className="col-span-2 row-span-2 aspect-square animate-pulse rounded-xl bg-neutral-200" />
      <div className="aspect-square animate-pulse rounded-xl bg-neutral-100" />
      <div className="aspect-square animate-pulse rounded-xl bg-neutral-100" />
    </div>
  </div>
));
ImageGridSkeleton.displayName = "ImageGridSkeleton";
