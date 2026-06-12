import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { MapPinned } from "@/icons/MapPinned";
import { Check } from "@/icons/Check";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type CourierTrackingStep = {
  label: string;
  time?: string;
  completed: boolean;
  active?: boolean;
};

export type CourierTrackingCardProps = {
  trackingId?: string;
  carrier?: string;
  eta?: string;
  destination?: string;
  steps?: CourierTrackingStep[];
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultSteps: CourierTrackingStep[] = [
  { label: "Order placed", time: "Jun 4", completed: true },
  { label: "Packed at warehouse", time: "Jun 5", completed: true },
  { label: "In transit", time: "Jun 6", completed: true, active: true },
  { label: "Out for delivery", completed: false },
  { label: "Delivered", completed: false },
];

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export const CourierTrackingCard = forwardRef<
  HTMLDivElement,
  CourierTrackingCardProps
>(
  (
    {
      className,
      trackingId = "TRK-8F2K91",
      carrier = "BlueDart Express",
      eta = "Arriving tomorrow by 6 PM",
      destination = "Park Street, Kolkata",
      steps = defaultSteps,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="courier-tracking-card"
      className={cn(
        "w-full max-w-xs rounded-2xl border border-sky-100 bg-white p-4 font-sans shadow-lg shadow-sky-50 sm:p-5",
        className,
      )}
      {...props}
    >
      <div
        data-slot="courier-tracking-card-header"
        className="mb-4 flex items-start justify-between gap-2"
      >
        <div className="min-w-0">
          <p className="text-[11px] font-semibold text-sky-600">{carrier}</p>
          <p className="font-mono text-[10px] text-neutral-400">{trackingId}</p>
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          <MapPinned size={16} />
        </div>
      </div>

      <div data-slot="courier-tracking-card-eta" className="mb-4">
        <p className="text-sm font-bold text-neutral-900">{eta}</p>
        <p className="mt-0.5 truncate text-xs text-neutral-500">{destination}</p>
      </div>

      <div data-slot="courier-tracking-card-steps" className="space-y-0">
        {steps.map((step, index) => (
          <div key={step.label} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold",
                  step.completed
                    ? step.active
                      ? "bg-sky-500 text-white ring-4 ring-sky-100"
                      : "bg-sky-500 text-white"
                    : "border-2 border-neutral-200 bg-white text-neutral-300",
                )}
              >
                {step.completed ? <Check size={10} /> : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "my-0.5 w-0.5 flex-1 min-h-4",
                    step.completed ? "bg-sky-200" : "bg-neutral-100",
                  )}
                />
              )}
            </div>
            <div className="min-w-0 pb-3">
              <p
                className={cn(
                  "text-[13px] leading-tight",
                  step.active
                    ? "font-semibold text-sky-700"
                    : step.completed
                      ? "font-medium text-neutral-800"
                      : "text-neutral-400",
                )}
              >
                {step.label}
              </p>
              {step.time && (
                <p className="text-[10px] text-neutral-400">{step.time}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
);

CourierTrackingCard.displayName = "CourierTrackingCard";
