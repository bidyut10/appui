"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Google } from "@/icons/brands/google";
import { cn } from "@/lib/cn";

import { toISODate } from "./date-range-filter";

const PRESETS = [
  { id: "all", label: "All time" },
  { id: "today", label: "Today" },
  { id: "7d", label: "Last 7 days" },
  { id: "30d", label: "Last 30 days" },
  { id: "custom", label: "Custom range" },
] as const;

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"] as const;

type DashboardAsideProps = Readonly<{
  preset: string;
  from: string;
  to: string;
  onPresetChange: (preset: string) => void;
  /** Commit any custom from→to range (inclusive). */
  onCustomRange: (from: string, to: string) => void;
}>;

export function DashboardAside({
  preset,
  from,
  to,
  onPresetChange,
  onCustomRange,
}: DashboardAsideProps) {
  const [draftFrom, setDraftFrom] = useState(from);
  const [draftTo, setDraftTo] = useState(to);
  const [cursor, setCursor] = useState(() => {
    const base = from ? new Date(`${from}T12:00:00`) : new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  useEffect(() => {
    if (preset !== "custom") {
      setDraftFrom("");
      setDraftTo("");
      return;
    }
    setDraftFrom(from);
    setDraftTo(to);
  }, [preset, from, to]);

  const days = useMemo(() => buildMonthGrid(cursor), [cursor]);

  const activeFrom = preset === "custom" ? draftFrom || from : "";
  const activeTo = preset === "custom" ? draftTo || to : "";

  function selectDay(iso: string, day: Date) {
    // Jump calendar to the month of the tapped day when needed.
    if (
      day.getMonth() !== cursor.getMonth() ||
      day.getFullYear() !== cursor.getFullYear()
    ) {
      setCursor(new Date(day.getFullYear(), day.getMonth(), 1));
    }

    // Start a new range, or finish the current one.
    if (!activeFrom || (activeFrom && activeTo)) {
      setDraftFrom(iso);
      setDraftTo("");
      return;
    }

    // Same day = single-day range.
    if (iso === activeFrom) {
      setDraftTo(iso);
      onCustomRange(iso, iso);
      return;
    }

    const start = iso < activeFrom ? iso : activeFrom;
    const end = iso < activeFrom ? activeFrom : iso;
    setDraftFrom(start);
    setDraftTo(end);
    onCustomRange(start, end);
  }

  function commitInputs() {
    if (!draftFrom || !draftTo) return;
    const start = draftFrom <= draftTo ? draftFrom : draftTo;
    const end = draftFrom <= draftTo ? draftTo : draftFrom;
    setDraftFrom(start);
    setDraftTo(end);
    onCustomRange(start, end);
  }

  const monthLabel = cursor.toLocaleString(undefined, {
    month: "long",
    year: "numeric",
  });

  return (
    <aside
      aria-label="Date filter"
      className="hidden w-80 shrink-0 flex-col border-l border-neutral-200 bg-white xl:flex"
    >
      <div className="scrollbar-hover min-h-0 flex-1 overflow-y-auto px-5 py-6">
        <div className="flex items-center gap-2.5">
          <Google size={16} className="shrink-0 text-neutral-700" aria-hidden />
          <div>
            <p className="font-sans text-sm font-semibold text-neutral-900">
              Date range
            </p>
            <p className="font-sans text-[11px] text-neutral-500">
              Filter analytics period
            </p>
          </div>
        </div>

        <ul className="mt-5 space-y-0.5">
          {PRESETS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => {
                  if (item.id === "custom") {
                    setDraftFrom(from || "");
                    setDraftTo(to || "");
                    onPresetChange("custom");
                    return;
                  }
                  onPresetChange(item.id);
                }}
                className={cn(
                  "w-full rounded-lg px-2.5 py-2 text-left font-sans text-sm transition-colors",
                  preset === item.id
                    ? "bg-neutral-100 font-medium text-neutral-900"
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl border border-neutral-200 p-3">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() =>
                setCursor(
                  new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1),
                )
              }
              className="inline-flex size-7 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800"
              aria-label="Previous month"
            >
              <ChevronLeft size={16} aria-hidden />
            </button>
            <p className="font-sans text-xs font-semibold text-neutral-800">
              {monthLabel}
            </p>
            <button
              type="button"
              onClick={() =>
                setCursor(
                  new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1),
                )
              }
              className="inline-flex size-7 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800"
              aria-label="Next month"
            >
              <ChevronRight size={16} aria-hidden />
            </button>
          </div>

          <div className="mb-1 grid grid-cols-7 gap-0.5">
            {WEEKDAYS.map((d, i) => (
              <span
                key={`${d}-${i}`}
                className="py-1 text-center font-sans text-[10px] font-medium text-neutral-400"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-0.5">
            {days.map((day, index) => {
              const iso = toISODate(day);
              const inMonth = day.getMonth() === cursor.getMonth();
              const isStart = Boolean(activeFrom && iso === activeFrom);
              const isEnd = Boolean(activeTo && iso === activeTo);
              const inRange =
                Boolean(activeFrom && activeTo) &&
                iso >= activeFrom &&
                iso <= activeTo;
              const picking =
                Boolean(activeFrom) && !activeTo && iso === activeFrom;

              return (
                <button
                  key={`${iso}-${index}`}
                  type="button"
                  onClick={() => selectDay(iso, day)}
                  className={cn(
                    "aspect-square rounded-md font-sans text-[11px] tabular-nums transition-colors",
                    !inMonth && "text-neutral-300",
                    inMonth && "text-neutral-700 hover:bg-neutral-50",
                    inRange && "bg-neutral-100 text-neutral-800",
                    (isStart || isEnd || picking) &&
                      "bg-neutral-900 font-medium text-white hover:bg-neutral-800",
                  )}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-3 font-sans text-[11px] text-neutral-500">
          Click a start date, then an end date — any range works.
        </p>

        <div className="mt-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <label className="block">
              <span className="font-sans text-[10px] font-medium text-neutral-500 uppercase">
                From
              </span>
              <input
                type="date"
                value={draftFrom}
                onChange={(event) => {
                  setDraftFrom(event.target.value);
                  if (event.target.value && draftTo) {
                    const start =
                      event.target.value <= draftTo
                        ? event.target.value
                        : draftTo;
                    const end =
                      event.target.value <= draftTo
                        ? draftTo
                        : event.target.value;
                    setDraftFrom(start);
                    setDraftTo(end);
                    onCustomRange(start, end);
                  }
                }}
                className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-2 py-1.5 font-sans text-xs text-neutral-900 outline-none ring-0 focus:border-neutral-400 focus:ring-0"
              />
            </label>
            <label className="block">
              <span className="font-sans text-[10px] font-medium text-neutral-500 uppercase">
                To
              </span>
              <input
                type="date"
                value={draftTo}
                onChange={(event) => {
                  setDraftTo(event.target.value);
                  if (draftFrom && event.target.value) {
                    const start =
                      draftFrom <= event.target.value
                        ? draftFrom
                        : event.target.value;
                    const end =
                      draftFrom <= event.target.value
                        ? event.target.value
                        : draftFrom;
                    setDraftFrom(start);
                    setDraftTo(end);
                    onCustomRange(start, end);
                  }
                }}
                className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-2 py-1.5 font-sans text-xs text-neutral-900 outline-none ring-0 focus:border-neutral-400 focus:ring-0"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={commitInputs}
            disabled={!draftFrom || !draftTo}
            className="w-full rounded-lg bg-neutral-900 px-3 py-2 font-sans text-xs font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-40"
          >
            Apply range
          </button>
        </div>

        <p className="mt-5 font-sans text-[11px] leading-relaxed text-neutral-500">
          {preset === "all"
            ? "Showing all recorded analytics."
            : preset === "custom" && activeFrom && activeTo
              ? `${activeFrom} → ${activeTo}`
              : preset === "custom"
                ? activeFrom
                  ? `Start ${activeFrom} — pick an end date.`
                  : "Pick any start and end date."
                : `Preset · ${PRESETS.find((p) => p.id === preset)?.label ?? preset}`}
        </p>
      </div>
    </aside>
  );
}

function buildMonthGrid(monthStart: Date): Date[] {
  const year = monthStart.getFullYear();
  const month = monthStart.getMonth();
  const first = new Date(year, month, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Date[] = [];

  for (let i = 0; i < startPad; i++) {
    cells.push(new Date(year, month, -startPad + i + 1));
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day));
  }
  while (cells.length % 7 !== 0) {
    const next = cells.length - startPad - daysInMonth + 1;
    cells.push(new Date(year, month + 1, next));
  }
  return cells;
}
