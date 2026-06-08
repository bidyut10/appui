"use client";

import { useState } from "react";
import Image from "next/image";
import img1 from "@/public/dbg.png";
import img2 from "@/public/bh.png";
import img3 from "@/public/bg.png";
import { ChevronLeft } from "@/icons/ChevronLeft";
import { ChevronRight } from "@/icons/ChevronRight";

const slides = [img1, img2, img3];

export const ImageCarouselCard = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={slides[current]}
          alt="Slide"
          fill
          className="object-cover transition-opacity duration-500"
        />

        <button
          onClick={() =>
            setCurrent((c) => (c - 1 + slides.length) % slides.length)
          }
          className="absolute top-1/2 left-2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-neutral-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="absolute top-1/2 right-2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-neutral-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          <ChevronRight size={16} />
        </button>

        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 cursor-pointer rounded-full transition-all ${
                i === current ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              Coastal Views
            </h3>

            <p className="mt-1 text-xs text-neutral-400">
              Beautiful landscapes
            </p>
          </div>

          <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
            {current + 1}/{slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};
