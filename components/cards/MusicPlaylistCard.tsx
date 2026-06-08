import React, { forwardRef } from "react";
import Image from "next/image";
import cover from "@/public/dithar.png";
import { Play } from "@/icons/Play";

const tracks = [
  { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  { title: "Save Your Tears", artist: "The Weeknd", duration: "3:35" },
  { title: "Starboy", artist: "The Weeknd", duration: "3:50" },
];

export const MusicPlaylistCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="flex gap-3 p-4">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-sm">
        <Image src={cover} alt="Playlist" fill className="object-cover" />
      </div>
      <div>
        <p className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
          Playlist
        </p>
        <h3 className="mt-0.5 text-sm font-semibold text-neutral-900">
          Chill Vibes
        </h3>
        <p className="mt-0.5 text-[11px] text-neutral-500">24 songs · 1h 32m</p>
      </div>
    </div>
    <div className="divide-y divide-neutral-50">
      {tracks.map((t, i) => (
        <div
          key={t.title}
          className="group flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors hover:bg-neutral-50"
        >
          <span className="w-4 font-mono text-[10px] text-neutral-400 group-hover:hidden">
            {i + 1}
          </span>
          <span className="hidden w-4 text-[10px] group-hover:block">
            <Play />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-neutral-800">
              {t.title}
            </p>
            <p className="text-[10px] text-neutral-400">{t.artist}</p>
          </div>
          <span className="font-mono text-[10px] text-neutral-400">
            {t.duration}
          </span>
        </div>
      ))}
    </div>
  </div>
));
MusicPlaylistCard.displayName = "MusicPlaylistCard";
