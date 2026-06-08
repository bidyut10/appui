"use client";
import React, { useEffect, useRef, useState } from "react";
import { Edit } from "@/icons/Edit";
import { Copy } from "@/icons/Copy";
import { Pin } from "@/icons/Pin";
import { Folder } from "@/icons/Folder";
import { Trash } from "@/icons/Trash";

const menuItems = [
  { label: "Edit", icon: Edit, kbd: "⌘E" },
  { label: "Duplicate", icon: Copy, kbd: "⌘D" },
  { label: "Pin to top", icon: Pin },
  { label: "Move to folder", icon: Folder },
  { separator: true },
  { label: "Delete", icon: Trash, danger: true, kbd: "⌫" },
];

export const ContextMenuDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative inline-block font-sans">
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        onClick={() => setOpen(!open)}
        className="flex h-28 w-48 cursor-context-menu flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-sm"
      >
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
          <Folder size={18} className="text-neutral-400" />
        </div>
        <p className="text-xs font-medium text-neutral-700">Card Component</p>
        <p className="mt-0.5 text-[10px] text-neutral-400">
          Right-click or tap
        </p>
      </div>

      {open && (
        <div className="absolute top-1/2 left-1/2 z-[100] w-48 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200/80 bg-white p-1 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
          {menuItems.map((item, i) =>
            item.separator ? (
              <div key={i} className="mx-1 my-1 h-px bg-neutral-100" />
            ) : (
              <button
                key={item.label}
                onClick={() => setOpen(false)}
                className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-[12px] font-medium transition-colors ${
                  item.danger
                    ? "text-red-500 hover:bg-red-50"
                    : "text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.icon && (
                    <item.icon
                      size={14}
                      className={
                        item.danger ? "text-red-400" : "text-neutral-400"
                      }
                    />
                  )}
                  {item.label}
                </div>
                {item.kbd && (
                  <kbd className="font-mono text-[9px] text-neutral-400">
                    {item.kbd}
                  </kbd>
                )}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
};
