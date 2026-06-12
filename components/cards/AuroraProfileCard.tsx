"use client";

import Image, { type StaticImageData } from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";
import { Location } from "@/icons/Location";
import { UserCheck } from "@/icons/UserCheck";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type AuroraProfileCardProps = {
  name?: string;
  handle?: string;
  location?: string;
  bio?: string;
  followers?: string;
  following?: string;
  avatarSrc?: StaticImageData | string;
  avatarAlt?: string;
  tags?: string[];
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultTags = ["Design", "React", "Open Source"];

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

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
      bio = "Building beautiful UI components for developers who care about craft.",
      followers = "12.4K",
      following = "842",
      avatarSrc = profileImage,
      avatarAlt = "Profile",
      tags = defaultTags,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="aurora-profile-card"
      className={cn(
        "relative w-full max-w-xs overflow-hidden rounded-3xl font-sans shadow-2xl",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-teal-600 to-cyan-600" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(0,0,0,0.3),transparent_60%)]" />

      <div className="relative z-10 p-5 sm:p-6">
        <div
          data-slot="aurora-profile-card-avatar"
          className="relative mx-auto mb-3 h-20 w-20 overflow-hidden rounded-2xl border-2 border-white/30 shadow-xl sm:h-24 sm:w-24"
        >
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        <div data-slot="aurora-profile-card-info" className="text-center">
          <h3 className="text-lg font-bold text-white sm:text-xl">{name}</h3>
          <p className="text-sm text-white/60">{handle}</p>
          <p className="mt-1 flex items-center justify-center gap-1 text-[11px] text-white/50">
            <Location size={10} />
            {location}
          </p>
        </div>

        <p
          data-slot="aurora-profile-card-bio"
          className="mt-3 text-center text-[13px] leading-relaxed text-white/80"
        >
          {bio}
        </p>

        <div
          data-slot="aurora-profile-card-stats"
          className="mt-4 flex justify-center gap-6"
        >
          <div className="text-center">
            <p className="text-base font-bold text-white">{followers}</p>
            <p className="text-[10px] text-white/50 uppercase">Followers</p>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="text-center">
            <p className="text-base font-bold text-white">{following}</p>
            <p className="text-[10px] text-white/50 uppercase">Following</p>
          </div>
        </div>

        <div
          data-slot="aurora-profile-card-tags"
          className="mt-4 flex flex-wrap justify-center gap-1.5"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="mt-4 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-white py-2.5 text-sm font-semibold text-teal-700 transition-transform active:scale-[0.98]"
        >
          <UserCheck size={14} />
          Follow
        </button>
      </div>
    </div>
  ),
);

AuroraProfileCard.displayName = "AuroraProfileCard";
