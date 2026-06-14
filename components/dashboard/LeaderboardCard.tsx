import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Leaderboard card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo contributors, scores, and rankings with your own team data.
 */
export type Leader = {
  name: string;
  score: number;
  rank: number;
  initial: string;
  color: string;
};

export type LeaderboardCardProps = {
  title?: string;
  description?: string;
  leaders?: Leader[];
} & ComponentPropsWithoutRef<"div">;

const defaultLeaders: Leader[] = [
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
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "John Doe",
    score: 1950,
    rank: 5,
    initial: "JD",
    color: "from-blue-400 to-cyan-500",
  },
];

export const LeaderboardCard = forwardRef<HTMLDivElement, LeaderboardCardProps>(
  (
    {
      className,
      title = "Leaderboard",
      description = "Top contributors this week",
      leaders = defaultLeaders,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="leaderboard-card"
      className={cn(
        "w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
            <div
        data-slot="leaderboard-card-header"
        className="border-b border-neutral-100 px-4 py-3"
      >
        <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>

        <p className="mt-0.5 text-[10px] text-neutral-400">{description}</p>
      </div>

      {/* Leader list */}
      <div
        data-slot="leaderboard-card-list"
        className="divide-y divide-neutral-50"
      >
        {(leaders ?? []).map((leader) => (
          <div
            key={`${leader.rank}-${leader.name}`}
            data-slot="leaderboard-card-item"
            className="flex items-center gap-3 px-4 py-2.5"
          >
            {/* Rank */}
            <span
              className={cn(
                "w-4 text-[11px] font-bold",
                leader.rank <= 3 ? "text-amber-500" : "text-neutral-400",
              )}
            >
              {leader.rank}
            </span>

            {/* Avatar */}
            <div
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br",
                leader.color,
              )}
            >
              <span className="text-[8px] font-bold text-white">
                {leader.initial}
              </span>
            </div>

            {/* Name */}
            <span className="flex-1 truncate text-xs font-medium text-neutral-800">
              {leader.name}
            </span>

            {/* Score */}
            <span className="font-mono text-[11px] text-neutral-500">
              {leader.score.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
);

LeaderboardCard.displayName = "LeaderboardCard";
