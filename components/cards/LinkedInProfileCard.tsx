"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import bg_image from "@/public/bg.png";
import profile_logo from "@/public/boy.png";

/**
 * LinkedIn-inspired profile card built with Next.js,
 * React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own profile data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type LinkedInProfileCardProps = {
  name?: string;
  headline?: string;
  location?: string;
  connections?: string | number;

  bio?: string;

  posts?: string | number;
  experience?: string;

  coverImage?: StaticImageData | string;
  avatar?: StaticImageData | string;

  coverImageAlt?: string;
  avatarAlt?: string;

  connectLabel?: string;
  messageLabel?: string;

  connectButton?: ReactNode;
  messageButton?: ReactNode;

  onConnect?: () => void;
  onMessage?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const LinkedInProfileCard = forwardRef<
  HTMLDivElement,
  LinkedInProfileCardProps
>(
  (
    {
      className,

      name = "John Doe",
      headline = "Software Developer at OpenSourceUI",
      location = "West Bengal, India",
      connections = "500+",

      bio = "Passionate about open-source, minimal UI, and developer tools.",

      posts = 42,
      experience = "2.5yr",

      coverImage = bg_image,
      avatar = profile_logo,

      coverImageAlt = "LinkedIn cover image",
      avatarAlt = "Profile avatar",

      connectLabel = "Connect",
      messageLabel = "Message",

      connectButton,
      messageButton,

      onConnect,
      onMessage,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="linkedin-profile-card"
        className={cn(
          "w-72 overflow-hidden rounded-xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Cover */}
        <div className="relative">
          <Image
            src={coverImage}
            alt={coverImageAlt}
            className="h-20 w-full object-cover"
            sizes="288px"
          />

          {/* Avatar */}
          <div className="absolute -bottom-8 left-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-neutral-800 shadow">
            <Image src={avatar} alt={avatarAlt} className="w-7" sizes="28px" />
          </div>
        </div>

        <div className="px-4 pt-10 pb-4">
          {/* Name */}
          <h4 title={name} className="mt-2 font-bold text-neutral-900">
            {name}
          </h4>

          {/* Headline */}
          <p title={headline} className="text-xs text-neutral-600">
            {headline}
          </p>

          {/* Location + connections */}
          <p className="mt-0.5 text-xs text-neutral-400">
            {location} · {connections} connections
          </p>

          {/* Bio */}
          <p
            title={bio}
            className="mt-2 text-xs leading-relaxed text-neutral-600"
          >
            {bio}
          </p>

          <div className="mt-3 flex gap-2">
            {connectButton ?? (
              <button
                type="button"
                aria-label={`Connect with ${name}`}
                onClick={onConnect}
                className="flex-1 cursor-pointer rounded-full bg-neutral-800 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-black"
              >
                {connectLabel}
              </button>
            )}

            {messageButton ?? (
              <button
                type="button"
                aria-label={`Message ${name}`}
                onClick={onMessage}
                className="flex-1 cursor-pointer rounded-full border border-neutral-200 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
              >
                {messageLabel}
              </button>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-around border-t border-neutral-100 px-4 py-3 text-center">
          <div>
            <p className="text-sm font-bold text-neutral-900">{posts}</p>
            <p className="text-[10px] tracking-wide text-neutral-400 uppercase">
              Posts
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-neutral-900">{connections}</p>
            <p className="text-[10px] tracking-wide text-neutral-400 uppercase">
              Connections
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-neutral-900">{experience}</p>
            <p className="text-[10px] tracking-wide text-neutral-400 uppercase">
              Experience
            </p>
          </div>
        </div>
      </div>
    );
  },
);

LinkedInProfileCard.displayName = "LinkedInProfileCard";
