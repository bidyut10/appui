"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";
import { Camera } from "@/icons/Camera";

export type CameraRecordingWidgetProps = {
  label?: string;
} & ComponentPropsWithoutRef<"div">;

export const CameraRecordingWidget = forwardRef<
  HTMLDivElement,
  CameraRecordingWidgetProps
>(({ className, label = "Camera Recording", ...props }, ref) => {
  const [recording, setRecording] = useState(true);
  const [elapsed, setElapsed] = useState(2060);

  useEffect(() => {
    if (!recording) return;
    const timer = window.setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => window.clearInterval(timer);
  }, [recording]);

  const fmt = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, "0")}.${String(m).padStart(2, "0")}.${String(sec).padStart(2, "0")}`;
  };

  return (
    <div
      ref={ref}
      data-slot="camera-recording-widget"
      className={cn(
        "flex h-44 w-44 flex-col justify-between rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-white">
        <Camera size={16} />
      </div>

      <div>
        <p className="text-sm font-semibold text-neutral-900">{label}</p>
        <p className="font-mono text-lg font-bold text-neutral-900">
          {fmt(elapsed)}
        </p>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setRecording(!recording)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500"
        >
          <span className="h-3.5 w-3.5 rounded-sm bg-white" />
        </button>
      </div>
    </div>
  );
});

CameraRecordingWidget.displayName = "CameraRecordingWidget";
