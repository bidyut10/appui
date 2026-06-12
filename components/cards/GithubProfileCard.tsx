"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import bg_image from "@/public/bh.png";
import profile_logo from "@/public/boy.png";

import { Location } from "@/icons/Location";
import { UserGroup } from "@/icons/UserGroup";
import { UserCheck } from "@/icons/UserCheck";
import { Web } from "@/icons/Web";

/**
 * GitHub-inspired profile card built with Next.js,
 * React, TypeScript, and Tailwind CSS.
 *
 * Clean, reusable, production-ready UI component.
 * Replace demo content with real GitHub data.
 *
 * Icons: you can use nexticons.in for quick copy-paste icons.
 */
export type GithubProfileCardProps = {
  username?: string;
  name?: string;
  bio?: string;

  followers?: string | number;
  following?: string | number;

  repos?: string | number;
  commits?: string | number;
  stars?: string | number;

  location?: string;
  website?: string;

  avatar?: StaticImageData | string;
  banner?: StaticImageData | string;

  avatarAlt?: string;
  bannerAlt?: string;

  followLabel?: string;
  messageLabel?: string;

  locationIcon?: ReactNode;
  websiteIcon?: ReactNode;

  followButton?: ReactNode;
  messageButton?: ReactNode;

  onFollow?: () => void;
  onMessage?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const GithubProfileCard = forwardRef<
  HTMLDivElement,
  GithubProfileCardProps
>(
  (
    {
      className,

      username = "@bidyut10",
      name = "Bidyut Kundu",

      bio = "Software Engineer | Designer | 3+ YOE",

      followers = 124,
      following = 80,

      repos = 42,
      commits = 550,
      stars = 18,

      location = "West Bengal",
      website = "opensourceui.in",

      avatar = profile_logo,
      banner = bg_image,

      avatarAlt = "GitHub profile avatar",
      bannerAlt = "GitHub profile banner",

      followLabel = "Follow",
      messageLabel = "Message",

      locationIcon,
      websiteIcon,

      followButton,
      messageButton,

      onFollow,
      onMessage,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="github-profile-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Banner */}
        <div className="relative">
          <Image
            src={banner}
            alt={bannerAlt}
            className="h-16 w-full object-cover"
            sizes="288px"
          />

          {/* Avatar */}
          <div className="absolute -bottom-8 left-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-neutral-800 shadow">
            <Image src={avatar} alt={avatarAlt} className="w-7" sizes="28px" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col px-5 pt-10 pb-5">
          <h4 title={username} className="mt-2 font-bold text-neutral-900">
            {username}
          </h4>

          <p title={name} className="text-xs text-neutral-500">
            {name}
          </p>

          <p
            title={bio}
            className="mt-1 text-xs leading-relaxed text-neutral-600"
          >
            {bio}
          </p>

          {/* Followers / Following */}
          <div className="mt-3 flex gap-4 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <UserGroup size={12} />
              <b className="text-neutral-900">
                {typeof followers === "number"
                  ? followers.toLocaleString()
                  : followers}
              </b>{" "}
              followers
            </span>

            <span className="flex items-center gap-1">
              <UserCheck size={12} />
              <b className="text-neutral-900">
                {typeof following === "number"
                  ? following.toLocaleString()
                  : following}
              </b>{" "}
              following
            </span>
          </div>

          {/* Meta */}
          <div className="mt-2 flex gap-3 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              {locationIcon ?? <Location size={11} />}
              {location}
            </span>

            <span className="flex items-center gap-1">
              {websiteIcon ?? <Web size={11} />}
              {website}
            </span>
          </div>

          {/* Actions */}
          <div className="mt-3 flex gap-2">
            {followButton ?? (
              <button
                type="button"
                aria-label={`Follow ${username}`}
                onClick={onFollow}
                className="flex-1 cursor-pointer rounded-md bg-neutral-800 py-1.5 font-mono text-xs font-medium text-white transition-colors hover:bg-black"
              >
                {followLabel}
              </button>
            )}

            {messageButton ?? (
              <button
                type="button"
                aria-label={`Message ${username}`}
                onClick={onMessage}
                className="flex-1 cursor-pointer rounded-md border border-neutral-200 py-1.5 font-mono text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                {messageLabel}
              </button>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-around border-t border-neutral-100 px-5 py-3 text-center">
          <div>
            <p className="text-sm font-bold text-neutral-900">{repos}</p>
            <p className="text-[10px] tracking-wide text-neutral-400 uppercase">
              Repos
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-neutral-900">{commits}</p>
            <p className="text-[10px] tracking-wide text-neutral-400 uppercase">
              Commits
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-neutral-900">{stars}</p>
            <p className="text-[10px] tracking-wide text-neutral-400 uppercase">
              Stars
            </p>
          </div>
        </div>
      </div>
    );
  },
);

GithubProfileCard.displayName = "GithubProfileCard";
