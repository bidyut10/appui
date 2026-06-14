"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import cover from "@/public/dithar.png";

import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";

/**
 * Music playlist card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the playlist artwork, metadata,
 * and track list with your own content.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
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
  ) => {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);

    const toggleTrack = (index: number) => {
      setPlayingIndex((prev) => (prev === index ? null : index));
    };

    return (
      <div
        ref={ref}
        data-slot="music-playlist-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div data-slot="music-playlist-card-header" className="flex gap-3 p-4">
          <div
            data-slot="music-playlist-card-cover"
            className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-sm"
          >
            <Image src={coverImage} alt={title} fill sizes="64px" className="object-cover" />
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

        <div
          data-slot="music-playlist-card-tracks"
          className="divide-y divide-neutral-50"
        >
          {tracks.map((track, index) => {
            const isPlaying = playingIndex === index;

            return (
              <button
                key={`${track.title}-${index}`}
                type="button"
                onClick={() => toggleTrack(index)}
                data-slot="music-playlist-card-track"
                className={cn(
                  "group flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-neutral-50",
                  isPlaying && "bg-emerald-50/80",
                )}
              >
                <span
                  className={cn(
                    "w-4 font-mono text-[10px] text-neutral-400",
                    isPlaying ? "hidden" : "group-hover:hidden",
                  )}
                >
                  {index + 1}
                </span>

                <span
                  className={cn(
                    "w-4 text-[10px] text-emerald-600",
                    isPlaying ? "block" : "hidden group-hover:block",
                  )}
                >
                  {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                </span>

                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "truncate text-xs font-medium",
                      isPlaying ? "text-emerald-700" : "text-neutral-800",
                    )}
                  >
                    {track.title}
                  </p>

                  <p className="text-[10px] text-neutral-400">{track.artist}</p>
                </div>

                <span className="font-mono text-[10px] text-neutral-400">
                  {track.duration}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);

MusicPlaylistCard.displayName = "MusicPlaylistCard";
