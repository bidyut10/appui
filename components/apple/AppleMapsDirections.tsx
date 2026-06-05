import React, { forwardRef } from "react";

export const AppleMapsDirections = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white rounded-[1.25rem] overflow-hidden shadow-xl shadow-black/10 font-sans ${className}`} {...props}>
    <div className="px-4 py-3 bg-[#007AFF] flex items-center justify-between">
      <div>
        <p className="text-white/70 text-[11px] font-medium">Navigation Active</p>
        <p className="text-white text-lg font-semibold tracking-tight">12 min</p>
      </div>
      <div className="text-right">
        <p className="text-white/70 text-[11px]">Arrival</p>
        <p className="text-white text-sm font-semibold">2:42 PM</p>
      </div>
    </div>
    <div className="divide-y divide-neutral-100">
      {[
        { icon: "↑", instruction: "Head north on Park Street", dist: "200 m" },
        { icon: "↰", instruction: "Turn left onto Jawaharlal Nehru Rd", dist: "1.2 km", active: true },
        { icon: "→", instruction: "Turn right onto Strand Road", dist: "800 m" },
        { icon: "◎", instruction: "Arrive at Howrah Bridge", dist: "" },
      ].map((step) => (
        <div key={step.instruction} className={`flex items-center gap-3 px-4 py-3 ${"active" in step && step.active ? "bg-blue-50" : ""}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
            "active" in step && step.active ? "bg-[#007AFF] text-white" : "bg-[#f2f2f7] text-neutral-600"
          }`}>{step.icon}</div>
          <div className="flex-1 min-w-0">
            <p className={`text-[13px] leading-snug ${"active" in step && step.active ? "font-semibold text-[#007AFF]" : "text-neutral-800"}`}>
              {step.instruction}
            </p>
          </div>
          {step.dist && <span className="text-[11px] text-neutral-400 shrink-0">{step.dist}</span>}
        </div>
      ))}
    </div>
  </div>
));
AppleMapsDirections.displayName = "AppleMapsDirections";
