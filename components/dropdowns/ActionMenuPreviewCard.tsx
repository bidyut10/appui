"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { ChevronDown } from "@/icons/ChevronDown";
import { Check } from "@/icons/Check";

/**
 * Action Menu Preview Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type ActionMenuItem = {
  id: string;
  label: string;
  shortcut?: string;
  destructive?: boolean;
};

export type ActionMenuPreviewCardProps = {
  triggerLabel?: string;
  items?: ActionMenuItem[];
  onAction?: (id: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultItems: ActionMenuItem[] = [
  { id: "edit", label: "Edit component", shortcut: "⌘E" },
  { id: "duplicate", label: "Duplicate", shortcut: "⌘D" },
  { id: "export", label: "Export as PNG" },
  { id: "delete", label: "Delete", destructive: true },
];

export const ActionMenuPreviewCard = forwardRef<
  HTMLDivElement,
  ActionMenuPreviewCardProps
>(
  (
    {
      className,
      triggerLabel = "Actions",
      items = defaultItems,
      onAction,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(true);
    const [lastAction, setLastAction] = useState<string | null>(null);

    return (
      <div
        ref={ref}
        data-slot="action-menu-preview-card"
        className={cn("relative w-full max-w-[200px] font-sans", className)}
        {...props}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2 text-[13px] font-medium text-neutral-800 shadow-sm"
        >
          {triggerLabel}
          <ChevronDown
            size={14}
            className={cn("text-neutral-400", open && "rotate-180")}
          />
        </button>
        {open && (
          <div className="absolute top-full right-0 left-0 z-10 mt-1 overflow-hidden rounded-xl border border-neutral-200 bg-white py-1 shadow-xl">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setLastAction(item.label);
                  onAction?.(item.id);
                }}
                className={cn(
                  "flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-[13px] transition-colors hover:bg-neutral-50",
                  item.destructive
                    ? "text-rose-600 hover:bg-rose-50"
                    : "text-neutral-700",
                )}
              >
                {item.label}
                {item.shortcut && (
                  <span className="font-mono text-[10px] text-neutral-400">
                    {item.shortcut}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
        {lastAction && (
          <p className="mt-2 flex items-center gap-1 text-[10px] text-teal-600">
            <Check size={10} />
            {lastAction}
          </p>
        )}
      </div>
    );
  },
);

ActionMenuPreviewCard.displayName = "ActionMenuPreviewCard";
