"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Pause } from "@/icons/Pause";
import { Play } from "@/icons/Play";
import { Ellipsis } from "@/icons/Ellipsis";

import bgImage from "@/public/dbg.png";

const ITEMS = [
  { time: "22:30", tag: "Kindness", title: "Yoga with Juliette" },
  { time: "20:15", tag: "Focus", title: "It's My Life" },
  { time: "18:00", tag: "Calm", title: "Evening Walk" },
];

export type WellnessPlaylistWidgetProps = ComponentPropsWithoutRef<"div">;

export const WellnessPlaylistWidget = forwardRef<
  HTMLDivElement,
  WellnessPlaylistWidgetProps
>(({ className, ...props }, ref) => {
  const [active, setActive] = useState(1);
  const [playing, setPlaying] = useState(true);

  const handleTrackClick = (index: number) => {
    if (active === index) {
      setPlaying((prev) => !prev);
    } else {
      setActive(index);
      setPlaying(true);
    }
  };

  return (
    <div
      ref={ref}
      data-slot="wellness-playlist-widget"
      className={cn(
        "w-64 rounded-3xl border border-neutral-100 bg-white p-3 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {ITEMS.map((item, i) => (
        <button
          key={item.title}
          type="button"
          onClick={() => handleTrackClick(i)}
          className={cn(
            "flex w-full cursor-pointer items-center gap-3 rounded-2xl p-2 text-left transition-colors",
            active === i && "bg-neutral-50",
          )}
        >
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image src={bgImage} alt="" fill className="object-cover" sizes="40px" />
            {active === i && playing && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Pause size={12} className="text-white" />
              </span>
            )}
            {active === i && !playing && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                <Play size={12} className="text-white" />
              </span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] text-neutral-500">
              {item.time} · {item.tag}
            </p>
            <p className="truncate text-xs font-semibold text-neutral-900">{item.title}</p>
          </div>
          <Ellipsis size={14} className="shrink-0 text-neutral-400" />
        </button>
      ))}
    </div>
  );
});

WellnessPlaylistWidget.displayName = "WellnessPlaylistWidget";
