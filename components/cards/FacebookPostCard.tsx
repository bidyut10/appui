import React, { forwardRef } from "react";
import profile_logo from "@/public/boy.png";
import bg_image from "@/public/dithar.png";
import Image from "next/image";
import { Clock } from "@/icons/Clock";
import { Ellipsis } from "@/icons/Ellipsis";
import { Like } from "@/icons/Like";
import { Heart } from "@/icons/Heart";
import { Chat } from "@/icons/Chat";
import { Share } from "@/icons/Share";

export const FacebookPostCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`max-w-sm rounded-xl border border-neutral-100 bg-white p-4 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="mb-3 flex gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800">
        <Image src={profile_logo} alt="twitter-logo-boy" className="w-7" />
      </div>
      <div>
        <p className="text-sm font-semibold text-neutral-900">John Doe</p>
        <p className="text-xs text-neutral-400">
          3 hours ago · <Clock className="inline h-3 w-3" />
        </p>
      </div>
      <div className="ml-auto h-5 w-5 text-neutral-400">
        <Ellipsis />
      </div>
    </div>
    <p className="mb-3 text-sm leading-relaxed text-neutral-800">
      Just launched a new side project — an open-source collection of minimal
      React UI cards.
    </p>
    <Image
      src={bg_image}
      alt="twitter-logo-boy"
      className="mb-3 h-36 rounded-lg"
    />
    <div className="mb-2 flex items-center justify-between px-1 text-xs text-neutral-500">
      <span className="flex items-center gap-1">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white">
          <Like size={9} />
        </span>
        <span className="-ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-white">
          <Heart size={9} />
        </span>
        312
      </span>
      <span>48 comments · 9 shares</span>
    </div>
    <div className="flex gap-1 border-t border-neutral-100 pt-2">
      {[
        { icon: <Like size={14} />, label: "Like" },
        { icon: <Chat size={14} />, label: "Comment" },
        { icon: <Share size={14} />, label: "Share" },
      ].map(({ icon, label }) => (
        <button
          key={label}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium text-neutral-500 transition-colors hover:bg-neutral-50"
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  </div>
));
FacebookPostCard.displayName = "FacebookPostCard";
