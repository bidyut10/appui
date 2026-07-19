"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

const CX = 88;
const CY = 84;
const R = 56;
const TICK_COUNT = 60;

const CARDINAL_LABELS = [
  { text: "N", deg: 0 },
  { text: "E", deg: 90 },
  { text: "S", deg: 180 },
  { text: "W", deg: 270 },
] as const;

// Rounds SVG numbers so server and client render identical coordinates
function svgCoord(value: number) {
  return Number(value.toFixed(2));
}

type DeviceOrientationWithCompass = DeviceOrientationEvent & {
  webkitCompassHeading?: number;
};

// Keeps heading within 0–359°
function normalizeHeading(degrees: number) {
  return ((degrees % 360) + 360) % 360;
}

// Reads compass heading from iOS webkit or standard deviceorientation APIs
function readHeading(event: DeviceOrientationEvent): number | null {
  const e = event as DeviceOrientationWithCompass;

  if (
    typeof e.webkitCompassHeading === "number" &&
    !Number.isNaN(e.webkitCompassHeading)
  ) {
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

// iOS Safari requires an explicit permission prompt before orientation events fire
function needsOrientationPermission() {
  return (
    globalThis.DeviceOrientationEvent !== undefined &&
    "requestPermission" in globalThis.DeviceOrientationEvent
  );
}

// Client-only snapshot — false on the server to avoid hydration mismatches
function useRequiresOrientationPrompt() {
  return useSyncExternalStore(
    () => () => {},
    () => needsOrientationPermission(),
    () => false,
  );
}

// Violet mascot peeking from the bottom of the dial
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

// Tick ring and N/E/S/W labels — rotated as a group to match device heading
function CompassFace() {
  return (
    <g aria-hidden>
      {Array.from({ length: TICK_COUNT }, (_, tick) => {
        const deg = tick * (360 / TICK_COUNT);
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

      {CARDINAL_LABELS.map(({ text, deg }) => {
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

// heading — fallback degrees when device sensors are unavailable
export type CompassWidgetProps = Readonly<
  {
    heading?: number;
  } & ComponentPropsWithoutRef<"div">
>;

export const CompassWidget = forwardRef<HTMLDivElement, CompassWidgetProps>(
  ({ className, heading: fallbackHeading = 0, ...props }, ref) => {
    const requiresPrompt = useRequiresOrientationPrompt();
    const [heading, setHeading] = useState(normalizeHeading(fallbackHeading));
    const [active, setActive] = useState(false);
    // True once the user grants iOS permission or when no prompt is required
    const [promptDismissed, setPromptDismissed] = useState(false);
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
      globalThis.addEventListener(
        "deviceorientationabsolute",
        onOrientation,
        true,
      );
      globalThis.addEventListener("deviceorientation", onOrientation, true);
      listeningRef.current = true;
    }, [onOrientation]);

    const stopListening = useCallback(() => {
      if (listeningRef.current) {
        globalThis.removeEventListener(
          "deviceorientationabsolute",
          onOrientation,
          true,
        );
        globalThis.removeEventListener(
          "deviceorientation",
          onOrientation,
          true,
        );
        listeningRef.current = false;
      }
    }, [onOrientation]);

    const enableCompass = useCallback(async () => {
      if (requiresPrompt) {
        try {
          const requestPermission = (
            DeviceOrientationEvent as typeof DeviceOrientationEvent & {
              requestPermission?: () => Promise<PermissionState>;
            }
          ).requestPermission;

          if (!requestPermission) return;

          const result = await requestPermission();
          if (result === "granted") {
            setPromptDismissed(true);
            setPermissionDenied(false);
            return;
          }

          setPermissionDenied(true);
          return;
        } catch {
          setPermissionDenied(true);
          return;
        }
      }

      setPromptDismissed(true);
      setPermissionDenied(false);
    }, [requiresPrompt]);

    // Subscribe to orientation events once permission is not blocking
    useEffect(() => {
      if (requiresPrompt && !promptDismissed) {
        return stopListening;
      }

      startListening();
      return stopListening;
    }, [requiresPrompt, promptDismissed, startListening, stopListening]);

    const showTapHint = requiresPrompt && !promptDismissed && !permissionDenied;

    return (
      <div
        ref={ref}
        data-slot="minimal-compass-widget"
        className={cn(
          "relative h-44 w-44 max-w-full overflow-hidden rounded-[1.75rem] bg-black font-sans shadow-lg shadow-black/5 select-none",
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
          <button
            type="button"
            aria-label="Enable compass"
            onClick={() => void enableCompass()}
            className="absolute inset-0 flex cursor-pointer items-end justify-center border-0 bg-black/50 p-0 pb-3 font-sans"
          >
            <span className="text-[10px] font-medium text-white/70">
              Tap to enable
            </span>
          </button>
        )}

        {permissionDenied && (
          <output className="absolute inset-0 flex items-end justify-center border-0 bg-black/50 pb-3 font-sans">
            <span className="text-[10px] font-medium text-white/40">
              Access denied
            </span>
          </output>
        )}
      </div>
    );
  },
);

CompassWidget.displayName = "CompassWidget";
