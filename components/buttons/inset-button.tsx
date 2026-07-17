"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

export type InsetButtonVariant = "light" | "dark";
export type InsetButtonSize = "sm" | "md" | "lg";

export type InsetButtonProps = Readonly<
  {
    children: ReactNode;
    variant?: InsetButtonVariant;
    size?: InsetButtonSize;
  } & ComponentPropsWithoutRef<"button">
>;

const SIZE: Record<InsetButtonSize, string> = {
  sm: "h-9 gap-1.5 rounded-lg px-3.5 text-xs",
  md: "h-10 gap-2 rounded-lg px-4 text-sm",
  lg: "h-12 gap-2 rounded-xl px-5 text-sm",
};

const VARIANT: Record<InsetButtonVariant, string> = {
  light: cn(
    "bg-neutral-100 text-neutral-700",
    "shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-1px_1px_rgba(255,255,255,0.7)]",
    "hover:bg-neutral-200/70 hover:text-neutral-900",
    "active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.14),inset_0_-1px_1px_rgba(255,255,255,0.5)]",
  ),
  dark: cn(
    "bg-neutral-800 text-neutral-100",
    "shadow-[inset_0_2px_5px_rgba(0,0,0,0.55),inset_0_-1px_1px_rgba(255,255,255,0.08)]",
    "hover:bg-neutral-700 hover:text-white",
    "active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.65),inset_0_-1px_1px_rgba(255,255,255,0.06)]",
  ),
};

// InsetButton — recessed / pressed-in look; pass any children.
export const InsetButton = forwardRef<HTMLButtonElement, InsetButtonProps>(
  (
    {
      className,
      children,
      variant = "light",
      size = "md",
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
        data-slot="inset-button"
        data-variant={variant}
        data-size={size}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center font-sans font-semibold outline-none select-none",
          "transition-[background-color,box-shadow,color] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40",
          SIZE[size],
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

InsetButton.displayName = "InsetButton";
