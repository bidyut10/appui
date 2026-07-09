"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Minus, Plus } from "lucide-react";

export type QuantityStepperButtonProps = Readonly<
  {
    value?: number;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
  } & Omit<ComponentPropsWithoutRef<"div">, "onChange">
>;

// Quantity stepper — minus, count, plus in one inline control.
export const QuantityStepperButton = forwardRef<
  HTMLDivElement,
  QuantityStepperButtonProps
>(
  (
    {
      className,
      value: defaultValue = 1,
      min = 0,
      max = 99,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue);

    const update = (next: number) => {
      const clamped = Math.min(max, Math.max(min, next));
      setValue(clamped);
      onChange?.(clamped);
    };

    return (
      <div
        ref={ref}
        data-slot="quantity-stepper-button"
        className={cn(
          "inline-flex h-11 items-stretch overflow-hidden rounded-xl border border-neutral-200 bg-white font-sans text-sm font-medium shadow-sm select-none",
          className,
        )}
        {...props}
      >
        <button
          type="button"
          aria-label="Decrease quantity"
          disabled={value <= min}
          onClick={() => update(value - 1)}
          className="flex w-11 cursor-pointer items-center justify-center text-neutral-500 transition-colors hover:bg-neutral-50 disabled:cursor-default disabled:opacity-30"
        >
          <Minus size={15} strokeWidth={2} />
        </button>

        <span
          className="flex min-w-10 items-center justify-center border-x border-neutral-100 px-2 tabular-nums text-neutral-900"
          aria-live="polite"
        >
          {value}
        </span>

        <button
          type="button"
          aria-label="Increase quantity"
          disabled={value >= max}
          onClick={() => update(value + 1)}
          className="flex w-11 cursor-pointer items-center justify-center text-neutral-500 transition-colors hover:bg-neutral-50 disabled:cursor-default disabled:opacity-30"
        >
          <Plus size={15} strokeWidth={2} />
        </button>
      </div>
    );
  },
);

QuantityStepperButton.displayName = "QuantityStepperButton";
