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
    cards: [
      { title: "Build bento grid", tag: "Feature", assignee: "MR" },
    ],
  },
  {
    title: "Done",
    color: "border-t-emerald-400",
    dot: "bg-emerald-400",
    cards: [
      { title: "Setup design tokens", tag: "Dev", assignee: "AL" },
    ],
  },
];

export const KanbanBoard = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="w-80 font-sans">
      <div className="flex items-center justify-between mb-3 px-0.5">
        <h4 className="text-sm font-semibold text-neutral-900">Sprint Board</h4>
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
          4 tasks
        </span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {columns.map((col) => (
          <div key={col.title} className="w-36 shrink-0">
            <div className={`flex items-center gap-1.5 mb-2 pb-1.5 border-t-2 ${col.color}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${col.dot}`} />
              <span className="text-[10px] font-medium text-neutral-600">{col.title}</span>
              <span className="text-[10px] text-neutral-400 ml-auto">{col.cards.length}</span>
            </div>

            <div className="space-y-1.5">
              {col.cards.map((card) => (
                <div
                  key={card.title}
                  onClick={() => setActiveCard(activeCard === card.title ? null : card.title)}
                  className={`
                    p-2.5 bg-white border rounded-xl cursor-pointer transition-all duration-200
                    ${activeCard === card.title
                      ? "border-violet-300 shadow-sm shadow-violet-100 ring-2 ring-violet-100"
                      : "border-neutral-100 hover:border-neutral-200 hover:shadow-sm"
                    }
                  `}
                >
                  <p className="text-[11px] font-medium text-neutral-800 leading-snug mb-2">
                    {card.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-1.5 py-px bg-neutral-100 text-[8px] font-mono text-neutral-500 rounded">
                      {card.tag}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock size={8} className="text-neutral-300" />
                      <div className="w-4 h-4 rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center text-[6px] font-bold text-white">
                        {card.assignee}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button className="w-full py-1.5 text-[10px] text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1">
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
