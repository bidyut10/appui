import React, { forwardRef } from "react";

export const AppleFitnessSummary = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 rounded-[1.5rem] bg-[#1c1c1e] p-5 font-sans ${className}`}
    {...props}
  >
    <div className="mb-4 flex items-center justify-between">
      <h4 className="text-[17px] font-bold text-white">Fitness+</h4>
      <span className="text-[11px] font-semibold text-[#FF2D55]">● LIVE</span>
    </div>
    <div className="mb-3 rounded-2xl bg-neutral-900 p-4">
      <p className="text-[11px] tracking-wider text-neutral-500 uppercase">
        Today&apos;s Workout
      </p>
      <p className="mt-1 text-lg font-semibold text-white">
        HIIT with Jamie-Ray
      </p>
      <p className="mt-0.5 text-[13px] text-neutral-400">
        20 min · High Intensity
      </p>
      <div className="mt-3 flex items-center gap-4">
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
          <p className="mb-1 text-[9px] text-neutral-600">{d}</p>
          <div
            className={`flex aspect-square w-full items-center justify-center rounded-lg text-[10px] font-bold ${
              i === 3
                ? "bg-[#FF2D55] text-white"
                : i < 3
                  ? "bg-[#FF2D55]/30 text-[#FF2D55]"
                  : "bg-neutral-800 text-neutral-600"
            }`}
          >
            {i < 4 ? "✓" : ""}
          </div>
        </div>
      ))}
    </div>
  </div>
));
AppleFitnessSummary.displayName = "AppleFitnessSummary";
