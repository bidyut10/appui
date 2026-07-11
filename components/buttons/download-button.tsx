"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";
import { Check, Download } from "lucide-react";

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

// Download — horizontal fill sweeps across while downloading, then shows done.
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
    const [progress, setProgress] = useState(0);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef(0);

    useEffect(() => {
      const timeoutIds = timers;
      return () => {
        timeoutIds.current.forEach((id) => globalThis.clearTimeout(id));
        if (rafRef.current !== null) globalThis.cancelAnimationFrame(rafRef.current);
      };
    }, []);

    const stopRaf = () => {
      if (rafRef.current !== null) {
        globalThis.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const startDownload = () => {
      setPhase("downloading");
      setProgress(0);
      startRef.current = performance.now();
      onDownload?.();

      const tick = (now: number) => {
        const next = Math.min(1, (now - startRef.current) / downloadMs);
        setProgress(next);
        if (next >= 1) {
          stopRaf();
          setPhase("done");
          timers.current.push(
            globalThis.setTimeout(() => {
              setPhase("idle");
              setProgress(0);
            }, resetMs),
          );
          return;
        }
        rafRef.current = globalThis.requestAnimationFrame(tick);
      };
      rafRef.current = globalThis.requestAnimationFrame(tick);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (phase !== "idle") return;
      startDownload();
    };

    return (
      <button
        ref={ref}
        type="button"
        data-slot="download-button"
        data-phase={phase}
        onClick={handleClick}
        disabled={phase !== "idle"}
        className={cn(
          "relative h-11 min-w-40 cursor-pointer overflow-hidden rounded-xl border px-4 font-sans text-sm font-semibold transition-colors duration-300 disabled:cursor-default",
          phase === "done"
            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
            : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-300",
          className,
        )}
        {...props}
      >
        {phase === "downloading" && (
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 bg-sky-100 transition-[width] duration-75 ease-linear"
            style={{ width: `${progress * 100}%` }}
          />
        )}

        <span className="relative z-10 flex items-center justify-center gap-2">
          {phase === "done" ? (
            <>
              <Check size={15} strokeWidth={2.5} />
              {doneLabel}
            </>
          ) : (
            <>
              <Download size={15} strokeWidth={2} />
              {label}
            </>
          )}
        </span>
      </button>
    );
  },
);

DownloadButton.displayName = "DownloadButton";
