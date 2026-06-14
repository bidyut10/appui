"use client";

import Image from "next/image";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import { UserCheck } from "@/icons/UserCheck";

/**
 * Profile card with a soft aurora wash behind the avatar.
 *
 * Replace the demo content with your own data.
 */
export type AuroraProfileCardProps = {
  name?: string;
  handle?: string;
  location?: string;
  bio?: string;
  followers?: string;
  following?: string;
  followersLabel?: string;
  followingLabel?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  tags?: string[];
  followLabel?: string;
  followIcon?: ReactNode;
  onFollow?: () => void;
} & ComponentPropsWithoutRef<"div">;

const defaultTags = ["Design", "React", "Open Source"];

export const AuroraProfileCard = forwardRef<
  HTMLDivElement,
  AuroraProfileCardProps
>(
  (
    {
      className,
      name = "Bidyut Kundu",
      handle = "@bidyut.dev",
      location = "Kolkata, India",
      bio = "Building UI components for developers who care about craft.",
      followers = "12.4K",
      following = "842",
      followersLabel = "followers",
      followingLabel = "following",
      avatarSrc = "/boy.png",
      avatarAlt = "Profile",
      tags = defaultTags,
      followLabel = "Follow",
      followIcon,
      onFollow,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="aurora-profile-card"
      className={cn(
        "relative w-[22rem] max-w-full shrink-0 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 h-28 w-40 -translate-x-1/2 rounded-full bg-teal-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-8 h-20 w-24 rounded-full bg-sky-100/40 blur-2xl"
      />

      <div className="relative px-5 pb-5 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-neutral-200/80">
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          </div>

          <button
            type="button"
            aria-label={followLabel}
            onClick={onFollow}
            className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-1.5 text-[11px] font-medium text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            {followIcon ?? <UserCheck size={12} />}
            {followLabel}
          </button>
        </div>

        <div className="mt-4 min-w-0">
          <h3 className="truncate text-[17px] font-semibold tracking-tight text-neutral-900">
            {name}
          </h3>
          <p className="mt-0.5 truncate text-[13px] text-neutral-500">
            {handle}
          </p>
          <p className="mt-0.5 truncate text-[12px] text-neutral-400">
            {location}
          </p>
        </div>

        <p
          data-slot="aurora-profile-card-bio"
          className="mt-3 text-[13px] leading-relaxed text-neutral-600"
        >
          {bio}
        </p>

        <p
          data-slot="aurora-profile-card-stats"
          className="mt-4 text-[13px] text-neutral-500"
        >
          <span className="font-semibold text-neutral-900 tabular-nums">
            {followers}
          </span>{" "}
          {followersLabel}
          <span className="mx-1.5 text-neutral-300">·</span>
          <span className="font-semibold text-neutral-900 tabular-nums">
            {following}
          </span>{" "}
          {followingLabel}
        </p>

        {tags.length > 0 && (
          <p
            data-slot="aurora-profile-card-tags"
            className="mt-2 truncate text-[12px] text-neutral-400"
          >
            {tags.join(" · ")}
          </p>
        )}
      </div>
    </div>
  ),
);

AuroraProfileCard.displayName = "AuroraProfileCard";
