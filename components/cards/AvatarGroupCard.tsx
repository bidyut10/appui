import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

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
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group w-64 rounded-2xl border border-neutral-100 bg-white p-5 text-center font-sans shadow-lg transition-all duration-300 hover:border-neutral-200 hover:shadow-xl",
      className,
    )}
    {...props}
  >
    <div className="mb-4 flex justify-center -space-x-3">
      {avatars.map((a, i) => (
        <div
          key={a.initial}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-br text-[10px] font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.02]",
            a.color,
          )}
          style={{
            zIndex: avatars.length - i,
          }}
        >
          {a.initial}
        </div>
      ))}

      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-[10px] font-semibold text-neutral-500 shadow-sm">
        +847
      </div>
    </div>

    <p className="mb-1 text-sm font-semibold text-neutral-900">
      Join 12,400+ developers
    </p>

    <p className="mb-4 text-xs leading-relaxed text-neutral-500">
      Trusted by teams at startups and enterprises worldwide.
    </p>

    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} viewBox="0 0 24 24" width={12} height={12} fill="#fbbf24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}

      <span className="ml-1 text-[11px] text-neutral-500">
        4.9 from 2,400 reviews
      </span>
    </div>
  </div>
));

AvatarGroupCard.displayName = "AvatarGroupCard";
