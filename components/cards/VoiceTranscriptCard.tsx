"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";
import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";
import { Sound } from "@/icons/Sound";

export type VoiceTranscriptCardProps = {
  title?: string;
  duration?: string;
  transcript?: string;
} & ComponentPropsWithoutRef<"div">;

export const VoiceTranscriptCard = forwardRef<
  HTMLDivElement,
  VoiceTranscriptCardProps
>(
  (
    {
      className,
      title = "Meeting notes",
      duration = "3:24",
      transcript = "Let's prioritize the folder UI, add AI search, and ship the voice transcript card by Friday.",
      ...props
    },
    ref,
  ) => {
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (!playing) return;
      const timer = window.setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setPlaying(false);
            return 100;
          }
          return p + 2;
        });
      }, 120);
      return () => window.clearInterval(timer);
    }, [playing]);

    return (
      <div
        ref={ref}
        data-slot="voice-transcript-card"
        className={cn(
          "w-64 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-3 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-900 text-white transition-transform hover:scale-105 active:scale-95"
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-neutral-900">
              {title}
            </p>
            <p className="text-[10px] text-neutral-400">
              {duration} · Voice memo
            </p>
          </div>
          <Sound size={16} className="text-neutral-400" />
        </div>

        <div className="mb-3 h-1 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-neutral-900 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="rounded-xl bg-neutral-50 p-3 text-[11px] leading-relaxed text-neutral-700">
          {transcript}
        </p>
      </div>
    );
  },
);

VoiceTranscriptCard.displayName = "VoiceTranscriptCard";
