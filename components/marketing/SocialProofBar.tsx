import React, { forwardRef } from "react";

const stats = [
  { value: "50+", label: "Components" },
  { value: "12K", label: "Developers" },
  { value: "99%", label: "Satisfaction" },
  { value: "4.9", label: "Rating" },
];

export const SocialProofBar = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-80 font-sans ${className}`}
    {...props}
  >
    <div className="grid grid-cols-4 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
      {stats.map(({ value, label }, i) => (
        <div
          key={label}
          className={`bg-white p-4 text-center ${i === 0 ? "rounded-l-2xl" : ""} ${i === stats.length - 1 ? "rounded-r-2xl" : ""}`}
        >
          <p className="text-xl font-light text-neutral-900 tracking-tight">{value}</p>
          <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-1">
            {label}
          </p>
        </div>
      ))}
    </div>

    <div className="flex items-center justify-center gap-6 mt-4">
      {["Product Hunt", "Hacker News", "Dev.to"].map((platform) => (
        <div key={platform} className="flex items-center gap-1.5">
          <div className="flex gap-px">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            ))}
          </div>
          <span className="text-[10px] text-neutral-500">{platform}</span>
        </div>
      ))}
    </div>
  </div>
));
SocialProofBar.displayName = "SocialProofBar";
