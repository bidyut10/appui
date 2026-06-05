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
        className="group w-11 h-11 inline-flex items-center justify-center border border-neutral-200 bg-white rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all duration-300 cursor-pointer active:scale-95"
      >
        <Ellipsis className="w-4 h-4 text-neutral-500" />
      </button>

      <div
        className={`
          absolute top-[calc(100%+8px)] z-[100] left-1/2 -translate-x-1/2
          w-56 bg-white border border-neutral-200/80 rounded-2xl p-2
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${open ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}
        `}
        style={{ transformOrigin: "top" }}
      >
        <p className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
          Quick Actions
        </p>
        <div className="grid grid-cols-3 gap-1 mt-1">
          {actions.map(({ label, icon: Icon, shortcut, danger }) => (
            <button
              key={label}
              onClick={() => setOpen(false)}
              className={`
                flex flex-col items-center gap-1.5 p-2.5 rounded-xl text-[10px] font-medium
                transition-all duration-200 cursor-pointer active:scale-95
                ${danger
                  ? "text-red-500 hover:bg-red-50"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }
              `}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  danger ? "bg-red-50" : "bg-neutral-100"
                }`}
              >
                <Icon size={14} />
              </div>
              {label}
              <kbd className="text-[8px] font-mono opacity-40">{shortcut}</kbd>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
