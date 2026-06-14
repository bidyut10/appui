import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { Heart } from "@/icons/Heart";

/**
 * PortraitImageCard
 *
 * A modern portrait-style image card with hover interaction.
 * Built with Next.js, React, and Tailwind CSS.
 *
 * Good for:
 * - Photography portfolios
 * - Hero image previews
 * - Creative showcases
 *
 * Note:
 * - Uses Next.js Image. Replace with <img /> if using plain React.
 */
export type PortraitImageCardProps = {
  image?: string;

  title?: string;
  subtitle?: string;
  category?: string;

  icon?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

export const PortraitImageCard = forwardRef<
  HTMLDivElement,
  PortraitImageCardProps
>(
  (
    {
      className,

      image = "/dithar.png",
      title = "Golden Hour",
      subtitle = "Shot on Sony A7IV · 85mm f/1.4",
      category = "Portrait Series",

      icon,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="portrait-image-card"
        className={cn(
          "group relative h-80 w-80 cursor-pointer overflow-hidden rounded-2xl shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Main image */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

        {/* Action button */}
        <button
          type="button"
          aria-label="Like image"
          className="absolute top-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100"
        >
          {icon ?? <Heart size={14} />}
        </button>

        {/* Bottom content */}
        <div className="absolute bottom-0 p-4">
          <p className="mb-1 font-mono text-[10px] tracking-widest text-white/50 uppercase">
            {category}
          </p>

          <h3 className="text-base leading-tight font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-[11px] text-white/60">{subtitle}</p>
        </div>
      </div>
    );
  },
);

PortraitImageCard.displayName = "PortraitImageCard";
