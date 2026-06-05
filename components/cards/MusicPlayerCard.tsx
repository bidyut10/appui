"use client";
import React, { useState } from "react";
import Image from "next/image";
import cover from "@/public/bh.png";

export const MusicPlayerCard = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="w-72 bg-neutral-950 rounded-2xl overflow-hidden shadow-lg font-sans">
      <div className="relative h-36">
        <Image src={cover} alt="Album" fill className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      </div>
      <div className="p-4 -mt-6 relative">
        <h3 className="text-white text-sm font-semibold">Midnight Dreams</h3>
        <p className="text-neutral-500 text-[11px]">The Weeknd · After Hours</p>
        <div className="mt-4">
          <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full w-[42%] bg-emerald-500 rounded-full relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow" />
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[9px] font-mono text-neutral-600">1:24</span>
            <span className="text-[9px] font-mono text-neutral-600">3:42</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-3">
          <button className="text-neutral-500 hover:text-white transition-colors cursor-pointer text-lg">⏮</button>
          <button onClick={() => setPlaying(!playing)} className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
            {playing ? "⏸" : "▶"}
          </button>
          <button className="text-neutral-500 hover:text-white transition-colors cursor-pointer text-lg">⏭</button>
        </div>
      </div>
    </div>
  );
};
