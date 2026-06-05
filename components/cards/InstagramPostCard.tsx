import React, { forwardRef } from "react";
import profile_logo from "@/public/boy.png";
import bg_image from "@/public/dbg.png";
import Image from "next/image";
import { Ellipsis } from "@/icons/Ellipsis";
import { Like } from "@/icons/Like";
import { Chat } from "@/icons/Chat";
import { Bookmark } from "@/icons/Bookmark";
import { Send } from "@/icons/Send";

export const InstagramPostCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`max-w-xs bg-white border border-neutral-100 shadow-lg rounded-xl font-sans overflow-hidden ${className}`}
    {...props}
  >
    <div className="flex items-center gap-2 px-3 py-2.5">
      <div className="w-8 h-8 rounded-full p-0.5 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600">
        <div className="w-full h-full rounded-full bg-white p-0.5">
          <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center">
            <Image src={profile_logo} alt="twitter-logo-boy" className="w-4" />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-neutral-900 text-xs">johndoe.dev</p>
        <p className="text-neutral-400 text-[10px]">West Bengal, India</p>
      </div>
      <Ellipsis className="w-4 h-4 text-neutral-400 ml-auto" />
    </div>

    <Image src={bg_image} alt="twitter-logo-boy" className="h-36" />

    <div className="px-3 pt-2.5 pb-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <button className="cursor-pointer hover:opacity-70">
            <Like size={15} className="text-neutral-800" />
          </button>
          <button className="cursor-pointer hover:opacity-70">
            <Chat size={15} className="text-neutral-800" />
          </button>
          <button className="cursor-pointer hover:opacity-70">
            <Send size={15} className="text-neutral-800" />
          </button>
        </div>
        <button className="cursor-pointer hover:opacity-70">
          <Bookmark size={15} className="text-neutral-800" />
        </button>
      </div>
      <p className="text-xs font-semibold text-neutral-900 mb-1">1,204 likes</p>
      <p className="text-xs text-neutral-800 leading-relaxed">
        <span className="font-semibold">johndoe.dev</span> New card UI drop 🃏
        Minimal, clean, and open-source.{" "}
        <span className="text-blue-500">#uidesign #reactjs #webdev</span>
      </p>
      <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-wide">
        2 hours ago
      </p>
    </div>
  </div>
));
InstagramPostCard.displayName = "InstagramPostCard";
