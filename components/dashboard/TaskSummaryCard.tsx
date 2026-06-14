import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { Check } from "@/icons/Check";
import { Clock } from "@/icons/Clock";
import { cn } from "@/lib/cn";

/**
 * Task summary card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo tasks, completion counts, and priority labels with your own task data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type TaskItem = {
  title: string;
  done: boolean;
  priority: "low" | "medium" | "high";
};

export type TaskSummaryCardProps = {
  title?: string;
  tasks?: TaskItem[];
  doneLabel?: string;
  addTaskLabel?: string;
  onAddTask?: () => void;
} & ComponentPropsWithoutRef<"div">;

const defaultTasks: TaskItem[] = [
  {
    title: "Update landing page copy",
    done: true,
    priority: "low",
  },
  {
    title: "Fix checkout flow bug",
    done: false,
    priority: "high",
  },
  {
    title: "Design new pricing table",
    done: false,
    priority: "medium",
  },
  {
    title: "Review PR #142",
    done: true,
    priority: "medium",
  },
];

export const TaskSummaryCard = forwardRef<HTMLDivElement, TaskSummaryCardProps>(
  (
    {
      className,
      title = "Tasks",
      tasks = defaultTasks,
      doneLabel = "done",
      addTaskLabel = "Add task",
      onAddTask,
      ...props
    },
    ref,
  ) => {
    const safeTasks = tasks ?? [];
    const completedCount = safeTasks.filter((task) => task.done).length;
    const progress =
      safeTasks.length > 0 ? (completedCount / safeTasks.length) * 100 : 0;

    return (
      <div
        ref={ref}
        data-slot="task-summary-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div
          data-slot="task-summary-header"
          className="border-b border-neutral-100 px-4 py-3"
        >
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>

            <span className="font-mono text-[10px] text-neutral-400">
              {completedCount.toLocaleString()}/
              {safeTasks.length.toLocaleString()} {doneLabel}
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-500"
              style={{
                width: `${Math.min(Math.max(progress, 0), 100)}%`,
              }}
            />
          </div>
        </div>

        {/* Tasks */}
        <div
          data-slot="task-summary-list"
          className="divide-y divide-neutral-50"
        >
          {safeTasks.map((task) => (
            <div
              key={task.title}
              data-slot="task-summary-item"
              className="flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors hover:bg-neutral-50/50"
            >
              <div
                className={cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-md border",
                  task.done
                    ? "border-emerald-500 bg-emerald-500"
                    : "border-neutral-300",
                )}
              >
                {task.done && <Check size={10} className="text-white" />}
              </div>

              <span
                className={cn(
                  "flex-1 text-xs",
                  task.done
                    ? "text-neutral-400 line-through"
                    : "text-neutral-800",
                )}
              >
                {task.title}
              </span>

              <span
                className={cn(
                  "rounded px-1.5 py-0.5 font-mono text-[9px] uppercase",
                  task.priority === "high" && "bg-red-50 text-red-600",
                  task.priority === "medium" && "bg-amber-50 text-amber-600",
                  task.priority === "low" && "bg-neutral-100 text-neutral-500",
                )}
              >
                {task.priority}
              </span>
            </div>
          ))}
        </div>

        <div
          data-slot="task-summary-footer"
          className="border-t border-neutral-100 px-4 py-2.5"
        >
          <button
            type="button"
            data-slot="task-summary-add-button"
            aria-label={addTaskLabel}
            onClick={onAddTask}
            className="flex h-8 w-full cursor-pointer items-center justify-center gap-1 rounded-lg border border-neutral-200 text-[11px] font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
          >
            <Clock size={11} />
            {addTaskLabel}
          </button>
        </div>
      </div>
    );
  },
);

TaskSummaryCard.displayName = "TaskSummaryCard";
