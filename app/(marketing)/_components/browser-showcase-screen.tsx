"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

const CURSOR_SPOTS = [
  { left: 16, top: 10 },
  { left: 52, top: 24 },
  { left: 78, top: 48 },
  { left: 38, top: 68 },
  { left: 62, top: 82 },
] as const;

const PHASES = [
  {
    id: "loading",
    label: "Loading layout",
    cards: 3,
    showHero: false,
    showNav: false,
    list: false,
  },
  {
    id: "partial",
    label: "Loading content",
    cards: 3,
    showHero: true,
    showNav: true,
    list: false,
  },
  {
    id: "cards",
    label: "Loading cards",
    cards: 2,
    showHero: true,
    showNav: true,
    list: false,
  },
  {
    id: "list",
    label: "Loading list",
    cards: 4,
    showHero: true,
    showNav: true,
    list: true,
  },
] as const;

function SkeletonBar({
  className,
  pulse = true,
}: Readonly<{ className?: string; pulse?: boolean }>) {
  return (
    <div
      className={cn(
        "rounded-md bg-neutral-200",
        pulse && "animate-pulse motion-reduce:animate-none",
        className,
      )}
    />
  );
}

function CursorPointer() {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      aria-hidden
      className="drop-shadow-sm"
    >
      <path
        d="M1 1V14L5 10L8 16L10 15L7 9H12L1 1Z"
        fill="black"
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function BrowserShowcaseScreen() {
  const reducedMotion = usePrefersReducedMotion();
  const [cursorIndex, setCursorIndex] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);

  const phase = PHASES[phaseIndex];
  const cursor = CURSOR_SPOTS[cursorIndex];

  useEffect(() => {
    if (reducedMotion) return;

    const interval = globalThis.setInterval(() => {
      setCursorIndex((current) => (current + 1) % CURSOR_SPOTS.length);
    }, 2200);

    return () => globalThis.clearInterval(interval);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = globalThis.setInterval(() => {
      setPhaseIndex((current) => (current + 1) % PHASES.length);
    }, 3200);

    return () => globalThis.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-neutral-50 font-sans">
      <div className="flex h-full flex-col px-4 py-3">
        <div className="flex items-center justify-between">
          {phase.showNav ? (
            <div className="flex items-center gap-2">
              <div className="size-5 rounded-md bg-neutral-900" />
              <SkeletonBar className="h-2 w-14" pulse={false} />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <SkeletonBar className="size-5 rounded-md" />
              <SkeletonBar className="h-2 w-14" />
            </div>
          )}
          <div className="flex gap-1.5">
            <SkeletonBar className="h-2 w-8" pulse={!phase.showNav} />
            <SkeletonBar className="h-2 w-8" pulse={!phase.showNav} />
            <SkeletonBar className="h-2 w-8" pulse={!phase.showNav} />
          </div>
        </div>

        <div className="mt-5">
          {phase.showHero ? (
            <div className="transition-opacity duration-500 motion-reduce:transition-none">
              <div className="h-3 w-32 rounded-md bg-neutral-900" />
              <SkeletonBar className="mt-2 h-2 w-48" />
            </div>
          ) : (
            <div>
              <SkeletonBar className="h-3 w-32" />
              <SkeletonBar className="mt-2 h-2 w-48" />
            </div>
          )}
        </div>

        <div
          className={cn(
            "mt-5 flex-1 transition-all duration-500 motion-reduce:transition-none",
            phase.list ? "flex flex-col gap-2" : "grid grid-cols-3 gap-2",
          )}
        >
          {phase.list
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`row-${index}`}
                  className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-white p-2"
                >
                  <SkeletonBar className="size-6 shrink-0 rounded-md" />
                  <div className="flex-1 space-y-1.5">
                    <SkeletonBar className="h-1.5 w-3/4" />
                    <SkeletonBar className="h-1.5 w-1/2" />
                  </div>
                </div>
              ))
            : Array.from({ length: phase.cards }).map((_, index) => (
                <div
                  key={`card-${phase.id}-${index}`}
                  className="rounded-lg border border-neutral-100 bg-white p-2 transition-opacity duration-500 motion-reduce:transition-none"
                >
                  <SkeletonBar className="aspect-4/3 w-full rounded-md" />
                  <SkeletonBar className="mt-2 h-1.5 w-3/4" />
                  <SkeletonBar className="mt-1 h-1.5 w-1/2" />
                </div>
              ))}
        </div>

        <p className="mt-3 text-center text-[8px] font-medium tracking-wide text-neutral-400 uppercase">
          {phase.label}
        </p>
      </div>

      <div
        className="pointer-events-none absolute z-20 transition-all duration-700 ease-out motion-reduce:transition-none"
        style={{
          left: `${cursor.left}%`,
          top: `${cursor.top}%`,
        }}
        aria-hidden
      >
        <CursorPointer />
      </div>
    </div>
  );
}
