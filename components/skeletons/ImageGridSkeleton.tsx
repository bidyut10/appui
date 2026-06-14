import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Image Grid Skeleton built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type ImageGridSkeletonProps = ComponentPropsWithoutRef<"div">;

export const ImageGridSkeleton = forwardRef<
  HTMLDivElement,
  ImageGridSkeletonProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="image-grid-skeleton"
    className={cn(
      "w-72 rounded-2xl border border-neutral-100 bg-white p-3 font-sans",
      className,
    )}
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
