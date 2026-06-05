"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/dbg.png";
import img2 from "@/public/bh.png";
import img3 from "@/public/bg.png";

const slides = [img1, img2, img3];

export const ImageCarouselCard = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
      <div className="relative h-44 overflow-hidden">
        <Image src={slides[current]} alt="Slide" fill className="object-cover transition-opacity duration-500" />
        <button onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-neutral-700 hover:bg-white transition-colors cursor-pointer shadow-sm">
          ‹
        </button>
        <button onClick={() => setCurrent((c) => (c + 1) % slides.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-neutral-700 hover:bg-white transition-colors cursor-pointer shadow-sm">
          ›
        </button>
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${i === current ? "bg-white w-4" : "bg-white/50"}`} />
          ))}
        </div>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-neutral-900">Coastal Views</h3>
          <p className="text-[11px] text-neutral-400 mt-0.5">{current + 1} of {slides.length}</p>
        </div>
        <span className="text-[10px] font-mono text-neutral-400">← → navigate</span>
      </div>
    </div>
  );
};
