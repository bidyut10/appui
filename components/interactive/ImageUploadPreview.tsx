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
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={() => setPreview(true)} />
      {preview ? (
        <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm group">
          <div className="relative h-44">
            <Image src={previewImg} alt="Preview" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            <button onClick={() => setPreview(false)} className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <X size={12} />
            </button>
          </div>
          <div className="p-3 bg-white flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-neutral-900">profile-photo.jpg</p>
              <p className="text-[10px] text-neutral-400">1.2 MB · 1920×1080</p>
            </div>
            <button onClick={() => inputRef.current?.click()} className="text-[10px] font-medium text-violet-600 hover:underline cursor-pointer">Replace</button>
          </div>
        </div>
      ) : (
        <div onClick={() => inputRef.current?.click()} className="h-44 border-2 border-dashed border-neutral-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-violet-300 hover:bg-violet-50/30 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center mb-2">
            <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1.5} className="text-neutral-400"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          </div>
          <p className="text-xs font-medium text-neutral-600">Upload image</p>
          <p className="text-[10px] text-neutral-400 mt-0.5">PNG, JPG up to 5MB</p>
        </div>
      )}
    </div>
  );
};
