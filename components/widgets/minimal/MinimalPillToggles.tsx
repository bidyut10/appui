"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";
import { Torch } from "@/icons/Torch";
import { Bluetooth } from "@/icons/Bluetooth";
import { Moon } from "@/icons/Moon";
import { Calculator } from "@/icons/Calculator";
import { Battery } from "@/icons/Battery";
import { Wifi } from "@/icons/Wifi";
import { Mobile } from "@/icons/Mobile";
import { Sun } from "@/icons/Sun";

type MinimalSquareToggleProps = {
  label: string;
  icon: ReactNode;
  variant?: "black" | "white";
  subtitle?: string;
  detail?: ReactNode;
  defaultOn?: boolean;
} & ComponentPropsWithoutRef<"button">;

const MinimalSquareToggle = forwardRef<
  HTMLButtonElement,
  MinimalSquareToggleProps
>(
  (
    {
      className,
      label,
      icon,
      variant = "black",
      subtitle,
      detail,
      defaultOn = false,
      ...props
    },
    ref,
  ) => {
    const [on, setOn] = useState(defaultOn);
    const dark = variant === "black";

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => setOn(!on)}
        aria-pressed={on}
        data-slot="minimal-square-toggle"
        className={cn(
          "flex h-44 w-44 cursor-pointer flex-col justify-between rounded-[1.75rem] p-4 text-left font-sans shadow-lg transition-all active:scale-[0.98]",
          dark
            ? "bg-black text-white"
            : "border border-neutral-100 bg-white text-neutral-900",
          on && (dark ? "ring-2 ring-white/20" : "ring-2 ring-neutral-900/10"),
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-2xl",
              dark ? "bg-white/10" : "bg-neutral-100",
              on && (dark ? "bg-white/20" : "bg-neutral-900 text-white"),
            )}
          >
            {icon}
          </span>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase",
              on
                ? dark
                  ? "bg-emerald-400 text-black"
                  : "bg-emerald-500 text-white"
                : dark
                  ? "bg-white/10 text-white/50"
                  : "bg-neutral-100 text-neutral-400",
            )}
          >
            {on ? "On" : "Off"}
          </span>
        </div>

        <div className="min-h-0 flex-1 py-2">{detail}</div>

        <div>
          <p className="text-sm font-semibold">{label}</p>
          {subtitle && (
            <p
              className={cn(
                "text-[10px]",
                dark ? "text-white/50" : "text-neutral-400",
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </button>
    );
  },
);

MinimalSquareToggle.displayName = "MinimalSquareToggle";

export const MinimalTorchToggle = forwardRef<
  HTMLButtonElement,
  Omit<MinimalSquareToggleProps, "label" | "icon" | "detail" | "subtitle">
>((props, ref) => (
  <MinimalSquareToggle
    ref={ref}
    label="Torch"
    subtitle="Flashlight"
    icon={<Torch size={18} />}
    detail={
      <div className="flex h-full flex-col justify-center gap-2">
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-3/4 rounded-full bg-amber-400" />
        </div>
        <p className="text-[10px] text-white/50">Brightness 75%</p>
      </div>
    }
    {...props}
  />
));
MinimalTorchToggle.displayName = "MinimalTorchToggle";

export const MinimalExtraDimToggle = forwardRef<
  HTMLButtonElement,
  Omit<
    MinimalSquareToggleProps,
    "label" | "icon" | "detail" | "subtitle" | "variant"
  >
>((props, ref) => (
  <MinimalSquareToggle
    ref={ref}
    label="Extra Dim"
    subtitle="Reduce brightness"
    variant="white"
    icon={<Moon size={18} />}
    detail={
      <div className="flex items-end gap-1 pt-2">
        {[30, 45, 60, 40, 25].map((h, i) => (
          <span
            key={i}
            className="w-2 rounded-sm bg-neutral-200"
            style={{ height: `${h}%`, maxHeight: 32 }}
          />
        ))}
      </div>
    }
    {...props}
  />
));
MinimalExtraDimToggle.displayName = "MinimalExtraDimToggle";

export const MinimalNearbyShareToggle = forwardRef<
  HTMLButtonElement,
  Omit<MinimalSquareToggleProps, "label" | "icon" | "detail" | "subtitle">
>((props, ref) => (
  <MinimalSquareToggle
    ref={ref}
    label="Nearby Share"
    subtitle="QuickDrop ready"
    icon={<Wifi size={18} />}
    detail={<p className="font-mono text-2xl font-bold tracking-wider">3</p>}
    {...props}
  />
));
MinimalNearbyShareToggle.displayName = "MinimalNearbyShareToggle";

export const MinimalHotspotToggle = forwardRef<
  HTMLButtonElement,
  Omit<
    MinimalSquareToggleProps,
    "label" | "icon" | "detail" | "subtitle" | "variant"
  >
>((props, ref) => (
  <MinimalSquareToggle
    ref={ref}
    label="Hotspot"
    subtitle="2 devices connected"
    variant="white"
    icon={<Wifi size={18} />}
    detail={
      <div className="space-y-1.5 pt-1">
        {["MacBook Pro", "iPad Air"].map((device) => (
          <div key={device} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="truncate text-[10px] text-neutral-600">
              {device}
            </span>
          </div>
        ))}
      </div>
    }
    {...props}
  />
));
MinimalHotspotToggle.displayName = "MinimalHotspotToggle";

export const MinimalBluetoothToggle = forwardRef<
  HTMLButtonElement,
  Omit<MinimalSquareToggleProps, "label" | "icon" | "detail" | "subtitle">
>((props, ref) => (
  <MinimalSquareToggle
    ref={ref}
    label="Bluetooth"
    subtitle="AirPods Pro"
    icon={<Bluetooth size={18} />}
    detail={
      <div className="flex items-center gap-2 pt-1">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[10px]">
          AP
        </span>
        <span className="text-[10px] text-white/60">Connected · 87%</span>
      </div>
    }
    {...props}
  />
));
MinimalBluetoothToggle.displayName = "MinimalBluetoothToggle";

export const MinimalMobileDataToggle = forwardRef<
  HTMLButtonElement,
  Omit<
    MinimalSquareToggleProps,
    "label" | "icon" | "detail" | "subtitle" | "variant"
  >
>((props, ref) => (
  <MinimalSquareToggle
    ref={ref}
    label="Mobile Data"
    subtitle="4.2 GB used today"
    variant="white"
    icon={<Mobile size={18} />}
    detail={
      <div className="pt-1">
        <div className="mb-1 flex justify-between text-[9px] text-neutral-400">
          <span>Used</span>
          <span>4.2 / 10 GB</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
          <div className="h-full w-[42%] rounded-full bg-blue-500" />
        </div>
      </div>
    }
    {...props}
  />
));
MinimalMobileDataToggle.displayName = "MinimalMobileDataToggle";

export const MinimalDarkModeToggle = forwardRef<
  HTMLButtonElement,
  Omit<MinimalSquareToggleProps, "label" | "icon" | "detail" | "subtitle">
>((props, ref) => (
  <MinimalSquareToggle
    ref={ref}
    label="Dark Mode"
    subtitle="System appearance"
    icon={<Moon size={18} />}
    detail={
      <div className="flex items-center gap-3 pt-2">
        <Sun size={16} className="text-white/30" />
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-white/40" />
        </div>
        <Moon size={16} className="text-white" />
      </div>
    }
    {...props}
  />
));
MinimalDarkModeToggle.displayName = "MinimalDarkModeToggle";

export const MinimalCalculatorToggle = forwardRef<
  HTMLButtonElement,
  Omit<
    MinimalSquareToggleProps,
    "label" | "icon" | "detail" | "subtitle" | "variant"
  >
>((props, ref) => (
  <MinimalSquareToggle
    ref={ref}
    label="Calculator"
    subtitle="Tap to open"
    variant="white"
    icon={<Calculator size={18} />}
    detail={
      <div className="pt-1">
        <p className="text-right font-mono text-xl font-light text-neutral-900">
          128+64
        </p>
        <p className="text-right font-mono text-sm text-neutral-400">= 192</p>
      </div>
    }
    {...props}
  />
));
MinimalCalculatorToggle.displayName = "MinimalCalculatorToggle";

export const MinimalBatterySaverToggle = forwardRef<
  HTMLButtonElement,
  Omit<MinimalSquareToggleProps, "label" | "icon" | "detail" | "subtitle">
>((props, ref) => (
  <MinimalSquareToggle
    ref={ref}
    label="Battery Saver"
    subtitle="Extends to ~6h"
    icon={<Battery size={18} />}
    detail={
      <div className="pt-1">
        <p className="font-mono text-2xl font-bold">68%</p>
        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[68%] rounded-full bg-emerald-400" />
        </div>
      </div>
    }
    {...props}
  />
));
MinimalBatterySaverToggle.displayName = "MinimalBatterySaverToggle";
