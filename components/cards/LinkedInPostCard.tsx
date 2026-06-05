import React, { forwardRef } from "react";
import profile_logo from "@/public/boy.png";
import Image from "next/image";
import { Clock } from "@/icons/Clock";
import { Ellipsis } from "@/icons/Ellipsis";
import { Like } from "@/icons/Like";
import { Chat } from "@/icons/Chat";
import { Repeat } from "@/icons/Repeat";
import { Send } from "@/icons/Send";
export const LinkedInPostCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`max-w-sm p-5 bg-white border border-neutral-100 shadow-lg rounded-xl font-sans ${className}`}
    {...props}
  >
    <div className="flex gap-3 mb-3">
      <div className="w-12 h-12 bg-neutral-800 rounded-full shrink-0 flex items-center justify-center">
        <Image src={profile_logo} alt="twitter-logo-boy" className="w-8" />
      </div>
      <div>
        <p className="font-semibold text-neutral-900 text-sm">John Doe</p>
        <p className="text-neutral-500 text-xs">Software Developer · 1st</p>
        <p className="text-neutral-400 text-xs">
          2h · <Clock className="inline w-3 h-3" />
        </p>
      </div>
      <div className="ml-auto">
        <Ellipsis className="w-5 h-5 text-neutral-400" />
      </div>
    </div>
    <p className="text-neutral-800 text-sm leading-relaxed mb-3">
      Excited to share my latest open-source UI library — built with
      accessibility and performance in mind.
      <br />
      <span className="text-blue-600">#OpenSource #UI #React #FrontendDev</span>
    </p>
    <div className="rounded-lg bg-neutral-50 border border-neutral-200 p-3 mb-3">
      <p className="text-xs font-semibold text-neutral-800">nexticons.in</p>
      <p className="text-xs text-neutral-500">
        Minimal, performant UI components for modern apps.
      </p>
    </div>
    <div className="flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100 pt-3">
      <span className="flex items-center gap-1">
        <Like size={13} className="text-blue-600" /> 842 reactions
      </span>
      <span>57 comments · 23 reposts</span>
    </div>
    <div className="flex gap-1 mt-3 border-t border-neutral-100 pt-3">
      {[
        { icon: <Like size={14} />, label: "Like" },
        { icon: <Chat size={14} />, label: "Comment" },
        { icon: <Repeat size={14} />, label: "Repost" },
        { icon: <Send size={14} />, label: "Send" },
      ].map(({ icon, label }) => (
        <button
          key={label}
          className="flex-1 flex flex-col items-center gap-1 py-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors text-[11px] font-medium cursor-pointer"
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  </div>
));
LinkedInPostCard.displayName = "LinkedInPostCard";
