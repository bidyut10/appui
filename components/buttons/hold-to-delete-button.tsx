"use client";

import {
  forwardRef,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";
import { Check, Trash2 } from "lucide-react";

export type HoldToDeleteButtonProps = Readonly<
  {
    label?: string;
    doneLabel?: string;
    holdMs?: number;
    onHoldComplete?: () => void;
  } & Omit<ComponentPropsWithoutRef<"button">, "onHoldComplete">
>;

// Hold-to-delete — press and hold; a fill sweeps across, release early to cancel.
export const HoldToDeleteButton = forwardRef<
  HTMLButtonElement,
  HoldToDeleteButtonProps
>(
  (
    {
      className,
      label = "Hold to delete",
      doneLabel = "Deleted",
      holdMs = 1100,
      onHoldComplete,
      ...props
    },
    ref,
  ) => {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef(0);

    const stop = () => {
      if (rafRef.current !== null) {
        globalThis.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const next = Math.min(1, elapsed / holdMs);
      setProgress(next);
      if (next >= 1) {
        stop();
        setDone(true);
        onHoldComplete?.();
        return;
      }
      rafRef.current = globalThis.requestAnimationFrame(tick);
    };

    const start = () => {
      if (done) return;
      startRef.current = performance.now();
      rafRef.current = globalThis.requestAnimationFrame(tick);
    };

    const cancel = () => {
      if (done) return;
      stop();
      setProgress(0);
    };

    return (
      <button
        ref={ref}
        type="button"
        data-slot="hold-to-delete-button"
        aria-label={label}
        onPointerDown={start}
        onPointerUp={cancel}
        onPointerLeave={cancel}
        onPointerCancel={cancel}
        disabled={done}
        className={cn(
          "relative h-12 w-56 touch-none overflow-hidden rounded-xl font-sans text-sm font-medium select-none",
          "ring-1 transition-colors duration-300",
          done
            ? "bg-neutral-900 text-white ring-neutral-900"
            : "cursor-pointer bg-white text-rose-600 ring-rose-200",
          className,
        )}
        {...props}
      >
        {!done && (
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 bg-rose-500"
            style={{ width: `${progress * 100}%` }}
          />
        )}

        <span
          className={cn(
            "relative z-10 flex items-center justify-center gap-2",
            !done && progress > 0.5 ? "text-white" : "",
          )}
        >
          {done ? (
            <>
              <Check size={15} strokeWidth={2.5} />
              {doneLabel}
            </>
          ) : (
            <>
              <Trash2 size={15} strokeWidth={2} />
              {label}
            </>
          )}
        </span>
      </button>
    );
  },
);

HoldToDeleteButton.displayName = "HoldToDeleteButton";
