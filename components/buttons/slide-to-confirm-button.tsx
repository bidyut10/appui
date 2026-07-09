"use client";

import {
  forwardRef,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { cn } from "@/lib/cn";
import { ArrowRight, Check } from "lucide-react";

const PAD = 4;
const KNOB = 48;

export type SlideToConfirmButtonProps = Readonly<
  {
    label?: string;
    confirmedLabel?: string;
    onConfirm?: () => void;
  } & Omit<ComponentPropsWithoutRef<"div">, "onConfirm">
>;

// Slide-to-confirm — drag the knob across the track to commit an action.
export const SlideToConfirmButton = forwardRef<
  HTMLDivElement,
  SlideToConfirmButtonProps
>(
  (
    {
      className,
      label = "Slide to confirm",
      confirmedLabel = "Confirmed",
      onConfirm,
      ...props
    },
    ref,
  ) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const draggingRef = useRef(false);
    const [x, setX] = useState(0);
    const [confirmed, setConfirmed] = useState(false);

    const maxX = () => {
      const track = trackRef.current;
      if (!track) return 0;
      return track.offsetWidth - KNOB - PAD * 2;
    };

    const handleDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
      if (confirmed) return;
      draggingRef.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handleMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
      if (!draggingRef.current || confirmed) return;
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const next = Math.min(
        Math.max(event.clientX - rect.left - PAD - KNOB / 2, 0),
        maxX(),
      );
      setX(next);
    };

    const handleUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      if (x >= maxX() - 4) {
        setX(maxX());
        setConfirmed(true);
        onConfirm?.();
      } else {
        setX(0);
      }
    };

    const progress = maxX() > 0 ? x / maxX() : 0;

    return (
      <div
        ref={ref}
        data-slot="slide-to-confirm-button"
        className="font-sans select-none"
        {...props}
      >
        <div
          ref={trackRef}
          className={cn(
            "relative h-14 w-72 overflow-hidden rounded-full p-1 transition-colors duration-300",
            confirmed ? "bg-emerald-500" : "bg-neutral-100",
            className,
          )}
        >
          <span
            aria-hidden
            className={cn(
              "absolute inset-0 flex items-center justify-center text-sm font-medium transition-colors duration-200",
              confirmed ? "text-white" : "text-neutral-400",
            )}
            style={{ opacity: confirmed ? 1 : 1 - progress * 1.4 }}
          >
            {confirmed ? confirmedLabel : label}
          </span>

          <button
            type="button"
            aria-label={label}
            disabled={confirmed}
            onPointerDown={handleDown}
            onPointerMove={handleMove}
            onPointerUp={handleUp}
            onPointerCancel={handleUp}
            className={cn(
              "absolute top-1 left-1 flex size-12 touch-none items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm",
              confirmed ? "cursor-default" : "cursor-grab active:cursor-grabbing",
              draggingRef.current
                ? ""
                : "transition-transform duration-300 ease-out",
            )}
            style={{ transform: `translateX(${x}px)` }}
          >
            {confirmed ? (
              <Check size={18} strokeWidth={2.5} className="text-emerald-500" />
            ) : (
              <ArrowRight size={18} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>
    );
  },
);

SlideToConfirmButton.displayName = "SlideToConfirmButton";
