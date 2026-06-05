import React, { forwardRef } from "react";

export const AppleFitnessSummary = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-[#1c1c1e] rounded-[1.5rem] p-5 font-sans ${className}`} {...props}>
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-[17px] font-bold text-white">Fitness+</h4>
      <span className="text-[11px] text-[#FF2D55] font-semibold">● LIVE</span>
    </div>
    <div className="bg-neutral-900 rounded-2xl p-4 mb-3">
      <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Today&apos;s Workout</p>
      <p className="text-lg font-semibold text-white mt-1">HIIT with Jamie-Ray</p>
      <p className="text-[13px] text-neutral-400 mt-0.5">20 min · High Intensity</p>
      <div className="flex items-center gap-4 mt-3">
        {[
          { label: "Calories", val: "186" },
          { label: "Avg HR", val: "142" },
          { label: "Duration", val: "20:14" },
        ].map(({ label, val }) => (
          <div key={label}>
            <p className="text-[10px] text-neutral-500">{label}</p>
            <p className="text-sm font-semibold text-white">{val}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-7 gap-1">
      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
        <div key={`${d}-${i}`} className="text-center">
          <p className="text-[9px] text-neutral-600 mb-1">{d}</p>
          <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold ${
            i === 3 ? "bg-[#FF2D55] text-white" : i < 3 ? "bg-[#FF2D55]/30 text-[#FF2D55]" : "bg-neutral-800 text-neutral-600"
          }`}>
            {i < 4 ? "✓" : ""}
          </div>
        </div>
      ))}
    </div>
  </div>
));
AppleFitnessSummary.displayName = "AppleFitnessSummary";
