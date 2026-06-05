import React, { forwardRef } from "react";

const avatars = [
  { initial: "JD", color: "from-violet-400 to-fuchsia-500" },
  { initial: "SK", color: "from-blue-400 to-cyan-500" },
  { initial: "MR", color: "from-emerald-400 to-teal-500" },
  { initial: "AL", color: "from-amber-400 to-orange-500" },
  { initial: "RC", color: "from-rose-400 to-pink-500" },
];

export const AvatarGroupCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-64 p-5 bg-white border border-neutral-100 shadow-lg rounded-2xl font-sans text-center ${className}`}
    {...props}
  >
    <div className="flex justify-center -space-x-3 mb-4">
      {avatars.map((a, i) => (
        <div
          key={a.initial}
          className={`w-10 h-10 rounded-full bg-linear-to-br ${a.color} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}
          style={{ zIndex: avatars.length - i }}
        >
          {a.initial}
        </div>
      ))}
      <div className="w-10 h-10 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold text-neutral-500 shadow-sm">
        +847
      </div>
    </div>

    <p className="text-sm font-semibold text-neutral-900 mb-1">
      Join 12,400+ developers
    </p>
    <p className="text-xs text-neutral-500 leading-relaxed mb-4">
      Trusted by teams at startups and enterprises worldwide.
    </p>

    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} viewBox="0 0 24 24" width={12} height={12} fill="#fbbf24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="text-[11px] text-neutral-500 ml-1">4.9 from 2,400 reviews</span>
    </div>
  </div>
));
AvatarGroupCard.displayName = "AvatarGroupCard";
