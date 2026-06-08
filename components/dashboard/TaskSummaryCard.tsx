import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";
import { Clock } from "@/icons/Clock";

const tasks = [
  { title: "Update landing page copy", done: true, priority: "low" },
  { title: "Fix checkout flow bug", done: false, priority: "high" },
  { title: "Design new pricing table", done: false, priority: "medium" },
  { title: "Review PR #142", done: true, priority: "medium" },
];

export const TaskSummaryCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="border-b border-neutral-100 px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-neutral-900">Tasks</h4>
        <span className="font-mono text-[10px] text-neutral-400">2/4 done</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
        <div className="h-full w-1/2 rounded-full bg-emerald-500" />
      </div>
    </div>
    <div className="divide-y divide-neutral-50">
      {tasks.map((t) => (
        <div
          key={t.title}
          className="flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors hover:bg-neutral-50/50"
        >
          <div
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${
              t.done
                ? "border-emerald-500 bg-emerald-500"
                : "border-neutral-300"
            }`}
          >
            {t.done && <Check size={10} className="text-white" />}
          </div>
          <span
            className={`flex-1 text-xs ${t.done ? "text-neutral-400 line-through" : "text-neutral-800"}`}
          >
            {t.title}
          </span>
          <span
            className={`rounded px-1.5 py-0.5 font-mono text-[9px] uppercase ${
              t.priority === "high"
                ? "bg-red-50 text-red-600"
                : t.priority === "medium"
                  ? "bg-amber-50 text-amber-600"
                  : "bg-neutral-100 text-neutral-500"
            }`}
          >
            {t.priority}
          </span>
        </div>
      ))}
    </div>
    <div className="border-t border-neutral-100 px-4 py-2.5">
      <button className="flex h-8 w-full cursor-pointer items-center justify-center gap-1 rounded-lg border border-neutral-200 text-[11px] font-medium text-neutral-600 transition-colors hover:bg-neutral-50">
        <Clock size={11} /> Add task
      </button>
    </div>
  </div>
));
TaskSummaryCard.displayName = "TaskSummaryCard";
