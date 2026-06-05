"use client";
import React, { useState } from "react";
import Image from "next/image";
import profile from "@/public/boy.png";

export const AppleNotificationBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <button onClick={() => setVisible(true)} className="px-4 py-2 text-xs font-medium bg-[#f2f2f7] rounded-xl cursor-pointer">
        Show notification
      </button>
    );
  }

  return (
    <div className="w-80 bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[1.25rem] p-3 shadow-xl shadow-black/10 font-sans">
      <div className="flex items-start gap-3">
        <div className="relative w-10 h-10 rounded-[0.65rem] overflow-hidden shrink-0 shadow-sm">
          <Image src={profile} alt="App" fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold text-neutral-900">Messages</p>
            <span className="text-[11px] text-neutral-400">now</span>
          </div>
          <p className="text-[13px] text-neutral-800 mt-0.5 leading-snug">
            <span className="font-semibold">Sarah</span>: Hey! Are we still on for the design review today?
          </p>
        </div>
        <button onClick={() => setVisible(false)} className="text-neutral-400 text-xs cursor-pointer shrink-0 mt-0.5">✕</button>
      </div>
    </div>
  );
};
