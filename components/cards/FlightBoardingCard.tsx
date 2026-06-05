import React, { forwardRef } from "react";
import { Clock } from "@/icons/Clock";
import { Location } from "@/icons/Location";

export const FlightBoardingCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="bg-neutral-900 px-4 py-3 flex items-center justify-between">
      <div>
        <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Boarding Pass</p>
        <p className="text-white text-sm font-semibold mt-0.5">AI 2847</p>
      </div>
      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-mono rounded-full">
        On Time
      </span>
    </div>

    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-2xl font-light text-neutral-900 tracking-tight">CCU</p>
          <p className="text-[10px] text-neutral-400 mt-0.5">Kolkata</p>
        </div>
        <div className="flex-1 mx-4 flex flex-col items-center">
          <div className="w-full h-px bg-neutral-200 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-transparent border-l-neutral-300" />
          </div>
          <Clock size={12} className="text-neutral-400 mt-1" />
          <span className="text-[10px] text-neutral-400 mt-0.5">2h 15m</span>
        </div>
        <div className="text-right">
          <p className="text-2xl font-light text-neutral-900 tracking-tight">DEL</p>
          <p className="text-[10px] text-neutral-400 mt-0.5">Delhi</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-dashed border-neutral-200">
        {[
          { label: "Passenger", val: "John Doe" },
          { label: "Seat", val: "14A" },
          { label: "Gate", val: "B12" },
        ].map(({ label, val }) => (
          <div key={label}>
            <p className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">{label}</p>
            <p className="text-xs font-semibold text-neutral-900 mt-0.5">{val}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-neutral-400">
        <Location size={10} />
        <span>Terminal 2 · Departs 14:30</span>
      </div>
    </div>
  </div>
));
FlightBoardingCard.displayName = "FlightBoardingCard";
