"use client";

import Image from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Heart } from "@/icons/Heart";

import bgImage from "@/public/dbg.png";

/**
 * Dribbble-style shot card — designer portfolio preview with likes.
 */
export type DribbbleShotCardProps = {
  title?: string;
  author?: string;
  likes?: number;
  image?: typeof bgImage;
  onClick?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const DribbbleShotCard = forwardRef<
  HTMLDivElement,
  DribbbleShotCardProps
>(
  (
    {
      className,
      title = "Dashboard UI Kit",
      author = "Alex Rivera",
      likes = 842,
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
      data-slot="dribbble-shot-card"
      className={cn(
        "group w-64 cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-shadow hover:shadow-xl",
        className,
      )}
      {...props}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="256px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute right-3 bottom-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#ea4c89] opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <Heart size={10} />
          {likes}
        </span>
      </div>

      <div className="flex items-center gap-2.5 px-3 py-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ea4c89]/10 text-[10px] font-bold text-[#ea4c89]">
          {author.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold text-neutral-900">
            {title}
          </p>
          <p className="truncate text-[10px] text-neutral-500">{author}</p>
        </div>
      </div>
    </div>
  ),
);

DribbbleShotCard.displayName = "DribbbleShotCard";
