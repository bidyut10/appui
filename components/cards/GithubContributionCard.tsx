"use client";

import {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { ScrollHoverArea } from "@/components/ui/ScrollHoverArea";
import { ChevronDown } from "@/icons/ChevronDown";
import { ChevronUp } from "@/icons/ChevronUp";
import { cn, scrollHoverGroup } from "@/lib/utils";

/**
 * GitHub-style contribution graph — pass a year + daily counts; grid and colors are derived.
 */
export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type ContributionDay = {
  /** ISO date — `YYYY-MM-DD` */
  date: string;
  count: number;
};

export type GithubContributionCardProps = {
  /** Initial / controlled calendar year (defaults to current year). */
  year?: number;
  /** Years shown in the dropdown (newest first). Auto-derived from data when omitted. */
  years?: number[];
  username?: string;
  /**
   * Daily contribution counts — any year; graph filters by the selected year.
   * Pass `Record<"YYYY-MM-DD", number>` or `{ date, count }[]`.
   * Omit to use built-in demo data for the selected year.
   */
  contributions?: Record<string, number> | ContributionDay[];
  onYearChange?: (year: number) => void;
} & ComponentPropsWithoutRef<"div">;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

const DAY_LABELS: { row: number; label: string }[] = [
  { row: 1, label: "Mon" },
  { row: 3, label: "Wed" },
  { row: 5, label: "Fri" },
];

const LEVEL_BG: Record<ContributionLevel, string> = {
  0: "bg-[#ebedf0]",
  1: "bg-[#9be9a8]",
  2: "bg-[#40c463]",
  3: "bg-[#30a14e]",
  4: "bg-[#216e39]",
};

const WEEKS = 53;
const CELL = "h-[10px] w-[10px] rounded-[2px]";
const GAP = 3;
const COL = 10 + GAP;

type GraphCell = {
  level: ContributionLevel;
  count: number;
  date: Date | null;
  inYear: boolean;
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function toDateKey(year: number, month: number, day: number) {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

function parseYearFromDate(date: string): number | null {
  const year = Number.parseInt(date.slice(0, 4), 10);
  return Number.isFinite(year) ? year : null;
}

function filterByYear(
  contributions: Map<string, number>,
  year: number,
): Map<string, number> {
  const prefix = `${year}-`;
  const filtered = new Map<string, number>();
  for (const [date, count] of contributions) {
    if (date.startsWith(prefix)) filtered.set(date, count);
  }
  return filtered;
}

function deriveAvailableYears(
  contributions: Map<string, number>,
  selectedYear: number,
  years?: number[],
): number[] {
  if (years?.length) {
    return [...new Set(years)].sort((a, b) => b - a);
  }

  const fromData = new Set<number>();
  for (const date of contributions.keys()) {
    const y = parseYearFromDate(date);
    if (y !== null) fromData.add(y);
  }
  fromData.add(selectedYear);

  const sorted = [...fromData].sort((a, b) => b - a);
  if (sorted.length > 1) return sorted;

  const current = new Date().getFullYear();
  return Array.from({ length: 5 }, (_, i) => current - i);
}

function normalizeContributions(
  input?: Record<string, number> | ContributionDay[],
): Map<string, number> {
  const map = new Map<string, number>();
  if (!input) return map;

  if (Array.isArray(input)) {
    for (const { date, count } of input) {
      if (count > 0) map.set(date, count);
    }
    return map;
  }

  for (const [date, count] of Object.entries(input)) {
    if (count > 0) map.set(date, count);
  }
  return map;
}

function getGraphStart(year: number): Date {
  const jan1 = new Date(year, 0, 1);
  const start = new Date(jan1);
  start.setDate(jan1.getDate() - jan1.getDay());
  start.setHours(0, 0, 0, 0);
  return start;
}

function cellToDate(graphStart: Date, week: number, day: number): Date {
  const date = new Date(graphStart);
  date.setDate(graphStart.getDate() + week * 7 + day);
  return date;
}

function countToLevel(count: number, max: number): ContributionLevel {
  if (count <= 0 || max <= 0) return 0;
  const ratio = count / max;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

/** Deterministic demo — sparse Q1, Apr–Jun cluster, lighter H2. */
function generateDemoContributions(year: number): Map<string, number> {
  const map = new Map<string, number>();

  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const seed = year * 10_000 + month * 100 + day;

      if (month >= 3 && month <= 5) {
        if (seed % 11 === 0) continue;
        map.set(toDateKey(year, month, day), (seed % 10) + 1);
        continue;
      }

      if (seed % 9 === 0 || seed % 13 === 0) {
        map.set(toDateKey(year, month, day), (seed % 5) + 1);
      }
    }
  }

  return map;
}

function buildGraph(
  year: number,
  contributions: Map<string, number>,
): { grid: GraphCell[][]; total: number } {
  const graphStart = getGraphStart(year);
  const max = Math.max(0, ...contributions.values());
  let total = 0;

  const grid: GraphCell[][] = Array.from({ length: WEEKS }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => {
      const date = cellToDate(graphStart, week, day);
      const inYear = date.getFullYear() === year;

      if (!inYear) {
        return { level: 0, count: 0, date, inYear: false };
      }

      const key = toDateKey(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      );
      const count = contributions.get(key) ?? 0;
      total += count;

      return {
        level: countToLevel(count, max),
        count,
        date,
        inYear: true,
      };
    }),
  );

  return { grid, total };
}

function computeMonthLabels(year: number): { label: string; week: number }[] {
  const start = getGraphStart(year);
  const labels: { label: string; week: number }[] = [];
  let lastMonth = -1;

  for (let w = 0; w < WEEKS; w++) {
    const date = new Date(start);
    date.setDate(start.getDate() + w * 7);
    const month = date.getMonth();
    if (month !== lastMonth) {
      labels.push({ label: MONTHS[month], week: w });
      lastMonth = month;
    }
  }

  return labels;
}

function formatTooltip(date: Date, count: number, username: string) {
  const label = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  if (count === 0) return `No contributions on ${label}`;
  return `${count} contribution${count === 1 ? "" : "s"} on ${label} — ${username}`;
}

export const GithubContributionCard = forwardRef<
  HTMLDivElement,
  GithubContributionCardProps
>(
  (
    {
      className,
      year = new Date().getFullYear(),
      years: yearsProp,
      username = "bidyut10",
      contributions: contributionsInput,
      onYearChange,
      ...props
    },
    ref,
  ) => {
    const [selectedYear, setSelectedYear] = useState(year);
    const [yearOpen, setYearOpen] = useState(false);
    const yearMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setSelectedYear(year);
    }, [year]);

    useEffect(() => {
      const close = (e: MouseEvent) => {
        if (!yearMenuRef.current?.contains(e.target as Node)) {
          setYearOpen(false);
        }
      };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, []);

    const allContributions = useMemo(
      () => normalizeContributions(contributionsInput),
      [contributionsInput],
    );

    const hasUserData = contributionsInput !== undefined;

    const availableYears = useMemo(
      () => deriveAvailableYears(allContributions, selectedYear, yearsProp),
      [allContributions, selectedYear, yearsProp],
    );

    const yearContributions = useMemo(() => {
      if (!hasUserData) return generateDemoContributions(selectedYear);
      return filterByYear(allContributions, selectedYear);
    }, [allContributions, hasUserData, selectedYear]);

    const { grid, total } = useMemo(
      () => buildGraph(selectedYear, yearContributions),
      [selectedYear, yearContributions],
    );

    const monthLabels = useMemo(
      () => computeMonthLabels(selectedYear),
      [selectedYear],
    );
    const graphWidth = WEEKS * COL - GAP;

    const handleYearSelect = (nextYear: number) => {
      setSelectedYear(nextYear);
      setYearOpen(false);
      onYearChange?.(nextYear);
    };

    return (
      <div
        ref={ref}
        data-slot="github-contribution-card"
        className={cn(
          "w-sm rounded-md border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          scrollHoverGroup,
          className,
        )}
        {...props}
      >
        <div
          data-slot="github-contribution-card-header"
          className="mb-3 flex items-center justify-between gap-2"
        >
          <p className="text-sm text-neutral-700">
            <span className="font-semibold text-neutral-900">
              {total.toLocaleString()}
            </span>{" "}
            contributions in {selectedYear}
          </p>

          <div
            ref={yearMenuRef}
            data-slot="github-contribution-card-year-selector"
            className="relative shrink-0"
          >
            <button
              type="button"
              aria-label={`Select year, currently ${selectedYear}`}
              aria-expanded={yearOpen}
              aria-haspopup="listbox"
              onClick={() => setYearOpen((open) => !open)}
              className="flex cursor-pointer items-center gap-1 rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-neutral-600 transition-colors hover:bg-neutral-100"
            >
              <span>{selectedYear}</span>
              {yearOpen ? (
                <ChevronUp size={12} className="text-neutral-400" />
              ) : (
                <ChevronDown size={12} className="text-neutral-400" />
              )}
            </button>

            {yearOpen && (
              <div
                role="listbox"
                aria-label="Contribution years"
                className="absolute top-full right-0 z-50 mt-1 max-h-40 w-20 overflow-y-auto rounded-md border border-neutral-100 bg-white py-1 shadow-lg"
              >
                {availableYears.map((y) => (
                  <button
                    key={y}
                    type="button"
                    role="option"
                    aria-selected={y === selectedYear}
                    onClick={() => handleYearSelect(y)}
                    className={cn(
                      "w-full cursor-pointer px-2.5 py-1 text-left text-[11px] transition-colors",
                      y === selectedYear
                        ? "bg-neutral-900 font-medium text-white"
                        : "text-neutral-600 hover:bg-neutral-50",
                    )}
                  >
                    {y}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <ScrollHoverArea axis="x" className="w-full">
          <div className="inline-flex min-w-max flex-col" style={{ gap: GAP }}>
            <div
              className="relative h-4"
              style={{ width: graphWidth, marginLeft: 27 }}
            >
              {monthLabels.map(({ label, week }) => (
                <span
                  key={`${label}-${week}`}
                  className="absolute top-0 text-[10px] text-neutral-500"
                  style={{ left: week * COL }}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="flex" style={{ gap: GAP }}>
              <div
                className="relative shrink-0 text-[10px] text-neutral-500"
                style={{ width: 24, height: 7 * COL - GAP }}
              >
                {DAY_LABELS.map(({ row, label }) => (
                  <span
                    key={label}
                    className="absolute leading-none"
                    style={{ top: row * COL + 1 }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex" style={{ gap: GAP }}>
                {grid.map((week, wi) => (
                  <div
                    key={wi}
                    className="flex flex-col"
                    style={{ gap: GAP }}
                    data-slot="github-contribution-card-week"
                  >
                    {week.map((cell, di) => (
                      <div
                        key={di}
                        title={
                          cell.date
                            ? formatTooltip(cell.date, cell.count, username)
                            : undefined
                        }
                        className={cn(
                          CELL,
                          cell.inYear ? LEVEL_BG[cell.level] : "bg-transparent",
                        )}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollHoverArea>

        <div
          data-slot="github-contribution-card-footer"
          className="mt-3 flex items-center justify-end gap-1 text-[10px] text-neutral-500"
        >
          <span>Less</span>
          {([0, 1, 2, 3, 4] as ContributionLevel[]).map((level) => (
            <div
              key={level}
              className={cn("h-[10px] w-[10px] rounded-[2px]", LEVEL_BG[level])}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    );
  },
);

GithubContributionCard.displayName = "GithubContributionCard";
