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
    className={`max-w-md rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="flex gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-800">
        <Image src={profile_logo} alt="twitter-logo-boy" className="w-8" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-sm font-bold text-neutral-900">John Doe</span>
            <span className="text-xs text-neutral-400">@johndoe · 2h</span>
          </div>
          <Ellipsis className="h-4 w-4 shrink-0 text-neutral-400" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-800">
          Building the future of UI with minimalist design and performance-first
          components. Obsessed with the little details. ✦{" "}
          <span className="text-sky-500">#WebDev #Design</span>
        </p>
        <div className="mt-4 flex max-w-xs justify-between text-neutral-400">
          <button className="flex cursor-pointer items-center gap-1 transition-colors hover:text-sky-500">
            <Chat size={14} />
            <span className="text-xs">12</span>
          </button>
          <button className="flex cursor-pointer items-center gap-1 transition-colors hover:text-emerald-500">
            <Repeat size={16} />
            <span className="text-xs">38</span>
          </button>
          <button className="flex cursor-pointer items-center gap-1 transition-colors hover:text-rose-500">
            <Heart size={15} />
            <span className="text-xs">450</span>
          </button>
          <button className="flex cursor-pointer items-center gap-1 transition-colors hover:text-sky-500">
            <Bookmark size={15} />
          </button>
          <button className="flex cursor-pointer items-center gap-1 transition-colors hover:text-sky-500">
            <Share size={14} />
          </button>
        </div>
      </div>
    </div>
  </div>
));
TwitterPostCard.displayName = "TwitterPostCard";
