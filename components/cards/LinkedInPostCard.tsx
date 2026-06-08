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
    className={`max-w-sm rounded-xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="mb-3 flex gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-800">
        <Image src={profile_logo} alt="twitter-logo-boy" className="w-8" />
      </div>
      <div>
        <p className="text-sm font-semibold text-neutral-900">John Doe</p>
        <p className="text-xs text-neutral-500">Software Developer · 1st</p>
        <p className="text-xs text-neutral-400">
          2h · <Clock className="inline h-3 w-3" />
        </p>
      </div>
      <div className="ml-auto">
        <Ellipsis className="h-5 w-5 text-neutral-400" />
      </div>
    </div>
    <p className="mb-3 text-sm leading-relaxed text-neutral-800">
      Excited to share my latest open-source UI library — built with
      accessibility and performance in mind.
      <br />
      <span className="text-blue-600">#OpenSource #UI #React #FrontendDev</span>
    </p>
    <div className="mb-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3">
      <p className="text-xs font-semibold text-neutral-800">nexticons.in</p>
      <p className="text-xs text-neutral-500">
        Minimal, performant UI components for modern apps.
      </p>
    </div>
    <div className="flex items-center justify-between border-t border-neutral-100 pt-3 text-xs text-neutral-500">
      <span className="flex items-center gap-1">
        <Like size={13} className="text-blue-600" /> 842 reactions
      </span>
      <span>57 comments · 23 reposts</span>
    </div>
    <div className="mt-3 flex gap-1 border-t border-neutral-100 pt-3">
      {[
        { icon: <Like size={14} />, label: "Like" },
        { icon: <Chat size={14} />, label: "Comment" },
        { icon: <Repeat size={14} />, label: "Repost" },
        { icon: <Send size={14} />, label: "Send" },
      ].map(({ icon, label }) => (
        <button
          key={label}
          className="flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-md py-1 text-[11px] font-medium text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  </div>
));
LinkedInPostCard.displayName = "LinkedInPostCard";
