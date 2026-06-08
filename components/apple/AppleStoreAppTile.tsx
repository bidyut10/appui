import React, { forwardRef } from "react";
import { Star } from "@/icons/Star";

export const AppleStoreAppTile = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-[1.25rem] bg-white font-sans shadow-lg shadow-black/5 ${className}`}
    {...props}
  >
    <div className="flex gap-3 p-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1rem] bg-linear-to-br from-violet-500 to-fuchsia-600 shadow-md">
        <span className="text-2xl font-bold text-white">A</span>
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[15px] font-semibold text-neutral-900">
          AppUI Components
        </h4>
        <p className="mt-0.5 text-[13px] text-neutral-500">
          Design & Developer Tools
        </p>
        <div className="mt-1.5 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={10} className="text-[#FF9500]" />
          ))}
          <span className="ml-1 text-[11px] text-neutral-400">4.9 · 2.4K</span>
        </div>
      </div>
    </div>
    <div className="flex gap-2 px-4 pb-4">
      <button className="h-9 flex-1 cursor-pointer rounded-full bg-[#f2f2f7] text-[15px] font-semibold text-[#007AFF] transition-colors hover:bg-neutral-200">
        GET
      </button>
      <button className="h-9 cursor-pointer rounded-full bg-[#f2f2f7] px-4 text-[13px] font-medium text-[#007AFF] transition-colors hover:bg-neutral-200">
        In-App Purchases
      </button>
    </div>
    <div className="flex gap-2 overflow-x-auto px-4 pb-3">
      {["Cards", "Maps", "AI", "Auth"].map((tag) => (
        <span
          key={tag}
          className="shrink-0 rounded-full bg-[#f2f2f7] px-2.5 py-1 text-[11px] text-neutral-600"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
));
AppleStoreAppTile.displayName = "AppleStoreAppTile";
