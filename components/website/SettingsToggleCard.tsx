"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Settings Toggle Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type SettingItem = {
  label: string;
  desc: string;
  enabled: boolean;
};

export type SettingsToggleCardProps = {
  title?: string;
  description?: string;
  settings?: SettingItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultSettings: SettingItem[] = [
  {
    label: "Email notifications",
    desc: "Receive updates via email",
    enabled: true,
  },
  {
    label: "Push notifications",
    desc: "Browser push alerts",
    enabled: false,
  },
  {
    label: "Two-factor auth",
    desc: "Extra security layer",
    enabled: true,
  },
  {
    label: "Dark mode",
    desc: "Use dark theme",
    enabled: false,
  },
];

export const SettingsToggleCard = forwardRef<
  HTMLDivElement,
  SettingsToggleCardProps
>(
  (
    {
      className,
      title = "Preferences",
      description = "Manage your account settings",
      settings = defaultSettings,
      ...props
    },
    ref,
  ) => {
    const [toggles, setToggles] = useState(
      settings.map((setting) => setting.enabled),
    );

    return (
      <div
        ref={ref}
        data-slot="settings-toggle-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        
        <div
          data-slot="settings-toggle-card-header"
          className="border-b border-neutral-100 px-4 py-3"
        >
          <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>

          <p className="mt-0.5 text-[11px] text-neutral-400">{description}</p>
        </div>

        
        <div
          data-slot="settings-toggle-card-list"
          className="divide-y divide-neutral-50"
        >
          {settings.map((setting, index) => (
            <div
              key={setting.label}
              data-slot="settings-toggle-card-item"
              className="flex items-center justify-between px-4 py-3"
            >
              <div>
                <p className="text-xs font-medium text-neutral-800">
                  {setting.label}
                </p>

                <p className="mt-0.5 text-[10px] text-neutral-400">
                  {setting.desc}
                </p>
              </div>

              <button
                type="button"
                aria-label={`Toggle ${setting.label}`}
                aria-pressed={toggles[index]}
                data-slot="settings-toggle-card-switch"
                onClick={() =>
                  setToggles((current) => {
                    const next = [...current];
                    next[index] = !next[index];
                    return next;
                  })
                }
                className={cn(
                  "relative h-5 w-10 shrink-0 cursor-pointer rounded-full transition-colors",
                  toggles[index] ? "bg-neutral-900" : "bg-neutral-200",
                )}
              >
                <div
                  className={cn(
                    "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform",
                    toggles[index] ? "translate-x-[22px]" : "translate-x-0.5",
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

SettingsToggleCard.displayName = "SettingsToggleCard";
