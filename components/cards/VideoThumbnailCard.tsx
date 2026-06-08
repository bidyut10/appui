import React, { forwardRef } from "react";
import Image from "next/image";
import thumbnail from "@/public/dbg.png";
import { Clock } from "@/icons/Clock";
import { Play } from "@/icons/Play";

export const VideoThumbnailCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-72 cursor-pointer overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative h-40 overflow-hidden">
      <Image
        src={thumbnail}
        alt="Video"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
          <Play />
        </div>
      </div>
      <span className="absolute right-2 bottom-2 rounded bg-black/20 px-1.5 py-0.5 font-mono text-[10px] text-white">
        12:34
      </span>
    </div>
    <div className="flex gap-3 p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-red-600">
        <span className="text-[10px] font-bold text-white">JD</span>
      </div>
      <div>
        <h3 className="text-sm leading-snug font-semibold text-neutral-900 transition-colors group-hover:text-red-600">
          Building a Design System from Scratch
        </h3>
        <p className="mt-0.5 text-[11px] text-neutral-500">
          John Doe · 24K views · <Clock size={9} className="inline" /> 2 days
          ago
        </p>
      </div>
    </div>
  </div>
));
VideoThumbnailCard.displayName = "VideoThumbnailCard";
