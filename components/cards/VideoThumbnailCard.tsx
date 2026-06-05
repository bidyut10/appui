import React, { forwardRef } from "react";
import Image from "next/image";
import thumbnail from "@/public/dbg.png";
import { Clock } from "@/icons/Clock";

export const VideoThumbnailCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`group w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans cursor-pointer ${className}`} {...props}>
    <div className="relative h-40 overflow-hidden">
      <Image src={thumbnail} alt="Video" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" width={18} height={18} fill="white"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-[10px] font-mono text-white rounded">12:34</span>
    </div>
    <div className="p-3 flex gap-3">
      <div className="w-9 h-9 rounded-full bg-linear-to-br from-red-500 to-red-600 flex items-center justify-center shrink-0">
        <span className="text-white text-[10px] font-bold">JD</span>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 leading-snug group-hover:text-red-600 transition-colors">Building a Design System from Scratch</h3>
        <p className="text-[11px] text-neutral-500 mt-0.5">John Doe · 24K views · <Clock size={9} className="inline" /> 2 days ago</p>
      </div>
    </div>
  </div>
));
VideoThumbnailCard.displayName = "VideoThumbnailCard";
