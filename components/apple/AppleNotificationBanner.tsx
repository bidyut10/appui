"use client";
import React, { useState } from "react";
import Image from "next/image";
import profile from "@/public/boy.png";

export const AppleNotificationBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <button
        onClick={() => setVisible(true)}
        className="cursor-pointer rounded-xl bg-[#f2f2f7] px-4 py-2 text-xs font-medium"
      >
        Show notification
      </button>
    );
  }

  return (
    <div className="w-80 rounded-[1.25rem] border border-white/60 bg-white/80 p-3 font-sans shadow-xl shadow-black/10 backdrop-blur-2xl">
      <div className="flex items-start gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[0.65rem] shadow-sm">
          <Image src={profile} alt="App" fill className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold text-neutral-900">
              Messages
            </p>
            <span className="text-[11px] text-neutral-400">now</span>
          </div>
          <p className="mt-0.5 text-[13px] leading-snug text-neutral-800">
            <span className="font-semibold">Sarah</span>: Hey! Are we still on
            for the design review today?
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="mt-0.5 shrink-0 cursor-pointer text-xs text-neutral-400"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
