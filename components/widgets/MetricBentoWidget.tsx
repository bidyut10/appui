import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type BentoCell = {
  label: string;
  value: string;
  type: "ring" | "bars" | "dots" | "spark";
  accent?: string;
  data?: number[];
};

export type MetricBentoWidgetProps = {
  cells?: BentoCell[];
} & ComponentPropsWithoutRef<"div">;

const defaultCells: BentoCell[] = [
  { label: "Uptime", value: "99.9%", type: "ring", accent: "#14b8a6" },
  { label: "Requests", value: "1.2M", type: "bars", data: [40, 65, 55, 80, 70] },
  { label: "Errors", value: "0.02%", type: "dots" },
  { label: "Latency", value: "42ms", type: "spark", data: [30, 45, 38, 42, 35, 42] },
];

function CellViz({ cell }: { cell: BentoCell }) {
  if (cell.type === "ring") {
    return (
      <svg viewBox="0 0 36 36" className="h-8 w-8 -rotate-90">
        <circle cx="18" cy="18" r="14" fill="none" stroke="#f5f5f5" strokeWidth="3" />
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke={cell.accent ?? "#14b8a6"}
          strokeWidth="3"
          strokeDasharray={2 * Math.PI * 14}
          strokeDashoffset={2 * Math.PI * 14 * 0.05}
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (cell.type === "bars" && cell.data) {
    return (
      <div className="flex h-8 items-end gap-0.5">
        {cell.data.map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-sm bg-sky-400"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    );
  }
  if (cell.type === "dots") {
    return (
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              i === 7 ? "bg-rose-400" : "bg-neutral-200",
            )}
          />
        ))}
      </div>
    );
  }
  if (cell.type === "spark" && cell.data) {
    const max = Math.max(...cell.data);
    const min = Math.min(...cell.data);
    const range = max - min || 1;
    const pts = cell.data
      .map((v, i) => {
        const x = (i / (cell.data!.length - 1)) * 40;
        const y = 14 - ((v - min) / range) * 10;
        return `${x},${y}`;
      })
      .join(" ");
    return (
      <svg viewBox="0 0 40 16" className="h-4 w-10">
        <polyline
          points={pts}
          fill="none"
          stroke="#14b8a6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return null;
}

export const MetricBentoWidget = forwardRef<
  HTMLDivElement,
  MetricBentoWidgetProps
>(({ className, cells = defaultCells, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="metric-bento-widget"
    className={cn(
      "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-3 font-sans shadow-sm ring-1 ring-black/[0.03]",
      className,
    )}
    {...props}
  >
    <div className="grid grid-cols-2 gap-2">
      {cells.map((cell) => (
        <div
          key={cell.label}
          className="flex flex-col justify-between rounded-xl bg-neutral-50/80 p-3"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-medium text-neutral-400">
                {cell.label}
              </p>
              <p className="mt-0.5 text-base font-bold text-neutral-900 tabular-nums">
                {cell.value}
              </p>
            </div>
          </div>
          <div className="mt-2">
            <CellViz cell={cell} />
          </div>
        </div>
      ))}
    </div>
  </div>
));

MetricBentoWidget.displayName = "MetricBentoWidget";
