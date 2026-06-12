"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type AppleControlItem = {
  icon: string;
  label: string;
  active?: boolean;
  color: string;
};

export type AppleControlSlider = {
  icon: string;
  value: number;
};

export type AppleControlCenterProps = {
  controls?: AppleControlItem[];
  sliders?: AppleControlSlider[];
  onControlToggle?: (control: AppleControlItem, index: number, active: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultControls: AppleControlItem[] = [
  { icon: "✈️", label: "Airplane", active: false, color: "bg-orange-500" },
  { icon: "📶", label: "Wi-Fi", active: true, color: "bg-[#007AFF]" },
  { icon: "🔵", label: "Bluetooth", active: true, color: "bg-[#007AFF]" },
  { icon: "📱", label: "Cellular", active: true, color: "bg-[#007AFF]" },
  { icon: "🔦", label: "Flashlight", active: false, color: "bg-neutral-600" },
  { icon: "📷", label: "Camera", active: false, color: "bg-neutral-600" },
  { icon: "🧮", label: "Calculator", active: false, color: "bg-neutral-600" },
  { icon: "🎵", label: "Music", active: false, color: "bg-neutral-600" },
];

const defaultSliders: AppleControlSlider[] = [
  { icon: "🔆", value: 70 },
  { icon: "🔊", value: 45 },
];

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export const AppleControlCenter = forwardRef<
  HTMLDivElement,
  AppleControlCenterProps
>(
  (
    {
      className,
      controls = defaultControls,
      sliders = defaultSliders,
      onControlToggle,
      ...props
    },
    ref,
  ) => {
    const [states, setStates] = useState(() =>
      controls.map((control) => control.active ?? false),
    );

    const handleToggle = (index: number) => {
      setStates((prev) => {
        const next = [...prev];
        next[index] = !next[index];
        onControlToggle?.(controls[index], index, next[index]);
        return next;
      });
    };

    return (
      <div
        ref={ref}
        data-slot="apple-control-center"
        className={cn(
          "w-72 rounded-[2rem] border border-white/10 bg-black/40 p-4 font-sans backdrop-blur-3xl",
          className,
        )}
        {...props}
      >
        <div
          data-slot="apple-control-center-grid"
          className="grid grid-cols-4 gap-3"
        >
          {controls.map((control, index) => (
            <button
              key={control.label}
              type="button"
              data-slot="apple-control-center-item"
              onClick={() => handleToggle(index)}
              className="flex cursor-pointer flex-col items-center gap-1.5 transition-all active:scale-95"
            >
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-2xl text-xl transition-colors",
                  states[index] ? control.color : "bg-white/15",
                )}
              >
                {control.icon}
              </div>
              <span className="text-[9px] font-medium text-white/60">
                {control.label}
              </span>
            </button>
          ))}
        </div>

        <div
          data-slot="apple-control-center-sliders"
          className="mt-4 flex items-center gap-3 rounded-2xl bg-white/10 p-3"
        >
          <div className="flex-1">
            {sliders.map((slider, index) => (
              <div
                key={slider.icon}
                className={cn(
                  "flex items-center gap-2",
                  index === 0 && "mb-1",
                )}
              >
                <span className="text-sm">{slider.icon}</span>
                <div className="h-1 flex-1 rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white"
                    style={{ width: `${slider.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

AppleControlCenter.displayName = "AppleControlCenter";
