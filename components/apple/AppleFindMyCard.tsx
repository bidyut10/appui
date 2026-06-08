import React, { forwardRef } from "react";
import { Key } from "@/icons/Key";
import { MapPinned } from "@/icons/MapPinned";

export const AppleFindMyCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-[1.25rem] bg-white font-sans shadow-xl shadow-black/10 ${className}`}
    {...props}
  >
    <div className="relative h-40 bg-[#e8e4dc]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#c8c4bc 1px, transparent 1px), linear-gradient(90deg, #c8c4bc 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full border-2 border-[#007AFF]/40 bg-[#007AFF]/20">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007AFF] shadow-lg shadow-blue-300">
            <span className="text-sm text-white">
              <MapPinned />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2f2f7] text-lg">
          <Key />
        </div>
        <div>
          <h4 className="text-[15px] font-semibold text-neutral-900">
            AirTag — Keys
          </h4>
          <p className="text-[13px] font-medium text-[#34C759]">
            Nearby · Living Room
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="h-10 flex-1 cursor-pointer rounded-xl bg-[#007AFF] text-[13px] font-medium text-white transition-colors hover:bg-[#0066d6]">
          Play Sound
        </button>
        <button className="h-10 flex-1 cursor-pointer rounded-xl bg-[#f2f2f7] text-[13px] font-medium text-[#007AFF] transition-colors hover:bg-neutral-200">
          Directions
        </button>
      </div>
      <p className="mt-3 text-center text-[11px] text-neutral-400">
        Last seen: Just now
      </p>
    </div>
  </div>
));
AppleFindMyCard.displayName = "AppleFindMyCard";
