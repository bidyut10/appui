import Image from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";


/**
 * Stamp postcard card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type StampPostcardCardProps = {
  message?: string;
  location?: string;
  stampValue?: string;
  imageSrc?: string;
} & ComponentPropsWithoutRef<"div">;

export const StampPostcardCard = forwardRef<
  HTMLDivElement,
  StampPostcardCardProps
>(
  (
    {
      className,
      message = "Wish you were here! The Sundarbans at golden hour — absolutely unreal.",
      location = "Sundarbans, WB",
      stampValue = "₹5",
      imageSrc = "/bg.png",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="stamp-postcard-card"
      className={cn("w-sm font-sans", className)}
      {...props}
    >
      <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-[#fffef8] shadow-md">
        <div className="relative h-32 sm:h-36">
          <Image
            src={imageSrc}
            alt={location}
            fill
            sizes="320px"
            className="object-cover"
          />
          <div className="absolute top-2 right-2 flex h-14 w-11 rotate-3 flex-col items-center justify-center border-2 border-dashed border-rose-300 bg-rose-50">
            <span className="text-[8px] font-bold text-rose-600">INDIA</span>
            <span className="text-sm font-black text-rose-700">
              {stampValue}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0 border-t border-neutral-200">
          <div className="border-r border-neutral-200 p-3">
            <p className="text-[12px] leading-relaxed text-neutral-700 italic">
              {message}
            </p>
          </div>
          <div className="flex flex-col justify-end p-3">
            <p className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
              Posted from
            </p>
            <p className="mt-0.5 text-[11px] font-semibold text-neutral-800">
              {location}
            </p>
            <div className="mt-3 space-y-2">
              <div className="h-px bg-neutral-200" />
              <div className="h-px bg-neutral-200" />
              <div className="h-px bg-neutral-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
);

StampPostcardCard.displayName = "StampPostcardCard";
