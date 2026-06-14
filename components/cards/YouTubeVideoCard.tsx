"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";
import thumbImage from "@/public/bh.png";

import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";
import { Like } from "@/icons/Like";
import { Chat } from "@/icons/Chat";
import { Share } from "@/icons/Share";

/**
 * YouTube-style video card with white layout and red brand accents.
 *
 * Replace demo content with your own. Need icons? Visit nexticons.in.
 */
export type YouTubeVideoCardProps = {
  channel?: string;
  title?: string;
  views?: string;
  uploaded?: string;
  duration?: string;
  avatar?: StaticImageData | string;
  thumbnail?: StaticImageData | string;
  onSubscribe?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const YouTubeVideoCard = forwardRef<
  HTMLDivElement,
  YouTubeVideoCardProps
>(
  (
    {
      className,
      channel = "OpenSource UI",
      title = "Building 250+ React components from scratch",
      views = "128K views",
      uploaded = "3 days ago",
      duration = "12:48",
      avatar = profileImage,
      thumbnail = thumbImage,
      onSubscribe,
      ...props
    },
    ref,
  ) => {
    const [subscribed, setSubscribed] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [liked, setLiked] = useState(false);

    const togglePlay = () => setPlaying((prev) => !prev);

    return (
      <div
        ref={ref}
        data-slot="youtube-video-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
          className="group/thumb relative block aspect-video w-full cursor-pointer overflow-hidden bg-neutral-100"
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="288px"
            className={cn(
              "object-cover transition-transform duration-500",
              playing ? "scale-105" : "scale-100",
            )}
          />
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity group-hover/thumb:opacity-100",
              playing && "group-hover/thumb:opacity-100",
            )}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform active:scale-95">
              {playing ? (
                <Pause size={24} className="text-white" />
              ) : (
                <Play size={24} className="ml-1 text-white" />
              )}
            </div>
          </div>
          <span className="absolute right-2 bottom-2 rounded-md bg-black/80 px-1.5 py-0.5 font-mono text-[10px] font-medium text-white">
            {duration}
          </span>
          {playing && (
            <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-white/30">
              <div className="h-full w-1/3 animate-pulse bg-red-600" />
            </div>
          )}
        </button>

        <div className="flex gap-3 p-3">
          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
            <Image
              src={avatar}
              alt={channel}
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-[13px] leading-snug font-semibold text-neutral-900">
              {title}
            </h3>
            <p className="mt-1 text-[11px] text-neutral-500">
              {channel} · {views} · {uploaded}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubscribed(!subscribed);
                  onSubscribe?.();
                }}
                className={cn(
                  "cursor-pointer rounded-full px-3 py-1 text-[10px] font-semibold transition-colors",
                  subscribed
                    ? "bg-neutral-100 text-neutral-600"
                    : "bg-red-600 text-white hover:bg-red-700",
                )}
              >
                {subscribed ? "Subscribed" : "Subscribe"}
              </button>
              <div className="flex gap-2 text-neutral-400">
                <button
                  type="button"
                  onClick={() => setLiked(!liked)}
                  aria-label="Like video"
                  className="cursor-pointer transition-colors hover:text-red-600"
                >
                  <Like size={14} className={liked ? "text-red-600" : ""} />
                </button>
                <button
                  type="button"
                  aria-label="Comments"
                  className="cursor-pointer transition-colors hover:text-neutral-600"
                >
                  <Chat size={14} />
                </button>
                <button
                  type="button"
                  aria-label="Share"
                  className="cursor-pointer transition-colors hover:text-neutral-600"
                >
                  <Share size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

YouTubeVideoCard.displayName = "YouTubeVideoCard";
