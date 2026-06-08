"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import previewImg from "@/public/dithar.png";
import { X } from "@/icons/X";

export const ImageUploadPreview = () => {
  const [preview, setPreview] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-72 font-sans">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={() => setPreview(true)}
      />
      {preview ? (
        <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 shadow-lg">
          <div className="relative h-44">
            <Image
              src={previewImg}
              alt="Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            <button
              onClick={() => setPreview(false)}
              className="absolute top-2 right-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
            >
              <X size={12} />
            </button>
          </div>
          <div className="flex items-center justify-between bg-white p-3">
            <div>
              <p className="text-xs font-medium text-neutral-900">
                profile-photo.jpg
              </p>
              <p className="text-[10px] text-neutral-400">1.2 MB · 1920×1080</p>
            </div>
            <button
              onClick={() => inputRef.current?.click()}
              className="cursor-pointer text-[10px] font-medium text-neutral-600 hover:underline"
            >
              Replace
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-neutral-200 transition-all hover:border-neutral-300 hover:bg-neutral-50/30"
        >
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">
            <svg
              viewBox="0 0 24 24"
              width={20}
              height={20}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="text-neutral-400"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          <p className="text-xs font-medium text-neutral-600">Upload image</p>
          <p className="mt-0.5 text-[10px] text-neutral-400">
            PNG, JPG up to 5MB
          </p>
        </div>
      )}
    </div>
  );
};
