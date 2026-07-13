"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import {
  AudioLines,
  Grid2x2,
  MousePointer2,
  PenLine,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/cn";

export type FloatingToolItem = Readonly<{
  id: string;
  label: string;
  icon?: LucideIcon;
}>;

export type FloatingToolRailProps = Readonly<
  {
    tools?: readonly FloatingToolItem[];
    activeId?: string;
    onSelect?: (id: string) => void;
  } & ComponentPropsWithoutRef<"nav">
>;

const DEFAULT_TOOLS: readonly FloatingToolItem[] = [
  { id: "select", label: "Select", icon: MousePointer2 },
  { id: "layers", label: "Layers", icon: PenLine },
  { id: "draw", label: "Draw", icon: Sparkles },
  { id: "audio", label: "Audio", icon: AudioLines },
];

// Floating tool rail — vertical Apple-style action strip for editors.
export const FloatingToolRail = forwardRef<HTMLElement, FloatingToolRailProps>(
  (
    {
      className,
      tools = DEFAULT_TOOLS,
      activeId = "select",
      onSelect,
      ...props
    },
    ref,
  ) => (
    <nav
      ref={ref}
      data-slot="floating-tool-rail"
      aria-label="Editor tools"
      className={cn(
        "inline-flex w-14 flex-col items-center gap-2 rounded-full border border-neutral-100 bg-white p-2 font-sans shadow-lg shadow-black/10",
        className,
      )}
      {...props}
    >
      {tools.map((tool) => {
        const Icon = tool.icon ?? MousePointer2;
        const active = tool.id === activeId;

        return (
          <button
            key={tool.id}
            type="button"
            aria-label={tool.label}
            aria-pressed={active}
            onClick={() => onSelect?.(tool.id)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full transition-colors",
              active
                ? "bg-neutral-100 text-neutral-900"
                : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800",
            )}
          >
            <Icon size={17} aria-hidden strokeWidth={1.75} />
          </button>
        );
      })}

      <button
        type="button"
        aria-label="All tools"
        className="mt-1 flex size-10 items-center justify-center rounded-full bg-neutral-900 text-white transition-opacity hover:opacity-90"
      >
        <Grid2x2 size={16} aria-hidden />
      </button>
    </nav>
  ),
);

FloatingToolRail.displayName = "FloatingToolRail";
