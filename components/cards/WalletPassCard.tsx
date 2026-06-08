import React, { forwardRef } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";

export const WalletPassCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-64 cursor-pointer overflow-hidden rounded-2xl font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="bg-linear-to-br from-indigo-600 to-violet-700 p-4">
      <div className="mb-6 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">
          Member Pass
        </span>
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20">
          <span className="text-[10px] font-bold text-white">A</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/30">
          <Image
            src={profileImage}
            alt="Member"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">John Doe</p>
          <p className="text-[11px] text-white/60">Premium Member</p>
        </div>
      </div>
    </div>

    <div className="relative bg-white px-4 py-3">
      <div className="absolute -top-1.5 right-0 left-0 flex justify-between px-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-3 w-3 rounded-full bg-white" />
        ))}
      </div>
      <div className="flex items-center justify-between pt-1">
        <div>
          <p className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
            Valid Until
          </p>
          <p className="text-xs font-semibold text-neutral-900">Dec 2026</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100">
          <div className="grid h-8 w-8 grid-cols-3 gap-px">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className={`${i % 2 === 0 ? "bg-neutral-900" : "bg-white"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
));
WalletPassCard.displayName = "WalletPassCard";
