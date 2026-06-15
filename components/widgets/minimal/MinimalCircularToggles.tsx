"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
} from "react";

import { cn } from "@/lib/cn";
import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";

const ACCENT = "#FF453A";
const MASCOT = "#6CA8FF";

function formatTime(ms: number) {
  const s = Math.floor(ms / 1000);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function RecordMascot({ recording }: { recording: boolean }) {
  return (
    <g aria-hidden>
      <circle cx="88" cy="142" r="58" fill={MASCOT} />
      <circle cx="68" cy="122" r="5" fill="white" />
      <circle cx="108" cy="122" r="5" fill="white" />
      <circle cx="69" cy="123" r="2.2" fill="#1C1C1E" />
      <circle cx="109" cy="123" r="2.2" fill="#1C1C1E" />
      {recording ? (
        <ellipse cx="88" cy="139" rx="5" ry="4" fill="white" />
      ) : (
        <path
          d="M76 138 Q88 146 100 138"
          stroke="white"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
      )}
    </g>
  );
}

export type MinimalRecordButtonProps = ComponentPropsWithoutRef<"button">;

/** Recorder widget — black dial, mascot, play/pause top-right, live timer. */
export const MinimalRecordButton = forwardRef<
  HTMLButtonElement,
  MinimalRecordButtonProps
>(({ className, onClick, ...props }, ref) => {
  const [recording, setRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(0);
  const baseRef = useRef(0);

  useEffect(() => {
    if (!recording) return;
    startRef.current = performance.now();
    let frame = 0;
    const tick = () => {
      setElapsed(baseRef.current + performance.now() - startRef.current);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [recording]);

  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    if (recording) {
      baseRef.current += performance.now() - startRef.current;
      setElapsed(baseRef.current);
      setRecording(false);
    } else {
      baseRef.current = 0;
      setElapsed(0);
      setRecording(true);
    }
    onClick?.(e);
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={toggle}
      aria-pressed={recording}
      aria-label={recording ? "Pause recording" : "Start recording"}
      data-slot="minimal-record-button"
      className={cn(
        "relative h-44 w-44 max-w-full cursor-pointer overflow-hidden rounded-[1.75rem] bg-black font-sans shadow-lg",
        className,
      )}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", sans-serif',
      }}
      {...props}
    >
      <svg viewBox="0 0 176 176" className="absolute inset-0 h-full w-full" aria-hidden>
        <rect width="176" height="176" fill="#000" />
        <RecordMascot recording={recording} />
        <circle
          cx="88"
          cy="84"
          r="56"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.35"
        />
      </svg>

      <span className="absolute top-3.5 right-3.5 z-10" aria-hidden>
        {recording ? (
          <Pause size={14} color={ACCENT} />
        ) : (
          <Play size={14} color="white" />
        )}
      </span>

      <p
        className={cn(
          "relative z-10 flex h-full items-center justify-center pb-10 text-[26px] font-extralight tracking-[-0.04em] tabular-nums leading-none",
          recording ? "text-white" : "text-white/40",
        )}
      >
        {formatTime(elapsed)}
      </p>
    </button>
  );
});

MinimalRecordButton.displayName = "MinimalRecordButton";
