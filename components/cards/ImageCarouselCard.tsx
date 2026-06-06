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
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
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
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-neutral-700 hover:bg-white transition-colors cursor-pointer shadow-sm"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-neutral-700 hover:bg-white transition-colors cursor-pointer shadow-sm"
        >
          <ChevronRight size={16} />
        </button>

        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === current ? "bg-white w-5" : "bg-white/50 w-1.5"
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

            <p className="text-xs text-neutral-400 mt-1">
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
