"use client";
import React, { useEffect, useRef, useState } from "react";
import { Edit } from "@/icons/Edit";
import { Copy } from "@/icons/Copy";
import { Folder } from "@/icons/Folder";
import { Pin } from "@/icons/Pin";
import { Trash } from "@/icons/Trash";
import { Star } from "@/icons/Star";
import { Ellipsis } from "@/icons/Ellipsis";

const actions = [
  { label: "Edit", icon: Edit, shortcut: "E" },
  { label: "Duplicate", icon: Copy, shortcut: "D" },
  { label: "Move to", icon: Folder, shortcut: "M" },
  { label: "Pin", icon: Pin, shortcut: "P" },
  { label: "Favorite", icon: Star, shortcut: "F" },
  { label: "Delete", icon: Trash, shortcut: "⌫", danger: true },
];

export const QuickActionsDropdown = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="group inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-300 hover:shadow-sm active:scale-95"
      >
        <Ellipsis className="h-4 w-4 text-neutral-500" />
      </button>

      <div
        className={`absolute top-[calc(100%+8px)] left-1/2 z-[100] w-56 -translate-x-1/2 rounded-2xl border border-neutral-200/80 bg-white p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"} `}
        style={{ transformOrigin: "top" }}
      >
        <p className="px-2 py-1.5 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          Quick Actions
        </p>
        <div className="mt-1 grid grid-cols-3 gap-1">
          {actions.map(({ label, icon: Icon, shortcut, danger }) => (
            <button
              key={label}
              onClick={() => setOpen(false)}
              className={`flex cursor-pointer flex-col items-center gap-1.5 rounded-xl p-2.5 text-[10px] font-medium transition-all duration-200 active:scale-95 ${
                danger
                  ? "text-red-500 hover:bg-red-50"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              } `}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  danger ? "bg-red-50" : "bg-neutral-100"
                }`}
              >
                <Icon size={14} />
              </div>
              {label}
              <kbd className="font-mono text-[8px] opacity-40">{shortcut}</kbd>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
