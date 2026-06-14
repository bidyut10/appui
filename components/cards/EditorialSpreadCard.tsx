import Image, { type StaticImageData } from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import coverImage from "@/public/dbg.png";

/**
 * Editorial magazine spread card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type EditorialSpreadCardProps = {
  headline?: string;
  dek?: string;
  body?: string;
  imageSrc?: StaticImageData | string;
  imageAlt?: string;
  byline?: string;
} & ComponentPropsWithoutRef<"div">;

export const EditorialSpreadCard = forwardRef<
  HTMLDivElement,
  EditorialSpreadCardProps
>(
  (
    {
      className,
      headline = "The quiet revolution in component design",
      dek = "Why the best interfaces feel inevitable, not invented",
      body = "Every surface tells a story. The spacing, the weight of a headline, the pause before a button — these aren't decoration. They're decisions.",
      imageSrc = coverImage,
      imageAlt = "Editorial",
      byline = "By Editorial Team",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="editorial-spread-card"
      className={cn(
        "w-full max-w-sm overflow-hidden border border-neutral-200 bg-white font-serif shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="grid sm:grid-cols-5">
        <div className="border-b border-neutral-100 p-4 sm:col-span-3 sm:border-r sm:border-b-0">
          <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-teal-600 uppercase">
            Feature
          </p>
          <h2 className="mt-2 text-lg leading-tight font-bold text-neutral-900">
            {headline}
          </h2>
          <p className="mt-2 text-sm leading-snug font-medium text-neutral-600 italic">
            {dek}
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">
            {body}
          </p>
          <p className="mt-4 font-sans text-[10px] text-neutral-400">{byline}</p>
        </div>
        <div className="relative min-h-[140px] sm:col-span-2 sm:min-h-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  ),
);

EditorialSpreadCard.displayName = "EditorialSpreadCard";
