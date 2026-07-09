"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { Leaf, Bike } from "lucide-react";

export type ElectricScooterWidgetProps = Readonly<
  {
    title?: string;
    date?: string;
    distance?: string;
    avgSpeed?: string;
    duration?: string;
    image?: string;
  } & ComponentPropsWithoutRef<"div">
>;

// Production-ready Electric Scooter component — styled with Tailwind CSS.
export const ElectricScooterWidget = forwardRef<
  HTMLDivElement,
  ElectricScooterWidgetProps
>(
  (
    {
      className,
      title = "Electric Scooter",
      date = "12 Aug 2024",
      distance = "3.2km",
      avgSpeed = "18.4km/h",
      duration = "22 min",
      image = "/scooter.png",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="electric-scooter-widget"
      className={cn(
        "flex w-72 items-stretch gap-3 rounded-3xl border border-neutral-100 bg-white p-3 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-neutral-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-2"
          sizes="96px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-neutral-900">{title}</p>
            <p className="text-[10px] text-neutral-500">{date}</p>
          </div>
          <Leaf size={14} className="text-emerald-500" aria-hidden />
        </div>

        <div className="grid grid-cols-3 gap-1 border-t border-neutral-100 pt-2">
          <div>
            <p className="text-[9px] text-neutral-400">Distance</p>
            <p className="text-[10px] font-semibold">{distance}</p>
          </div>
          <div>
            <p className="text-[9px] text-neutral-400">Avg speed</p>
            <p className="text-[10px] font-semibold">{avgSpeed}</p>
          </div>
          <div>
            <p className="text-[9px] text-neutral-400">Duration</p>
            <p className="flex items-center gap-0.5 text-[10px] font-semibold">
              <Bike size={8} />
              {duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
);

ElectricScooterWidget.displayName = "ElectricScooterWidget";
