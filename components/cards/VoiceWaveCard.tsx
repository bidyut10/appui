"use client";

import {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Pause } from "@/icons/Pause";
import { Play } from "@/icons/Play";

/**
 * Voice wave audio card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type VoiceWaveCardProps = {
  title?: string;
  duration?: string;
  recordedAt?: string;
  waveform?: number[];
  onPlayToggle?: (playing: boolean) => void;
  onComplete?: () => void;
} & ComponentPropsWithoutRef<"div">;

const defaultWaveform = [
  12, 28, 45, 32, 58, 72, 48, 65, 38, 52, 70, 44, 60, 35, 50, 68, 42, 55, 30,
  48, 62, 40, 56, 74, 46, 33, 58, 41, 67, 50,
];

function parseDurationMs(duration: string): number {
  const parts = duration.split(":").map((part) => Number.parseInt(part, 10));
  if (parts.length === 2 && parts.every((n) => !Number.isNaN(n))) {
    return (parts[0] * 60 + parts[1]) * 1000;
  }
  return 42_000;
}

function formatElapsed(progress: number, totalMs: number): string {
  const elapsedSec = Math.floor((progress * totalMs) / 1000);
  const mins = Math.floor(elapsedSec / 60);
  const secs = elapsedSec % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export const VoiceWaveCard = forwardRef<HTMLDivElement, VoiceWaveCardProps>(
  (
    {
      className,
      title = "Design review notes",
      duration = "0:42",
      recordedAt = "Today, 2:14 PM",
      waveform = defaultWaveform,
      onPlayToggle,
      onComplete,
      ...props
    },
    ref,
  ) => {
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(0);
    const rafRef = useRef<number | null>(null);

    const durationMs = useMemo(() => parseDurationMs(duration), [duration]);
    const bars = useMemo(
      () => waveform.map((height) => Math.min(100, Math.max(10, height))),
      [waveform],
    );

    useEffect(() => {
      progressRef.current = progress;
    }, [progress]);

    useEffect(() => {
      if (!playing) return;

      let baseProgress = progressRef.current;
      if (baseProgress >= 1) {
        baseProgress = 0;
        progressRef.current = 0;
        setProgress(0);
      }

      const startTime = performance.now();

      const frame = () => {
        const elapsed = performance.now() - startTime;
        const next = baseProgress + elapsed / Math.max(durationMs, 1);

        if (next >= 1) {
          setProgress(1);
          progressRef.current = 1;
          setPlaying(false);
          onPlayToggle?.(false);
          onComplete?.();
          return;
        }

        setProgress(next);
        progressRef.current = next;
        rafRef.current = requestAnimationFrame(frame);
      };

      rafRef.current = requestAnimationFrame(frame);

      return () => {
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      };
    }, [playing, durationMs, onComplete, onPlayToggle]);

    const handleToggle = () => {
      if (playing) {
        setPlaying(false);
        onPlayToggle?.(false);
        return;
      }

      setPlaying(true);
      onPlayToggle?.(true);
    };

    const playheadIndex = Math.floor(progress * bars.length);
    const elapsedLabel = formatElapsed(progress, durationMs);

    return (
      <div
        ref={ref}
        data-slot="voice-wave-card"
        className={cn(
          "w-full max-w-xs rounded-2xl bg-linear-to-br from-teal-950 via-neutral-900 to-black p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <style>{`
          @keyframes voice-wave-eq {
            0%, 100% { transform: scaleY(0.35); opacity: 0.55; }
            50% { transform: scaleY(1); opacity: 1; }
          }
        `}</style>

        <div
          data-slot="voice-wave-card-header"
          className="mb-3 flex items-start justify-between gap-2"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{title}</p>
            <p className="text-[11px] text-teal-300/60">{recordedAt}</p>
          </div>
          <span className="shrink-0 rounded-full bg-teal-500/20 px-2 py-0.5 font-mono text-[10px] text-teal-300 tabular-nums">
            {playing || progress > 0 ? elapsedLabel : duration}
          </span>
        </div>

        <div
          data-slot="voice-wave-card-waveform"
          className="relative mb-4 flex h-14 items-end justify-center gap-[3px] px-1"
          aria-hidden
        >
          {bars.map((height, index) => {
            const isPlayed = index < playheadIndex;
            const isActive =
              playing &&
              (index === playheadIndex || index === playheadIndex - 1);

            return (
              <div
                key={index}
                className={cn(
                  "w-[3px] min-w-[2px] flex-1 origin-bottom rounded-full transition-colors duration-200",
                  isPlayed ? "bg-teal-300" : "bg-teal-400/35",
                  isActive && "bg-teal-200",
                )}
                style={{
                  height: `${height}%`,
                  animation: playing
                    ? `voice-wave-eq ${0.32 + (index % 5) * 0.07}s ease-in-out ${(index % 8) * 0.045}s infinite alternate`
                    : undefined,
                  transform: playing ? undefined : "scaleY(1)",
                }}
              />
            );
          })}
        </div>

        <div
          data-slot="voice-wave-card-controls"
          className="flex items-center gap-3"
        >
          <button
            type="button"
            onClick={handleToggle}
            className={cn(
              "flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-900 transition-transform active:scale-95",
              playing &&
                "ring-2 ring-teal-400/40 ring-offset-2 ring-offset-neutral-900",
            )}
            aria-label={playing ? "Pause" : "Play"}
            aria-pressed={playing}
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>

          <div className="min-w-0 flex-1">
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-teal-400"
                style={{ width: `${Math.min(100, progress * 100)}%` }}
              />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[9px] text-teal-300/50 tabular-nums">
              <span>{elapsedLabel}</span>
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

VoiceWaveCard.displayName = "VoiceWaveCard";
