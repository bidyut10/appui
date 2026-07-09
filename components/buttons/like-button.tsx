"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";
import { Heart } from "lucide-react";

const PARTICLES = [
  { x: 0, y: -22 },
  { x: 18, y: -14 },
  { x: 22, y: 4 },
  { x: 13, y: 20 },
  { x: -13, y: 20 },
  { x: -22, y: 4 },
  { x: -18, y: -14 },
];

type BurstProps = Readonly<{ color: string }>;

// Particles fly outward once on mount using a rAF-triggered transition.
function Burst({ color }: BurstProps) {
  const [out, setOut] = useState(false);

  useEffect(() => {
    const id = globalThis.requestAnimationFrame(() => setOut(true));
    return () => globalThis.cancelAnimationFrame(id);
  }, []);

  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="absolute top-1/2 left-1/2 size-1.5 rounded-full transition-all duration-500 ease-out"
          style={{
            backgroundColor: color,
            opacity: out ? 0 : 1,
            transform: out
              ? `translate(calc(-50% + ${particle.x}px), calc(-50% + ${particle.y}px)) scale(0.2)`
              : "translate(-50%, -50%) scale(1)",
          }}
        />
      ))}
    </span>
  );
}

export type LikeButtonProps = Readonly<
  {
    label?: string;
    likedLabel?: string;
    defaultLiked?: boolean;
    count?: number;
  } & ComponentPropsWithoutRef<"button">
>;

// Like — heart pops and scatters particles when toggled on.
export const LikeButton = forwardRef<HTMLButtonElement, LikeButtonProps>(
  (
    {
      className,
      label = "Like",
      likedLabel = "Liked",
      defaultLiked = false,
      count = 128,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [liked, setLiked] = useState(defaultLiked);
    const [burstKey, setBurstKey] = useState(0);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      setLiked((prev) => {
        if (!prev) setBurstKey((key) => key + 1);
        return !prev;
      });
    };

    const shown = count + (liked && !defaultLiked ? 1 : 0);

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={liked}
        data-slot="like-button"
        onClick={handleClick}
        className={cn(
          "inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border pr-4 pl-3 font-sans text-sm font-medium transition-colors duration-200 select-none",
          liked
            ? "border-rose-200 bg-rose-50 text-rose-600"
            : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300",
          className,
        )}
        {...props}
      >
        <span className="relative flex size-5 items-center justify-center">
          {liked && <Burst key={burstKey} color="#FB7185" />}
          <Heart
            size={16}
            strokeWidth={2}
            className={cn(
              "relative z-10 transition-transform duration-200 ease-out",
              liked ? "scale-110 text-rose-500" : "scale-100",
            )}
            fill={liked ? "#F43F5E" : "none"}
          />
        </span>

        <span className="tabular-nums">{shown.toLocaleString()}</span>
      </button>
    );
  },
);

LikeButton.displayName = "LikeButton";
