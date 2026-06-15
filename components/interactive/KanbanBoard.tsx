"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { Pin } from "@/icons/Pin";
import { Clock } from "@/icons/Clock";

/**
 * Kanban sprint board built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo columns, cards, and task data
 * with your own project management workflow.
 */
export type KanbanCard = {
  title: string;
  tag: string;
  assignee: string;
};

export type KanbanColumn = {
  title: string;
  color: string;
  dot: string;
  cards: KanbanCard[];
};

export type KanbanBoardProps = {
  boardTitle?: string;
  taskCountLabel?: string;
  columns?: KanbanColumn[];
} & ComponentPropsWithoutRef<"div">;

const defaultColumns: KanbanColumn[] = [
  {
    title: "To Do",
    color: "border-t-neutral-300",
    dot: "bg-neutral-400",
    cards: [
      { title: "Design hero section", tag: "UI", assignee: "JD" },
      { title: "Review PR #42", tag: "Code", assignee: "SK" },
    ],
  },
  {
    title: "In Progress",
    color: "border-t-blue-400",
    dot: "bg-blue-400",
    cards: [{ title: "Build bento grid", tag: "Feature", assignee: "MR" }],
  },
  {
    title: "Done",
    color: "border-t-emerald-400",
    dot: "bg-emerald-400",
    cards: [{ title: "Setup design tokens", tag: "Dev", assignee: "AL" }],
  },
];

export const KanbanBoard = forwardRef<HTMLDivElement, KanbanBoardProps>(
  (
    {
      className,
      boardTitle = "Sprint Board",
      taskCountLabel = "4 tasks",
      columns = defaultColumns,
      ...props
    },
    ref,
  ) => {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    return (
      <div
        ref={ref}
        data-slot="kanban-board"
        className={cn("w-80 font-sans", className)}
        {...props}
      >
        <div
          data-slot="kanban-board-header"
          className="mb-3 flex items-center justify-between px-0.5"
        >
          <h4 className="text-sm font-semibold text-neutral-900">
            {boardTitle}
          </h4>
          <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
            {taskCountLabel}
          </span>
        </div>

        <div
          data-slot="kanban-board-columns"
          className="flex [scrollbar-width:none] gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {columns.map((col) => (
            <div
              key={col.title}
              data-slot="kanban-board-column"
              className="w-36 shrink-0"
            >
              <div
                data-slot="kanban-board-column-header"
                className={cn(
                  "mb-2 flex items-center gap-1.5 border-t-2 pb-1.5",
                  col.color,
                )}
              >
                <div className={cn("h-1.5 w-1.5 rounded-full", col.dot)} />
                <span className="text-[10px] font-medium text-neutral-600">
                  {col.title}
                </span>
                <span className="ml-auto text-[10px] text-neutral-400">
                  {col.cards.length}
                </span>
              </div>

              <div data-slot="kanban-board-cards" className="space-y-1.5">
                {col.cards.map((card) => (
                  <div
                    key={card.title}
                    data-slot="kanban-board-card"
                    onClick={() =>
                      setActiveCard(
                        activeCard === card.title ? null : card.title,
                      )
                    }
                    className={cn(
                      "cursor-pointer rounded-xl border bg-white p-2.5 transition-all duration-200",
                      activeCard === card.title
                        ? "border-teal-300 shadow-sm ring-2 shadow-teal-100 ring-teal-100"
                        : "border-neutral-100 hover:border-neutral-200 hover:shadow-sm",
                    )}
                  >
                    <p className="mb-2 text-[11px] leading-snug font-medium text-neutral-800">
                      {card.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-neutral-100 px-1.5 py-px font-mono text-[8px] text-neutral-500">
                        {card.tag}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock size={8} className="text-neutral-300" />
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-linear-to-br from-teal-400 to-cyan-500 text-[6px] font-bold text-white">
                          {card.assignee}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  aria-label={`Add card to ${col.title}`}
                  data-slot="kanban-board-add-card"
                  className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg py-1.5 text-[10px] text-neutral-400 transition-colors hover:bg-neutral-50 hover:text-neutral-600"
                >
                  <Pin size={9} />
                  Add card
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

KanbanBoard.displayName = "KanbanBoard";
