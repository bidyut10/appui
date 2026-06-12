"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Moon } from "@/icons/Moon";
import { Settings } from "@/icons/Settings";
import { Sound } from "@/icons/Sound";
import { Wifi } from "@/icons/Wifi";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type NeumorphicSetting = {
  id: string;
  label: string;
  icon: ReactNode;
  defaultOn?: boolean;
};

export type NeumorphicSettingsCardProps = {
  title?: string;
  settings?: NeumorphicSetting[];
  onToggle?: (id: string, active: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultSettings: NeumorphicSetting[] = [
  { id: "wifi", label: "Wi-Fi", icon: <Wifi size={14} />, defaultOn: true },
  { id: "sound", label: "Sound", icon: <Sound size={14} />, defaultOn: true },
  { id: "dark", label: "Dark", icon: <Moon size={14} />, defaultOn: false },
  {
    id: "prefs",
    label: "Prefs",
    icon: <Settings size={14} />,
    defaultOn: false,
  },
];

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export const NeumorphicSettingsCard = forwardRef<
  HTMLDivElement,
  NeumorphicSettingsCardProps
>(
  (
    {
      className,
      title = "Quick Settings",
      settings = defaultSettings,
      onToggle,
      ...props
    },
    ref,
  ) => {
    const [states, setStates] = useState(() =>
      Object.fromEntries(
        settings.map((s) => [s.id, s.defaultOn ?? false]),
      ),
    );

    const handleToggle = (id: string) => {
      setStates((prev) => {
        const next = { ...prev, [id]: !prev[id] };
        onToggle?.(id, next[id]);
        return next;
      });
    };

    return (
      <div
        ref={ref}
        data-slot="neumorphic-settings-card"
        className={cn(
          "w-full max-w-xs rounded-3xl bg-[#e8ecf1] p-5 font-sans shadow-inner",
          className,
        )}
        {...props}
      >
        <p
          data-slot="neumorphic-settings-card-title"
          className="mb-4 text-center text-sm font-semibold text-neutral-600"
        >
          {title}
        </p>

        <div
          data-slot="neumorphic-settings-card-grid"
          className="grid grid-cols-2 gap-4"
        >
          {settings.map((setting) => {
            const active = states[setting.id];
            return (
              <button
                key={setting.id}
                type="button"
                data-slot="neumorphic-settings-card-item"
                onClick={() => handleToggle(setting.id)}
                className={cn(
                  "flex cursor-pointer flex-col items-center gap-2 rounded-2xl p-4 transition-all active:scale-95",
                  active
                    ? "bg-[#e8ecf1] shadow-[inset_4px_4px_8px_#c5cad3,inset_-4px_-4px_8px_#ffffff]"
                    : "bg-[#e8ecf1] shadow-[4px_4px_10px_#c5cad3,-4px_-4px_10px_#ffffff]",
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl",
                    active ? "text-sky-600" : "text-neutral-400",
                  )}
                >
                  {setting.icon}
                </span>
                <span
                  className={cn(
                    "text-[11px] font-medium",
                    active ? "text-neutral-700" : "text-neutral-400",
                  )}
                >
                  {setting.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);

NeumorphicSettingsCard.displayName = "NeumorphicSettingsCard";
