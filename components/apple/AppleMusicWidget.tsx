"use client";
import React, { useState } from "react";
import Image from "next/image";
import cover from "@/public/bh.png";

export const AppleMusicWidget = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="relative h-80 w-72 overflow-hidden rounded-[2rem] font-sans shadow-2xl shadow-black/20">
      <Image
        src={cover}
        alt="Album"
        fill
        className="scale-110 object-cover opacity-60 blur-2xl"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col p-5">
        <p className="text-center text-[10px] font-semibold tracking-widest text-white/50 uppercase">
          Now Playing
        </p>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="relative mb-5 h-40 w-40 overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
            <Image src={cover} alt="Album art" fill className="object-cover" />
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            Blinding Lights
          </h3>
          <p className="mt-0.5 text-sm text-white/50">The Weeknd</p>
        </div>

        <div className="space-y-3">
          <div className="h-1 overflow-hidden rounded-full bg-white/20">
            <div className="relative h-full w-[38%] rounded-full bg-white">
              <div className="absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow" />
            </div>
          </div>
          <div className="flex items-center justify-between px-0.5 font-mono text-[10px] text-white/40">
            <span>1:24</span>
            <span>3:42</span>
          </div>
          <div className="flex items-center justify-center gap-8">
            <button className="cursor-pointer text-xl text-white/60 transition-colors hover:text-white">
              ⏮
            </button>
            <button
              onClick={() => setPlaying(!playing)}
              className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white text-xl text-black shadow-lg transition-transform hover:scale-105"
            >
              {playing ? "⏸" : "▶"}
            </button>
            <button className="cursor-pointer text-xl text-white/60 transition-colors hover:text-white">
              ⏭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
