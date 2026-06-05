"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";
import { Check } from "@/icons/Check";
import { Settings } from "@/icons/Settings";

const workspaces = [
  { name: "AppUI Design", initial: "A", color: "from-violet-500 to-fuchsia-500", active: true },
  { name: "Personal Projects", initial: "P", color: "from-blue-500 to-cyan-500", active: false },
  { name: "Client — Stripe", initial: "S", color: "from-indigo-500 to-purple-500", active: false },
];

export const WorkspaceSwitcherDropdown = () => {
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

  const current = workspaces[selected];

  return (
    <div ref={ref} className="relative inline-block font-sans">
      <button
        onClick={() => setOpen(!open)}
        className="group inline-flex items-center gap-2.5 h-11 pl-2 pr-3 border border-neutral-200 bg-white rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all cursor-pointer"
      >
        <div className={`w-7 h-7 rounded-lg bg-linear-to-br ${current.color} flex items-center justify-center`}>
          <span className="text-white text-[10px] font-bold">{current.initial}</span>
        </div>
        <div className="text-left">
          <p className="text-xs font-semibold text-neutral-900 leading-none">{current.name}</p>
          <p className="text-[10px] text-neutral-400 mt-0.5">Free plan</p>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-neutral-400 ml-1" />
      </button>

      <div
        className={`
          absolute top-[calc(100%+8px)] z-[100] left-0 w-64
          bg-white border border-neutral-200/80 rounded-2xl p-1.5
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${open ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}
        `}
        style={{ transformOrigin: "top left" }}
      >
        <p className="px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
          Workspaces
        </p>
        {workspaces.map((ws, i) => (
          <button
            key={ws.name}
            onClick={() => { setSelected(i); setOpen(false); }}
            className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            <div className={`w-7 h-7 rounded-lg bg-linear-to-br ${ws.color} flex items-center justify-center shrink-0`}>
              <span className="text-white text-[10px] font-bold">{ws.initial}</span>
            </div>
            <span className="text-xs font-medium text-neutral-800 flex-1">{ws.name}</span>
            {selected === i && <Check size={14} className="text-violet-600" />}
          </button>
        ))}
        <div className="h-px bg-neutral-100 my-1" />
        <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs text-neutral-500 hover:bg-neutral-50 transition-colors cursor-pointer">
          <Settings size={14} />
          Workspace settings
        </button>
      </div>
    </div>
  );
};
