"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { Car } from "@/icons/Car";

export type RidePickupWidgetProps = {
  eta?: string;
  message?: string;
  vehicle?: string;
  image?: string;
} & ComponentPropsWithoutRef<"div">;

export const RidePickupWidget = forwardRef<
  HTMLDivElement,
  RidePickupWidgetProps
>(
  (
    {
      className,
      eta = "2 min",
      message = "Meet at the pickup point",
      vehicle = "Mercedes-Benz S00121",
      image = "/dbg.png",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="ride-pickup-widget"
      className={cn(
        "flex h-52 w-44 flex-col rounded-3xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-4 pt-4">
        <span className="text-xs font-bold tracking-wide text-neutral-900">
          Uber
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">
          {eta}
        </span>
      </div>

      <div className="relative mx-auto my-2 h-20 w-32">
        <Image
          src={image}
          alt={vehicle}
          fill
          className="object-contain"
          sizes="128px"
        />
      </div>

      <div className="mt-auto rounded-b-3xl bg-neutral-50 px-4 py-3">
        <p className="text-[11px] font-semibold text-neutral-900">{message}</p>
        <p className="flex items-center gap-1 text-[10px] text-neutral-500">
          <Car size={10} />
          {vehicle}
        </p>
      </div>
    </div>
  ),
);

RidePickupWidget.displayName = "RidePickupWidget";
