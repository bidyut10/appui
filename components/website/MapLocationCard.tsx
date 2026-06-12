"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Location } from "@/icons/Location";
import { Phone } from "@/icons/Phone";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type MapLocationCardProps = {
  title?: string;

  address?: string;

  directionsLabel?: string;

  callLabel?: string;

  onDirectionsClick?: () => void;

  onCallClick?: () => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Map Location Card                             */
/* -------------------------------------------------------------------------- */

export const MapLocationCard = forwardRef<HTMLDivElement, MapLocationCardProps>(
  (
    {
      className,

      title = "AppUI Headquarters",

      address = "42 Park Street, Kolkata, WB 700016",

      directionsLabel = "Get Directions",

      callLabel = "Call",

      onDirectionsClick,

      onCallClick,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="map-location-card"
      className={cn(
        "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* ---------------------------------------------------------------------- */}
      {/* Map Preview                                                            */}
      {/* ---------------------------------------------------------------------- */}

      <div
        data-slot="map-location-card-map"
        className="relative h-36 bg-neutral-50/50"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 19px, #d4d4d4 19px, #d4d4d4 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #d4d4d4 19px, #d4d4d4 20px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
          <div
            data-slot="map-location-card-pin"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-500 shadow-lg"
          >
            <Location size={14} className="text-white" />
          </div>

          <div className="mx-auto mt-0.5 h-2 w-2 rounded-full bg-red-500/30 blur-sm" />
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Content                                                                */}
      {/* ---------------------------------------------------------------------- */}

      <div data-slot="map-location-card-content" className="p-4">
        <h4
          data-slot="map-location-card-title"
          className="text-sm font-semibold text-neutral-900"
        >
          {title}
        </h4>

        <p
          data-slot="map-location-card-address"
          className="mt-0.5 flex items-center gap-1 text-[11px] text-neutral-500"
        >
          <Location size={10} />
          {address}
        </p>

        {/* ------------------------------------------------------------------ */}
        {/* Actions                                                            */}
        {/* ------------------------------------------------------------------ */}

        <div data-slot="map-location-card-actions" className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={onDirectionsClick}
            data-slot="map-location-card-directions"
            className="h-8 flex-1 cursor-pointer rounded-lg bg-neutral-900 text-[11px] font-medium text-white transition-colors hover:bg-neutral-950"
          >
            {directionsLabel}
          </button>

          <button
            type="button"
            onClick={onCallClick}
            data-slot="map-location-card-call"
            className="flex h-8 cursor-pointer items-center justify-center gap-1 rounded-lg border border-neutral-200 px-3 text-[11px] font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
          >
            <Phone size={12} />
            {callLabel}
          </button>
        </div>
      </div>
    </div>
  ),
);

MapLocationCard.displayName = "MapLocationCard";
