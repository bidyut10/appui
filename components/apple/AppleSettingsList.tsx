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
import { Bell } from "@/icons/Bell";
import { Sound } from "@/icons/Sound";
import { Moon } from "@/icons/Moon";
import { ChevronRight } from "@/icons/ChevronRight";

/**
 * Apple Settings List built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type AppleSettingsItem = {
  label: string;
  icon?: ReactNode;
  value?: string;
  toggle?: boolean;
  defaultOn?: boolean;
  onPress?: () => void;
  onToggle?: (enabled: boolean) => void;
};

export type AppleSettingsSection = {
  items: AppleSettingsItem[];
};

export type AppleSettingsListProps = {
  title?: string;
  sections?: AppleSettingsSection[];
} & ComponentPropsWithoutRef<"div">;

const defaultSections: AppleSettingsSection[] = [
  {
    items: [
      {
        label: "Airplane Mode",
        icon: <PlaneTakeoff size={16} />,
        toggle: true,
      },
      {
        label: "Wi-Fi",
        icon: <Wifi size={16} />,
        value: "Home Network",
      },
      {
        label: "Bluetooth",
        icon: <Bluetooth size={16} />,
        value: "On",
      },
    ],
  },
  {
    items: [
      { label: "Notifications", icon: <Bell size={16} /> },
      { label: "Sounds & Haptics", icon: <Sound size={16} /> },
      {
        label: "Focus",
        icon: <Moon size={16} />,
        value: "Do Not Disturb",
      },
    ],
  },
];

export const AppleSettingsList = forwardRef<
  HTMLDivElement,
  AppleSettingsListProps
>(
  (
    { className, title = "Settings", sections = defaultSections, ...props },
    ref,
  ) => {
    const [toggles, setToggles] = useState<Record<string, boolean>>(() => {
      const initial: Record<string, boolean> = {};
      sections.forEach((section, si) => {
        section.items.forEach((item, ii) => {
          if (item.toggle) {
            initial[`${si}-${ii}`] = item.defaultOn ?? false;
          }
        });
      });
      return initial;
    });

    return (
      <div
        ref={ref}
        data-slot="apple-settings-list"
        className={cn(
          "w-72 rounded-[1.25rem] bg-[#f2f2f7] p-3 font-sans",
          className,
        )}
        {...props}
      >
        <p
          data-slot="apple-settings-list-title"
          className="mb-2 px-3 text-[11px] font-semibold tracking-wide text-neutral-500 uppercase"
        >
          {title}
        </p>

        {sections.map((section, si) => (
          <div
            key={si}
            data-slot="apple-settings-list-section"
            className="mb-2 overflow-hidden rounded-xl bg-white shadow-sm"
          >
            {section.items.map((item, ii) => {
              const key = `${si}-${ii}`;

              return (
                <div key={item.label} data-slot="apple-settings-list-item">
                  <button
                    type="button"
                    aria-label={item.label}
                    onClick={() => item.onPress?.()}
                    className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-neutral-50"
                  >
                    {item.icon && (
                      <span className="text-base">{item.icon}</span>
                    )}
                    <span className="flex-1 text-left text-[15px] text-neutral-900">
                      {item.label}
                    </span>
                    {item.value && (
                      <span className="text-[15px] text-neutral-400">
                        {item.value}
                      </span>
                    )}
                    {item.toggle ? (
                      <div
                        role="switch"
                        aria-checked={toggles[key]}
                        aria-label={`Toggle ${item.label}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          const next = !toggles[key];
                          setToggles((t) => ({ ...t, [key]: next }));
                          item.onToggle?.(next);
                        }}
                        className={cn(
                          "relative h-[31px] w-[51px] cursor-pointer rounded-full transition-colors",
                          toggles[key] ? "bg-[#34c759]" : "bg-neutral-200",
                        )}
                      >
                        <div
                          className={cn(
                            "absolute top-[2px] h-[27px] w-[27px] rounded-full bg-white shadow-md transition-transform",
                            toggles[key]
                              ? "translate-x-[22px]"
                              : "translate-x-[2px]",
                          )}
                        />
                      </div>
                    ) : (
                      <ChevronRight size={18} className="text-neutral-300" />
                    )}
                  </button>
                  {ii < section.items.length - 1 && (
                    <div className="ml-14 h-px bg-neutral-100" />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  },
);

AppleSettingsList.displayName = "AppleSettingsList";
