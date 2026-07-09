import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { LoopArrow } from "@/icons/annotations/loop-arrow";

export type DenimProductEditorialCardProps = Readonly<
  {
    detailImage?: string;
    outfitImage?: string;
    description?: string;
  } & ComponentPropsWithoutRef<"div">
>;

// Production-ready Denim Product Editorial component — styled with Tailwind CSS.
export const DenimProductEditorialCard = forwardRef<
  HTMLDivElement,
  DenimProductEditorialCardProps
>(
  (
    {
      className,
      detailImage = "/wallpaper-2.png",
      outfitImage = "/wallpaper-3.png",
      description = "THE NEW DENIM CASUAL DRESS HAS BEEN THOUGHTFULLY DESIGNED FOR YOUR COMFORT AND CONSCIENCE. MADE FROM ALL RECYCLED FABRICS WITH AN ADJUSTABLE FIT, THIS IS THE STAPLE FOR YOUR WARDROBE.",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="denim-product-editorial-card"
      className={cn(
        "w-[24rem] overflow-visible bg-[#f2f2f2] px-12 py-9 font-sans",
        className,
      )}
      {...props}
    >
      <div className="relative">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="relative">
            <p className="mb-3 font-serif text-[11px] leading-snug text-neutral-900 italic">
              RECYCLED FABRICS
            </p>

            <div className="relative aspect-square w-full overflow-hidden bg-neutral-200">
              <Image
                src={detailImage}
                alt="Denim strap detail"
                fill
                sizes="152px"
                className="object-cover"
              />
            </div>

            <div className="pointer-events-none absolute top-26 -left-21 flex w-30 -rotate-90 items-center gap-1.5">
              <p className="shrink-0 font-serif text-[11px] leading-none text-neutral-900 italic">
                REINFORCED SEAMS
              </p>
              <div className="flex shrink-0 items-center">
                <div className="h-0 w-9 border-t border-dotted border-neutral-900" />
                <div
                  className="size-3.5 shrink-0 rounded-full border border-dotted border-neutral-900"
                  aria-hidden
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square w-full overflow-hidden bg-neutral-200">
              <Image
                src={outfitImage}
                alt="Denim outfit full look"
                fill
                sizes="152px"
                className="object-cover"
              />
            </div>

            <p className="mt-3 font-serif text-[11px] leading-none text-neutral-900 italic">
              ADJUSTABLE WAIST
            </p>
          </div>
        </div>

        <LoopArrow
          color="#171717"
          aria-hidden
          className="pointer-events-none absolute top-[6.15rem] left-[7.35rem] z-10 h-[3.35rem] w-25"
        />
      </div>

      <p className="mt-8 font-mono text-[9px] leading-[1.65] tracking-[0.04em] text-neutral-900 uppercase">
        {description}
      </p>
    </div>
  ),
);

DenimProductEditorialCard.displayName = "DenimProductEditorialCard";
