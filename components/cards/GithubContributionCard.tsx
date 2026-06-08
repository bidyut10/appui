import React, { forwardRef } from "react";
import { Github } from "@/icons/Github";

export const GithubContributionCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-fit rounded-xl border border-neutral-100 bg-white p-6 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Github size={16} className="text-neutral-800" />
        <span className="text-sm font-medium text-neutral-800">
          bidyut10/ Contributions
        </span>
      </div>
      <span className="text-xs text-neutral-400">Past year</span>
    </div>
    <div className="mb-4 flex items-end gap-2">
      <span className="text-2xl font-bold text-neutral-800">550</span>
      <span className="mb-1 text-sm text-neutral-400">commits</span>
    </div>
    <div
      className="grid gap-0.75"
      style={{ gridTemplateColumns: "repeat(26, 1fr)" }}
    >
      {[...Array(52 * 2)].map((_, i) => {
        // Use deterministic pseudo-random to prevent hydration errors
        const shade = ((i * 137 + 53) % 100) / 100;
        const bg =
          shade > 0.85
            ? "bg-emerald-600"
            : shade > 0.6
              ? "bg-emerald-400"
              : shade > 0.35
                ? "bg-emerald-200"
                : "bg-neutral-100";
        return <div key={i} className={`h-3 w-3 rounded-[3px] ${bg}`} />;
      })}
    </div>
    <div className="mt-2 flex justify-between text-[10px] text-neutral-400">
      <span>Less</span>
      <div className="flex items-center gap-1">
        {[
          "bg-neutral-100",
          "bg-emerald-200",
          "bg-emerald-400",
          "bg-emerald-600",
        ].map((c) => (
          <div key={c} className={`h-2.5 w-2.5 rounded-[1px] ${c}`} />
        ))}
      </div>
      <span>More</span>
    </div>
  </div>
));
GithubContributionCard.displayName = "GithubContributionCard";
