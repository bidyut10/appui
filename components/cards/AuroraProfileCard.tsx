"use client";

import Image, { type StaticImageData } from "next/image";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";
import { Location } from "@/icons/Location";
import { UserCheck } from "@/icons/UserCheck";

/**
 * Aurora gradient profile card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Compact white card with a soft aurora ring around the avatar.
 * Replace the demo content with your own data.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 * Need icons? Visit nexticons.in for free copy-paste icons.
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
  avatarSrc?: StaticImageData | string;
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
      followersLabel = "Followers",
      followingLabel = "Following",
      avatarSrc = profileImage,
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
        "w-[22rem] max-w-full shrink-0 overflow-hidden rounded-2xl border border-neutral-200/90 bg-white font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      {/* Aurora accent line */}
      <div
        data-slot="aurora-profile-card-accent"
        className="h-0.5 bg-linear-to-r from-teal-400 via-cyan-400 to-sky-400"
      />

      <div className="p-4">
        {/* Header row */}
        <div
          data-slot="aurora-profile-card-header"
          className="flex items-start gap-3"
        >
          {/* Aurora ring avatar */}
          <div
            data-slot="aurora-profile-card-avatar"
            className="relative h-12 w-12 shrink-0 rounded-xl bg-linear-to-br from-teal-400 via-cyan-400 to-sky-400 p-[2px] shadow-sm"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-white p-0.5">
              <Image
                src={avatarSrc}
                alt={avatarAlt}
                fill
                sizes="44px"
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="truncate text-[15px] font-bold tracking-tight text-neutral-900">
                  {name}
                </h3>
                <p className="truncate text-[12px] text-neutral-400">
                  {handle}
                </p>
              </div>
              <button
                type="button"
                aria-label={followLabel}
                onClick={onFollow}
                className="flex shrink-0 cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 bg-neutral-50 px-2 py-1 text-[10px] font-semibold text-neutral-700 transition-colors hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 active:scale-95"
              >
                {followIcon ?? <UserCheck size={11} />}
                {followLabel}
              </button>
            </div>
            <p className="mt-1 flex items-center gap-1 text-[10px] text-neutral-500">
              <Location size={10} className="shrink-0 text-neutral-400" />
              <span className="truncate">{location}</span>
            </p>
          </div>
        </div>

        {/* Bio */}
        <p
          data-slot="aurora-profile-card-bio"
          className="mt-2.5 line-clamp-2 text-[12px] leading-relaxed text-neutral-600"
        >
          {bio}
        </p>

        {/* Inline stats */}
        <div
          data-slot="aurora-profile-card-stats"
          className="mt-3 flex items-center divide-x divide-neutral-200 rounded-lg border border-neutral-100 bg-neutral-50/80"
        >
          <div className="flex-1 px-3 py-2 text-center">
            <p className="text-sm font-bold text-neutral-900 tabular-nums">
              {followers}
            </p>
            <p className="text-[9px] font-medium tracking-wide text-neutral-400 uppercase">
              {followersLabel}
            </p>
          </div>
          <div className="flex-1 px-3 py-2 text-center">
            <p className="text-sm font-bold text-neutral-900 tabular-nums">
              {following}
            </p>
            <p className="text-[9px] font-medium tracking-wide text-neutral-400 uppercase">
              {followingLabel}
            </p>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div
            data-slot="aurora-profile-card-tags"
            className="mt-2.5 flex flex-wrap gap-1"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-neutral-100 bg-white px-1.5 py-0.5 text-[9px] font-medium text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  ),
);

AuroraProfileCard.displayName = "AuroraProfileCard";
