import { Locate } from "@/icons/Locate";
import { MoveDown } from "@/icons/MoveDown";
import { MoveLeft } from "@/icons/MoveLeft";
import { MoveUp } from "@/icons/MoveUp";
import React, { forwardRef } from "react";

export const AppleMapsDirections = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-[1.25rem] bg-white font-sans shadow-xl shadow-black/10 ${className}`}
    {...props}
  >
    <div className="flex items-center justify-between bg-[#007AFF] px-4 py-3">
      <div>
        <p className="text-[11px] font-medium text-white/70">
          Navigation Active
        </p>
        <p className="text-lg font-semibold tracking-tight text-white">
          12 min
        </p>
      </div>
      <div className="text-right">
        <p className="text-[11px] text-white/70">Arrival</p>
        <p className="text-sm font-semibold text-white">2:42 PM</p>
      </div>
    </div>
    <div className="divide-y divide-neutral-100">
      {[
        {
          icon: <MoveUp />,
          instruction: "Head north on Park Street",
          dist: "200 m",
        },
        {
          icon: <MoveLeft />,
          instruction: "Turn left onto Jawaharlal Nehru Rd",
          dist: "1.2 km",
          active: true,
        },
        {
          icon: <MoveDown />,
          instruction: "Turn right onto Strand Road",
          dist: "800 m",
        },
        { icon: <Locate />, instruction: "Arrive at Howrah Bridge", dist: "" },
      ].map((step) => (
        <div
          key={step.instruction}
          className={`flex items-center gap-3 px-4 py-3 ${"active" in step && step.active ? "bg-blue-50" : ""}`}
        >
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
              "active" in step && step.active
                ? "bg-[#007AFF] text-white"
                : "bg-[#f2f2f7] text-neutral-600"
            }`}
          >
            {step.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p
              className={`text-[13px] leading-snug ${"active" in step && step.active ? "font-semibold text-[#007AFF]" : "text-neutral-800"}`}
            >
              {step.instruction}
            </p>
          </div>
          {step.dist && (
            <span className="shrink-0 text-[11px] text-neutral-400">
              {step.dist}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
));
AppleMapsDirections.displayName = "AppleMapsDirections";
