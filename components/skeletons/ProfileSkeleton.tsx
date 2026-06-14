import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Profile Skeleton built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type ProfileSkeletonProps = ComponentPropsWithoutRef<"div">;

export const ProfileSkeleton = forwardRef<HTMLDivElement, ProfileSkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="profile-skeleton"
      className={cn(
        "flex w-64 items-center space-x-4 rounded-xl border border-neutral-100 bg-white p-4 shadow-sm",
        className,
      )}
      {...props}
    >
      <div className="h-12 w-12 shrink-0 animate-pulse rounded-full bg-neutral-200"></div>
      <div className="flex-1 space-y-2">
        <div className="h-3 w-3/4 animate-pulse rounded bg-neutral-200"></div>
        <div className="h-2.5 w-1/2 animate-pulse rounded bg-neutral-100"></div>
      </div>
    </div>
  ),
);

ProfileSkeleton.displayName = "ProfileSkeleton";
