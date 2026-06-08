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
    className={`max-w-xs overflow-hidden rounded-xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="flex items-center gap-2 px-3 py-2.5">
      <div className="h-8 w-8 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
        <div className="h-full w-full rounded-full bg-white p-0.5">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-neutral-900">
            <Image src={profile_logo} alt="avatar-logo-img" className="w-4" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral-900">johndoe.dev</p>
        <p className="text-[10px] text-neutral-400">West Bengal, India</p>
      </div>
      <Ellipsis className="ml-auto h-4 w-4 text-neutral-400" />
    </div>

    <Image src={bg_image} alt="twitter-logo-boy" className="h-36" />

    <div className="px-3 pt-2.5 pb-3">
      <div className="mb-2 flex items-center justify-between">
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
      <p className="mb-1 text-xs font-semibold text-neutral-900">1,204 likes</p>
      <p className="text-xs leading-relaxed text-neutral-800">
        <span className="font-semibold">johndoe.dev</span> New card UI drop 🃏
        Minimal, clean, and open-source.{" "}
        <span className="text-blue-500">#uidesign #reactjs #webdev</span>
      </p>
      <p className="mt-1 text-[10px] tracking-wide text-neutral-400 uppercase">
        2 hours ago
      </p>
    </div>
  </div>
));
InstagramPostCard.displayName = "InstagramPostCard";
