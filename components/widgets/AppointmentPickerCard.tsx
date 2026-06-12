"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Clock } from "@/icons/Clock";

export type AppointmentSlot = {
  time: string;
  available: boolean;
};

export type AppointmentPickerCardProps = {
  date?: string;
  slots?: AppointmentSlot[];
  onSelect?: (time: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultSlots: AppointmentSlot[] = [
  { time: "9:00", available: true },
  { time: "9:30", available: false },
  { time: "10:00", available: true },
  { time: "10:30", available: true },
  { time: "11:00", available: false },
  { time: "11:30", available: true },
  { time: "14:00", available: true },
  { time: "14:30", available: true },
  { time: "15:00", available: false },
];

export const AppointmentPickerCard = forwardRef<
  HTMLDivElement,
  AppointmentPickerCardProps
>(
  (
    {
      className,
      date = "Wednesday, Jun 11",
      slots = defaultSlots,
      onSelect,
      ...props
    },
    ref,
  ) => {
    const [selected, setSelected] = useState<string | null>("10:00");

    return (
      <div
        ref={ref}
        data-slot="appointment-picker-card"
        className={cn(
          "w-full max-w-xs rounded-2xl border border-neutral-200 bg-white p-4 font-sans shadow-sm",
          className,
        )}
        {...props}
      >
        <div className="mb-3 flex items-center gap-2">
          <Clock size={14} className="text-teal-600" />
          <div>
            <p className="text-sm font-semibold text-neutral-900">
              Pick a time
            </p>
            <p className="text-[11px] text-neutral-400">{date}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {slots.map((slot) => (
            <button
              key={slot.time}
              type="button"
              disabled={!slot.available}
              onClick={() => {
                setSelected(slot.time);
                onSelect?.(slot.time);
              }}
              className={cn(
                "rounded-xl py-2 text-[12px] font-medium transition-all",
                !slot.available &&
                  "cursor-not-allowed bg-neutral-50 text-neutral-300 line-through",
                slot.available &&
                  selected === slot.time &&
                  "cursor-pointer bg-teal-600 text-white shadow-sm",
                slot.available &&
                  selected !== slot.time &&
                  "cursor-pointer border border-neutral-200 bg-white text-neutral-700 hover:border-teal-300 hover:bg-teal-50",
              )}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>
    );
  },
);

AppointmentPickerCard.displayName = "AppointmentPickerCard";
