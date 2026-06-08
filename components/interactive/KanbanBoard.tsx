"use client";
import React, { useState } from "react";
import { Pin } from "@/icons/Pin";
import { Clock } from "@/icons/Clock";

const columns = [
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

export const KanbanBoard = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="w-80 font-sans">
      <div className="mb-3 flex items-center justify-between px-0.5">
        <h4 className="text-sm font-semibold text-neutral-900">Sprint Board</h4>
        <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
          4 tasks
        </span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {columns.map((col) => (
          <div key={col.title} className="w-36 shrink-0">
            <div
              className={`mb-2 flex items-center gap-1.5 border-t-2 pb-1.5 ${col.color}`}
            >
              <div className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
              <span className="text-[10px] font-medium text-neutral-600">
                {col.title}
              </span>
              <span className="ml-auto text-[10px] text-neutral-400">
                {col.cards.length}
              </span>
            </div>

            <div className="space-y-1.5">
              {col.cards.map((card) => (
                <div
                  key={card.title}
                  onClick={() =>
                    setActiveCard(activeCard === card.title ? null : card.title)
                  }
                  className={`cursor-pointer rounded-xl border bg-white p-2.5 transition-all duration-200 ${
                    activeCard === card.title
                      ? "border-violet-300 shadow-sm ring-2 shadow-violet-100 ring-violet-100"
                      : "border-neutral-100 hover:border-neutral-200 hover:shadow-sm"
                  } `}
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
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500 text-[6px] font-bold text-white">
                        {card.assignee}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg py-1.5 text-[10px] text-neutral-400 transition-colors hover:bg-neutral-50 hover:text-neutral-600">
                <Pin size={9} />
                Add card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
