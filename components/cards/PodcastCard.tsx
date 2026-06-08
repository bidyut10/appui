import { forwardRef, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import coverImage from "@/public/bh.png";

import { Play } from "@/icons/Play";

/*
| Podcast episode card built with Next.js, React, TypeScript,
| and Tailwind CSS.
|
| Replace the demo episode details, artwork, and playback
| information with your own content.
|
| React Users:
| Replace `next/image` with a standard `img` element.
*/

export type PodcastCardProps = {
  episodeNumber?: string;
  title?: string;
  host?: string;
  duration?: string;

  currentTime?: string;
  progress?: number;

  artwork?: StaticImageData | string;
  artworkAlt?: string;

  playIcon?: React.ReactNode;

  onPlay?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const PodcastCard = forwardRef<HTMLDivElement, PodcastCardProps>(
  (
    {
      className,

      episodeNumber = "Episode 42",
      title = "Building Design Systems That Scale",
      host = "Sarah Chen",
      duration = "48 min",

      currentTime = "16:42",
      progress = 35,

      artwork = coverImage,
      artworkAlt = "Podcast cover",

      playIcon,

      onPlay,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="podcast-card"
      className={cn(
        "group w-72 overflow-hidden rounded-2xl bg-neutral-900 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Cover Artwork */}
      <div
        data-slot="podcast-card-cover"
        className="relative h-32 overflow-hidden"
      >
        <Image
          src={artwork}
          alt={artworkAlt}
          fill
          sizes="288px"
          className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
        />

        <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

        <div
          data-slot="podcast-card-episode"
          className="absolute bottom-3 left-4"
        >
          <span className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase">
            {episodeNumber}
          </span>
        </div>
      </div>

      {/* Content */}
      <div data-slot="podcast-card-content" className="p-4">
        <h3 className="mb-1 text-sm leading-snug font-semibold text-white">
          {title}
        </h3>

        <p className="mb-4 text-[11px] text-neutral-500">
          with {host} · {duration}
        </p>

        <div
          data-slot="podcast-card-player"
          className="flex items-center gap-3"
        >
          <button
            type="button"
            aria-label={`Play ${title}`}
            onClick={onPlay}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-transform hover:scale-105 active:scale-95"
          >
            {playIcon ?? <Play size={16} />}
          </button>

          <div className="flex-1">
            <div
              data-slot="podcast-card-progress"
              className="h-1 overflow-hidden rounded-full bg-neutral-800"
            >
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                style={{
                  width: `${Math.min(100, Math.max(0, progress))}%`,
                }}
              />
            </div>

            <div className="mt-1 flex justify-between">
              <span className="font-mono text-[9px] text-neutral-600">
                {currentTime}
              </span>

              <span className="font-mono text-[9px] text-neutral-600">
                {duration}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
);

PodcastCard.displayName = "PodcastCard";
