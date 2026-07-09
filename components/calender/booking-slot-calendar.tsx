"use client";

import {
  forwardRef,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
] as const;

function startOfWeek(date: Date) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() - copy.getDay());
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function addDays(date: Date, days: number) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function isSameDate(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export type BookingSlotCalendarProps = Readonly<
  {
    slots?: readonly string[];
    onBook?: (date: Date, slot: string) => void;
  } & ComponentPropsWithoutRef<"div">
>;

// Booking calendar — pick a day, then tap an available time slot.
export const BookingSlotCalendar = forwardRef<
  HTMLDivElement,
  BookingSlotCalendarProps
>(({ className, slots = SLOTS, onBook, ...props }, ref) => {
  const today = useMemo(() => new Date(), []);
  const [weekStart, setWeekStart] = useState(() => startOfWeek(today));
  const [selectedDay, setSelectedDay] = useState(today);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [slideDirection, setSlideDirection] = useState(0);

  const days = useMemo(
    () => Array.from({ length: 7 }, (_, index) => addDays(weekStart, index)),
    [weekStart],
  );

  const dayLabel = selectedDay.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const pickSlot = (slot: string) => {
    setSelectedSlot(slot);
    onBook?.(selectedDay, slot);
  };

  return (
    <div
      ref={ref}
      data-slot="booking-slot-calendar"
      className={cn(
        "w-72 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-4 font-sans shadow-lg shadow-black/5 select-none",
        className,
      )}
      {...props}
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-neutral-900">Book a slot</p>
        <div className="flex gap-1">
          <button
            type="button"
            aria-label="Previous week"
            onClick={() => {
              setSlideDirection(-1);
              setWeekStart((prev) => addDays(prev, -7));
            }}
            className="flex size-7 cursor-pointer items-center justify-center rounded-md text-neutral-500 transition-all duration-200 ease-out hover:bg-neutral-100 active:scale-95"
          >
            <ChevronLeft size={14} strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Next week"
            onClick={() => {
              setSlideDirection(1);
              setWeekStart((prev) => addDays(prev, 7));
            }}
            className="flex size-7 cursor-pointer items-center justify-center rounded-md text-neutral-500 transition-all duration-200 ease-out hover:bg-neutral-100 active:scale-95"
          >
            <ChevronRight size={14} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div
        key={weekStart.toISOString()}
        className={cn(
          "mb-4 grid grid-cols-7 gap-1 opacity-100 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] starting:opacity-0",
          slideDirection >= 0
            ? "starting:translate-x-2"
            : "starting:-translate-x-2",
        )}
      >
        {days.map((date) => {
          const active = isSameDate(date, selectedDay);
          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => {
                setSelectedDay(date);
                setSelectedSlot(null);
              }}
              className={cn(
                "flex cursor-pointer flex-col items-center rounded-lg py-1.5 transition-all duration-200 ease-out active:scale-95",
                active
                  ? "scale-100 bg-neutral-900 text-white"
                  : "hover:bg-neutral-50",
              )}
            >
              <span
                className={cn(
                  "text-[9px] uppercase",
                  active ? "text-white/70" : "text-neutral-400",
                )}
              >
                {date.toLocaleDateString("en-US", { weekday: "narrow" })}
              </span>
              <span className="text-xs font-semibold tabular-nums">
                {date.getDate()}
              </span>
            </button>
          );
        })}
      </div>

      <p
        key={dayLabel}
        className="mb-2 text-xs text-neutral-500 opacity-100 starting:opacity-0 transition-all duration-300 ease-out"
      >
        {dayLabel}
      </p>

      <div
        key={`${selectedDay.toISOString()}-slots`}
        className="grid grid-cols-2 gap-2 opacity-100 starting:opacity-0 starting:translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
      >
        {slots.map((slot) => {
          const taken = slot === "10:30 AM" || slot === "2:30 PM";
          const active = selectedSlot === slot;

          return (
            <button
              key={slot}
              type="button"
              disabled={taken}
              onClick={() => pickSlot(slot)}
              className={cn(
                "h-9 cursor-pointer rounded-lg border text-xs font-medium tabular-nums transition-all duration-200 ease-out active:scale-95",
                taken &&
                  "cursor-not-allowed border-neutral-100 bg-neutral-50 text-neutral-300 line-through",
                !taken &&
                  active &&
                  "border-neutral-900 bg-neutral-900 text-white",
                !taken &&
                  !active &&
                  "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300",
              )}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
});

BookingSlotCalendar.displayName = "BookingSlotCalendar";
