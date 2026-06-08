import React, { forwardRef } from "react";
import Image from "next/image";
import artImage from "@/public/dithar.png";
import { Heart } from "@/icons/Heart";

export const NFTGalleryCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative aspect-square h-56 w-full overflow-hidden bg-neutral-100">
      <Image
        src={artImage}
        alt="NFT Art"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <button className="absolute top-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110">
        <Heart size={14} className="text-neutral-600" />
      </button>
      <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2 py-0.5 font-mono text-[10px] text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        1 of 1
      </span>
    </div>

    <div className="p-4">
      <div className="mb-2 flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500" />
        <span className="text-[11px] text-neutral-500">@johndoe</span>
        <span className="ml-auto rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[10px] text-emerald-600">
          Verified
        </span>
      </div>
      <h3 className="mb-3 text-sm font-semibold text-neutral-900">
        Golden Hour #07
      </h3>
      <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
        <div>
          <p className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
            Current Bid
          </p>
          <p className="text-sm font-semibold text-neutral-900">2.4 ETH</p>
        </div>
        <button className="cursor-pointer rounded-lg bg-neutral-900 px-3 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-neutral-800">
          Place Bid
        </button>
      </div>
    </div>
  </div>
));
NFTGalleryCard.displayName = "NFTGalleryCard";
