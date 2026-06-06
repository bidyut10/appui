"use client";
import React, { useEffect, useRef, useState } from "react";
import { File } from "@/icons/File";
import { Check } from "@/icons/Check";

export const FileUploadZone = () => {
  const [dragging, setDragging] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (uploaded) {
      const t = setTimeout(() => setUploaded(false), 2500);
      return () => clearTimeout(t);
    }
  }, [uploaded]);

  return (
    <div className="w-64 font-sans">
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={() => setUploaded(true)}
      />

      {uploaded ? (
        <div className="h-44 flex flex-col items-center justify-center border-2 border-neutral-50 bg-neutral-400/50 rounded-2xl">
          <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-3">
            <Check size={20} className="text-neutral-800" />
          </div>
          <p className="text-sm font-medium text-neutral-800">Upload complete!</p>
          <p className="text-[11px] text-neutral-800 mt-1">design-system-v2.fig</p>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            setUploaded(true);
          }}
          onClick={() => inputRef.current?.click()}
          className={`
            h-44 flex flex-col items-center justify-center border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300
            ${
              dragging
                ? "border-neutral-400 bg-neutral-50 scale-[1.02]"
                : "border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 hover:bg-neutral-50"
            }
          `}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${dragging ? "bg-neutral-100" : "bg-neutral-100"}`}
          >
            <File
              size={20}
              className={dragging ? "text-neutral-600" : "text-neutral-400"}
            />
          </div>
          <p className="text-sm font-medium text-neutral-700">
            {dragging ? "Drop to upload" : "Drag & drop files"}
          </p>
          <p className="text-[11px] text-neutral-400 mt-1">
            or <span className="text-neutral-600 font-medium">browse</span> ·
            Max 10MB
          </p>
        </div>
      )}

      <div className="flex items-center gap-2 mt-3 px-1">
        {["PNG", "SVG", "PDF", "FIG"].map((type) => (
          <span
            key={type}
            className="px-2 py-0.5 bg-neutral-100 text-[9px] font-mono text-neutral-500 rounded-md"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
