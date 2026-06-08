import React, { forwardRef } from "react";

export const ProgressRingCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  const progress = 73;
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={ref}
      className={`w-64 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
      {...props}
    >
      <p className="mb-4 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
        Project Progress
      </p>

      <div className="relative mx-auto mb-4 h-28 w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#f5f5f5"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-light text-neutral-900">
            {progress}%
          </span>
          <span className="font-mono text-[9px] text-neutral-400">
            Complete
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { label: "Design", val: 100, color: "bg-emerald-500" },
          { label: "Development", val: 73, color: "bg-violet-500" },
          { label: "Testing", val: 30, color: "bg-neutral-200" },
        ].map(({ label, val, color }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="w-16 text-[10px] text-neutral-500">{label}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
              <div
                className={`h-full ${color} rounded-full`}
                style={{ width: `${val}%` }}
              />
            </div>
            <span className="w-6 text-right font-mono text-[10px] text-neutral-400">
              {val}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});
ProgressRingCard.displayName = "ProgressRingCard";
