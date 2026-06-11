import { forwardRef, type ComponentPropsWithoutRef } from "react";

import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import cover from "@/public/dithar.png";

import { Play } from "@/icons/Play";

/*
| Music playlist card built with Next.js, React,
| TypeScript, and Tailwind CSS.
|
| Replace the playlist artwork, metadata,
| and track list with your own content.
*/

export type PlaylistTrack = {
  title: string;
  artist: string;
  duration: string;
};

export type MusicPlaylistCardProps = {
  coverImage?: StaticImageData | string;

  playlistType?: string;
  title?: string;

  songCount?: string;
  totalDuration?: string;

  tracks?: PlaylistTrack[];
} & ComponentPropsWithoutRef<"div">;

export const MusicPlaylistCard = forwardRef<
  HTMLDivElement,
  MusicPlaylistCardProps
>(
  (
    {
      className,

      coverImage = cover,

      playlistType = "Playlist",
      title = "Chill Vibes",

      songCount = "24 songs",
      totalDuration = "1h 32m",

      tracks = [
        {
          title: "Blinding Lights",
          artist: "The Weeknd",
          duration: "3:20",
        },
        {
          title: "Save Your Tears",
          artist: "The Weeknd",
          duration: "3:35",
        },
        {
          title: "Starboy",
          artist: "The Weeknd",
          duration: "3:50",
        },
      ],

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="music-playlist-card"
      className={cn(
        "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div data-slot="music-playlist-card-header" className="flex gap-3 p-4">
        <div
          data-slot="music-playlist-card-cover"
          className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-sm"
        >
          <Image src={coverImage} alt={title} fill className="object-cover" />
        </div>

        <div data-slot="music-playlist-card-info">
          <p className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
            {playlistType}
          </p>

          <h3 className="mt-0.5 text-sm font-semibold text-neutral-900">
            {title}
          </h3>

          <p className="mt-0.5 text-[11px] text-neutral-500">
            {songCount} · {totalDuration}
          </p>
        </div>
      </div>

      {/* Tracks */}
      <div
        data-slot="music-playlist-card-tracks"
        className="divide-y divide-neutral-50"
      >
        {tracks.map((track, index) => (
          <div
            key={`${track.title}-${index}`}
            data-slot="music-playlist-card-track"
            className="group flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors hover:bg-neutral-50"
          >
            <span className="w-4 font-mono text-[10px] text-neutral-400 group-hover:hidden">
              {index + 1}
            </span>

            <span className="hidden w-4 text-[10px] group-hover:block">
              <Play />
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-neutral-800">
                {track.title}
              </p>

              <p className="text-[10px] text-neutral-400">{track.artist}</p>
            </div>

            <span className="font-mono text-[10px] text-neutral-400">
              {track.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
);

MusicPlaylistCard.displayName = "MusicPlaylistCard";
