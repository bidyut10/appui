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
        <div className="flex h-44 flex-col items-center justify-center rounded-2xl border-2 border-neutral-50 bg-neutral-400/50">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-black/10">
            <Check size={20} className="text-neutral-800" />
          </div>
          <p className="text-sm font-medium text-neutral-800">
            Upload complete!
          </p>
          <p className="mt-1 text-[11px] text-neutral-800">
            design-system-v2.fig
          </p>
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
          className={`flex h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 ${
            dragging
              ? "scale-[1.02] border-neutral-400 bg-neutral-50"
              : "border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 hover:bg-neutral-50"
          } `}
        >
          <div
            className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${dragging ? "bg-neutral-100" : "bg-neutral-100"}`}
          >
            <File
              size={20}
              className={dragging ? "text-neutral-600" : "text-neutral-400"}
            />
          </div>
          <p className="text-sm font-medium text-neutral-700">
            {dragging ? "Drop to upload" : "Drag & drop files"}
          </p>
          <p className="mt-1 text-[11px] text-neutral-400">
            or <span className="font-medium text-neutral-600">browse</span> ·
            Max 10MB
          </p>
        </div>
      )}

      <div className="mt-3 flex items-center gap-2 px-1">
        {["PNG", "SVG", "PDF", "FIG"].map((type) => (
          <span
            key={type}
            className="rounded-md bg-neutral-100 px-2 py-0.5 font-mono text-[9px] text-neutral-500"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
