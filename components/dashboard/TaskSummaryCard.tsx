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
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`} {...props}>
    <div className="px-4 py-3 border-b border-neutral-100">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold text-neutral-900">Tasks</h4>
        <span className="text-[10px] font-mono text-neutral-400">2/4 done</span>
      </div>
      <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
        <div className="h-full w-1/2 bg-emerald-500 rounded-full" />
      </div>
    </div>
    <div className="divide-y divide-neutral-50">
      {tasks.map((t) => (
        <div key={t.title} className="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-50/50 transition-colors cursor-pointer">
          <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
            t.done ? "bg-emerald-500 border-emerald-500" : "border-neutral-300"
          }`}>
            {t.done && <Check size={10} className="text-white" />}
          </div>
          <span className={`text-xs flex-1 ${t.done ? "text-neutral-400 line-through" : "text-neutral-800"}`}>{t.title}</span>
          <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded ${
            t.priority === "high" ? "bg-red-50 text-red-600" :
            t.priority === "medium" ? "bg-amber-50 text-amber-600" : "bg-neutral-100 text-neutral-500"
          }`}>{t.priority}</span>
        </div>
      ))}
    </div>
    <div className="px-4 py-2.5 border-t border-neutral-100">
      <button className="w-full h-8 text-[11px] font-medium text-neutral-600 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer flex items-center justify-center gap-1">
        <Clock size={11} /> Add task
      </button>
    </div>
  </div>
));
TaskSummaryCard.displayName = "TaskSummaryCard";
