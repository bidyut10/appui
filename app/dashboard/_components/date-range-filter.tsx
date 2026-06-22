"use client";

type DateRangeFilterProps = Readonly<{
  preset: string;
  from: string;
  to: string;
  onPresetChange: (preset: string) => void;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onApply: () => void;
}>;

const PRESETS = [
  { id: "all", label: "All time" },
  { id: "today", label: "Today" },
  { id: "7d", label: "Last 7 days" },
  { id: "30d", label: "Last 30 days" },
  { id: "custom", label: "Custom" },
] as const;

export function DateRangeFilter({
  preset,
  from,
  to,
  onPresetChange,
  onFromChange,
  onToChange,
  onApply,
}: DateRangeFilterProps) {
  return (
    <div className="flex flex-col gap-4 border border-neutral-100 bg-white px-4 py-4 sm:flex-row sm:flex-wrap sm:items-end">
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onPresetChange(item.id)}
            className={`border px-3 py-1.5 font-mono text-xs transition-colors ${
              preset === item.id
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {preset === "custom" ? (
        <div className="flex flex-wrap items-end gap-3">
          <label className="block">
            <span className="font-mono text-[11px] text-neutral-400">From</span>
            <input
              type="date"
              value={from}
              onChange={(event) => onFromChange(event.target.value)}
              className="mt-1 block border border-neutral-200 px-3 py-1.5 font-mono text-xs text-neutral-800"
            />
          </label>
          <label className="block">
            <span className="font-mono text-[11px] text-neutral-400">To</span>
            <input
              type="date"
              value={to}
              onChange={(event) => onToChange(event.target.value)}
              className="mt-1 block border border-neutral-200 px-3 py-1.5 font-mono text-xs text-neutral-800"
            />
          </label>
          <button
            type="button"
            onClick={onApply}
            className="border border-neutral-200 bg-white px-4 py-1.5 font-mono text-xs text-neutral-700 transition-colors hover:border-neutral-300"
          >
            Apply
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function buildQueryFromPreset(
  preset: string,
  from: string,
  to: string,
): string {
  if (preset === "all") return "";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (preset === "today") {
    const d = toISODate(today);
    return `?from=${d}&to=${d}`;
  }

  if (preset === "7d" || preset === "30d") {
    const start = new Date(today);
    start.setDate(start.getDate() - (preset === "7d" ? 6 : 29));
    return `?from=${toISODate(start)}&to=${toISODate(today)}`;
  }

  if (preset === "custom" && from && to) {
    return `?from=${from}&to=${to}`;
  }

  return "";
}
