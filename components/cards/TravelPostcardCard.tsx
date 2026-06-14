import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { Location } from "@/icons/Location";
import { MapPinned } from "@/icons/MapPinned";

/**
 * TravelPostcardCard
 *
 * A vintage postcard-style travel UI card.
 * Built with Next.js + Tailwind CSS.
 *
 * Use cases:
 * - Travel blogs
 * - Memory/story cards
 * - Location highlights
 *
 * Note:
 * - Uses Next.js Image for optimization
 * - Replace with <img /> if using plain React
 */
export type TravelPostcardCardProps = {
  image?: string;

  title?: string;
  message?: string;

  location?: string;
  country?: string;

  date?: string;
  author?: string;

  icon?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

export const TravelPostcardCard = forwardRef<
  HTMLDivElement,
  TravelPostcardCardProps
>(
  (
    {
      className,

      image = "/bg.png",

      title = "Greetings from Sundarbans!",
      message = "Postcard",

      location = "West Bengal, India",
      country = "INDIA",

      date = "06.2026",
      author = "JD",

      icon,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="travel-postcard-card"
        className={cn(
          "w-72 overflow-hidden border border-[#e8e0d0] bg-[#fffdf5] font-serif shadow-[4px_4px_0_#e8e0d0]",
          className,
        )}
        {...props}
      >
        {/* Image section */}
        <div className="relative h-40">
          <Image
            src={image}
            alt={title}
            fill
            sizes="288px"
            className="object-cover sepia-[0.2]"
          />

          {/* Map badge */}
          <div className="absolute top-2 right-2 flex h-10 w-8 flex-col items-center justify-center border border-neutral-100 bg-white/90 shadow-sm">
            {icon ?? <MapPinned size={10} className="text-red-500" />}
            <span className="mt-0.5 font-mono text-[6px] text-neutral-500">
              {country}
            </span>
          </div>
        </div>

        <div className="relative p-4">
          {/* decorative stamp */}
          <div className="absolute top-3 right-4 h-20 w-16 rotate-3 rounded-sm border-2 border-red-400/40 opacity-30" />

          <p className="mb-2 font-mono text-[10px] tracking-[0.3em] text-[#a09080] uppercase">
            {message}
          </p>

          <h3 className="mb-2 text-lg leading-snug font-normal text-[#3d3530] italic">
            {title}
          </h3>

          <div className="flex items-center gap-1.5 text-[11px] text-[#8a7e70]">
            <Location size={10} />
            <span>{location}</span>
          </div>

          <p className="mt-3 text-right font-mono text-[10px] text-[#b0a595]">
            — {author} · {date}
          </p>
        </div>
      </div>
    );
  },
);

TravelPostcardCard.displayName = "TravelPostcardCard";
