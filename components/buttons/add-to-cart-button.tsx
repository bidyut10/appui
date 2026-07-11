"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";
import { Check, Loader2, ShoppingBag } from "lucide-react";

type Phase = "idle" | "loading" | "added";

export type AddToCartButtonProps = Readonly<
  {
    label?: string;
    loadingLabel?: string;
    addedLabel?: string;
    loadingMs?: number;
    resetMs?: number;
  } & ComponentPropsWithoutRef<"button">
>;

// Add-to-cart — morphs idle → loading → added, then settles back.
export const AddToCartButton = forwardRef<
  HTMLButtonElement,
  AddToCartButtonProps
>(
  (
    {
      className,
      label = "Add to cart",
      loadingLabel = "Adding",
      addedLabel = "Added to cart",
      loadingMs = 1200,
      resetMs = 1600,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [phase, setPhase] = useState<Phase>("idle");
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => {
      const timeoutIds = timers;
      return () => {
        timeoutIds.current.forEach((id) => globalThis.clearTimeout(id));
      };
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (phase !== "idle") return;
      setPhase("loading");
      timers.current.push(
        globalThis.setTimeout(() => setPhase("added"), loadingMs),
        globalThis.setTimeout(() => setPhase("idle"), loadingMs + resetMs),
      );
    };

    return (
      <button
        ref={ref}
        type="button"
        data-slot="add-to-cart-button"
        data-phase={phase}
        onClick={handleClick}
        disabled={phase !== "idle"}
        className={cn(
          "relative flex h-12 min-w-44 cursor-pointer items-center justify-center overflow-hidden rounded-xl px-6 font-sans text-sm font-semibold text-white transition-colors duration-300",
          phase === "added" ? "bg-emerald-500" : "bg-neutral-900",
          "disabled:cursor-default",
          className,
        )}
        {...props}
      >
        <span
          className={cn(
            "flex items-center gap-2 transition-all duration-300",
            phase === "idle"
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0",
          )}
        >
          <ShoppingBag size={15} strokeWidth={2} />
          {label}
        </span>

        <span
          className={cn(
            "absolute flex items-center gap-2 transition-all duration-300",
            phase === "loading"
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
          )}
        >
          <Loader2 size={15} strokeWidth={2.5} className="animate-spin" />
          {loadingLabel}
        </span>

        <span
          className={cn(
            "absolute flex items-center gap-2 transition-all duration-300",
            phase === "added"
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
          )}
        >
          <Check size={16} strokeWidth={2.5} />
          {addedLabel}
        </span>
      </button>
    );
  },
);

AddToCartButton.displayName = "AddToCartButton";
