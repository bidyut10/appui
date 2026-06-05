"use client";
import React, { useEffect, useRef, useState } from "react";
import { Check } from "@/icons/Check";

const themes = [
  { name: "Light", bg: "bg-white", border: "border-neutral-200", dot: "bg-neutral-900" },
  { name: "Dark", bg: "bg-neutral-900", border: "border-neutral-700", dot: "bg-white" },
  { name: "Violet", bg: "bg-violet-50", border: "border-violet-200", dot: "bg-violet-600" },
  { name: "Rose", bg: "bg-rose-50", border: "border-rose-200", dot: "bg-rose-500" },
  { name: "Emerald", bg: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-600" },
  { name: "Amber", bg: "bg-amber-50", border: "border-amber-200", dot: "bg-amber-500" },
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
        className="inline-flex items-center gap-2.5 h-10 px-3 border border-neutral-200 bg-white rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all cursor-pointer"
      >
        <div className={`w-5 h-5 rounded-md ${current.bg} border ${current.border} flex items-center justify-center`}>
          <div className={`w-2 h-2 rounded-full ${current.dot}`} />
        </div>
        <span className="text-xs font-medium text-neutral-700">{current.name}</span>
      </button>

      <div
        className={`
          absolute top-[calc(100%+8px)] z-[100] left-1/2 -translate-x-1/2 w-56
          bg-white border border-neutral-200/80 rounded-2xl p-3
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${open ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}
        `}
        style={{ transformOrigin: "top" }}
      >
        <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
          Color Theme
        </p>
        <div className="grid grid-cols-3 gap-2">
          {themes.map((theme, i) => (
            <button
              key={theme.name}
              onClick={() => { setSelected(i); setOpen(false); }}
              className={`relative flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all cursor-pointer ${
                selected === i ? "border-violet-300 bg-violet-50/50 ring-2 ring-violet-100" : "border-neutral-100 hover:border-neutral-200"
              }`}
            >
              <div className={`w-8 h-8 rounded-lg ${theme.bg} border ${theme.border} flex items-center justify-center`}>
                <div className={`w-3 h-3 rounded-full ${theme.dot}`} />
              </div>
              <span className="text-[10px] font-medium text-neutral-600">{theme.name}</span>
              {selected === i && (
                <div className="absolute top-1 right-1 w-4 h-4 bg-violet-600 rounded-full flex items-center justify-center">
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
