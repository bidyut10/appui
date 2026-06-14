import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

/**
 * Activity timeline widget built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo events and timestamps with your own activity data.
 */
export type ActivityEvent = {
  time: string;
  title: string;
  detail?: string;
  icon?: ReactNode;
};

export type ActivityTimelineWidgetProps = {
  title?: string;
  events?: ActivityEvent[];
} & ComponentPropsWithoutRef<"div">;

const defaultEvents: ActivityEvent[] = [
  {
    time: "10:42",
    title: "Deploy v2.4.1",
    detail: "Production · 3 files changed",
  },
  {
    time: "09:15",
    title: "New team member joined",
    detail: "Ananya accepted invite",
  },
  {
    time: "08:30",
    title: "Invoice #884 paid",
    detail: "₹12,400 from Acme Corp",
  },
];

export const ActivityTimelineWidget = forwardRef<
  HTMLDivElement,
  ActivityTimelineWidgetProps
>(
  (
    { className, title = "Recent activity", events = defaultEvents, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="activity-timeline-widget"
      className={cn(
        "w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <p className="mb-4 text-[11px] font-semibold tracking-widest text-neutral-400 uppercase">
        {title}
      </p>

      {/* Timeline */}
      <div className="relative space-y-0">
        {(events ?? []).map((event, index) => (
          <div
            key={`${event.time}-${event.title}`}
            className="relative flex gap-3 pb-5 last:pb-0"
          >
            {index < events.length - 1 && (
              <div className="absolute top-3 left-[5px] h-full w-px bg-neutral-200" />
            )}
            <div className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-white bg-teal-500 ring-2 ring-teal-100" />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-[13px] font-semibold text-neutral-900">
                  {event.title}
                </p>
                <span className="shrink-0 font-mono text-[10px] text-neutral-400 tabular-nums">
                  {event.time}
                </span>
              </div>
              {event.detail && (
                <p className="mt-0.5 text-[11px] text-neutral-500">
                  {event.detail}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
);

ActivityTimelineWidget.displayName = "ActivityTimelineWidget";
