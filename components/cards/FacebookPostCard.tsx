"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import profile_logo from "@/public/boy.png";
import bg_image from "@/public/dithar.png";

import { Clock } from "@/icons/Clock";
import { Ellipsis } from "@/icons/Ellipsis";
import { Like } from "@/icons/Like";
import { Heart } from "@/icons/Heart";
import { Chat } from "@/icons/Chat";
import { Share } from "@/icons/Share";

/**
 * Facebook-inspired post card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content, images, and icons with your own assets.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type FacebookPostCardProps = {
  username?: string;
  timestamp?: string;
  content?: string;

  reactions?: number;
  comments?: number;
  shares?: number;

  avatar?: StaticImageData | string;
  postImage?: StaticImageData | string;

  avatarAlt?: string;
  imageAlt?: string;

  menuIcon?: ReactNode;
  likeIcon?: ReactNode;
  heartIcon?: ReactNode;
  commentIcon?: ReactNode;
  shareIcon?: ReactNode;

  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const FacebookPostCard = forwardRef<
  HTMLDivElement,
  FacebookPostCardProps
>(
  (
    {
      className,

      username = "Bidyut Kundu",
      timestamp = "3 hours ago",
      content = "Just launched a new side project — an open-source collection of minimal React UI cards.",

      reactions = 312,
      comments = 48,
      shares = 9,

      avatar = profile_logo,
      postImage = bg_image,

      avatarAlt = "User avatar",
      imageAlt = "Facebook post image",

      menuIcon,
      likeIcon,
      heartIcon,
      commentIcon,
      shareIcon,

      onLike,
      onComment,
      onShare,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="facebook-post-card"
        className={cn(
          "max-w-sm rounded-xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Post header */}
        <div data-slot="facebook-post-card-header" className="mb-3 flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800">
            <Image src={avatar} alt={avatarAlt} className="w-7" sizes="28px" />
          </div>

          <div>
            <p
              title={username}
              className="text-sm font-semibold text-neutral-900"
            >
              {username}
            </p>

            <p className="text-xs text-neutral-400">
              {timestamp} · <Clock className="inline" size={12} />
            </p>
          </div>

          <div className="ml-auto text-neutral-400">
            {menuIcon ?? <Ellipsis size={15} />}
          </div>
        </div>

        {/* Post content */}
        <p
          data-slot="facebook-post-card-content"
          className="mb-3 text-sm leading-relaxed text-neutral-800"
        >
          {content}
        </p>

        {/* Post image */}
        <Image
          data-slot="facebook-post-card-image"
          src={postImage}
          alt={imageAlt}
          className="mb-3 h-36 rounded-lg"
          sizes="384px"
        />

        {/* Engagement summary */}
        <div
          data-slot="facebook-post-card-stats"
          className="mb-2 flex items-center justify-between px-1 text-xs text-neutral-500"
        >
          <span className="flex items-center gap-1">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white">
              {likeIcon ?? <Like size={9} />}
            </span>

            <span className="-ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-white">
              {heartIcon ?? <Heart size={9} />}
            </span>

            {reactions.toLocaleString()}
          </span>

          <span>
            {comments.toLocaleString()} comments · {shares.toLocaleString()}{" "}
            shares
          </span>
        </div>

        {/* Post actions */}
        <div
          data-slot="facebook-post-card-actions"
          className="flex gap-1 border-t border-neutral-100 pt-2"
        >
          <button
            type="button"
            aria-label={`Like post from ${username}`}
            onClick={onLike}
            className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-black"
          >
            {likeIcon ?? <Like size={14} />}
            Like
          </button>

          <button
            type="button"
            aria-label={`Comment on post from ${username}`}
            onClick={onComment}
            className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-black"
          >
            {commentIcon ?? <Chat size={14} />}
            Comment
          </button>

          <button
            type="button"
            aria-label={`Share post from ${username}`}
            onClick={onShare}
            className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-black"
          >
            {shareIcon ?? <Share size={14} />}
            Share
          </button>
        </div>
      </div>
    );
  },
);

FacebookPostCard.displayName = "FacebookPostCard";
