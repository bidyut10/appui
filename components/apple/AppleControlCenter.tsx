"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { PlaneTakeoff } from "@/icons/PlaneTakeoff";
import { Wifi } from "@/icons/Wifi";
import { Bluetooth } from "@/icons/Bluetooth";
import { Mobile } from "@/icons/Mobile";
import { Torch } from "@/icons/Torch";
import { Camera } from "@/icons/Camera";
import { Calculator } from "@/icons/Calculator";
import { Music } from "@/icons/Music";
import { Sun } from "@/icons/Sun";
import { Sound } from "@/icons/Sound";

/**
 * Apple Control Center built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type AppleControlItem = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  color: string;
};

export type AppleControlSlider = {
  icon: ReactNode;
  value: number;
};

export type AppleControlCenterProps = {
  controls?: AppleControlItem[];
  sliders?: AppleControlSlider[];
  onControlToggle?: (
    control: AppleControlItem,
    index: number,
    active: boolean,
  ) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultControls: AppleControlItem[] = [
  {
    icon: <PlaneTakeoff size={20} />,
    label: "Airplane",
    active: false,
    color: "bg-orange-500",
  },
  {
    icon: <Wifi size={20} />,
    label: "Wi-Fi",
    active: true,
    color: "bg-[#007AFF]",
  },
  {
    icon: <Bluetooth size={20} />,
    label: "Bluetooth",
    active: true,
    color: "bg-[#007AFF]",
  },
  {
    icon: <Mobile size={20} />,
    label: "Cellular",
    active: true,
    color: "bg-[#007AFF]",
  },
  {
    icon: <Torch size={20} />,
    label: "Flashlight",
    active: false,
    color: "bg-neutral-600",
  },
  {
    icon: <Camera size={20} />,
    label: "Camera",
    active: false,
    color: "bg-neutral-600",
  },
  {
    icon: <Calculator size={20} />,
    label: "Calculator",
    active: false,
    color: "bg-neutral-600",
  },
  {
    icon: <Music size={20} />,
    label: "Music",
    active: false,
    color: "bg-neutral-600",
  },
];

const defaultSliders: AppleControlSlider[] = [
  { icon: <Sun size={14} />, value: 70 },
  { icon: <Sound size={14} />, value: 45 },
];

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
              aria-label={`Toggle ${control.label}`}
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
                key={index}
                className={cn("flex items-center gap-2", index === 0 && "mb-1")}
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
