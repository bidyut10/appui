"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Ellipsis } from "@/icons/Ellipsis";
import { Like } from "@/icons/Like";
import { Chat } from "@/icons/Chat";
import { Bookmark } from "@/icons/Bookmark";
import { Send } from "@/icons/Send";

import profile_logo from "@/public/boy.png";
import bg_image from "@/public/dbg.png";

/**
 * Instagram-inspired post card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content, images, and icons with your own assets.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type InstagramPostCardProps = {
  username?: string;
  location?: string;
  likes?: number;
  caption?: string;
  hashtags?: string;
  timestamp?: string;

  avatar?: StaticImageData | string;
  postImage?: StaticImageData | string;

  avatarAlt?: string;
  imageAlt?: string;
  imagePriority?: boolean;

  likeIcon?: ReactNode;
  commentIcon?: ReactNode;
  shareIcon?: ReactNode;
  bookmarkIcon?: ReactNode;

  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onBookmark?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const InstagramPostCard = forwardRef<
  HTMLDivElement,
  InstagramPostCardProps
>(
  (
    {
      className,

      username = "bidyut.dev",
      location = "West Bengal, India",
      likes = 1204,
      caption = "New card UI drop 🃏 Minimal, clean, and open-source.",
      hashtags = "#uidesign #reactjs #webdev",
      timestamp = "2 hours ago",

      avatar = profile_logo,
      postImage = bg_image,

      avatarAlt = "User avatar",
      imageAlt = "Instagram post image",
      imagePriority = false,

      likeIcon,
      commentIcon,
      shareIcon,
      bookmarkIcon,

      onLike,
      onComment,
      onShare,
      onBookmark,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="instagram-post-card"
        className={cn(
          "w-sm overflow-hidden rounded-xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Profile header */}
        <div
          data-slot="instagram-post-card-header"
          className="flex items-center gap-2 px-3 py-2.5"
        >
          <div className="h-8 w-8 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-blue-600 p-0.5">
            <div className="h-full w-full rounded-full bg-white p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-neutral-900">
                <Image
                  src={avatar}
                  alt={avatarAlt}
                  className="w-4"
                  sizes="16px"
                />
              </div>
            </div>
          </div>

          <div>
            <p
              title={username}
              className="text-xs font-semibold text-neutral-900"
            >
              {username}
            </p>

            <p title={location} className="text-[10px] text-neutral-400">
              {location}
            </p>
          </div>

          <div className="ml-auto text-neutral-400">
            <Ellipsis size={15} />
          </div>
        </div>

        {/* Post image */}
        <Image
          data-slot="instagram-post-card-image"
          src={postImage}
          alt={imageAlt}
          className="h-36"
          sizes="320px"
          priority={imagePriority}
        />

        {/* Post content */}
        <div className="px-3 pt-2.5 pb-3">
          {/* Engagement actions */}
          <div
            data-slot="instagram-post-card-actions"
            className="mb-2 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label={`Like post from ${username}`}
                onClick={onLike}
                className="cursor-pointer text-neutral-700 transition-colors hover:text-black"
              >
                {likeIcon ?? <Like size={15} />}
              </button>

              <button
                type="button"
                aria-label={`Comment on post from ${username}`}
                onClick={onComment}
                className="cursor-pointer text-neutral-700 transition-colors hover:text-black"
              >
                {commentIcon ?? <Chat size={15} />}
              </button>

              <button
                type="button"
                aria-label={`Share post from ${username}`}
                onClick={onShare}
                className="cursor-pointer text-neutral-700 transition-colors hover:text-black"
              >
                {shareIcon ?? <Send size={15} />}
              </button>
            </div>

            <button
              type="button"
              aria-label={`Save post from ${username}`}
              onClick={onBookmark}
              className="cursor-pointer text-neutral-700 transition-colors hover:text-black"
            >
              {bookmarkIcon ?? <Bookmark size={15} />}
            </button>
          </div>

          <p className="mb-1 text-xs font-semibold text-neutral-900">
            {likes.toLocaleString()} likes
          </p>

          <p className="text-xs leading-relaxed text-neutral-800">
            <span className="font-semibold">{username}</span> {caption}{" "}
            <span className="text-blue-500">{hashtags}</span>
          </p>

          <p className="mt-1 text-[10px] tracking-wide text-neutral-400 uppercase">
            {timestamp}
          </p>
        </div>
      </div>
    );
  },
);

InstagramPostCard.displayName = "InstagramPostCard";
