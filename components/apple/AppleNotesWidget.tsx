"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";
import { Camera } from "@/icons/Camera";
import { Edit } from "@/icons/Edit";
import { Share } from "@/icons/Share";

/**
 * Apple Notes Widget built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type AppleNotesWidgetProps = {
  timestamp?: string;
  title?: string;
  items?: string[];
  actions?: ReactNode[];
  onActionClick?: (index: number) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultItems = [
  "Finalize component library v2",
  "Review Apple-style glass cards",
  "Ship before Friday demo",
  "Get feedback from team",
];

const defaultActions: ReactNode[] = [
  <Check key="check" size={14} />,
  <Camera key="camera" size={14} />,
  <Edit key="edit" size={14} />,
  <Share key="share" size={14} />,
];

export const AppleNotesWidget = forwardRef<
  HTMLDivElement,
  AppleNotesWidgetProps
>(
  (
    {
      className,
      timestamp = "Jun 6, 2026 at 10:30 AM",
      title = "Design Meeting Notes",
      items = defaultItems,
      actions = defaultActions,
      onActionClick,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-notes-widget"
      className={cn("w-64 font-sans", className)}
      {...props}
    >
      <div className="relative rotate-[-1deg] rounded-lg bg-[#fef9c3] p-4 shadow-md shadow-yellow-200/50">
        <div className="absolute top-0 left-1/2 h-3 w-8 -translate-x-1/2 rounded-b-sm bg-yellow-300/60" />

        <p
          data-slot="apple-notes-widget-timestamp"
          className="mb-2 font-mono text-[10px] text-yellow-700/50"
        >
          {timestamp}
        </p>

        <h4
          data-slot="apple-notes-widget-title"
          className="mb-2 text-[15px] font-semibold text-yellow-900"
        >
          {title}
        </h4>

        <ul
          data-slot="apple-notes-widget-items"
          className="space-y-1.5 text-[13px] leading-relaxed text-yellow-900/80"
        >
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <div
          data-slot="apple-notes-widget-actions"
          className="mt-4 flex gap-2 border-t border-yellow-300/40 pt-3"
        >
          {actions.map((icon, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Note action ${index + 1}`}
              onClick={() => onActionClick?.(index)}
              className="cursor-pointer text-sm opacity-60 transition-opacity hover:opacity-100"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  ),
);

AppleNotesWidget.displayName = "AppleNotesWidget";
