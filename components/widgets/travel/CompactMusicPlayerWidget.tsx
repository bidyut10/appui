"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Music } from "@/icons/Music";
import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";
import { SkipPrevious } from "@/icons/SkipPrevious";
import { SkipNext } from "@/icons/SkipNext";
import { Repeat } from "@/icons/Repeat";

import bgImage from "@/public/dbg.png";

export type CompactMusicPlayerWidgetProps = {
  title?: string;
  artist?: string;
  cover?: typeof bgImage;
} & ComponentPropsWithoutRef<"div">;

export const CompactMusicPlayerWidget = forwardRef<
  HTMLDivElement,
  CompactMusicPlayerWidgetProps
>(
  (
    {
      className,
      title = "Love On The Brain",
      artist = "Rihanna",
      cover = bgImage,
      ...props
    },
    ref,
  ) => {
    const [playing, setPlaying] = useState(false);

    return (
      <div
        ref={ref}
        data-slot="compact-music-player-widget"
        className={cn(
          "w-72 rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-3 flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-neutral-900">
              {title}
            </p>
            <p className="truncate text-[11px] text-neutral-500">{artist}</p>
          </div>
          <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[9px] font-bold text-white">
            <Music size={10} className="inline" />
          </span>
        </div>

        <div className="mb-1 flex justify-between text-[10px] text-neutral-400">
          <span>0:18</span>
          <span>-2:24</span>
        </div>
        <div className="mb-3 h-1 overflow-hidden rounded-full bg-neutral-100">
          <div className="h-full w-[18%] rounded-full bg-neutral-900" />
        </div>

        <div className="flex items-center justify-center gap-4 text-neutral-700">
          <button
            type="button"
            aria-label="Repeat"
            className="cursor-pointer text-neutral-400 transition-colors hover:text-neutral-700"
          >
            <Repeat size={14} />
          </button>
          <button
            type="button"
            aria-label="Previous track"
            className="cursor-pointer transition-colors hover:text-neutral-900"
          >
            <SkipPrevious size={18} />
          </button>
          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-900 text-white transition-transform hover:scale-105 active:scale-95"
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            type="button"
            aria-label="Next track"
            className="cursor-pointer transition-colors hover:text-neutral-900"
          >
            <SkipNext size={18} />
          </button>
          <button
            type="button"
            aria-label="Repeat"
            className="cursor-pointer text-neutral-400 transition-colors hover:text-neutral-700"
          >
            <Repeat size={14} />
          </button>
        </div>
      </div>
    );
  },
);

CompactMusicPlayerWidget.displayName = "CompactMusicPlayerWidget";
