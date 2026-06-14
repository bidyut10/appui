"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ComponentType,
} from "react";

import { cn } from "@/lib/utils";

import { Edit } from "@/icons/Edit";
import { Copy } from "@/icons/Copy";
import { Pin } from "@/icons/Pin";
import { Folder } from "@/icons/Folder";
import { Trash } from "@/icons/Trash";

/**
 * Context menu dropdown built with React, TypeScript, and Tailwind CSS.
 *
 * Right-click or tap the demo card to open — swap items and labels for your UI.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type ContextMenuItem = {
  label?: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
  kbd?: string;
  danger?: boolean;
  separator?: boolean;
};

export type ContextMenuDropdownProps = {
  cardTitle?: string;
  cardHint?: string;
  triggerAriaLabel?: string;
  items?: ContextMenuItem[];
  onItemClick?: (item: ContextMenuItem) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultItems: ContextMenuItem[] = [
  { label: "Edit", icon: Edit, kbd: "⌘E" },
  { label: "Duplicate", icon: Copy, kbd: "⌘D" },
  { label: "Pin to top", icon: Pin },
  { label: "Move to folder", icon: Folder },
  { separator: true },
  { label: "Delete", icon: Trash, danger: true, kbd: "⌫" },
];

export const ContextMenuDropdown = forwardRef<
  HTMLDivElement,
  ContextMenuDropdownProps
>(
  (
    {
      cardTitle = "Card Component",
      cardHint = "Right-click or tap",
      triggerAriaLabel = "Open context menu",
      items = defaultItems,
      onItemClick,
      className,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const close = (e: MouseEvent) => {
        if (!innerRef.current?.contains(e.target as Node)) setOpen(false);
      };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, []);

    return (
      <div
        ref={ref}
        className={cn("relative inline-block font-sans", className)}
        {...props}
      >
        <div ref={innerRef}>
          <div
            role="button"
            tabIndex={0}
            aria-label={triggerAriaLabel}
            onContextMenu={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
            onClick={() => setOpen(!open)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(!open);
              }
            }}
            className="flex h-28 w-48 cursor-context-menu flex-col items-center justify-center rounded-xl border border-neutral-100 bg-white transition-all hover:border-neutral-300 hover:shadow-sm"
          >
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
              <Folder size={18} className="text-neutral-400" />
            </div>
            <p className="text-xs font-medium text-neutral-700">{cardTitle}</p>
            <p className="mt-0.5 text-[10px] text-neutral-400">{cardHint}</p>
          </div>

          {open && (
            <div className="absolute top-1/2 left-1/2 z-[100] w-48 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200/80 bg-white p-1 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
              {items.map((item, i) =>
                item.separator ? (
                  <div key={i} className="mx-1 my-1 h-px bg-neutral-100" />
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    aria-label={item.label}
                    onClick={() => {
                      setOpen(false);
                      onItemClick?.(item);
                    }}
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-[12px] font-medium transition-colors",
                      item.danger
                        ? "text-red-500 hover:bg-red-50"
                        : "text-neutral-700 hover:bg-neutral-50",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon && (
                        <item.icon
                          size={14}
                          className={
                            item.danger ? "text-red-400" : "text-neutral-400"
                          }
                        />
                      )}
                      {item.label}
                    </div>
                    {item.kbd && (
                      <kbd className="font-mono text-[9px] text-neutral-400">
                        {item.kbd}
                      </kbd>
                    )}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    );
  },
);

ContextMenuDropdown.displayName = "ContextMenuDropdown";
