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
    <div
      ref={ref}
      className={`w-72 rounded-[1.5rem] bg-black p-5 font-sans ${className}`}
      {...props}
    >
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-white/40 uppercase">
        Activity
      </p>
      <div className="flex items-center gap-5">
        <div className="relative h-28 w-28 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            {rings.map((ring, i) => {
              const r = 40 - i * 12;
              const circ = 2 * Math.PI * r;
              return (
                <g key={ring.label}>
                  <circle
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    stroke="#1c1c1e"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    stroke={ring.color}
                    strokeWidth="8"
                    strokeDasharray={circ}
                    strokeDashoffset={circ - (ring.pct / 100) * circ}
                    strokeLinecap="round"
                  />
                </g>
              );
            })}
          </svg>
        </div>
        <div className="flex-1 space-y-3">
          {rings.map((ring) => (
            <div key={ring.label} className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: ring.color }}
              />
              <div>
                <p className="text-[13px] font-semibold text-white">
                  {ring.label}
                </p>
                <p className="text-[11px] text-white/40">{ring.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-[11px] text-white/30">
        Wednesday, Jun 6
      </p>
    </div>
  );
});
AppleHealthRings.displayName = "AppleHealthRings";
