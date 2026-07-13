"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";
import { ArrowDownToLine, Check, Loader2 } from "lucide-react";

type Phase = "idle" | "downloading" | "done";

export type DownloadButtonProps = Readonly<
  {
    label?: string;
    doneLabel?: string;
    downloadMs?: number;
    resetMs?: number;
    onDownload?: () => void;
  } & Omit<ComponentPropsWithoutRef<"button">, "onDownload">
>;

const WASH_MOTION =
  "transition-opacity duration-700 ease-in-out motion-reduce:transition-none";

const ICON_MOTION =
  "transition-[opacity,color] duration-500 ease-in-out motion-reduce:transition-none";

// Download — layered washes crossfade from neutral to emerald; spinner while loading.
export const DownloadButton = forwardRef<HTMLButtonElement, DownloadButtonProps>(
  (
    {
      className,
      label = "Download",
      doneLabel = "Downloaded",
      downloadMs = 1400,
      resetMs = 1800,
      onDownload,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [phase, setPhase] = useState<Phase>("idle");
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      return () => {
        if (timerRef.current !== null) globalThis.clearTimeout(timerRef.current);
      };
    }, []);

    const clearTimer = () => {
      if (timerRef.current !== null) {
        globalThis.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const schedule = (fn: () => void, ms: number) => {
      clearTimer();
      timerRef.current = globalThis.setTimeout(fn, ms);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (phase !== "idle") return;

      setPhase("downloading");
      onDownload?.();

      schedule(() => {
        setPhase("done");
        schedule(() => setPhase("idle"), resetMs);
      }, downloadMs);
    };

    const idle = phase === "idle";
    const downloading = phase === "downloading";
    const done = phase === "done";

    return (
      <button
        ref={ref}
        type="button"
        data-slot="download-button"
        data-phase={phase}
        aria-busy={downloading}
        onClick={handleClick}
        className={cn(
          "relative inline-flex h-10 min-w-36 cursor-pointer items-center gap-2.5 overflow-hidden rounded-lg bg-white px-3.5 font-sans text-sm font-medium shadow-sm outline-none select-none",
          "transition-colors duration-200 ease-out motion-reduce:transition-none",
          idle && "text-neutral-700 hover:text-neutral-900",
          downloading && "text-neutral-800",
          done && "text-emerald-800",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
          className,
        )}
        {...props}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-neutral-100",
            WASH_MOTION,
            downloading ? "opacity-100" : "opacity-0",
          )}
        />
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-emerald-50",
            WASH_MOTION,
            done ? "opacity-100" : "opacity-0",
          )}
        />
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-emerald-100/40",
            WASH_MOTION,
            done ? "opacity-100" : "opacity-0",
          )}
        />

        <span
          className={cn(
            "relative z-10 flex size-6 shrink-0 items-center justify-center",
            ICON_MOTION,
            idle && "text-neutral-500",
            downloading && "text-neutral-700",
            done && "text-emerald-700",
          )}
        >
          <span className="relative size-3.5 shrink-0">
            <ArrowDownToLine
              size={14}
              strokeWidth={2}
              aria-hidden
              className={cn(
                "absolute inset-0",
                ICON_MOTION,
                idle ? "opacity-100" : "opacity-0",
              )}
            />
            <span
              aria-hidden
              className={cn(
                "absolute inset-0 grid place-items-center",
                ICON_MOTION,
                downloading ? "opacity-100" : "opacity-0",
              )}
            >
              <Loader2
                size={14}
                strokeWidth={2}
                className="motion-reduce:animate-none animate-spin"
              />
            </span>
            <Check
              size={14}
              strokeWidth={2.5}
              aria-hidden
              className={cn(
                "absolute inset-0",
                ICON_MOTION,
                done ? "opacity-100" : "opacity-0",
              )}
            />
          </span>
        </span>

        <span className="relative z-10 tabular-nums">{done ? doneLabel : label}</span>
      </button>
    );
  },
);

DownloadButton.displayName = "DownloadButton";
