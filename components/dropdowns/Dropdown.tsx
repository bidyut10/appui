"use client";

import React, { useEffect, useRef, useState } from "react";

export interface DropdownItem {
  label?: string;
  icon?: React.ReactElement;
  kbd?: string;
  danger?: boolean;
  separator?: boolean;
  onClick?: () => void;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, items }) => {
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
      <div
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer justify-center"
      >
        {trigger}
      </div>

      <div
        className={`absolute top-[calc(100%+8px)] left-1/2 z-[100] w-max max-w-[300px] min-w-[200px] -translate-x-1/2 rounded-2xl border border-neutral-200/80 bg-white p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        } `}
        style={{ transformOrigin: "top" }}
      >
        {items?.map((item, i) =>
          item.separator ? (
            <div key={i} className="mx-1 my-1.5 h-px bg-neutral-100" />
          ) : (
            <button
              key={item.label || i}
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
              className={`group flex w-full cursor-pointer items-center justify-between gap-10 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium whitespace-nowrap transition-all duration-200 ${
                item.danger
                  ? "text-red-500 hover:bg-red-50/50"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              } `}
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <div
                    className={`transition-transform duration-300 group-hover:scale-110 ${item.danger ? "text-red-400" : "text-neutral-400 group-hover:text-neutral-900"}`}
                  >
                    {React.cloneElement(item.icon as React.ReactElement<any>, {
                      size: 16,
                      strokeWidth: 2,
                    })}
                  </div>
                )}
                <span>{item.label}</span>
              </div>

              {item.kbd && (
                <div className="ml-auto flex items-center opacity-30 transition-opacity group-hover:opacity-100">
                  <kbd className="flex h-5 min-w-6 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 px-1.5 font-mono text-[10px] text-neutral-500 shadow-sm">
                    {item.kbd}
                  </kbd>
                </div>
              )}
            </button>
          ),
        )}
      </div>
    </div>
  );
};
