"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { Check } from "@/icons/Check";

/**
 * Workspace Switcher Preview Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type WorkspaceOption = {
  id: string;
  name: string;
  initial: string;
  color: string;
  members: number;
};

export type WorkspaceSwitcherPreviewCardProps = {
  workspaces?: WorkspaceOption[];
  defaultId?: string;
  onSwitch?: (id: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultWorkspaces: WorkspaceOption[] = [
  {
    id: "appui",
    name: "AppUI Studio",
    initial: "A",
    color: "bg-teal-500",
    members: 8,
  },
  {
    id: "acme",
    name: "Acme Corp",
    initial: "C",
    color: "bg-sky-500",
    members: 24,
  },
  {
    id: "personal",
    name: "Personal",
    initial: "P",
    color: "bg-amber-500",
    members: 1,
  },
];

export const WorkspaceSwitcherPreviewCard = forwardRef<
  HTMLDivElement,
  WorkspaceSwitcherPreviewCardProps
>(
  (
    {
      className,
      workspaces = defaultWorkspaces,
      defaultId = "appui",
      onSwitch,
      ...props
    },
    ref,
  ) => {
    const [selected, setSelected] = useState(defaultId);

    return (
      <div
        ref={ref}
        data-slot="workspace-switcher-preview-card"
        className={cn(
          "w-[240px] overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="border-b border-neutral-100 px-4 py-2.5 text-[11px] font-semibold tracking-wide text-neutral-400 uppercase">
          Switch workspace
        </p>
        <div className="p-1.5">
          {workspaces.map((ws) => (
            <button
              key={ws.id}
              type="button"
              onClick={() => {
                setSelected(ws.id);
                onSwitch?.(ws.id);
              }}
              className={cn(
                "flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors",
                selected === ws.id ? "bg-neutral-50" : "hover:bg-neutral-50/80",
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white",
                  ws.color,
                )}
              >
                {ws.initial}
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="truncate text-[13px] font-semibold text-neutral-900">
                  {ws.name}
                </p>
                <p className="text-[10px] text-neutral-400">
                  {ws.members} members
                </p>
              </div>
              {selected === ws.id && (
                <Check size={14} className="shrink-0 text-teal-600" />
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="w-full cursor-pointer border-t border-neutral-100 py-2.5 text-[12px] font-medium text-neutral-500 hover:bg-neutral-50"
        >
          + Create workspace
        </button>
      </div>
    );
  },
);

WorkspaceSwitcherPreviewCard.displayName = "WorkspaceSwitcherPreviewCard";
