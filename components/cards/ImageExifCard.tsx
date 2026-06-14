"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Camera } from "@/icons/Camera";
import { Location } from "@/icons/Location";

import bgImage from "@/public/dbg.png";

export type ImageExifCardProps = {
  title?: string;
  camera?: string;
  settings?: string;
  location?: string;
  date?: string;
  image?: typeof bgImage;
} & ComponentPropsWithoutRef<"div">;

export const ImageExifCard = forwardRef<HTMLDivElement, ImageExifCardProps>(
  (
    {
      className,
      title = "Golden hour",
      camera = "Sony A7IV",
      settings = "f/2.8 · 1/500s · ISO 200",
      location = "Kolkata, IN",
      date = "Jun 6, 2026",
      image = bgImage,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="image-exif-card"
      className={cn(
        "w-64 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="relative h-36">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="256px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <p className="absolute bottom-3 left-3 text-sm font-bold text-white">
          {title}
        </p>
      </div>

      <div className="space-y-2 p-4">
        <div className="flex items-center gap-2 text-[11px] text-neutral-600">
          <Camera size={12} className="shrink-0 text-neutral-400" />
          <span>{camera}</span>
          <span className="text-neutral-300">·</span>
          <span>{settings}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-neutral-600">
          <Location size={12} className="shrink-0 text-neutral-400" />
          <span>{location}</span>
          <span className="ml-auto text-neutral-400">{date}</span>
        </div>
      </div>
    </div>
  ),
);

ImageExifCard.displayName = "ImageExifCard";
