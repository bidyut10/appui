"use client";

import {
  forwardRef,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import Image from "next/image";

import { Check, ChevronLeft, ChevronRight, Clock3, FileText, MessageCircle } from "lucide-react";

import { cn } from "@/lib/cn";

export type TaskSubItem = Readonly<{
  id: string;
  label: string;
  duration?: string;
  done?: boolean;
}>;

export type TasksDashboardCardProps = Readonly<
  {
    title?: string;
    mainTask?: string;
    mainDuration?: string;
    progress?: number;
    subtasks?: readonly TaskSubItem[];
    dateRange?: string;
    commentCount?: number;
    members?: readonly { id: string; image: string; imageAlt?: string }[];
    onPrev?: () => void;
    onNext?: () => void;
    onToggleSubtask?: (id: string, done: boolean) => void;
  } & ComponentPropsWithoutRef<"article">
>;

const DEFAULT_SUBTASKS: readonly TaskSubItem[] = [
  { id: "1", label: "Research & Preparation", duration: "2h 15m", done: true },
  { id: "2", label: "Logo & Identity Guidelines", duration: "2h 15m", done: true },
  { id: "3", label: "Application Mockups", duration: "2h 15m", done: false },
];

const DEFAULT_MEMBERS: readonly { id: string; image: string; imageAlt?: string }[] = [
  { id: "1", image: "/profile-picture.png" },
  { id: "2", image: "/woman.png" },
];

const BAR_WIDTH_CLASSES = [
  "w-0",
  "w-[5%]",
  "w-[10%]",
  "w-[15%]",
  "w-1/5",
  "w-1/4",
  "w-[30%]",
  "w-[35%]",
  "w-2/5",
  "w-[45%]",
  "w-1/2",
  "w-[55%]",
  "w-3/5",
  "w-[65%]",
  "w-2/3",
  "w-[70%]",
  "w-[75%]",
  "w-4/5",
  "w-[85%]",
  "w-[90%]",
  "w-[95%]",
  "w-full",
] as const;

function barWidthClass(percent: number): string {
  const index = Math.min(
    BAR_WIDTH_CLASSES.length - 1,
    Math.max(0, Math.round(percent / 5)),
  );
  return BAR_WIDTH_CLASSES[index];
}

// Tasks dashboard card — parent task, nested checklist, and team footer.
export const TasksDashboardCard = forwardRef<HTMLElement, TasksDashboardCardProps>(
  (
    {
      className,
      title = "Tasks",
      mainTask = "New BrandBook",
      mainDuration = "9h 40m",
      progress = 62,
      subtasks = DEFAULT_SUBTASKS,
      dateRange = "Nov 24 – Dec 15",
      commentCount = 8,
      members = DEFAULT_MEMBERS,
      onPrev,
      onNext,
      onToggleSubtask,
      ...props
    },
    ref,
  ) => {
    const [items, setItems] = useState(subtasks);
    const safeProgress = Math.min(100, Math.max(0, progress));

    const doneCount = useMemo(
      () => items.filter((item) => item.done).length,
      [items],
    );

    const toggle = (id: string) => {
      setItems((current) =>
        current.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item,
        ),
      );
      const target = items.find((item) => item.id === id);
      if (target) onToggleSubtask?.(id, !target.done);
    };

    return (
      <article
        ref={ref}
        data-slot="tasks-dashboard-card"
        className={cn(
          "w-sm max-w-full rounded-3xl border border-neutral-100 bg-white p-5 font-sans shadow-lg shadow-black/5",
          className,
        )}
        {...props}
      >
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Previous tasks"
              onClick={onPrev}
              className="flex size-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-50"
            >
              <ChevronLeft size={15} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next tasks"
              onClick={onNext}
              className="flex size-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-50"
            >
              <ChevronRight size={15} aria-hidden />
            </button>
          </div>
        </header>

        <div className="flex items-start gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-rose-400 text-white">
            <FileText size={16} aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-neutral-900">{mainTask}</p>
              <span className="shrink-0 text-xs text-neutral-500 tabular-nums">
                {mainDuration}
              </span>
            </div>
            <div
              className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100"
              role="progressbar"
              aria-valuenow={doneCount}
              aria-valuemin={0}
              aria-valuemax={items.length || 1}
              aria-label={`${mainTask} progress`}
            >
              <div
                className={cn(
                  "h-full rounded-full bg-rose-100 transition-all",
                  barWidthClass(safeProgress),
                )}
              />
            </div>
          </div>
        </div>

        <ul className="mt-4 space-y-2 border-l border-neutral-200 pl-4">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-3 text-left"
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <span
                    className={cn(
                      "flex size-4 shrink-0 items-center justify-center rounded-full border",
                      item.done
                        ? "border-neutral-700 bg-neutral-700 text-white"
                        : "border-neutral-300 bg-white",
                    )}
                  >
                    {item.done ? <Check size={10} aria-hidden /> : null}
                  </span>
                  <span
                    className={cn(
                      "truncate text-sm",
                      item.done ? "text-neutral-400 line-through" : "text-neutral-800",
                    )}
                  >
                    {item.label}
                  </span>
                </span>
                {item.duration ? (
                  <span className="shrink-0 text-xs text-neutral-400 tabular-nums">
                    {item.duration}
                  </span>
                ) : null}
              </button>
            </li>
          ))}
        </ul>

        <footer className="mt-5 flex items-center justify-between border-t border-dashed border-neutral-200 pt-4">
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <span className="inline-flex items-center gap-1">
              <Clock3 size={12} aria-hidden />
              {dateRange}
            </span>
            <span className="inline-flex items-center gap-1">
              <MessageCircle size={12} aria-hidden />
              {commentCount}
            </span>
          </div>

          <div className="flex items-center">
            {members.map((member, index) => (
              <div
                key={member.id}
                className={cn(
                  "relative size-7 overflow-hidden rounded-full border-2 border-white bg-neutral-100",
                  index > 0 && "-ml-2",
                )}
              >
                <Image
                  src={member.image}
                  alt={member.imageAlt ?? "Team member"}
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </footer>
      </article>
    );
  },
);

TasksDashboardCard.displayName = "TasksDashboardCard";
