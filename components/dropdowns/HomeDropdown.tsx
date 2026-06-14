"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { ChevronDown } from "@/icons/ChevronDown";
import { Edit } from "@/icons/Edit";
import { Copy } from "@/icons/Copy";
import { Trash } from "@/icons/Trash";

import { Dropdown, type DropdownItem } from "./Dropdown";

/**
 * Project settings dropdown built with React, TypeScript, and Tailwind CSS.
 *
 * Swap the demo trigger label and menu items for your own project actions.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type HomeDropdownProps = {
  triggerLabel?: string;
  items?: DropdownItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultItems: DropdownItem[] = [
  { label: "Edit Details", icon: <Edit />, kbd: "⌘ + E" },
  { label: "Copy Project", icon: <Copy />, kbd: "⌘ + C" },
  { separator: true },
  { label: "Delete Project", icon: <Trash />, danger: true, kbd: "⌫" },
];

export const HomeDropdown = forwardRef<HTMLDivElement, HomeDropdownProps>(
  (
    {
      triggerLabel = "Project Settings",
      items = defaultItems,
      className,
      ...props
    },
    ref,
  ) => (
    <Dropdown
      ref={ref}
      className={cn(className)}
      {...props}
      trigger={
        <button
          type="button"
          aria-label={triggerLabel}
          className="group inline-flex h-11 w-full cursor-pointer items-center justify-between gap-4 rounded-xl border border-neutral-100 bg-white px-5 text-sm font-medium text-neutral-800 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm active:scale-95"
        >
          <span className="tracking-tight">{triggerLabel}</span>
          <ChevronDown className="h-4 w-4 text-neutral-400 transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      }
      items={items}
    />
  ),
);

HomeDropdown.displayName = "HomeDropdown";
