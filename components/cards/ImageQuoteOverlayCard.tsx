"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import bgImage from "@/public/dbg.png";

/**
 * Full-bleed image card with quote overlay — editorial white typography.
 *
 * Replace demo image and quote with your own content.
 */
export type ImageQuoteOverlayCardProps = {
  quote?: string;
  author?: string;
  image?: StaticImageData | string;
  onClick?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const ImageQuoteOverlayCard = forwardRef<
  HTMLDivElement,
  ImageQuoteOverlayCardProps
>(
  (
    {
      className,
      quote = "Design is the silent ambassador of your brand.",
      author = "Paul Rand",
      image = bgImage,
      onClick,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      data-slot="image-quote-overlay-card"
      className={cn(
        "group relative h-80 w-64 cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-lg",
        className,
      )}
      {...props}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="256px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="font-serif text-lg leading-snug font-medium text-white">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-2 text-[11px] font-medium tracking-wider text-white/70 uppercase">
          {author}
        </p>
      </div>

      <div className="absolute top-3 left-3 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-semibold text-neutral-800 backdrop-blur-sm">
        Editorial
      </div>
    </div>
  ),
);

ImageQuoteOverlayCard.displayName = "ImageQuoteOverlayCard";
