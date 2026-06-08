import { forwardRef, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import beforeImg from "@/public/dbg.png";
import afterImg from "@/public/bh.png";

/**
 * BeforeAfterImageCard
 *
 * A clean before/after comparison UI card built with Next.js + Tailwind.
 *
 * Good for:
 * - Photo editing previews
 * - UI/UX transformations
 * - Design comparison demos
 *
 * Notes:
 * - Slider is visual only (no drag logic included)
 * - Works with Next.js Image. If using React only, replace <Image /> with <img />
 */
export type BeforeAfterImageCardProps = {
  title?: string;
  description?: string;

  beforeImage?: StaticImageData | string;
  afterImage?: StaticImageData | string;

  beforeLabel?: string;
  afterLabel?: string;
} & ComponentPropsWithoutRef<"div">;

export const BeforeAfterImageCard = forwardRef<
  HTMLDivElement,
  BeforeAfterImageCardProps
>(
  (
    {
      className,

      title = "Photo Enhancement",
      description = "Drag slider to compare original vs edited",

      beforeImage = beforeImg,
      afterImage = afterImg,

      beforeLabel = "Before",
      afterLabel = "After",

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="before-after-card"
        className={cn(
          "group w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Image comparison section */}
        <div className="relative h-44 overflow-hidden">
          {/* After image (background layer) */}
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="288px"
            className="object-cover"
          />

          {/* Before image (clipped left half) */}
          <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white">
            <div className="relative h-full w-[200%]">
              <Image
                src={beforeImage}
                alt={beforeLabel}
                fill
                sizes="288px"
                className="object-cover grayscale"
              />
            </div>
          </div>

          {/* Fake slider handle (UI only) */}
          <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg">
            <div className="flex gap-0.5">
              <div className="h-3 w-0.5 rounded-full bg-neutral-400" />
              <div className="h-3 w-0.5 rounded-full bg-neutral-400" />
            </div>
          </div>

          {/* Labels */}
          <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2 pt-1 pb-0.5 font-mono text-[9px] text-white backdrop-blur-sm">
            {beforeLabel}
          </span>

          <span className="absolute top-3 right-3 rounded-full bg-black/60 px-2 pt-1 pb-0.5 font-mono text-[9px] text-white backdrop-blur-sm">
            {afterLabel}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
          <p className="mt-1 text-[11px] text-neutral-500">{description}</p>
        </div>
      </div>
    );
  },
);

BeforeAfterImageCard.displayName = "BeforeAfterImageCard";
