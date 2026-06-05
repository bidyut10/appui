import React, { forwardRef } from "react";

export const AppleHealthRings = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  const rings = [
    { color: "#FF2D55", pct: 75, label: "Move", val: "450/600 CAL" },
    { color: "#AEF359", pct: 60, label: "Exercise", val: "24/30 MIN" },
    { color: "#5AC8FA", pct: 90, label: "Stand", val: "11/12 HRS" },
  ];

  return (
    <div ref={ref} className={`w-72 bg-black rounded-[1.5rem] p-5 font-sans ${className}`} {...props}>
      <p className="text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-4">Activity</p>
      <div className="flex items-center gap-5">
        <div className="relative w-28 h-28 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {rings.map((ring, i) => {
              const r = 40 - i * 12;
              const circ = 2 * Math.PI * r;
              return (
                <g key={ring.label}>
                  <circle cx="50" cy="50" r={r} fill="none" stroke="#1c1c1e" strokeWidth="8" />
                  <circle cx="50" cy="50" r={r} fill="none" stroke={ring.color} strokeWidth="8"
                    strokeDasharray={circ} strokeDashoffset={circ - (ring.pct / 100) * circ}
                    strokeLinecap="round" />
                </g>
              );
            })}
          </svg>
        </div>
        <div className="space-y-3 flex-1">
          {rings.map((ring) => (
            <div key={ring.label} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: ring.color }} />
              <div>
                <p className="text-[13px] font-semibold text-white">{ring.label}</p>
                <p className="text-[11px] text-white/40">{ring.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[11px] text-white/30 text-center mt-4">Wednesday, Jun 6</p>
    </div>
  );
});
AppleHealthRings.displayName = "AppleHealthRings";
