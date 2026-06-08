"use client";
import React, { useState } from "react";
import Image from "next/image";
import cover from "@/public/bh.png";
import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";
import { SkipNext } from "@/icons/SkipNext";
import { SkipPrevious } from "@/icons/SkipPrevious";

export const NowPlayingBar = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="flex w-80 items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 font-sans shadow-lg">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
        <Image src={cover} alt="Now playing" fill className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-white">
          Midnight Dreams
        </p>
        <p className="truncate text-[10px] text-neutral-500">The Weeknd</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="cursor-pointer text-sm text-neutral-500 hover:text-white">
          <SkipPrevious />
        </button>
        <button
          onClick={() => setPlaying(!playing)}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-xs text-neutral-900 transition-transform hover:scale-105"
        >
          {playing ? <Pause /> : <Play />}
        </button>
        <button className="cursor-pointer text-sm text-neutral-500 hover:text-white">
          <SkipNext />
        </button>
      </div>
      <div className="hidden h-1 w-16 overflow-hidden rounded-full bg-neutral-800 sm:block">
        <div className="h-full w-[60%] rounded-full bg-emerald-500" />
      </div>
    </div>
  );
};
