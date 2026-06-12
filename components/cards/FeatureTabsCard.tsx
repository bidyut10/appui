"use client";

import React, {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { ReactJs } from "@/icons/ReactJs";
import { TailwindCSS } from "@/icons/TailwindCSS";
import { Typescript } from "@/icons/Typescript";

type TabItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
  tags: string[];
};

const defaultTabs: TabItem[] = [
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

export type FeatureTabsCardProps = {
  tabs?: TabItem[];
  defaultTab?: string;
} & ComponentPropsWithoutRef<"div">;

export const FeatureTabsCard = forwardRef<HTMLDivElement, FeatureTabsCardProps>(
  (
    {
      className,
      tabs = defaultTabs,
      defaultTab = defaultTabs[0]?.id,
      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState(defaultTab);

    const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

    const CurrentIcon = current.icon;

    return (
      <div
        ref={ref}
        data-slot="feature-tabs-card"
        className={cn(
          "group w-72 overflow-hidden rounded-2xl border border-neutral-200/70 bg-white font-sans shadow-xl ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl",
          className,
        )}
        {...props}
      >
        {/* Tabs */}

        <div
          data-slot="feature-tabs-card-tabs"
          className="flex border-b border-neutral-100"
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              aria-pressed={active === id}
              className={cn(
                "relative flex flex-1 cursor-pointer items-center justify-center gap-1.5 py-3 text-[11px] font-medium transition-all duration-200",
                active === id
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-600",
              )}
            >
              <Icon
                size={13}
                aria-hidden="true"
                className={cn(
                  "transition-transform duration-200",
                  active === id && "scale-105",
                )}
              />

              {label}

              {active === id && (
                <div className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-neutral-900" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}

        <div data-slot="feature-tabs-card-content" className="p-5">
          <div
            data-slot="feature-tabs-card-icon"
            className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 shadow-sm ring-1 ring-black/[0.03] transition-transform duration-300 group-hover:scale-105"
          >
            <CurrentIcon size={20} aria-hidden="true" />
          </div>

          <h4 className="mb-1.5 text-sm font-semibold tracking-tight text-neutral-900">
            {current.title}
          </h4>

          <p className="mb-4 text-xs leading-relaxed text-neutral-500">
            {current.desc}
          </p>

          <div
            data-slot="feature-tabs-card-tags"
            className="flex flex-wrap gap-1.5"
          >
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-600 transition-colors hover:bg-neutral-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

FeatureTabsCard.displayName = "FeatureTabsCard";
