"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";
import { Sound } from "@/icons/Sound";
import { Location } from "@/icons/Location";
import { Settings } from "@/icons/Settings";
import { Camera } from "@/icons/Camera";
import { Plane } from "@/icons/Plane";

type ControlToggleProps = {
  label: string;
  icon: ReactNode;
  variant?: "red" | "white" | "black";
  defaultActive?: boolean;
  status?: string;
} & ComponentPropsWithoutRef<"button">;

const ControlToggle = forwardRef<HTMLButtonElement, ControlToggleProps>(
  (
    {
      className,
      label,
      icon,
      variant = "red",
      defaultActive = false,
      status,
      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState(defaultActive);

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => setActive(!active)}
        aria-pressed={active}
        data-slot="minimal-control-toggle"
        className={cn(
          "flex h-44 w-44 cursor-pointer flex-col items-center justify-between rounded-[1.75rem] p-4 font-sans shadow-lg transition-all",
          variant === "red" && "bg-[#eb0000] text-white",
          variant === "white" &&
            "border border-neutral-100 bg-white text-neutral-900",
          variant === "black" && "bg-black text-white",
          !active && variant === "red" && "opacity-90",
          className,
        )}
        {...props}
      >
        <span
          className={cn(
            "self-end rounded-full px-2 py-0.5 text-[9px] font-bold uppercase",
            active
              ? "bg-white/20 text-white"
              : variant === "white"
                ? "bg-neutral-100 text-neutral-400"
                : "bg-black/20 text-white/60",
          )}
        >
          {active ? "Active" : "Off"}
        </span>

        <span className="flex h-12 w-12 items-center justify-center">{icon}</span>

        <div className="text-center">
          <span className="block text-[11px] font-semibold tracking-wide uppercase">
            {label}
          </span>
          {status && (
            <span
              className={cn(
                "mt-0.5 block text-[9px]",
                variant === "white" ? "text-neutral-400" : "text-white/60",
              )}
            >
              {active ? status : "Tap to enable"}
            </span>
          )}
        </div>
      </button>
    );
  },
);

ControlToggle.displayName = "ControlToggle";

type PresetProps = Omit<ControlToggleProps, "label" | "icon" | "variant" | "status">;

export const MinimalMicButton = forwardRef<HTMLButtonElement, PresetProps>(
  (props, ref) => (
    <ControlToggle
      ref={ref}
      label="Mic access"
      icon={<Sound size={22} />}
      variant="red"
      status="Listening"
      {...props}
    />
  ),
);
MinimalMicButton.displayName = "MinimalMicButton";

export const MinimalLocationButton = forwardRef<HTMLButtonElement, PresetProps>(
  (props, ref) => (
    <ControlToggle
      ref={ref}
      label="Location"
      icon={<Location size={22} />}
      variant="red"
      status="Precise · ON"
      {...props}
    />
  ),
);
MinimalLocationButton.displayName = "MinimalLocationButton";

export const MinimalAirplaneButton = forwardRef<HTMLButtonElement, PresetProps>(
  (props, ref) => (
    <ControlToggle
      ref={ref}
      label="Airplane mode"
      icon={<Plane size={22} className="rotate-90" />}
      variant="white"
      status="No connections"
      {...props}
    />
  ),
);
MinimalAirplaneButton.displayName = "MinimalAirplaneButton";

export const MinimalAutoRotateButton = forwardRef<HTMLButtonElement, PresetProps>(
  (props, ref) => (
    <ControlToggle
      ref={ref}
      label="Auto Rotate"
      icon={<Settings size={22} />}
      variant="black"
      status="Portrait lock"
      {...props}
    />
  ),
);
MinimalAutoRotateButton.displayName = "MinimalAutoRotateButton";

export const MinimalScreenRecordButton = forwardRef<HTMLButtonElement, PresetProps>(
  (props, ref) => (
    <ControlToggle
      ref={ref}
      label="Screen recorder"
      icon={<Camera size={22} />}
      variant="black"
      status="1080p · 30fps"
      {...props}
    />
  ),
);
MinimalScreenRecordButton.displayName = "MinimalScreenRecordButton";
