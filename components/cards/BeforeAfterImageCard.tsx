"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import beforeImg from "@/public/dbg.png";
import afterImg from "@/public/bh.png";

/**
 * Before/after image comparison card with a draggable slider.
 *
 * Replace the demo images and labels with your own content.
 */
export type BeforeAfterImageCardProps = {
  title?: string;
  description?: string;
  beforeImage?: StaticImageData | string;
  afterImage?: StaticImageData | string;
  beforeLabel?: string;
  afterLabel?: string;
  defaultPosition?: number;
  onPositionChange?: (position: number) => void;
} & ComponentPropsWithoutRef<"div">;

export const BeforeAfterImageCard = forwardRef<
  HTMLDivElement,
  BeforeAfterImageCardProps
>(
  (
    {
      className,
      title = "Photo Enhancement",
      description = "Drag slider to compare original vs edited",
      beforeImage = beforeImg,
      afterImage = afterImg,
      beforeLabel = "Before",
      afterLabel = "After",
      defaultPosition = 50,
      onPositionChange,
      ...props
    },
    ref,
  ) => {
    const [position, setPosition] = useState(defaultPosition);
    const [dragging, setDragging] = useState(false);
    const frameRef = useRef<HTMLDivElement>(null);

    const updatePosition = useCallback(
      (clientX: number) => {
        const frame = frameRef.current;
        if (!frame) return;

        const rect = frame.getBoundingClientRect();
        const next = ((clientX - rect.left) / rect.width) * 100;
        const clamped = Math.min(100, Math.max(0, next));
        setPosition(clamped);
        onPositionChange?.(clamped);
      },
      [onPositionChange],
    );

    useEffect(() => {
      if (!dragging) return;

      const onMove = (event: PointerEvent) => updatePosition(event.clientX);
      const onUp = () => setDragging(false);

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);

      return () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };
    }, [dragging, updatePosition]);

    const handlePointerDown = (event: ReactPointerEvent) => {
      event.preventDefault();
      setDragging(true);
      updatePosition(event.clientX);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setPosition((prev) => Math.max(0, prev - 4));
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setPosition((prev) => Math.min(100, prev + 4));
      }
    };

    return (
      <div
        ref={ref}
        data-slot="before-after-card"
        className={cn(
          "group w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div
          ref={frameRef}
          data-slot="before-after-card-frame"
          className="relative h-44 cursor-ew-resize overflow-hidden select-none"
          onPointerDown={handlePointerDown}
        >
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="288px"
            className="object-cover"
            draggable={false}
          />

          <div
            className="absolute inset-0 overflow-hidden border-r-2 border-white"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              sizes="288px"
              className="object-cover grayscale"
              draggable={false}
            />
          </div>

          <div
            role="slider"
            tabIndex={0}
            aria-label="Compare before and after"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            onKeyDown={handleKeyDown}
            className={cn(
              "absolute top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform",
              dragging ? "scale-110 ring-4 ring-white/40" : "group-hover:scale-105",
            )}
            style={{ left: `${position}%` }}
          >
            <div className="flex gap-0.5">
              <div className="h-3 w-0.5 rounded-full bg-neutral-400" />
              <div className="h-3 w-0.5 rounded-full bg-neutral-400" />
            </div>
          </div>

          <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-black/60 px-2 pt-1 pb-0.5 font-mono text-[9px] text-white backdrop-blur-sm">
            {beforeLabel}
          </span>
          <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-black/60 px-2 pt-1 pb-0.5 font-mono text-[9px] text-white backdrop-blur-sm">
            {afterLabel}
          </span>
        </div>

        <div className="p-4">
          <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
          <p className="mt-1 text-[11px] text-neutral-500">{description}</p>
        </div>
      </div>
    );
  },
);

BeforeAfterImageCard.displayName = "BeforeAfterImageCard";
