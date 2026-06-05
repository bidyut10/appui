"use client";

import React, { useState, useId } from "react";
import { UserGroup } from "@/icons/UserGroup";
import { House } from "@/icons/House";
import { Phone } from "@/icons/Phone";
import { Web } from "@/icons/Web";
import { Settings } from "@/icons/Settings";

export interface MenuBarItem {
  label?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
  separator?: boolean;
  onClick?: () => void;
}

export interface MenuBarProps {
  items: MenuBarItem[];
  defaultActive?: string;
  onActiveChange?: (label: string) => void;
  className?: string;
}

export function MenuBar({
  items,
  defaultActive,
  onActiveChange,
  className = "",
}: MenuBarProps) {
  const id = useId();
  const firstLabel = items.find((i) => !i.separator)?.label ?? "";
  const [active, setActive] = useState(defaultActive ?? firstLabel);

  function handleSelect(item: MenuBarItem) {
    if (item.disabled || item.separator || !item.label) return;
    setActive(item.label);
    onActiveChange?.(item.label);
    item.onClick?.();
  }

  return (
    <nav
      role="tablist"
      aria-label="Navigation"
      className={[
        "flex items-center h-11 px-[4.5px] gap-0.5",
        "bg-white dark:bg-neutral-900",
        "border border-neutral-200 dark:border-neutral-800",
        "rounded-xl w-fit max-w-full overflow-x-auto",
        "scrollbar-none",
        className,
      ].join(" ")}
    >
      {items.map((item, i) => {
        if (item.separator) {
          return (
            <div
              key={`sep-${i}`}
              role="separator"
              aria-orientation="vertical"
              className="w-px h-4.5 bg-neutral-200 dark:bg-neutral-700 shrink-0 mx-1"
            />
          );
        }

        const isActive = active === item.label;

        return (
          <button
            key={item.label || i}
            id={`${id}-tab-${item.label}`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`${id}-panel-${item.label}`}
            disabled={item.disabled}
            onClick={() => handleSelect(item)}
            className={[
              "inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg shrink-0",
              "text-[13px] whitespace-nowrap transition-colors duration-100 cursor-pointer",
              "outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              isActive
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 font-medium"
                : "text-neutral-500 dark:text-neutral-400 font-normal hover:bg-neutral-50 dark:hover:bg-neutral-800/60 hover:text-neutral-900 dark:hover:text-neutral-100",
            ].join(" ")}
          >
            {item.icon && (
              <span className="size-3.5 shrink-0 flex items-center justify-center">
                {item.icon}
              </span>
            )}

            {item.label}

            {item.badge && (
              <span
                className={[
                  "inline-flex items-center h-4 px-1.5 rounded-full text-[10px] font-medium leading-none",
                  isActive
                    ? "bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
                    : "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
                ].join(" ")}
              >
                {item.badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}

export function HomeMenuBar() {
  return (
    <MenuBar
      defaultActive="Home"
      onActiveChange={(label) => console.log("active:", label)}
      items={[
        { label: "Home", icon: <House size={14} /> },
        { label: "Contact", icon: <Phone size={14} /> },
        {
          label: "Settings",
          icon: <Settings size={14} />,
          badge: "New",
        },
        { separator: true },
        { label: "Team", icon: <UserGroup size={14} /> },
        {
          label: "Links",
          icon: <Web size={14} />,
          disabled: true,
        },
      ]}
    />
  );
}
