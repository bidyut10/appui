import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { PlaneTakeoff } from "@/icons/PlaneTakeoff";

/**
 * Flight boarding pass card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo flight information with your own data.
 * Supports custom airports, passenger details, flight status,
 * boarding time, seat number, gate, terminal, and duration.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type FlightBoardingCardProps = {
  flightNumber?: string;
  status?: string;

  departureCode?: string;
  departureCity?: string;

  arrivalCode?: string;
  arrivalCity?: string;

  duration?: string;

  seat?: string;
  gate?: string;
  boardingTime?: string;

  passengerName?: string;
  terminal?: string;
} & ComponentPropsWithoutRef<"div">;

export const FlightBoardingCard = forwardRef<
  HTMLDivElement,
  FlightBoardingCardProps
>(
  (
    {
      className,

      flightNumber = "AI 2847",
      status = "On Time",

      departureCode = "CCU",
      departureCity = "Kolkata",

      arrivalCode = "DEL",
      arrivalCity = "Delhi",

      duration = "2h 15m",

      seat = "14A",
      gate = "B12",
      boardingTime = "14:00",

      passengerName = "John Doe",
      terminal = "T2",

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="flight-boarding-card"
      className={cn("w-96 overflow-visible", className)}
      {...props}
    >
      <div
        data-slot="flight-boarding-card-container"
        className="relative overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-lg"
      >
        {/* Ticket Divider */}
        <div
          data-slot="flight-boarding-card-divider"
          className="absolute top-0 bottom-0 left-20 border-l border-dashed border-neutral-200"
        />

        <div
          data-slot="flight-boarding-card-layout"
          className="grid grid-cols-[80px_1fr]"
        >
          {/* Scan Area */}
          <div
            data-slot="flight-boarding-card-scan"
            className="flex flex-col items-center justify-center gap-2 px-8"
          >
            <span className="text-[9px] tracking-[0.25em] text-neutral-400 uppercase">
              Scan
            </span>
          </div>

          {/* Main Content */}
          <div data-slot="flight-boarding-card-content" className="p-4">
                        <div
              data-slot="flight-boarding-card-header"
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                  Flight
                </p>

                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  {flightNumber}
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-medium text-emerald-600">
                {status}
              </span>
            </div>

            {/* Route */}
            <div
              data-slot="flight-boarding-card-route"
              className="mt-4 flex items-center justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                  {departureCode}
                </h2>

                <p className="text-[10px] text-neutral-400">{departureCity}</p>
              </div>

              <div className="mx-2 flex flex-1 flex-col items-center">
                <div className="relative w-full">
                  <div className="border-t border-dashed border-neutral-300" />

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1.5">
                    <PlaneTakeoff size={11} className="text-neutral-500" />
                  </div>
                </div>

                <span className="mt-1.5 text-[9px] text-neutral-500">
                  {duration}
                </span>
              </div>

              <div className="text-right">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                  {arrivalCode}
                </h2>

                <p className="text-[10px] text-neutral-400">{arrivalCity}</p>
              </div>
            </div>

            {/* Flight Details */}
            <div
              data-slot="flight-boarding-card-details"
              className="mt-4 flex flex-wrap gap-1.5"
            >
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-700">
                Seat {seat}
              </span>

              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-700">
                Gate {gate}
              </span>

              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-700">
                {boardingTime}
              </span>
            </div>

            {/* Passenger */}
            <div
              data-slot="flight-boarding-card-footer"
              className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3"
            >
              <div>
                <p className="text-[10px] text-neutral-400">Passenger</p>

                <p className="mt-1 text-sm font-medium text-neutral-900">
                  {passengerName}
                </p>
              </div>

              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-600">
                {terminal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
);

FlightBoardingCard.displayName = "FlightBoardingCard";
