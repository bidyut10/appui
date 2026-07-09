"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { UserCheck, UserPlus } from "lucide-react";

export type FollowButtonProps = Readonly<
  {
    label?: string;
    followingLabel?: string;
    defaultFollowing?: boolean;
  } & ComponentPropsWithoutRef<"button">
>;

// Follow toggle — outline invite becomes a quiet filled following state.
export const FollowButton = forwardRef<HTMLButtonElement, FollowButtonProps>(
  (
    {
      className,
      label = "Follow",
      followingLabel = "Following",
      defaultFollowing = false,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [following, setFollowing] = useState(defaultFollowing);

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={following}
        data-slot="follow-button"
        onClick={(event) => {
          setFollowing((prev) => !prev);
          onClick?.(event);
        }}
        className={cn(
          "inline-flex h-10 cursor-pointer items-center gap-2 rounded-full px-4 font-sans text-sm font-semibold transition-all duration-200 active:scale-[0.98] select-none",
          following
            ? "bg-neutral-100 text-neutral-600 ring-1 ring-neutral-200"
            : "bg-neutral-900 text-white",
          className,
        )}
        {...props}
      >
        {following ? (
          <>
            <UserCheck size={15} strokeWidth={2} />
            {followingLabel}
          </>
        ) : (
          <>
            <UserPlus size={15} strokeWidth={2} />
            {label}
          </>
        )}
      </button>
    );
  },
);

FollowButton.displayName = "FollowButton";
