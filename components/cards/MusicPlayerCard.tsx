"use client";
import React, { useState } from "react";
import Image from "next/image";
import cover from "@/public/bh.png";
import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";
import { SkipPrevious } from "@/icons/SkipPrevious";
import { SkipNext } from "@/icons/SkipNext";

export const MusicPlayerCard = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="w-72 overflow-hidden rounded-2xl bg-neutral-950 font-sans shadow-lg">
      <div className="relative h-36">
        <Image
          src={cover}
          alt="Album"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      </div>
      <div className="relative -mt-6 p-4">
        <h3 className="text-sm font-semibold text-white">Midnight Dreams</h3>
        <p className="text-[11px] text-neutral-500">The Weeknd · After Hours</p>
        <div className="mt-4">
          <div className="h-1 overflow-hidden rounded-full bg-neutral-800">
            <div className="relative h-full w-[42%] rounded-full bg-emerald-500">
              <div className="absolute top-1/2 right-0 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white shadow" />
            </div>
          </div>
          <div className="mt-1 flex justify-between">
            <span className="font-mono text-[9px] text-neutral-600">1:24</span>
            <span className="font-mono text-[9px] text-neutral-600">3:42</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-5">
          <button className="cursor-pointer text-lg text-neutral-500 transition-colors hover:text-white">
            <SkipPrevious />
          </button>
          <button
            onClick={() => setPlaying(!playing)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
          >
            {playing ? <Pause /> : <Play />}
          </button>
          <button className="cursor-pointer text-lg text-neutral-500 transition-colors hover:text-white">
            <SkipNext />
          </button>
        </div>
      </div>
    </div>
  );
};
