"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";


import { Heart } from "@/icons/Heart";
import { Chat } from "@/icons/Chat";
import { Share } from "@/icons/Share";
import { Music } from "@/icons/Music";
import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";

/**
 * TikTok-style vertical video post card with white chrome and brand accents.
 *
 * Replace demo content with your own. Need icons? Visit nexticons.in.
 */
export type TikTokPostCardProps = {
  displayName?: string;
  handle?: string;
  caption?: string;
  sound?: string;
  likes?: string;
  comments?: string;
  shares?: string;
  avatar?: string;
  videoThumbnail?: string;
  onLike?: (liked: boolean) => void;
  onFollow?: (following: boolean) => void;
  onPlayToggle?: (playing: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

export const TikTokPostCard = forwardRef<HTMLDivElement, TikTokPostCardProps>(
  (
    {
      className,
      displayName = "Bidyut Kundu",
      handle = "@bidyut.dev",
      caption = "POV: shipping UI components at 2am",
      sound = "Original sound - bidyut.dev",
      likes = "24.8K",
      comments = "312",
      shares = "891",
      avatar = "/boy.png",
      videoThumbnail = "/dbg.png",
      onLike,
      onFollow,
      onPlayToggle,
      ...props
    },
    ref,
  ) => {
    const [liked, setLiked] = useState(false);
    const [following, setFollowing] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (!playing) return;
      const timer = window.setInterval(() => {
        setProgress((p) => (p >= 100 ? 0 : p + 0.8));
      }, 120);
      return () => window.clearInterval(timer);
    }, [playing]);

    const togglePlay = () => {
      const next = !playing;
      setPlaying(next);
      if (!next) setProgress(0);
      onPlayToggle?.(next);
    };

    const toggleLike = () => {
      const next = !liked;
      setLiked(next);
      onLike?.(next);
    };

    const toggleFollow = () => {
      const next = !following;
      setFollowing(next);
      onFollow?.(next);
    };

    return (
      <div
        ref={ref}
        data-slot="tiktok-post-card"
        className={cn(
          "w-64 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="relative aspect-9/14 overflow-hidden bg-neutral-900">
          <Image
            src={videoThumbnail}
            alt="TikTok video"
            fill
            sizes="256px"
            className={cn(
              "object-cover transition-transform duration-700",
              playing ? "scale-105" : "scale-100",
            )}
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/30" />

          {/* Side actions — minimal TikTok-style rail */}
          <div className="absolute right-2.5 bottom-18 flex flex-col items-center gap-2.5">
            <button
              type="button"
              onClick={toggleFollow}
              className="relative mb-0.5 flex cursor-pointer flex-col items-center"
              aria-label={following ? "Unfollow" : "Follow"}
            >
              <div className="h-7 w-7 overflow-hidden rounded-full border border-white shadow-sm">
                <Image
                  src={avatar}
                  alt={displayName}
                  width={28}
                  height={28}
                  className="h-full w-full object-cover"
                />
              </div>
              {!following && (
                <span className="absolute -bottom-0.5 left-1/2 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-[#fe2c55] text-[7px] leading-none font-bold text-white">
                  +
                </span>
              )}
            </button>

            {[
              { icon: Heart, label: likes, active: liked, onClick: toggleLike },
              { icon: Chat, label: comments },
              { icon: Share, label: shares },
            ].map(({ icon: Icon, label, active, onClick }, i) => (
              <button
                key={i}
                type="button"
                onClick={onClick}
                className="flex cursor-pointer flex-col items-center gap-0.5 transition-transform active:scale-90"
              >
                <Icon
                  size={15}
                  className={cn(
                    "drop-shadow-md",
                    active
                      ? "fill-[#fe2c55] text-[#fe2c55]"
                      : "fill-white text-white",
                  )}
                />
                <span className="text-[8px] font-medium text-white drop-shadow-sm">
                  {label}
                </span>
              </button>
            ))}
          </div>

          {/* Caption + sound */}
          <div className="absolute right-12 bottom-3 left-3">
            <p className="mb-0.5 text-[10px] font-semibold text-white drop-shadow-sm">
              {handle}
            </p>
            <p className="line-clamp-2 text-[10px] leading-snug text-white/90 drop-shadow-sm">
              {caption}
            </p>
            <button
              type="button"
              className="mt-1.5 flex max-w-full cursor-pointer items-center gap-1 text-white/80 transition-opacity hover:opacity-100"
            >
              <Music
                size={9}
                className={cn(
                  "shrink-0 opacity-80",
                  playing && "animate-pulse",
                )}
              />
              <span className="truncate text-[9px]">{sound}</span>
            </button>
          </div>

          {/* Play / pause */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
            className={cn(
              "absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/25 backdrop-blur-[2px] transition-all hover:bg-black/40 active:scale-95",
              playing && "opacity-0 hover:opacity-100",
            )}
          >
            {playing ? (
              <Pause size={16} className="text-white" />
            ) : (
              <Play size={16} className="ml-0.5 text-white" />
            )}
          </button>

          {/* Progress bar */}
          <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-white/20">
            <div
              className="h-full bg-[#fe2c55] transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Footer — display name once, no duplicate handle */}
        <div className="flex items-center justify-between gap-2 border-t border-neutral-100 px-3 py-2.5">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-neutral-900">
              {displayName}
            </p>
            <p className="truncate text-[10px] text-neutral-400">
              {playing ? "Now playing" : "Tap to watch"}
            </p>
          </div>
          <button
            type="button"
            onClick={toggleFollow}
            className={cn(
              "shrink-0 cursor-pointer rounded-full px-3 py-1 text-[10px] font-bold transition-colors active:scale-95",
              following
                ? "border border-neutral-200 bg-neutral-100 text-neutral-600"
                : "bg-[#fe2c55] text-white hover:bg-[#e0264a]",
            )}
          >
            {following ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    );
  },
);

TikTokPostCard.displayName = "TikTokPostCard";
