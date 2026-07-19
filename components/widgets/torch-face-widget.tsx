"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Flashlight } from "lucide-react";

// Flashlight face widget — tap the mascot dial to toggle the torch on or off.
const MASCOT = "#FACC15";
const ACCENT = "#FDE047";
const DIAL = { cx: 88, cy: 84, r: 56 } as const;

type TorchMascotProps = Readonly<{
  on: boolean;
}>;

function TorchMascot({ on }: TorchMascotProps) {
  return (
    <g aria-hidden>
      <circle cx="88" cy="142" r="58" fill={MASCOT} />
      {on ? (
        <>
          <line
            x1="64"
            y1="121"
            x2="72"
            y2="123"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="112"
            y1="121"
            x2="104"
            y2="123"
            stroke="white"
            strokeWidth="2.2"
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
      {on ? (
        <ellipse cx="88" cy="139" rx="6" ry="4.5" fill="white" />
      ) : (
        <path
          d="M76 138 Q88 146 100 138"
          stroke="white"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
      )}
    </g>
  );
}

export type TorchFaceWidgetProps = Readonly<
  {
    defaultOn?: boolean;
  } & ComponentPropsWithoutRef<"button">
>;

export const TorchFaceWidget = forwardRef<
  HTMLButtonElement,
  TorchFaceWidgetProps
>(({ className, defaultOn = false, onClick, ...props }, ref) => {
  const [on, setOn] = useState(defaultOn);

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={on}
      aria-label={on ? "Turn torch off" : "Turn torch on"}
      data-slot="torch-face-widget"
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
        <TorchMascot on={on} />
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
        <Flashlight size={14} color={on ? ACCENT : "#FFFFFF66"} />
      </span>

      <p
        className={cn(
          "absolute inset-x-0 top-[34%] z-10 text-center text-base leading-none font-semibold",
          on ? "text-white" : "text-white/40",
        )}
      >
        {on ? "On" : "Off"}
      </p>
    </button>
  );
});

TorchFaceWidget.displayName = "TorchFaceWidget";
