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
    <div className="w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
      <div className="flex border-b border-neutral-100">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`relative flex flex-1 cursor-pointer items-center justify-center gap-1.5 py-3 text-[11px] font-medium transition-colors ${
              active === id
                ? "text-neutral-900"
                : "text-neutral-400 hover:text-neutral-600"
            }`}
          >
            <Icon size={13} />
            {label}
            {active === id && (
              <div className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-neutral-900" />
            )}
          </button>
        ))}
      </div>

      <div className="p-5">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
          <current.icon size={20} />
        </div>
        <h4 className="mb-1.5 text-sm font-semibold text-neutral-900">
          {current.title}
        </h4>
        <p className="mb-4 text-xs leading-relaxed text-neutral-500">
          {current.desc}
        </p>
        <div className="flex gap-1.5">
          {current.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
