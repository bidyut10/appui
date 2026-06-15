import Image from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Photo contact sheet card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type ContactSheetFrame = {
  src: string;
  number: string;
};

export type PhotoContactSheetCardProps = {
  rollLabel?: string;
  frames?: ContactSheetFrame[];
} & ComponentPropsWithoutRef<"div">;

const defaultFrames: ContactSheetFrame[] = [
  { src: "/dithar.png", number: "01" },
  { src: "/bg.png", number: "02" },
  { src: "/bh.png", number: "03" },
  { src: "/dbg.png", number: "04" },
];

export const PhotoContactSheetCard = forwardRef<
  HTMLDivElement,
  PhotoContactSheetCardProps
>(
  (
    {
      className,
      rollLabel = "Contact sheet — Roll 12A",
      frames = defaultFrames,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="photo-contact-sheet-card"
      className={cn(
        "w-xs rounded-sm bg-neutral-100 p-3 font-mono shadow-inner",
        className,
      )}
      {...props}
    >
      <p className="mb-2 text-[9px] tracking-wider text-neutral-500 uppercase">
        {rollLabel}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {frames.map((frame) => (
          <div
            key={frame.number}
            className="group relative aspect-[4/5] overflow-hidden border border-neutral-300 bg-white"
          >
            <Image
              src={frame.src}
              alt={`Frame ${frame.number}`}
              fill
              sizes="160px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-1 left-1 bg-white/90 px-1 py-px text-[8px] font-bold text-neutral-800">
              {frame.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
);

PhotoContactSheetCard.displayName = "PhotoContactSheetCard";
