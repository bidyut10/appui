import React, { forwardRef } from "react";
import { PlaneTakeoff } from "@/icons/PlaneTakeoff";
import { QrCode } from "@/icons/QrCode";

export const FlightBoardingCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-96 overflow-visible ${className}`} {...props}>
    <div className="relative overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-lg">
      <div className="absolute top-0 bottom-0 left-20 border-l border-dashed border-neutral-200" />

      <div className="grid grid-cols-[80px_1fr]">
        <div className="flex flex-col items-center justify-center gap-2 px-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow">
            <QrCode size={42} className="text-neutral-600" />
          </div>

          <span className="text-[9px] tracking-[0.25em] text-neutral-400 uppercase">
            Scan
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                Flight
              </p>

              <p className="mt-1 text-sm font-semibold text-neutral-900">
                AI 2847
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-medium text-emerald-600">
              On Time
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                CCU
              </h2>

              <p className="text-[10px] text-neutral-400">Kolkata</p>
            </div>

            <div className="mx-2 flex flex-1 flex-col items-center">
              <div className="relative w-full">
                <div className="border-t border-dashed border-neutral-300" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1.5">
                  <PlaneTakeoff size={11} className="text-neutral-500" />
                </div>
              </div>

              <span className="mt-1.5 text-[9px] text-neutral-500">2h 15m</span>
            </div>

            <div className="text-right">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                DEL
              </h2>

              <p className="text-[10px] text-neutral-400">Delhi</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-700">
              Seat 14A
            </span>

            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-700">
              Gate B12
            </span>

            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-700">
              14:00
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
            <div>
              <p className="text-[10px] text-neutral-400">Passenger</p>

              <p className="mt-1 text-sm font-medium text-neutral-900">
                John Doe
              </p>
            </div>

            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-600">
              T2
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
));

FlightBoardingCard.displayName = "FlightBoardingCard";
