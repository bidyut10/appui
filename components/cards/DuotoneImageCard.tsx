import { forwardRef, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import photo from "@/public/bh.png";

/**
 * DuotoneImageCard
 *
 * A modern editorial-style image card with a duotone overlay effect.
 * Perfect for portfolios, creative showcases, landing pages,
 * photography collections, and branding sections.
 *
 * Note:
 * - Uses Next.js Image for optimization.
 * - Replace <Image /> with <img /> if using React only.
 */
export type DuotoneImageCardProps = {
  image?: StaticImageData | string;

  badge?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
} & ComponentPropsWithoutRef<"div">;

export const DuotoneImageCard = forwardRef<
  HTMLDivElement,
  DuotoneImageCardProps
>(
  (
    {
      className,

      image = photo,

      badge = "Duotone",
      title = "Visual",
      highlightedTitle = "Identity",
      description = "Bold color overlays for editorial photography",

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="duotone-image-card"
        className={cn(
          "group relative h-80 w-72 cursor-pointer overflow-hidden rounded-2xl shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Background image */}
        <Image
          src={image}
          alt={highlightedTitle}
          fill
          sizes="288px"
          className="object-cover"
        />

        {/* Duotone color layer */}
        <div className="absolute inset-0 bg-neutral-600 opacity-80 mix-blend-color transition-opacity duration-500 group-hover:opacity-70" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-indigo-950/90 via-indigo-900/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="mb-3 font-mono text-[10px] tracking-[0.3em] text-indigo-300 uppercase">
            {badge}
          </span>

          <h3 className="text-2xl leading-tight font-light tracking-tight text-white">
            {title}
            <br />
            <span className="font-bold">{highlightedTitle}</span>
          </h3>

          <p className="mt-3 text-xs leading-relaxed text-indigo-200/60">
            {description}
          </p>
        </div>
      </div>
    );
  },
);

DuotoneImageCard.displayName = "DuotoneImageCard";
