import { forwardRef, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import artImage from "@/public/dithar.png";

import { Heart } from "@/icons/Heart";

/*
| NFT-inspired gallery card built with Next.js, React, TypeScript,
| and Tailwind CSS.
|
| Replace the demo artwork, creator details, and metadata with your
| own content.
|
| Need icons? Visit nexticons.in to browse and copy free icons
| without adding another dependency to your project.
|
| React Users:
| Replace `next/image` with a standard `img` element.
*/

export type NFTGalleryCardProps = {
  title?: string;
  creator?: string;
  bid?: string;

  image?: StaticImageData | string;

  imageAlt?: string;

  verified?: boolean;
  edition?: string;
  buttonText?: string;

  onFavorite?: () => void;
  onBid?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const NFTGalleryCard = forwardRef<HTMLDivElement, NFTGalleryCardProps>(
  (
    {
      className,

      title = "Golden Hour #07",
      creator = "@bidyutk",
      bid = "2.4 ETH",

      image = artImage,

      imageAlt = "NFT artwork",

      verified = true,
      edition = "1 of 1",
      buttonText = "Place Bid",

      onFavorite,
      onBid,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="nft-gallery-card"
        className={cn(
          "group w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div
          data-slot="nft-gallery-card-image"
          className="relative aspect-square h-56 w-full overflow-hidden bg-neutral-100"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="320px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <button
            type="button"
            aria-label="Add artwork to favorites"
            onClick={onFavorite}
            className="absolute top-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-600 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110"
          >
            <Heart size={14} />
          </button>

          <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2 py-0.5 font-mono text-[10px] text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            {edition}
          </span>
        </div>

        <div data-slot="nft-gallery-card-content" className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-linear-to-br from-emerald-400 to-cyan-500" />

            <span className="text-[11px] text-neutral-500">{creator}</span>

            {verified && (
              <span className="ml-auto rounded-full bg-emerald-50 px-3 pt-1 pb-0.5 font-mono text-[10px] text-emerald-600">
                Verified
              </span>
            )}
          </div>

          <h3 className="mb-3 text-sm font-semibold text-neutral-900">
            {title}
          </h3>

          <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
            <div>
              <p className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
                Current Bid
              </p>

              <p className="text-sm font-semibold text-neutral-900">{bid}</p>
            </div>

            <button
              type="button"
              aria-label={`Place bid on ${title}`}
              onClick={onBid}
              className="cursor-pointer rounded-lg bg-neutral-900 px-3 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-neutral-800 active:scale-95"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  },
);

NFTGalleryCard.displayName = "NFTGalleryCard";
