"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";
import { Check } from "@/icons/Check";
import { Settings } from "@/icons/Settings";

const workspaces = [
  {
    name: "AppUI Design",
    initial: "A",
    color: "from-violet-500 to-fuchsia-500",
    active: true,
  },
  {
    name: "Personal Projects",
    initial: "P",
    color: "from-blue-500 to-cyan-500",
    active: false,
  },
  {
    name: "Client — Stripe",
    initial: "S",
    color: "from-indigo-500 to-purple-500",
    active: false,
  },
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
        className="group inline-flex h-11 cursor-pointer items-center gap-2.5 rounded-xl border border-neutral-200 bg-white pr-3 pl-2 transition-all hover:border-neutral-300 hover:shadow-sm"
      >
        <div
          className={`h-7 w-7 rounded-lg bg-linear-to-br ${current.color} flex items-center justify-center`}
        >
          <span className="text-[10px] font-bold text-white">
            {current.initial}
          </span>
        </div>
        <div className="text-left">
          <p className="text-xs leading-none font-semibold text-neutral-900">
            {current.name}
          </p>
          <p className="mt-0.5 text-[10px] text-neutral-400">Free plan</p>
        </div>
        <ChevronDown className="ml-1 h-3.5 w-3.5 text-neutral-400" />
      </button>

      <div
        className={`absolute top-[calc(100%+8px)] left-0 z-[100] w-64 rounded-2xl border border-neutral-200/80 bg-white p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"} `}
        style={{ transformOrigin: "top left" }}
      >
        <p className="px-2.5 py-1.5 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          Workspaces
        </p>
        {workspaces.map((ws, i) => (
          <button
            key={ws.name}
            onClick={() => {
              setSelected(i);
              setOpen(false);
            }}
            className="flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition-colors hover:bg-neutral-50"
          >
            <div
              className={`h-7 w-7 rounded-lg bg-linear-to-br ${ws.color} flex shrink-0 items-center justify-center`}
            >
              <span className="text-[10px] font-bold text-white">
                {ws.initial}
              </span>
            </div>
            <span className="flex-1 text-xs font-medium text-neutral-800">
              {ws.name}
            </span>
            {selected === i && <Check size={14} className="text-violet-600" />}
          </button>
        ))}
        <div className="my-1 h-px bg-neutral-100" />
        <button className="flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs text-neutral-500 transition-colors hover:bg-neutral-50">
          <Settings size={14} />
          Workspace settings
        </button>
      </div>
    </div>
  );
};
