"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";


/**
 * Facebook-inspired profile card built with Next.js,
 * React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content, images, and actions with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type FacebookProfileCardProps = {
  name?: string;
  username?: string;
  location?: string;
  bio?: string;

  friends?: string | number;
  followers?: string | number;

  coverImage?: string;
  avatar?: string;

  coverImageAlt?: string;
  avatarAlt?: string;

  addFriendLabel?: string;
  messageLabel?: string;

  addFriendButton?: ReactNode;
  messageButton?: ReactNode;

  onAddFriend?: () => void;
  onMessage?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const FacebookProfileCard = forwardRef<
  HTMLDivElement,
  FacebookProfileCardProps
>(
  (
    {
      className,

      name = "Bidyut Kundu",
      username = "@bidyutk",
      location = "West Bengal",

      bio = "Software dev · Open-source advocate · Building cool UIs",

      friends = "1.2K",
      followers = 84,

      coverImage = "/dithar.png",
      avatar = "/boy.png",

      coverImageAlt = "Profile cover image",
      avatarAlt = "Profile avatar",

      addFriendLabel = "Add Friend",
      messageLabel = "Message",

      addFriendButton,
      messageButton,

      onAddFriend,
      onMessage,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="facebook-profile-card"
        className={cn(
          "w-72 overflow-hidden rounded-xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Cover image */}
        <div data-slot="facebook-profile-card-cover" className="relative h-24">
          <Image
            src={coverImage}
            alt={coverImageAlt}
            fill
            className="object-cover"
            sizes="288px"
          />

          {/* Profile avatar */}
          <div className="absolute -bottom-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-neutral-800 shadow">
            <Image src={avatar} alt={avatarAlt} width={32} height={32} className="w-8" sizes="32px" />
          </div>
        </div>

        <div
          data-slot="facebook-profile-card-content"
          className="flex flex-col items-center px-4 pt-12 pb-4 text-center"
        >
          {/* User info */}
          <h4 title={name} className="mt-2 text-lg font-bold text-neutral-900">
            {name}
          </h4>

          <p
            title={`${username} · ${location}`}
            className="text-xs text-neutral-500"
          >
            {username} · {location}
          </p>

          <p
            title={bio}
            className="mt-1.5 text-xs leading-relaxed text-neutral-600"
          >
            {bio}
          </p>

          {/* Stats */}
          <div
            data-slot="facebook-profile-card-stats"
            className="mt-3 flex gap-6 text-xs text-neutral-500"
          >
            <div className="text-center">
              <p className="font-bold text-neutral-900">
                {typeof friends === "number"
                  ? friends.toLocaleString()
                  : friends}
              </p>
              <p>Friends</p>
            </div>

            <div className="text-center">
              <p className="font-bold text-neutral-900">
                {typeof followers === "number"
                  ? followers.toLocaleString()
                  : followers}
              </p>
              <p>Followers</p>
            </div>
          </div>

          <div
            data-slot="facebook-profile-card-actions"
            className="mt-4 flex w-full gap-2"
          >
            {addFriendButton ?? (
              <button
                type="button"
                aria-label={`Add ${name} as a friend`}
                onClick={onAddFriend}
                className="flex-1 cursor-pointer rounded-md bg-neutral-800 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-950"
              >
                {addFriendLabel}
              </button>
            )}

            {messageButton ?? (
              <button
                type="button"
                aria-label={`Send message to ${name}`}
                onClick={onMessage}
                className="flex-1 cursor-pointer rounded-md border border-neutral-200 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                {messageLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  },
);

FacebookProfileCard.displayName = "FacebookProfileCard";
