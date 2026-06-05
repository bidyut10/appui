import React, { forwardRef } from "react";
import Image from "next/image";
import cover from "@/public/dithar.png";

const tracks = [
  { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  { title: "Save Your Tears", artist: "The Weeknd", duration: "3:35" },
  { title: "Starboy", artist: "The Weeknd", duration: "3:50" },
];

export const MusicPlaylistCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`} {...props}>
    <div className="flex gap-3 p-4">
      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm">
        <Image src={cover} alt="Playlist" fill className="object-cover" />
      </div>
      <div>
        <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Playlist</p>
        <h3 className="text-sm font-semibold text-neutral-900 mt-0.5">Chill Vibes</h3>
        <p className="text-[11px] text-neutral-500 mt-0.5">24 songs · 1h 32m</p>
      </div>
    </div>
    <div className="divide-y divide-neutral-50">
      {tracks.map((t, i) => (
        <div key={t.title} className="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-50 transition-colors cursor-pointer group">
          <span className="text-[10px] font-mono text-neutral-400 w-4 group-hover:hidden">{i + 1}</span>
          <span className="text-[10px] w-4 hidden group-hover:block">▶</span>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-neutral-800 truncate">{t.title}</p>
            <p className="text-[10px] text-neutral-400">{t.artist}</p>
          </div>
          <span className="text-[10px] font-mono text-neutral-400">{t.duration}</span>
        </div>
      ))}
    </div>
  </div>
));
MusicPlaylistCard.displayName = "MusicPlaylistCard";
