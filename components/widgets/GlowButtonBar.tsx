"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Play } from "@/icons/Play";
import { Plus } from "@/icons/Plus";
import { Share } from "@/icons/Share";

/**
 * Glow action button bar — primary CTA with icon buttons.
 *
 * Wire callbacks to your own actions.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type GlowButtonBarProps = {
  primaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: (action: string) => void;
} & ComponentPropsWithoutRef<"div">;

export const GlowButtonBar = forwardRef<HTMLDivElement, GlowButtonBarProps>(
  (
    {
      className,
      primaryLabel = "Get started free",
      onPrimary,
      onSecondary,
      ...props
    },
    ref,
  ) => {
    const [pressed, setPressed] = useState(false);

    return (
      <div
        ref={ref}
        data-slot="glow-button-bar"
        className={cn(
          "w-72 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="mb-3 text-sm font-bold text-neutral-900">
          Action buttons
        </p>

        <button
          type="button"
          onClick={() => {
            setPressed(true);
            onPrimary?.();
            window.setTimeout(() => setPressed(false), 200);
          }}
          data-slot="glow-button-bar-primary"
          className={cn(
            "relative w-full cursor-pointer overflow-hidden rounded-xl py-3 text-sm font-semibold text-white transition-transform active:scale-[0.98]",
            "bg-neutral-900 shadow-[0_0_0_0_rgba(20,184,166,0)] hover:shadow-[0_0_24px_-4px_rgba(20,184,166,0.45)]",
            pressed && "shadow-[0_0_32px_-2px_rgba(20,184,166,0.55)]",
          )}
        >
          <span className="relative z-10">{primaryLabel}</span>
          <span className="pointer-events-none absolute inset-0 bg-linear-to-r from-teal-600/20 to-cyan-500/20 opacity-0 transition-opacity hover:opacity-100" />
        </button>

        <div className="mt-3 flex gap-2">
          {[
            { id: "play", icon: Play, label: "Demo" },
            { id: "add", icon: Plus, label: "New" },
            { id: "share", icon: Share, label: "Share" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => onSecondary?.(id)}
              aria-label={label}
              className="flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 text-[10px] font-medium text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-white"
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  },
);

GlowButtonBar.displayName = "GlowButtonBar";
