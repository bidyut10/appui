"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Search } from "@/icons/Search";
import { Folder } from "@/icons/Folder";
import { File } from "@/icons/File";
import { Settings } from "@/icons/Settings";

/**
 * Command Dock Bar built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type CommandDockItem = {
  id: string;
  label: string;
  icon: ReactNode;
  badge?: string;
};

export type CommandDockBarProps = {
  items?: CommandDockItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultItems: CommandDockItem[] = [
  { id: "search", label: "Search", icon: <Search size={18} /> },
  { id: "files", label: "Files", icon: <Folder size={18} />, badge: "12" },
  { id: "docs", label: "Docs", icon: <File size={18} /> },
  { id: "settings", label: "Settings", icon: <Settings size={18} /> },
];

export const CommandDockBar = forwardRef<HTMLDivElement, CommandDockBarProps>(
  (
    {
      className,
      items = defaultItems,
      activeId = "search",
      onItemClick,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="command-dock-bar"
      className={cn(
        "flex w-sm justify-center px-2 font-sans",
        className,
      )}
      {...props}
    >
      <div
        data-slot="command-dock-bar-track"
        className="flex w-full items-end justify-center gap-1 rounded-2xl border border-white/20 bg-black/50 px-2 py-2 shadow-2xl backdrop-blur-2xl sm:gap-2 sm:px-3 sm:py-2.5"
      >
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              data-slot="command-dock-bar-item"
              onClick={() => onItemClick?.(item.id)}
              className={cn(
                "group relative flex cursor-pointer flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 transition-all active:scale-90 sm:px-3 sm:py-2",
                active
                  ? "bg-white/15 text-white"
                  : "text-white/50 hover:bg-white/8 hover:text-white/80",
              )}
            >
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-xl transition-transform sm:h-10 sm:w-10",
                  active && "scale-110",
                )}
              >
                {item.icon}
              </span>
              <span className="hidden text-[9px] font-medium sm:block">
                {item.label}
              </span>
              {item.badge && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[8px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  ),
);

CommandDockBar.displayName = "CommandDockBar";
