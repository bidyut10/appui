"use client";
import { File } from "@/icons/File";
import React, { useState } from "react";

export const CloudUploadCard = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="w-72 font-sans">
      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className={`relative cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 ${hovering ? "border-neutral-400 bg-neutral-50/50" : "border-neutral-200 bg-linear-to-br from-neutral-50/30 to-violet-50/30"}`}
      >
        <div className="p-6 text-center">
          <div
            className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${hovering ? "bg-neutral-100" : "bg-white shadow-sm"}`}
          >
            <File />
          </div>
          <h4 className="mb-1 text-sm font-semibold text-neutral-900">
            Upload to Cloud
          </h4>
          <p className="mb-4 text-[11px] leading-relaxed text-neutral-500">
            Drag files here or click to browse.
            <br />
            Supports up to 50MB per file.
          </p>
          <button className="h-9 cursor-pointer rounded-lg bg-neutral-600 px-5 text-xs font-medium text-white shadow-sm shadow-neutral-200 transition-colors hover:bg-neutral-700">
            Choose Files
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-neutral-100 bg-white/60 px-6 py-3">
          <span className="text-[10px] text-neutral-400">
            2.4 GB of 5 GB used
          </span>
          <div className="h-1 w-20 overflow-hidden rounded-full bg-neutral-200">
            <div className="h-full w-[48%] rounded-full bg-neutral-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
