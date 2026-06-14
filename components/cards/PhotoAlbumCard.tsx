"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Images } from "@/icons/Images";

import bgImage from "@/public/dbg.png";

const PHOTOS = [
  { id: "1", label: "Studio" },
  { id: "2", label: "Portrait" },
  { id: "3", label: "Street" },
  { id: "4", label: "Travel" },
];

export type PhotoAlbumCardProps = {
  title?: string;
  count?: number;
  image?: typeof bgImage;
} & ComponentPropsWithoutRef<"div">;

export const PhotoAlbumCard = forwardRef<HTMLDivElement, PhotoAlbumCardProps>(
  (
    {
      className,
      title = "Summer collection",
      count = 128,
      image = bgImage,
      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState("1");

    return (
      <div
        ref={ref}
        data-slot="photo-album-card"
        className={cn(
          "w-64 overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div>
            <p className="text-sm font-bold text-neutral-900">{title}</p>
            <p className="text-[10px] text-neutral-400">{count} photos</p>
          </div>
          <Images size={16} className="text-neutral-400" />
        </div>

        <div className="grid grid-cols-2 gap-1 p-2 pt-0">
          {PHOTOS.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActive(photo.id)}
              className={cn(
                "relative h-20 w-full overflow-hidden rounded-lg",
                active === photo.id && "ring-2 ring-neutral-900 ring-offset-1",
              )}
            >
              <Image
                src={image}
                alt={photo.label}
                fill
                className="object-cover"
                sizes="120px"
              />
              <span className="absolute bottom-1 left-1 rounded bg-black/50 px-1.5 py-0.5 text-[8px] font-medium text-white">
                {photo.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  },
);

PhotoAlbumCard.displayName = "PhotoAlbumCard";
