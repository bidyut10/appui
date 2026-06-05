"use client";
import React, { useState } from "react";
import Image from "next/image";
import cover from "@/public/bh.png";

export const AppleMusicWidget = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="relative w-72 h-80 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20 font-sans">
      <Image src={cover} alt="Album" fill className="object-cover scale-110 blur-2xl opacity-60" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full p-5 flex flex-col">
        <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest text-center">Now Playing</p>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-40 h-40 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 mb-5">
            <Image src={cover} alt="Album art" fill className="object-cover" />
          </div>
          <h3 className="text-lg font-semibold text-white tracking-tight">Blinding Lights</h3>
          <p className="text-sm text-white/50 mt-0.5">The Weeknd</p>
        </div>

        <div className="space-y-3">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full w-[38%] bg-white rounded-full relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-white/40 px-0.5">
            <span>1:24</span><span>3:42</span>
          </div>
          <div className="flex items-center justify-center gap-8">
            <button className="text-white/60 text-xl cursor-pointer hover:text-white transition-colors">⏮</button>
            <button onClick={() => setPlaying(!playing)} className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black text-xl cursor-pointer hover:scale-105 transition-transform shadow-lg">
              {playing ? "⏸" : "▶"}
            </button>
            <button className="text-white/60 text-xl cursor-pointer hover:text-white transition-colors">⏭</button>
          </div>
        </div>
      </div>
    </div>
  );
};
