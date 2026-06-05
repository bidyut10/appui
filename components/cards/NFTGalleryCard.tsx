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
    className={`group w-60 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="relative aspect-square overflow-hidden bg-neutral-100">
      <Image
        src={artImage}
        alt="NFT Art"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110">
        <Heart size={14} className="text-neutral-600" />
      </button>
      <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        1 of 1
      </span>
    </div>

    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500" />
        <span className="text-[11px] text-neutral-500">@johndoe</span>
        <span className="ml-auto text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
          Verified
        </span>
      </div>
      <h3 className="text-sm font-semibold text-neutral-900 mb-3">Golden Hour #07</h3>
      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
        <div>
          <p className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">Current Bid</p>
          <p className="text-sm font-semibold text-neutral-900">2.4 ETH</p>
        </div>
        <button className="px-3 py-1.5 bg-neutral-900 text-white text-[11px] font-medium rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
          Place Bid
        </button>
      </div>
    </div>
  </div>
));
NFTGalleryCard.displayName = "NFTGalleryCard";
