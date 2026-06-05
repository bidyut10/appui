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
    className={`max-w-sm p-4 bg-white border border-neutral-100 shadow-lg rounded-xl font-sans ${className}`}
    {...props}
  >
    <div className="flex gap-3 mb-3">
      <div className="w-10 h-10 bg-neutral-800 rounded-full shrink-0 flex items-center justify-center">
        <Image src={profile_logo} alt="twitter-logo-boy" className="w-7" />
      </div>
      <div>
        <p className="font-semibold text-neutral-900 text-sm">John Doe</p>
        <p className="text-neutral-400 text-xs">
          3 hours ago · <Clock className="inline w-3 h-3" />
        </p>
      </div>
      <div className="ml-auto">
        <Ellipsis className="w-5 h-5 text-neutral-400" />
      </div>
    </div>
    <p className="text-neutral-800 text-sm leading-relaxed mb-3">
      Just launched a new side project — an open-source collection of minimal
      React UI cards.
    </p>
    <Image
      src={bg_image}
      alt="twitter-logo-boy"
      className="h-36 mb-3 rounded-lg"
    />
    <div className="flex items-center justify-between text-xs text-neutral-500 mb-2 px-1">
      <span className="flex items-center gap-1">
        <span className="bg-blue-500 rounded-full w-4 h-4 inline-flex items-center justify-center">
          <Like size={9} className="text-white fill-white" />
        </span>
        <span className="bg-rose-500 rounded-full w-4 h-4 inline-flex items-center justify-center -ml-1">
          <Heart size={9} className="text-white fill-white" />
        </span>
        312
      </span>
      <span>48 comments · 9 shares</span>
    </div>
    <div className="flex border-t border-neutral-100 pt-2 gap-1">
      {[
        { icon: <Like size={14} />, label: "Like" },
        { icon: <Chat size={14} />, label: "Comment" },
        { icon: <Share size={14} />, label: "Share" },
      ].map(({ icon, label }) => (
        <button
          key={label}
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-neutral-500 hover:bg-neutral-50 rounded-md transition-colors text-xs font-medium"
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  </div>
));
FacebookPostCard.displayName = "FacebookPostCard";
