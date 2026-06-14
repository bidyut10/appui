"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import postImage from "@/public/dbg.png";

import { Pin } from "@/icons/Pin";
import { Share } from "@/icons/Share";
import { Ellipsis } from "@/icons/Ellipsis";

/**
 * Pinterest-style pin card with save button and masonry feel.
 *
 * Replace demo content with your own. Need icons? Visit nexticons.in.
 */
export type PinterestPinCardProps = {
  title?: string;
  author?: string;
  saves?: string;
  image?: StaticImageData | string;
  onSave?: (saved: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

export const PinterestPinCard = forwardRef<
  HTMLDivElement,
  PinterestPinCardProps
>(
  (
    {
      className,
      title = "Minimal dashboard UI inspiration",
      author = "Sarah Chen",
      saves = "4.2k saves",
      image = postImage,
      onSave,
      ...props
    },
    ref,
  ) => {
    const [saved, setSaved] = useState(false);

    return (
      <div
        ref={ref}
        data-slot="pinterest-pin-card"
        className={cn(
          "group w-56 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg transition-shadow hover:shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={224}
            height={280}
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              type="button"
              onClick={() => {
                setSaved(!saved);
                onSave?.(!saved);
              }}
              className={cn(
                "cursor-pointer rounded-full px-3 py-1.5 text-[11px] font-bold shadow-md transition-colors",
                saved
                  ? "bg-neutral-800 text-white"
                  : "bg-red-600 text-white hover:bg-red-700",
              )}
            >
              {saved ? "Saved" : "Save"}
            </button>
          </div>
        </div>

        <div className="p-3">
          <h3 className="line-clamp-2 text-[13px] font-semibold text-neutral-900">
            {title}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Pin size={12} className="text-red-500" />
              <span className="text-[10px] text-neutral-500">{author}</span>
            </div>
            <div className="flex gap-1 text-neutral-400">
              <Share size={12} />
              <Ellipsis size={12} />
            </div>
          </div>
          <p className="mt-1 text-[10px] text-neutral-400">{saves}</p>
        </div>
      </div>
    );
  },
);

PinterestPinCard.displayName = "PinterestPinCard";
