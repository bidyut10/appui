import { forwardRef, type ComponentPropsWithoutRef } from "react";

import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import thumbnail from "@/public/dbg.png";

import { Clock } from "@/icons/Clock";
import { Play } from "@/icons/Play";

/*
| Video thumbnail card built with Next.js, React,
| TypeScript, and Tailwind CSS.
|
| Replace the thumbnail, title, creator,
| views, upload time, and duration with your own data.
*/

export type VideoThumbnailCardProps = {
  thumbnailImage?: StaticImageData | string;

  title?: string;

  creatorName?: string;
  creatorInitials?: string;

  views?: string;
  uploadTime?: string;

  duration?: string;
} & ComponentPropsWithoutRef<"div">;

export const VideoThumbnailCard = forwardRef<
  HTMLDivElement,
  VideoThumbnailCardProps
>(
  (
    {
      className,

      thumbnailImage = thumbnail,

      title = "Building a Design System from Scratch",

      creatorName = "John Doe",
      creatorInitials = "JD",

      views = "24K views",
      uploadTime = "2 days ago",

      duration = "12:34",

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="video-thumbnail-card"
      className={cn(
        "group w-72 cursor-pointer overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Thumbnail */}
      <div
        data-slot="video-thumbnail-card-thumbnail"
        className="relative h-40 overflow-hidden"
      >
        <Image
          src={thumbnailImage}
          alt={title}
          fill
          sizes="288px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          data-slot="video-thumbnail-card-overlay"
          className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30"
        />

        <div
          data-slot="video-thumbnail-card-play-button"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
            <Play />
          </div>
        </div>

        <span
          data-slot="video-thumbnail-card-duration"
          className="absolute right-2 bottom-2 rounded bg-black/20 px-1.5 py-0.5 font-mono text-[10px] text-white"
        >
          {duration}
        </span>
      </div>

      {/* Content */}
      <div data-slot="video-thumbnail-card-content" className="flex gap-3 p-3">
        <div
          data-slot="video-thumbnail-card-avatar"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-red-600"
        >
          <span className="text-[10px] font-bold text-white">
            {creatorInitials}
          </span>
        </div>

        <div data-slot="video-thumbnail-card-info">
          <h3 className="text-sm leading-snug font-semibold text-neutral-900 transition-colors group-hover:text-red-600">
            {title}
          </h3>

          <p className="mt-0.5 text-[11px] text-neutral-500">
            {creatorName} · {views} · <Clock size={9} className="inline" />{" "}
            {uploadTime}
          </p>
        </div>
      </div>
    </div>
  ),
);

VideoThumbnailCard.displayName = "VideoThumbnailCard";
