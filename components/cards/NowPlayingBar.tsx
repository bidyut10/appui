"use client";
import React, { useState } from "react";
import Image from "next/image";
import cover from "@/public/bh.png";

export const NowPlayingBar = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="w-80 bg-neutral-950 border border-neutral-800 rounded-2xl px-4 py-3 flex items-center gap-3 font-sans shadow-lg">
      <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
        <Image src={cover} alt="Now playing" fill className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-white truncate">Midnight Dreams</p>
        <p className="text-[10px] text-neutral-500 truncate">The Weeknd</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-neutral-500 hover:text-white text-sm cursor-pointer">⏮</button>
        <button onClick={() => setPlaying(!playing)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-900 text-xs cursor-pointer hover:scale-105 transition-transform">
          {playing ? "⏸" : "▶"}
        </button>
        <button className="text-neutral-500 hover:text-white text-sm cursor-pointer">⏭</button>
      </div>
      <div className="hidden sm:block w-16 h-1 bg-neutral-800 rounded-full overflow-hidden">
        <div className="h-full w-[60%] bg-emerald-500 rounded-full" />
      </div>
    </div>
  );
};
