import React, { forwardRef } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";

export const WalletPassCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-64 rounded-2xl overflow-hidden shadow-lg font-sans cursor-pointer ${className}`}
    {...props}
  >
    <div className="bg-linear-to-br from-indigo-600 to-violet-700 p-4">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">
          Member Pass
        </span>
        <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">A</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
          <Image src={profileImage} alt="Member" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">John Doe</p>
          <p className="text-white/60 text-[11px]">Premium Member</p>
        </div>
      </div>
    </div>

    <div className="relative bg-white px-4 py-3">
      <div className="absolute -top-1.5 left-0 right-0 flex justify-between px-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full bg-white" />
        ))}
      </div>
      <div className="flex items-center justify-between pt-1">
        <div>
          <p className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">Valid Until</p>
          <p className="text-xs font-semibold text-neutral-900">Dec 2026</p>
        </div>
        <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
          <div className="grid grid-cols-3 gap-px w-8 h-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className={`${i % 2 === 0 ? "bg-neutral-900" : "bg-white"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
));
WalletPassCard.displayName = "WalletPassCard";
