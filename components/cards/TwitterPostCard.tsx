import React, { forwardRef } from "react";
import Image from "next/image";
import profile_logo from "@/public/boy.png";
import { Bookmark } from "@/icons/Bookmark";
import { Chat } from "@/icons/Chat";
import { Ellipsis } from "@/icons/Ellipsis";
import { Heart } from "@/icons/Heart";
import { Repeat } from "@/icons/Repeat";
import { Share } from "@/icons/Share";

export const TwitterPostCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`max-w-md p-5 bg-white border border-neutral-100 shadow-lg rounded-2xl font-sans ${className}`}
    {...props}
  >
    <div className="flex gap-3">
      <div className="w-11 h-11 bg-neutral-800 rounded-full shrink-0 flex items-center justify-center">
        <Image src={profile_logo} alt="twitter-logo-boy" className="w-8" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold text-neutral-900 text-sm">John Doe</span>
            <span className="text-neutral-400 text-xs">@johndoe · 2h</span>
          </div>
          <Ellipsis className="w-4 h-4 text-neutral-400 shrink-0" />
        </div>
        <p className="mt-2 text-neutral-800 text-sm leading-relaxed">
          Building the future of UI with minimalist design and performance-first
          components. Obsessed with the little details. ✦{" "}
          <span className="text-sky-500">#WebDev #Design</span>
        </p>
        <div className="flex justify-between mt-4 text-neutral-400 max-w-xs">
          <button className="flex items-center gap-1 cursor-pointer hover:text-sky-500 transition-colors">
            <Chat size={14} />
            <span className="text-xs">12</span>
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-emerald-500 transition-colors">
            <Repeat size={16} />
            <span className="text-xs">38</span>
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-rose-500 transition-colors">
            <Heart size={15} />
            <span className="text-xs">450</span>
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-sky-500 transition-colors">
            <Bookmark size={15} />
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-sky-500 transition-colors">
            <Share size={14} />
          </button>
        </div>
      </div>
    </div>
  </div>
));
TwitterPostCard.displayName = "TwitterPostCard";
