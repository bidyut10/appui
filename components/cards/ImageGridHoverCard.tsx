"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import img1 from "@/public/dbg.png";
import img2 from "@/public/bh.png";
import img3 from "@/public/dithar.png";

/**
 * Image grid hover card — masonry-style gallery with expand on hover.
 *
 * Replace demo images with your own assets.
 */
export type ImageGridHoverCardProps = {
  title?: string;
  images?: (StaticImageData | string)[];
  onImageClick?: (index: number) => void;
} & ComponentPropsWithoutRef<"div">;

export const ImageGridHoverCard = forwardRef<
  HTMLDivElement,
  ImageGridHoverCardProps
>(
  (
    {
      className,
      title = "Gallery picks",
      images = [img1, img2, img3],
      onImageClick,
      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState<number | null>(null);

    return (
      <div
        ref={ref}
        data-slot="image-grid-hover-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="mb-2 px-1 text-sm font-bold text-neutral-900">{title}</p>

        <div className="grid grid-cols-3 gap-1.5">
          {images.map((src, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setActive(index);
                onImageClick?.(index);
              }}
              className={cn(
                "relative aspect-square cursor-pointer overflow-hidden rounded-xl transition-all duration-300",
                active === index
                  ? "col-span-2 row-span-2 ring-2 ring-teal-400"
                  : "hover:scale-[1.03] hover:shadow-md",
              )}
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <p className="mt-2 px-1 text-center text-[10px] text-neutral-400">
          Tap to expand · {images.length} photos
        </p>
      </div>
    );
  },
);

ImageGridHoverCard.displayName = "ImageGridHoverCard";
