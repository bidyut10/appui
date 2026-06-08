import { Star } from "@/icons/Star";
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
  <div ref={ref} className={`w-96 font-sans ${className}`} {...props}>
    <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 shadow-lg">
      {stats.map(({ value, label }, i) => (
        <div
          key={label}
          className={`bg-white p-4 text-center ${i === 0 ? "rounded-l-2xl" : ""} ${i === stats.length - 1 ? "rounded-r-2xl" : ""}`}
        >
          <p className="text-xl font-light tracking-tight text-neutral-900">
            {value}
          </p>
          <p className="mt-1 font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
            {label}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-4 flex items-center justify-center gap-6">
      {["Product Hunt", "Hacker News", "Dev.to"].map((platform) => (
        <div
          key={platform}
          className="flex items-center justify-center gap-1.5"
        >
          <div className="flex gap-px">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="rounded-full fill-amber-400 text-amber-400"
                size={9}
              />
            ))}
          </div>
          <span className="text-[10px] text-neutral-500">{platform}</span>
        </div>
      ))}
    </div>
  </div>
));
SocialProofBar.displayName = "SocialProofBar";
