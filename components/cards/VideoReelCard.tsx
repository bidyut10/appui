"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import thumbImage from "@/public/bh.png";

import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";
import { Heart } from "@/icons/Heart";

/**
 * Vertical video reel card — Instagram Reels / Shorts style white chrome.
 *
 * Replace demo content with your own video thumbnail and metadata.
 */
export type VideoReelCardProps = {
  creator?: string;
  caption?: string;
  views?: string;
  thumbnail?: StaticImageData | string;
  onPlayToggle?: (playing: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

export const VideoReelCard = forwardRef<HTMLDivElement, VideoReelCardProps>(
  (
    {
      className,
      creator = "@bidyut.dev",
      caption = "3 UI trends worth stealing in 2026",
      views = "48.2K",
      thumbnail = thumbImage,
      onPlayToggle,
      ...props
    },
    ref,
  ) => {
    const [playing, setPlaying] = useState(false);
    const [liked, setLiked] = useState(false);

    const toggle = () => {
      const next = !playing;
      setPlaying(next);
      onPlayToggle?.(next);
    };

    return (
      <div
        ref={ref}
        data-slot="video-reel-card"
        className={cn(
          "w-56 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="relative aspect-[9/14] overflow-hidden bg-neutral-900">
          <Image
            src={thumbnail}
            alt=""
            fill
            sizes="224px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />

          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className={cn(
              "absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 shadow-lg transition-all active:scale-95",
              playing && "opacity-0 hover:opacity-100",
            )}
          >
            {playing ? (
              <Pause size={22} className="text-neutral-900" />
            ) : (
              <Play size={22} className="ml-1 text-neutral-900" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setLiked(!liked)}
            aria-label="Like reel"
            className="absolute right-2 bottom-14 flex cursor-pointer flex-col items-center gap-0.5 text-white"
          >
            <Heart
              size={20}
              className={liked ? "fill-rose-500 text-rose-500" : ""}
            />
          </button>

          <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-3 pt-8">
            <p className="text-[11px] font-semibold text-white">{creator}</p>
            <p className="mt-0.5 line-clamp-2 text-[10px] text-white/80">
              {caption}
            </p>
            <p className="mt-1 text-[9px] text-white/60">{views} views</p>
          </div>
        </div>
      </div>
    );
  },
);

VideoReelCard.displayName = "VideoReelCard";
