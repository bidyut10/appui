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
      <div className="rounded-2xl border-2 border-dashed border-neutral-200 p-3 transition-colors hover:border-neutral-300">
        <div className="mb-3 grid grid-cols-3 gap-2">
          {files.map((f) => (
            <div
              key={f.id}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image src={f.src} alt={f.name} fill className="object-cover" />
              <button
                onClick={() => setFiles((p) => p.filter((x) => x.id !== f.id))}
                className="absolute top-1 right-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                <X size={10} />
              </button>
            </div>
          ))}
          <button className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-neutral-200 text-neutral-400 transition-all hover:border-neutral-300 hover:bg-neutral-50/30 hover:text-neutral-500">
            <span className="text-lg leading-none">+</span>
            <span className="mt-0.5 text-[8px]">Add</span>
          </button>
        </div>
        <p className="text-center text-[10px] text-neutral-400">
          {files.length} of 6 files · Drop more here
        </p>
      </div>
    </div>
  );
};
