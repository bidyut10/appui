"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { Play } from "@/icons/Play";
import { Pause } from "@/icons/Pause";


export type WellnessChatAudioWidgetProps = ComponentPropsWithoutRef<"div">;

export const WellnessChatAudioWidget = forwardRef<
  HTMLDivElement,
  WellnessChatAudioWidgetProps
>(({ className, ...props }, ref) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      ref={ref}
      data-slot="wellness-chat-audio-widget"
      className={cn(
        "w-64 space-y-3 rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-[#D9F26D] px-3 py-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              aria-label={
                playing ? "Pause voice message" : "Play voice message"
              }
              className="flex cursor-pointer items-center justify-center rounded-full bg-neutral-900/10 p-1 transition-transform active:scale-95"
            >
              {playing ? <Pause size={12} /> : <Play size={12} />}
            </button>
            <div className="flex h-4 items-end gap-px">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "w-0.5 rounded-full bg-neutral-800 transition-all",
                    playing && "animate-pulse",
                  )}
                  style={{ height: `${30 + (i % 5) * 12}%` }}
                />
              ))}
            </div>
            <span className="text-[10px] font-medium">0:46</span>
          </div>
        </div>
      </div>

      <div className="flex items-end gap-2">
        <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
          <Image
            src="/dbg.png"
            alt=""
            fill
            className="object-cover"
            sizes="28px"
          />
        </div>
        <p className="rounded-2xl rounded-bl-sm bg-neutral-100 px-3 py-2 text-xs text-neutral-800">
          Hey Nataliya!
        </p>
      </div>

      <div className="flex items-center gap-2 pl-9">
        <div className="relative h-6 w-6 overflow-hidden rounded-full">
          <Image
            src="/dbg.png"
            alt=""
            fill
            className="object-cover"
            sizes="24px"
          />
        </div>
        <p className="text-[11px] text-neutral-400">Jennifer is typing...</p>
      </div>
    </div>
  );
});

WellnessChatAudioWidget.displayName = "WellnessChatAudioWidget";
