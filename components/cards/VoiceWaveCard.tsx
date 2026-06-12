"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Pause } from "@/icons/Pause";
import { Play } from "@/icons/Play";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type VoiceWaveCardProps = {
  title?: string;
  duration?: string;
  recordedAt?: string;
  waveform?: number[];
  onPlayToggle?: (playing: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultWaveform = [
  12, 28, 45, 32, 58, 72, 48, 65, 38, 52, 70, 44, 60, 35, 50, 68, 42, 55, 30,
  48, 62, 40, 56, 74, 46, 33, 58, 41, 67, 50,
];

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export const VoiceWaveCard = forwardRef<HTMLDivElement, VoiceWaveCardProps>(
  (
    {
      className,
      title = "Design review notes",
      duration = "0:42",
      recordedAt = "Today, 2:14 PM",
      waveform = defaultWaveform,
      onPlayToggle,
      ...props
    },
    ref,
  ) => {
    const [playing, setPlaying] = useState(false);

    const handleToggle = () => {
      const next = !playing;
      setPlaying(next);
      onPlayToggle?.(next);
    };

    return (
      <div
        ref={ref}
        data-slot="voice-wave-card"
        className={cn(
          "w-full max-w-xs rounded-2xl bg-linear-to-br from-teal-950 via-neutral-900 to-black p-4 font-sans shadow-xl",
          className,
        )}
        {...props}
      >
        <div
          data-slot="voice-wave-card-header"
          className="mb-3 flex items-start justify-between gap-2"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{title}</p>
            <p className="text-[11px] text-teal-300/60">{recordedAt}</p>
          </div>
          <span className="shrink-0 rounded-full bg-teal-500/20 px-2 py-0.5 font-mono text-[10px] text-teal-300">
            {duration}
          </span>
        </div>

        <div
          data-slot="voice-wave-card-waveform"
          className="mb-4 flex h-14 items-end justify-center gap-[3px] px-1"
        >
          {waveform.map((height, index) => (
            <div
              key={index}
              className={cn(
                "w-[3px] min-w-[2px] flex-1 rounded-full bg-teal-400/80 transition-all duration-300",
                playing && index % 3 === 0 && "animate-pulse",
              )}
              style={{ height: `${Math.min(100, Math.max(8, height))}%` }}
            />
          ))}
        </div>

        <div
          data-slot="voice-wave-card-controls"
          className="flex items-center gap-3"
        >
          <button
            type="button"
            onClick={handleToggle}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-900 transition-transform active:scale-95"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className={cn(
                "h-full rounded-full bg-teal-400 transition-all",
                playing ? "w-[38%]" : "w-[0%]",
              )}
            />
          </div>
        </div>
      </div>
    );
  },
);

VoiceWaveCard.displayName = "VoiceWaveCard";
