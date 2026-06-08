"use client";

import React, { forwardRef, useState } from "react";
import { Location } from "@/icons/Location";
import { Plus } from "@/icons/Plus";
import { Minus } from "@/icons/Minus";
import { Play } from "@/icons/Play";
import { Bike } from "@/icons/Bike";
import { Car } from "@/icons/Car";
import { Train } from "@/icons/Train";

export const AppleMapsCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  const [mode, setMode] = useState("drive");

  const routeData = {
    drive: {
      time: "12 min",
      distance: "4.2 km",
    },
    bike: {
      time: "18 min",
      distance: "4.0 km",
    },
    transit: {
      time: "24 min",
      distance: "5.1 km",
    },
  };

  return (
    <div
      ref={ref}
      className={`w-72 overflow-hidden rounded-[1.25rem] bg-white font-sans shadow-xl shadow-black/10 ${className}`}
      {...props}
    >
      <div className="relative h-44 overflow-hidden bg-[#f4f3ef]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 288 176">
          <rect width="288" height="176" fill="#f4f3ef" />

          <path
            d="M-20 35 C50 10 130 60 320 25"
            stroke="#ffffff"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M10 175 C80 120 160 105 320 140"
            stroke="#ffffff"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M210 -20 C180 40 150 90 120 190"
            stroke="#ffffff"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M70 0 L95 176"
            stroke="#ececec"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M250 0 L225 176"
            stroke="#ececec"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M-20 125 C40 95 100 115 170 95 S280 110 320 85"
            stroke="#8fd3ff"
            strokeWidth="14"
            fill="none"
            opacity="0.65"
            strokeLinecap="round"
          />

          <path
            d="M30,130 Q80,95 120,105 T210,80 T260,55"
            fill="none"
            stroke="#007AFF"
            strokeWidth="10"
            opacity="0.15"
            strokeLinecap="round"
          />

          <path
            d="M30,130 Q80,95 120,105 T210,80 T260,55"
            fill="none"
            stroke="#007AFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="absolute bottom-[52px] left-7">
          <div className="h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-md" />
        </div>

        <div className="absolute top-[46px] right-6">
          <div className="h-4 w-4 rounded-full border-2 border-white bg-red-500 shadow-md" />
        </div>

        <div className="absolute top-8 left-12 rounded-lg bg-white/90 px-2.5 py-1 shadow-md backdrop-blur-xl">
          <span className="text-[9px] font-medium text-neutral-600">
            Victoria Memorial
          </span>
        </div>

        <div className="absolute right-10 bottom-16 rounded-lg bg-white/90 px-2.5 py-1 shadow-md backdrop-blur-xl">
          <span className="text-[9px] font-medium text-neutral-600">
            Howrah Bridge
          </span>
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-white/90 shadow-md backdrop-blur-xl">
            <Plus size={12} />
          </button>

          <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-white/90 shadow-md backdrop-blur-xl">
            <Minus size={12} />
          </button>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-2xl bg-white/90 px-3 py-2 shadow-md backdrop-blur-xl">
          <Location size={11} className="text-[#007AFF]" />
          <span className="text-[11px] font-medium text-neutral-800">
            Park Street
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h4 className="text-[15px] font-semibold text-neutral-900">
              Kolkata → Howrah
            </h4>

            <p className="mt-0.5 text-[13px] text-neutral-500">
              {routeData[mode as keyof typeof routeData].time} ·{" "}
              {routeData[mode as keyof typeof routeData].distance}
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-600">
                Fastest Route
              </span>

              <span className="text-[10px] text-neutral-400">
                Arrive 5:42 PM
              </span>
            </div>
          </div>

          <button className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#007AFF] text-white shadow-lg shadow-blue-300/40">
            <Play size={13} />
          </button>
        </div>

        <div className="flex rounded-2xl bg-neutral-100 p-1">
          <button
            onClick={() => setMode("drive")}
            className={`flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-xl py-2 transition-all ${
              mode === "drive"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-500"
            }`}
          >
            <Car size={15} />
            <span className="text-[10px] font-medium">Drive</span>
          </button>

          <button
            onClick={() => setMode("bike")}
            className={`flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-xl py-2 transition-all ${
              mode === "bike"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-500"
            }`}
          >
            <Bike size={15} />
            <span className="text-[10px] font-medium">Bike</span>
          </button>

          <button
            onClick={() => setMode("transit")}
            className={`flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-xl py-2 transition-all ${
              mode === "transit"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-500"
            }`}
          >
            <Train size={15} />
            <span className="text-[10px] font-medium">Transit</span>
          </button>
        </div>
      </div>
    </div>
  );
});

AppleMapsCard.displayName = "AppleMapsCard";
