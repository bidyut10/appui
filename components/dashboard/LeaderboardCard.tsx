import React, { forwardRef } from "react";

const leaders = [
  {
    name: "Sarah Chen",
    score: 2840,
    rank: 1,
    initial: "SC",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Mike Ross",
    score: 2650,
    rank: 2,
    initial: "MR",
    color: "from-neutral-300 to-neutral-400",
  },
  {
    name: "Alex Kim",
    score: 2420,
    rank: 3,
    initial: "AK",
    color: "from-amber-600 to-amber-700",
  },
  {
    name: "Emma Wilson",
    score: 2180,
    rank: 4,
    initial: "EW",
    color: "from-violet-400 to-fuchsia-500",
  },
  {
    name: "John Doe",
    score: 1950,
    rank: 5,
    initial: "JD",
    color: "from-blue-400 to-cyan-500",
  },
];

export const LeaderboardCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="border-b border-neutral-100 px-4 py-3">
      <h4 className="text-sm font-semibold text-neutral-900">Leaderboard</h4>
      <p className="mt-0.5 text-[10px] text-neutral-400">
        Top contributors this week
      </p>
    </div>
    <div className="divide-y divide-neutral-50">
      {leaders.map((l) => (
        <div key={l.name} className="flex items-center gap-3 px-4 py-2.5">
          <span
            className={`w-4 text-[11px] font-bold ${l.rank <= 3 ? "text-amber-500" : "text-neutral-400"}`}
          >
            {l.rank <= 3 ? ["🥇", "🥈", "🥉"][l.rank - 1] : l.rank}
          </span>
          <div
            className={`h-7 w-7 rounded-full bg-linear-to-br ${l.color} flex shrink-0 items-center justify-center`}
          >
            <span className="text-[8px] font-bold text-white">{l.initial}</span>
          </div>
          <span className="flex-1 truncate text-xs font-medium text-neutral-800">
            {l.name}
          </span>
          <span className="font-mono text-[11px] text-neutral-500">
            {l.score.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  </div>
));
LeaderboardCard.displayName = "LeaderboardCard";
