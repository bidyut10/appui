import Image from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Film strip photo card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type FilmStripCardProps = {
  frames?: string[];
  label?: string;
} & ComponentPropsWithoutRef<"div">;

const defaultFrames = ["/dithar.png", "/bg.png", "/bh.png", "/dithar.png"];

export const FilmStripCard = forwardRef<HTMLDivElement, FilmStripCardProps>(
  (
    {
      className,
      frames = defaultFrames,
      label = "Roll 24 · Kodak Portra",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="film-strip-card"
      className={cn("w-sm font-mono", className)}
      {...props}
    >
      <p className="mb-2 text-center text-[9px] tracking-widest text-neutral-400 uppercase">
        {label}
      </p>
      <div className="relative rounded-sm bg-neutral-900 px-2 py-3 shadow-lg">
        <div className="absolute top-0 bottom-0 left-0 flex w-3 flex-col justify-evenly">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="mx-auto h-2 w-1.5 rounded-sm bg-neutral-700"
            />
          ))}
        </div>
        <div className="absolute top-0 right-0 bottom-0 flex w-3 flex-col justify-evenly">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="mx-auto h-2 w-1.5 rounded-sm bg-neutral-700"
            />
          ))}
        </div>
        <div className="mx-4 flex gap-1 overflow-hidden">
          {frames.map((src, i) => (
            <div
              key={i}
              className="relative h-20 w-16 shrink-0 overflow-hidden border-2 border-neutral-800 sm:h-24 sm:w-20"
            >
              <Image
                src={src}
                alt={`Frame ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
              <span className="absolute bottom-0.5 left-0.5 bg-black/60 px-1 text-[7px] text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
);

FilmStripCard.displayName = "FilmStripCard";
