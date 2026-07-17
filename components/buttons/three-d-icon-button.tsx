"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

export type ThreeDIconButtonProps = Readonly<
  {
    children: ReactNode;
    label: string;
    variant?: "solid" | "soft" | "muted";
  } & Omit<ComponentPropsWithoutRef<"button">, "children" | "aria-label">
>;

const BEVEL_LIGHT =
  "shadow-[0_1px_1px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.1),0_6px_12px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.35),inset_0_-2px_4px_rgba(0,0,0,0.08)]";
const PRESSED_LIGHT =
  "active:shadow-[0_1px_1px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(0,0,0,0.04),inset_0_-1px_2px_rgba(0,0,0,0.05)]";

const BEVEL_DARK =
  "shadow-[0_1px_1px_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.28),0_8px_16px_rgba(0,0,0,0.22),inset_0_1px_2px_rgba(255,255,255,0.14),inset_0_-3px_6px_rgba(0,0,0,0.55)]";
const PRESSED_DARK =
  "active:shadow-[0_1px_2px_rgba(0,0,0,0.25),inset_0_2px_6px_rgba(0,0,0,0.55),inset_0_-1px_1px_rgba(255,255,255,0.06)]";

const VARIANT = {
  solid: cn(
    "bg-neutral-800 text-white hover:bg-neutral-700 active:bg-neutral-900",
    BEVEL_DARK,
    PRESSED_DARK,
  ),
  soft: cn(
    "bg-neutral-50 text-neutral-700 hover:text-neutral-900 active:bg-neutral-100",
    BEVEL_LIGHT,
    PRESSED_LIGHT,
  ),
  muted: cn(
    "bg-neutral-100 text-neutral-600 hover:text-neutral-900 active:bg-neutral-200",
    BEVEL_LIGHT,
    PRESSED_LIGHT,
  ),
} as const;

// Square 3D icon button — pass any lucide (or custom) icon as children.
export const ThreeDIconButton = forwardRef<
  HTMLButtonElement,
  ThreeDIconButtonProps
>(
  (
    {
      className,
      children,
      label,
      variant = "soft",
      type = "button",
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        aria-label={label}
        data-slot="3d-icon-button"
        data-variant={variant}
        className={cn(
          "inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg outline-none select-none",
          "transition-[background-color,box-shadow,color] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40",
          VARIANT[variant],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

ThreeDIconButton.displayName = "ThreeDIconButton";
