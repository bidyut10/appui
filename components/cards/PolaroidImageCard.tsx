import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

/**
 * Polaroid-style image card built with Next.js,
 * React, TypeScript, and Tailwind CSS.
 *
 * Minimal, aesthetic, and production-ready for galleries,
 * portfolios, and UI showcases.
 *
 * Tip: Replace image + caption dynamically for feed systems.
 */
export type PolaroidImageCardProps = {
  image?: string;
  imageAlt?: string;

  caption?: string;
  date?: string;

  rotate?: boolean;

  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export const PolaroidImageCard = forwardRef<
  HTMLDivElement,
  PolaroidImageCardProps
>(
  (
    {
      className,

      image = "/dithar.png",
      imageAlt = "Polaroid photo",

      caption = "Golden hour, Kolkata ☀",
      date = "June, 2026",

      rotate = true,

      children,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="polaroid-image-card"
        className={cn("group w-56", className)}
        {...props}
      >
        <div
          className={cn(
            "bg-white p-3 pb-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out",
            rotate ? "-rotate-2 group-hover:rotate-0" : "",
          )}
        >
          {/* Image */}
          <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="224px"
              className="object-cover sepia-[0.15] transition-all duration-500 group-hover:sepia-0"
            />
          </div>

          {/* Caption */}
          <p className="mt-4 text-center font-serif text-sm text-neutral-600 italic">
            {caption}
          </p>

          {/* Date */}
          <p className="mt-0.5 text-center font-mono text-[10px] text-neutral-400">
            {date}
          </p>

          {/* Optional slot (future extension) */}
          {children}
        </div>
      </div>
    );
  },
);

PolaroidImageCard.displayName = "PolaroidImageCard";
