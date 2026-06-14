"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

import { Pause } from "@/icons/Pause";
import { Play } from "@/icons/Play";

/**
 * Focus timer card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo timer settings and callbacks
 * with your own focus session logic.
 */
export type FocusTimerCardProps = {
  title?: string;
  defaultMinutes?: number;
  phase?: string;
  onComplete?: () => void;
  onToggle?: (running: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

export const FocusTimerCard = forwardRef<HTMLDivElement, FocusTimerCardProps>(
  (
    {
      className,
      title = "Deep Work",
      defaultMinutes = 25,
      phase = "Focus session",
      onComplete,
      onToggle,
      ...props
    },
    ref,
  ) => {
    const totalSeconds = defaultMinutes * 60;
    const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
    const [running, setRunning] = useState(false);

    useEffect(() => {
      if (!running || secondsLeft <= 0) return;
      const id = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            setRunning(false);
            onComplete?.();
            return 0;
          }
          return s - 1;
        });
      }, 1000);
      return () => clearInterval(id);
    }, [running, secondsLeft, onComplete]);

    const progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100;
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;

    const handleToggle = () => {
      const next = !running;
      setRunning(next);
      onToggle?.(next);
    };

    return (
      <div
        ref={ref}
        data-slot="focus-timer-card"
        className={cn(
          "w-xs rounded-3xl bg-neutral-950 p-5 font-sans shadow-xl sm:p-6",
          className,
        )}
        {...props}
      >
        <div data-slot="focus-timer-card-header" className="mb-4 text-center">
          <p className="text-[11px] font-semibold tracking-widest text-emerald-400 uppercase">
            {phase}
          </p>
          <h4 className="mt-0.5 text-base font-bold text-white">{title}</h4>
        </div>

        <div
          data-slot="focus-timer-card-ring"
          className="relative mx-auto mb-5 h-36 w-36 sm:h-40 sm:w-40"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#1f2937"
              strokeWidth="6"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#34d399"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 42}
              strokeDashoffset={
                2 * Math.PI * 42 - (progress / 100) * 2 * Math.PI * 42
              }
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-mono text-3xl font-light tracking-tight text-white sm:text-4xl">
              {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
            </p>
            <p className="mt-0.5 text-[10px] text-neutral-500">remaining</p>
          </div>
        </div>

        <div
          data-slot="focus-timer-card-controls"
          className="flex justify-center gap-3"
        >
          <button
            type="button"
            onClick={handleToggle}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-emerald-500 text-neutral-950 transition-transform active:scale-95"
            aria-label={running ? "Pause" : "Start"}
          >
            {running ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
      </div>
    );
  },
);

FocusTimerCard.displayName = "FocusTimerCard";
