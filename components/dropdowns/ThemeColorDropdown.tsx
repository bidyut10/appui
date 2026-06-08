"use client";
import React, { useEffect, useRef, useState } from "react";
import { Check } from "@/icons/Check";

const themes = [
  {
    name: "Light",
    bg: "bg-white",
    border: "border-neutral-200",
    dot: "bg-neutral-900",
  },
  {
    name: "Dark",
    bg: "bg-neutral-900",
    border: "border-neutral-700",
    dot: "bg-white",
  },
  {
    name: "Violet",
    bg: "bg-violet-50",
    border: "border-violet-200",
    dot: "bg-violet-600",
  },
  {
    name: "Rose",
    bg: "bg-rose-50",
    border: "border-rose-200",
    dot: "bg-rose-500",
  },
  {
    name: "Emerald",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    dot: "bg-emerald-600",
  },
  {
    name: "Amber",
    bg: "bg-amber-50",
    border: "border-amber-200",
    dot: "bg-amber-500",
  },
];

export const ThemeColorDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const current = themes[selected];

  return (
    <div ref={ref} className="relative inline-block font-sans">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex h-10 cursor-pointer items-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-3 transition-all hover:border-neutral-300 hover:shadow-sm"
      >
        <div
          className={`h-5 w-5 rounded-md ${current.bg} border ${current.border} flex items-center justify-center`}
        >
          <div className={`h-2 w-2 rounded-full ${current.dot}`} />
        </div>
        <span className="text-xs font-medium text-neutral-700">
          {current.name}
        </span>
      </button>

      <div
        className={`absolute top-[calc(100%+8px)] left-1/2 z-[100] w-56 -translate-x-1/2 rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"} `}
        style={{ transformOrigin: "top" }}
      >
        <p className="mb-2 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          Color Theme
        </p>
        <div className="grid grid-cols-3 gap-2">
          {themes.map((theme, i) => (
            <button
              key={theme.name}
              onClick={() => {
                setSelected(i);
                setOpen(false);
              }}
              className={`relative flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border p-2 transition-all ${
                selected === i
                  ? "border-violet-300 bg-violet-50/50 ring-2 ring-violet-100"
                  : "border-neutral-100 hover:border-neutral-200"
              }`}
            >
              <div
                className={`h-8 w-8 rounded-lg ${theme.bg} border ${theme.border} flex items-center justify-center`}
              >
                <div className={`h-3 w-3 rounded-full ${theme.dot}`} />
              </div>
              <span className="text-[10px] font-medium text-neutral-600">
                {theme.name}
              </span>
              {selected === i && (
                <div className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet-600">
                  <Check size={8} className="text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
