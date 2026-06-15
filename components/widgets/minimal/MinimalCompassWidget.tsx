"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

const CX = 88;
const CY = 84;
const R = 56;
const TICK_COUNT = 60;

/** Stable SVG coords — avoids SSR/client float precision hydration mismatches. */
function svgCoord(value: number) {
  return Number(value.toFixed(2));
}

type DeviceOrientationWithCompass = DeviceOrientationEvent & {
  webkitCompassHeading?: number;
};

function normalizeHeading(degrees: number) {
  return ((degrees % 360) + 360) % 360;
}

function readHeading(event: DeviceOrientationEvent): number | null {
  const e = event as DeviceOrientationWithCompass;

  if (typeof e.webkitCompassHeading === "number" && !Number.isNaN(e.webkitCompassHeading)) {
    return normalizeHeading(e.webkitCompassHeading);
  }

  if (event.absolute && event.alpha != null && !Number.isNaN(event.alpha)) {
    return normalizeHeading(360 - event.alpha);
  }

  if (event.alpha != null && !Number.isNaN(event.alpha)) {
    return normalizeHeading(360 - event.alpha);
  }

  return null;
}

function needsOrientationPermission() {
  return (
    typeof window !== "undefined" &&
    typeof DeviceOrientationEvent !== "undefined" &&
    "requestPermission" in DeviceOrientationEvent
  );
}

/** Violet peeking mascot — inspired by compass buddy, distinct shape & expression. */
function PeekingMascot() {
  return (
    <g aria-hidden>
      <circle cx="88" cy="142" r="58" fill="#7C6CF0" />
      <circle cx="68" cy="122" r="5" fill="white" />
      <circle cx="108" cy="122" r="5" fill="white" />
      <circle cx="69" cy="123" r="2.2" fill="#1C1C1E" />
      <circle cx="109" cy="123" r="2.2" fill="#1C1C1E" />
      <path
        d="M76 138 Q88 146 100 138"
        stroke="white"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

function CompassFace() {
  const labels = [
    { text: "N", deg: 0 },
    { text: "E", deg: 90 },
    { text: "S", deg: 180 },
    { text: "W", deg: 270 },
  ];

  return (
    <g aria-hidden>
      {Array.from({ length: TICK_COUNT }, (_, i) => {
        const deg = i * (360 / TICK_COUNT);
        const rad = ((deg - 90) * Math.PI) / 180;
        const major = deg % 90 === 0;
        const inner = R - (major ? 8 : 5);
        const outer = R - 1;
        return (
          <line
            key={deg}
            x1={svgCoord(CX + inner * Math.cos(rad))}
            y1={svgCoord(CY + inner * Math.sin(rad))}
            x2={svgCoord(CX + outer * Math.cos(rad))}
            y2={svgCoord(CY + outer * Math.sin(rad))}
            stroke="white"
            strokeWidth={major ? 1.6 : 1}
            strokeLinecap="round"
            opacity={major ? 0.95 : 0.45}
          />
        );
      })}

      {labels.map(({ text, deg }) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        const lr = R + 10;
        return (
          <text
            key={text}
            x={svgCoord(CX + lr * Math.cos(rad))}
            y={svgCoord(CY + lr * Math.sin(rad))}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="11"
            fontWeight="600"
            fontFamily='-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
          >
            {text}
          </text>
        );
      })}
    </g>
  );
}

export type MinimalCompassWidgetProps = {
  /** Fallback heading in degrees when sensors are unavailable. */
  heading?: number;
} & ComponentPropsWithoutRef<"div">;

export const MinimalCompassWidget = forwardRef<
  HTMLDivElement,
  MinimalCompassWidgetProps
>(({ className, heading: fallbackHeading = 0, ...props }, ref) => {
  const [heading, setHeading] = useState(normalizeHeading(fallbackHeading));
  const [active, setActive] = useState(false);
  const [needsPermission, setNeedsPermission] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const listeningRef = useRef(false);

  const onOrientation = useCallback((event: DeviceOrientationEvent) => {
    const next = readHeading(event);
    if (next != null) {
      setHeading(next);
      setActive(true);
    }
  }, []);

  const startListening = useCallback(() => {
    if (listeningRef.current) return;
    window.addEventListener("deviceorientationabsolute", onOrientation, true);
    window.addEventListener("deviceorientation", onOrientation, true);
    listeningRef.current = true;
  }, [onOrientation]);

  const stopListening = useCallback(() => {
    if (!listeningRef.current) return;
    window.removeEventListener("deviceorientationabsolute", onOrientation, true);
    window.removeEventListener("deviceorientation", onOrientation, true);
    listeningRef.current = false;
  }, [onOrientation]);

  const enableCompass = useCallback(async () => {
    if (needsOrientationPermission()) {
      try {
        const requestPermission = (
          DeviceOrientationEvent as typeof DeviceOrientationEvent & {
            requestPermission?: () => Promise<PermissionState>;
          }
        ).requestPermission;

        if (!requestPermission) return;

        const result = await requestPermission();
        if (result !== "granted") {
          setPermissionDenied(true);
          return;
        }
      } catch {
        setPermissionDenied(true);
        return;
      }
    }

    setNeedsPermission(false);
    setPermissionDenied(false);
    startListening();
  }, [startListening]);

  useEffect(() => {
    if (needsOrientationPermission()) {
      setNeedsPermission(true);
      return stopListening;
    }

    startListening();
    return stopListening;
  }, [startListening, stopListening]);

  const showTapHint = needsPermission && !permissionDenied;

  return (
    <div
      ref={ref}
      data-slot="minimal-compass-widget"
      role={showTapHint ? "button" : undefined}
      tabIndex={showTapHint ? 0 : undefined}
      onClick={showTapHint ? enableCompass : undefined}
      onKeyDown={
        showTapHint
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                void enableCompass();
              }
            }
          : undefined
      }
      className={cn(
        "relative h-44 w-44 max-w-full overflow-hidden rounded-[1.75rem] bg-black font-sans shadow-lg",
        showTapHint && "cursor-pointer",
        className,
      )}
      {...props}
    >
      <svg
        viewBox="0 0 176 176"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <rect width="176" height="176" fill="#000000" />
        <PeekingMascot />
        <g transform={`rotate(${-heading} ${CX} ${CY})`}>
          <CompassFace />
        </g>
      </svg>

      {active && (
        <span
          aria-hidden
          className="absolute top-3.5 right-3.5 h-1.5 w-1.5 rounded-full bg-[#34C759]/50"
        />
      )}

      {showTapHint && (
        <div className="absolute inset-0 flex items-end justify-center bg-black/50 pb-3">
          <p className="text-[10px] font-medium text-white/70">Tap to enable</p>
        </div>
      )}

      {permissionDenied && (
        <div className="absolute inset-0 flex items-end justify-center bg-black/50 pb-3">
          <p className="text-[10px] font-medium text-white/40">Access denied</p>
        </div>
      )}
    </div>
  );
});

MinimalCompassWidget.displayName = "MinimalCompassWidget";
