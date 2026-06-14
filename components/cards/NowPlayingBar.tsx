"use client";

import { forwardRef, type ComponentPropsWithoutRef, useState } from "react";

import Image from "next/image";


import { cn } from "@/lib/cn";

import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";
import { SkipNext } from "@/icons/SkipNext";
import { SkipPrevious } from "@/icons/SkipPrevious";

/**
 * Compact now playing music bar built with Next.js,
 * React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo song information with your own data.
 * Supports custom artwork, title, artist, progress,
 * and initial playing state.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type NowPlayingBarProps = {
  title?: string;
  artist?: string;
  progress?: number;
  artwork?: string;
  defaultPlaying?: boolean;
} & ComponentPropsWithoutRef<"div">;

export const NowPlayingBar = forwardRef<HTMLDivElement, NowPlayingBarProps>(
  (
    {
      className,

      title = "Midnight Dreams",
      artist = "The Weeknd",
      progress = 60,
      artwork = "/bh.png",
      defaultPlaying = true,

      ...props
    },
    ref,
  ) => {
    const [playing, setPlaying] = useState(defaultPlaying);

    return (
      <div
        ref={ref}
        data-slot="now-playing-bar"
        className={cn(
          "flex w-80 items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div
          data-slot="now-playing-bar-artwork"
          className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg"
        >
          <Image
            src={artwork}
            alt={title}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>

        <div data-slot="now-playing-bar-info" className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-white">{title}</p>

          <p className="truncate text-[10px] text-neutral-500">{artist}</p>
        </div>

        <div
          data-slot="now-playing-bar-controls"
          className="flex items-center gap-2"
        >
          <button
            type="button"
            aria-label="Previous track"
            className="cursor-pointer text-sm text-neutral-500 transition-colors hover:text-white"
          >
            <SkipPrevious />
          </button>

          <button
            type="button"
            aria-label={playing ? "Pause" : "Play"}
            onClick={() => setPlaying(!playing)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-xs text-neutral-900 transition-transform hover:scale-105"
          >
            {playing ? <Pause /> : <Play />}
          </button>

          <button
            type="button"
            aria-label="Next track"
            className="cursor-pointer text-sm text-neutral-500 transition-colors hover:text-white"
          >
            <SkipNext />
          </button>
        </div>

        <div
          data-slot="now-playing-bar-progress"
          className="hidden h-1 w-16 overflow-hidden rounded-full bg-neutral-800 sm:block"
        >
          <div
            className="h-full rounded-full bg-emerald-500"
            style={{
              width: `${Math.min(Math.max(progress, 0), 100)}%`,
            }}
          />
        </div>
      </div>
    );
  },
);

NowPlayingBar.displayName = "NowPlayingBar";
