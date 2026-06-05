import React, { forwardRef } from "react";
import { Star } from "@/icons/Star";

export const AppleStoreAppTile = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white rounded-[1.25rem] overflow-hidden shadow-lg shadow-black/5 font-sans ${className}`} {...props}>
    <div className="p-4 flex gap-3">
      <div className="w-16 h-16 rounded-[1rem] bg-linear-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-md shrink-0">
        <span className="text-white text-2xl font-bold">A</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-[15px] font-semibold text-neutral-900 truncate">AppUI Components</h4>
        <p className="text-[13px] text-neutral-500 mt-0.5">Design & Developer Tools</p>
        <div className="flex items-center gap-1 mt-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={10} className="text-[#FF9500]" />
          ))}
          <span className="text-[11px] text-neutral-400 ml-1">4.9 · 2.4K</span>
        </div>
      </div>
    </div>
    <div className="px-4 pb-4 flex gap-2">
      <button className="flex-1 h-9 bg-[#f2f2f7] text-[#007AFF] text-[15px] font-semibold rounded-full cursor-pointer hover:bg-neutral-200 transition-colors">
        GET
      </button>
      <button className="h-9 px-4 bg-[#f2f2f7] text-[#007AFF] text-[13px] font-medium rounded-full cursor-pointer hover:bg-neutral-200 transition-colors">
        In-App Purchases
      </button>
    </div>
    <div className="px-4 pb-3 flex gap-2 overflow-x-auto">
      {["Cards", "Maps", "AI", "Auth"].map((tag) => (
        <span key={tag} className="px-2.5 py-1 bg-[#f2f2f7] text-[11px] text-neutral-600 rounded-full shrink-0">{tag}</span>
      ))}
    </div>
  </div>
));
AppleStoreAppTile.displayName = "AppleStoreAppTile";
