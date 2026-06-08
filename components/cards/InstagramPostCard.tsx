import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { Ellipsis } from "@/icons/Ellipsis";
import { Like } from "@/icons/Like";
import { Chat } from "@/icons/Chat";
import { Bookmark } from "@/icons/Bookmark";
import { Send } from "@/icons/Send";

import profile_logo from "@/public/boy.png";
import bg_image from "@/public/dbg.png";

/*
|--------------------------------------------------------------------------
| Instagram Post Card
|--------------------------------------------------------------------------
|
| A reusable Instagram-inspired post card built with Next.js, React,
| TypeScript, and Tailwind CSS. Designed for social feeds, content
| previews, portfolios, and modern web applications.
|
|--------------------------------------------------------------------------
| Before Using This Component
|--------------------------------------------------------------------------
|
| • Replace the demo images with your own assets.
| • Update the sample content to match your project.
| • Swap the icons with your preferred icon library if needed.
| • All props are optional and come with default values for quick setup.
|
| React Users
| If you are using React instead of Next.js, replace the `next/image`
| component with a standard `img` tag and update the image imports
| according to your project setup.
|
| Looking for icons?
| Visit nexticons.in to browse and copy free icons without adding
| another dependency to your project.
|
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
      className = "",

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
        className={`max-w-xs overflow-hidden rounded-xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
        {...props}
      >
        {/* Profile section */}
        <div className="flex items-center gap-2 px-3 py-2.5">
          <div className="h-8 w-8 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
            <div className="h-full w-full rounded-full bg-white p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-neutral-900">
                <Image src={avatar} alt={avatarAlt} className="w-4" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-neutral-900">{username}</p>

            <p className="text-[10px] text-neutral-400">{location}</p>
          </div>

          <div className="ml-auto h-4 w-4 text-neutral-400">
            <Ellipsis />
          </div>
        </div>

        {/* Main post image */}
        <Image src={postImage} alt={imageAlt} className="h-36" />

        <div className="px-3 pt-2.5 pb-3">
          {/* Post actions */}
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label={`Like ${username}'s post`}
                onClick={onLike}
                className="h-4 w-4 cursor-pointer text-neutral-700 hover:text-black"
              >
                {likeIcon ?? <Like />}
              </button>

              <button
                type="button"
                aria-label={`Comment on ${username}'s post`}
                onClick={onComment}
                className="h-4 w-4 cursor-pointer text-neutral-700 hover:text-black"
              >
                {commentIcon ?? <Chat />}
              </button>

              <button
                type="button"
                aria-label={`Share ${username}'s post`}
                onClick={onShare}
                className="h-4 w-4 cursor-pointer text-neutral-700 hover:text-black"
              >
                {shareIcon ?? <Send />}
              </button>
            </div>

            <button
              type="button"
              aria-label={`Save ${username}'s post`}
              onClick={onBookmark}
              className="h-4 w-4 cursor-pointer text-neutral-700 hover:text-black"
            >
              {bookmarkIcon ?? <Bookmark />}
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
