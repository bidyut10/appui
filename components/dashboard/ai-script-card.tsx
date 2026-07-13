"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { Clock3, Pause, Play, Sparkles } from "lucide-react";

import { cn } from "@/lib/cn";

export type AiScriptCardProps = Readonly<
  {
    title?: string;
    duration?: string;
    body?: string;
    currentTime?: string;
    totalTime?: string;
    waveform?: readonly number[];
    onEdit?: () => void;
    onRegenerate?: () => void;
    onTogglePlayback?: (playing: boolean) => void;
  } & ComponentPropsWithoutRef<"article">
>;

const DEFAULT_WAVE = [
  2, 4, 6, 3, 7, 5, 8, 4, 6, 9, 5, 7, 4, 8, 6, 5, 7, 9, 4, 6, 8, 5, 7, 6,
] as const;

function barHeightClass(value: number): string {
  const index = Math.min(4, Math.max(0, Math.round(value / 2)));
  return ["h-1", "h-2", "h-3", "h-4", "h-5"][index];
}

// AI script card — generated script with playback controls and waveform.
export const AiScriptCard = forwardRef<HTMLElement, AiScriptCardProps>(
  (
    {
      className,
      title = "Track",
      duration = "1:38",
      body = "Corporate AI helps you hire smarter by instantly analyzing resumes, scoring candidates, and delivering clear, data-driven insights—so you can focus on the best talent",
      currentTime = "00:00",
      totalTime = "01:20",
      waveform = DEFAULT_WAVE,
      onEdit,
      onRegenerate,
      onTogglePlayback,
      ...props
    },
    ref,
  ) => {
    const [playing, setPlaying] = useState(false);

    const togglePlayback = () => {
      setPlaying((value) => {
        const next = !value;
        onTogglePlayback?.(next);
        return next;
      });
    };

    return (
      <article
        ref={ref}
        data-slot="ai-script-card"
        className={cn(
          "w-md max-w-full rounded-3xl border border-neutral-100 bg-white p-5 font-sans shadow-lg shadow-black/5",
          className,
        )}
        {...props}
      >
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles size={15} aria-hidden className="text-neutral-700" />
            <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
            <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
              <Clock3 size={11} aria-hidden />
              {duration}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onEdit}
              className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={onRegenerate}
              className="rounded-full bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
            >
              Regenerate
            </button>
          </div>
        </header>

        <p className="mt-4 text-sm leading-relaxed text-neutral-600">{body}</p>

        <div className="mt-5 flex items-center gap-3">
          <button
            type="button"
            aria-label={playing ? "Pause script" : "Play script"}
            onClick={togglePlayback}
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-800 transition-colors hover:bg-neutral-200"
          >
            {playing ? (
              <Pause size={14} aria-hidden fill="currentColor" />
            ) : (
              <Play size={14} aria-hidden className="ml-0.5" fill="currentColor" />
            )}
          </button>

          <div className="flex h-8 flex-1 items-center gap-0.5 overflow-hidden">
            {waveform.map((height, index) => (
              <span
                key={`script-wave-${index}`}
                aria-hidden
                className={cn(
                  "w-0.5 shrink-0 rounded-full bg-lime-300",
                  barHeightClass(height),
                )}
              />
            ))}
          </div>

          <span className="shrink-0 text-[11px] text-neutral-400 tabular-nums">
            {currentTime} / {totalTime}
          </span>
        </div>
      </article>
    );
  },
);

AiScriptCard.displayName = "AiScriptCard";
