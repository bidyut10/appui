"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { Clock } from "@/icons/Clock";
import { Mobile } from "@/icons/Mobile";

export type MeetingItem = {
  id: string;
  title: string;
  time: string;
  duration: string;
  attendees: number;
  isVideo?: boolean;
  color?: string;
};

/**
 * Upcoming meetings timeline — Google Calendar / Zoom style.
 *
 * Replace the demo schedule with your own meeting data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type MeetingScheduleWidgetProps = {
  dateLabel?: string;
  meetings?: MeetingItem[];
  onJoin?: (meeting: MeetingItem) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultMeetings: MeetingItem[] = [
  {
    id: "1",
    title: "Design critique",
    time: "10:00 AM",
    duration: "45 min",
    attendees: 4,
    isVideo: true,
    color: "bg-violet-500",
  },
  {
    id: "2",
    title: "Sprint planning",
    time: "2:00 PM",
    duration: "1 hr",
    attendees: 8,
    isVideo: true,
    color: "bg-blue-500",
  },
  {
    id: "3",
    title: "1:1 with manager",
    time: "4:30 PM",
    duration: "30 min",
    attendees: 2,
    color: "bg-emerald-500",
  },
];

export const MeetingScheduleWidget = forwardRef<
  HTMLDivElement,
  MeetingScheduleWidgetProps
>(
  (
    {
      className,
      dateLabel = "Today · Jun 6",
      meetings = defaultMeetings,
      onJoin,
      ...props
    },
    ref,
  ) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
      <div
        ref={ref}
        data-slot="meeting-schedule-widget"
        className={cn(
          "w-sm rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-neutral-900">Upcoming</p>
            <p className="text-[11px] text-neutral-400">{dateLabel}</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
            <Clock size={16} className="text-neutral-500" />
          </div>
        </div>

        <div className="relative space-y-0">
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-neutral-200" />

          {meetings.map((meeting, index) => (
            <div
              key={meeting.id}
              data-slot="meeting-schedule-widget-item"
              className={cn(
                "relative flex gap-3 pb-4",
                index === meetings.length - 1 && "pb-0",
              )}
            >
              <div
                className={cn(
                  "relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full ring-4 ring-white",
                  meeting.color ?? "bg-neutral-400",
                )}
              />

              <div className="min-w-0 flex-1 rounded-xl border border-neutral-100 bg-neutral-50/80 p-3 transition-colors hover:border-neutral-200 hover:bg-white">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[13px] font-semibold text-neutral-900">
                      {meeting.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-neutral-500">
                      {meeting.time} · {meeting.duration} · {meeting.attendees}{" "}
                      people
                    </p>
                  </div>
                  {meeting.isVideo && (
                    <Mobile size={14} className="shrink-0 text-neutral-400" />
                  )}
                </div>

                {meeting.isVideo && (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveId(meeting.id);
                      onJoin?.(meeting);
                    }}
                    data-slot="meeting-schedule-widget-join"
                    className={cn(
                      "mt-2 cursor-pointer rounded-lg px-3 py-1.5 text-[11px] font-semibold transition-all active:scale-95",
                      activeId === meeting.id
                        ? "bg-emerald-500 text-white"
                        : "bg-neutral-900 text-white hover:bg-neutral-800",
                    )}
                  >
                    {activeId === meeting.id ? "Joining…" : "Join call"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

MeetingScheduleWidget.displayName = "MeetingScheduleWidget";
