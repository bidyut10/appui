"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Moon } from "@/icons/elements/moon";

const MASCOT = "#A78BFA";
const ACCENT = "#C4B5FD";
const DIAL = { cx: 88, cy: 84, r: 56 } as const;

type DndMascotProps = Readonly<{
  on: boolean;
}>;

function DndMascot({ on }: DndMascotProps) {
  return (
    <g aria-hidden>
      <circle cx="88" cy="142" r="58" fill={MASCOT} />
      {on ? (
        <>
          <path
            d="M64 122 Q68 118 72 122"
            stroke="white"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M104 122 Q108 118 112 122"
            stroke="white"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <circle cx="68" cy="122" r="5" fill="white" />
          <circle cx="108" cy="122" r="5" fill="white" />
          <circle cx="69" cy="123" r="2.2" fill="#1C1C1E" />
          <circle cx="109" cy="123" r="2.2" fill="#1C1C1E" />
        </>
      )}
      <path
        d="M76 138 Q88 144 100 138"
        stroke="white"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

// Do Not Disturb face widget — tap the mascot to toggle focus mode on or off.
export type DndFaceWidgetProps = Readonly<
  {
    label?: string;
    defaultOn?: boolean;
  } & ComponentPropsWithoutRef<"button">
>;

export const DndFaceWidget = forwardRef<HTMLButtonElement, DndFaceWidgetProps>(
  (
    { className, label = "Focus", defaultOn = true, onClick, ...props },
    ref,
  ) => {
    const [on, setOn] = useState(defaultOn);

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={on}
        aria-label={on ? "Turn Focus mode off" : "Turn Focus mode on"}
        data-slot="dnd-face-widget"
        onClick={(event) => {
          setOn((prev) => !prev);
          onClick?.(event);
        }}
        className={cn(
          "relative h-44 w-44 max-w-full cursor-pointer overflow-hidden rounded-[1.75rem] bg-black font-sans shadow-lg shadow-black/5 select-none",
          className,
        )}
        {...props}
      >
        <svg
          viewBox="0 0 176 176"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <rect width="176" height="176" fill="#000" />
          <DndMascot on={on} />
          <circle
            cx={DIAL.cx}
            cy={DIAL.cy}
            r={DIAL.r}
            fill="none"
            stroke={on ? ACCENT : "white"}
            strokeWidth="1.5"
            opacity={on ? 0.45 : 0.25}
          />
        </svg>

        <span className="absolute top-3.5 right-3.5 z-10" aria-hidden>
          <Moon size={14} color={on ? ACCENT : "#FFFFFF66"} />
        </span>

        <div className="absolute inset-x-0 top-[32%] z-10 px-3 text-center">
          <p
            className={cn(
              "text-base leading-none font-semibold",
              on ? "text-white" : "text-white/40",
            )}
          >
            {on ? label : "Off"}
          </p>
        </div>
      </button>
    );
  },
);

DndFaceWidget.displayName = "DndFaceWidget";
