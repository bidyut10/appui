import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Github } from "@/icons/Github";

/**
 * GitHub-inspired contribution card built with React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type GithubContributionCardProps = {
  username?: string;
  period?: string;

  contributions?: number;
  contributionLabel?: string;

  githubIcon?: ReactNode;

  /**
   * Custom contribution intensity values.
   * Values should be between 0 and 1.
   * Length defaults to 104 cells (52 weeks × 2 rows).
   */
  contributionData?: number[];
} & ComponentPropsWithoutRef<"div">;

export const GithubContributionCard = forwardRef<
  HTMLDivElement,
  GithubContributionCardProps
>(
  (
    {
      className,

      username = "bidyut10",
      period = "Past year",

      contributions = 550,
      contributionLabel = "commits",

      githubIcon,

      contributionData,

      ...props
    },
    ref,
  ) => {
    const cells =
      contributionData ??
      Array.from({ length: 52 * 2 }, (_, i) => {
        return ((i * 137 + 53) % 100) / 100;
      });

    return (
      <div
        ref={ref}
        data-slot="github-contribution-card"
        className={cn(
          "w-fit rounded-xl border border-neutral-100 bg-white p-6 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Card header */}
        <div
          data-slot="github-contribution-card-header"
          className="mb-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            {githubIcon ?? <Github size={16} className="text-neutral-800" />}

            <span
              title={`${username}/ Contributions`}
              className="text-sm font-medium text-neutral-800"
            >
              {username}/ Contributions
            </span>
          </div>

          <span title={period} className="text-xs text-neutral-400">
            {period}
          </span>
        </div>

        {/* Contribution count */}
        <div
          data-slot="github-contribution-card-stats"
          className="mb-4 flex items-end gap-2"
        >
          <span className="text-2xl font-bold text-neutral-800">
            {contributions.toLocaleString()}
          </span>

          <span className="mb-1 text-sm text-neutral-400">
            {contributionLabel}
          </span>
        </div>

        {/* Contribution graph */}
        <div
          data-slot="github-contribution-card-grid"
          className="grid gap-0.75"
          style={{ gridTemplateColumns: "repeat(26, 1fr)" }}
        >
          {cells.map((shade, index) => {
            const bg =
              shade > 0.85
                ? "bg-emerald-600"
                : shade > 0.6
                  ? "bg-emerald-400"
                  : shade > 0.35
                    ? "bg-emerald-200"
                    : "bg-neutral-100";

            return (
              <div key={index} className={cn("h-3 w-3 rounded-[3px]", bg)} />
            );
          })}
        </div>

        {/* Legend */}
        <div
          data-slot="github-contribution-card-legend"
          className="mt-2 flex justify-between text-[10px] text-neutral-400"
        >
          <span>Less</span>

          <div className="flex items-center gap-1">
            {[
              "bg-neutral-100",
              "bg-emerald-200",
              "bg-emerald-400",
              "bg-emerald-600",
            ].map((color) => (
              <div
                key={color}
                className={cn("h-2.5 w-2.5 rounded-[1px]", color)}
              />
            ))}
          </div>

          <span>More</span>
        </div>
      </div>
    );
  },
);

GithubContributionCard.displayName = "GithubContributionCard";
