"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Music } from "@/icons/Music";
import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";

export type MinimalMusicPlayerWidgetProps = {
  track?: string;
} & ComponentPropsWithoutRef<"div">;

export const MinimalMusicPlayerWidget = forwardRef<
  HTMLDivElement,
  MinimalMusicPlayerWidgetProps
>(({ className, track = "Jim Hall - Concierto", ...props }, ref) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      ref={ref}
      data-slot="minimal-music-player-widget"
      className={cn(
        "flex h-44 w-44 flex-col justify-between rounded-[2rem] bg-black p-4 font-sans text-white shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="flex justify-end">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1ed760] text-black">
          <Music size={12} />
        </span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Music size={28} className="text-neutral-400" />
        <p className="text-center text-[10px] font-medium text-neutral-300">
          {track}
        </p>
      </div>

      <div>
        <div className="mb-2 h-0.5 overflow-hidden rounded-full bg-neutral-800">
          <div className="h-full w-1/3 rounded-full bg-white" />
        </div>
        <button
          type="button"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pause" : "Play"}
          className="mx-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 active:scale-95"
        >
          {playing ? <Pause size={12} /> : <Play size={12} />}
        </button>
      </div>
    </div>
  );
});

MinimalMusicPlayerWidget.displayName = "MinimalMusicPlayerWidget";
