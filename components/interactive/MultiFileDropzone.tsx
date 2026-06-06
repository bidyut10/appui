"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/boy.png";
import img2 from "@/public/dithar.png";
import { X } from "@/icons/X";

const initial = [
  { id: 1, src: img1, name: "avatar.png" },
  { id: 2, src: img2, name: "cover.jpg" },
];

export const MultiFileDropzone = () => {
  const [files, setFiles] = useState(initial);

  return (
    <div className="w-72 font-sans">
      <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-3 hover:border-neutral-300 transition-colors">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {files.map((f) => (
            <div key={f.id} className="relative aspect-square rounded-xl overflow-hidden group">
              <Image src={f.src} alt={f.name} fill className="object-cover" />
              <button onClick={() => setFiles((p) => p.filter((x) => x.id !== f.id))} className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <X size={10} />
              </button>
            </div>
          ))}
          <button className="aspect-square rounded-xl border-2 border-dashed border-neutral-200 flex flex-col items-center justify-center text-neutral-400 hover:border-neutral-300 hover:text-neutral-500 hover:bg-neutral-50/30 transition-all cursor-pointer">
            <span className="text-lg leading-none">+</span>
            <span className="text-[8px] mt-0.5">Add</span>
          </button>
        </div>
        <p className="text-[10px] text-neutral-400 text-center">{files.length} of 6 files · Drop more here</p>
      </div>
    </div>
  );
};
