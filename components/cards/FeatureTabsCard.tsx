"use client";
import React, { useState } from "react";
import { ReactJs } from "@/icons/ReactJs";
import { TailwindCSS } from "@/icons/TailwindCSS";
import { Typescript } from "@/icons/Typescript";

const tabs = [
  {
    id: "react",
    label: "React",
    icon: ReactJs,
    title: "Built for React 19",
    desc: "Server components, hooks, and forwardRef patterns out of the box.",
    tags: ["Hooks", "SSR", "TypeScript"],
  },
  {
    id: "tailwind",
    label: "Tailwind",
    icon: TailwindCSS,
    title: "Tailwind CSS v4",
    desc: "Utility-first styling with zero config. Customize with className props.",
    tags: ["v4", "Responsive", "Dark mode"],
  },
  {
    id: "typescript",
    label: "TypeScript",
    icon: Typescript,
    title: "Fully Typed",
    desc: "Complete TypeScript support with exported interfaces for every component.",
    tags: ["Strict", "Props", "IntelliSense"],
  },
];

export const FeatureTabsCard = () => {
  const [active, setActive] = useState("react");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
      <div className="flex border-b border-neutral-100">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-[11px] font-medium transition-colors cursor-pointer relative ${
              active === id ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"
            }`}
          >
            <Icon size={13} />
            {label}
            {active === id && (
              <div className="absolute bottom-0 inset-x-2 h-0.5 bg-neutral-900 rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="p-5">
        <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-3">
          <current.icon size={20} />
        </div>
        <h4 className="text-sm font-semibold text-neutral-900 mb-1.5">{current.title}</h4>
        <p className="text-xs text-neutral-500 leading-relaxed mb-4">{current.desc}</p>
        <div className="flex gap-1.5">
          {current.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-neutral-100 text-[10px] font-mono text-neutral-600 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
