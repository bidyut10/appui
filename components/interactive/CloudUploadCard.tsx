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
        className={`relative rounded-2xl overflow-hidden border-2 border-dashed transition-all duration-300 cursor-pointer ${hovering ? "border-neutral-400 bg-neutral-50/50" : "border-neutral-200 bg-linear-to-br from-neutral-50/30 to-violet-50/30"}`}
      >
        <div className="p-6 text-center">
          <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-colors ${hovering ? "bg-neutral-100" : "bg-white shadow-sm"}`}>
            <File/>
          </div>
          <h4 className="text-sm font-semibold text-neutral-900 mb-1">Upload to Cloud</h4>
          <p className="text-[11px] text-neutral-500 leading-relaxed mb-4">
            Drag files here or click to browse.<br />Supports up to 50MB per file.
          </p>
          <button className="h-9 px-5 bg-neutral-600 text-white text-xs font-medium rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer shadow-sm shadow-neutral-200">
            Choose Files
          </button>
        </div>
        <div className="px-6 py-3 bg-white/60 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-[10px] text-neutral-400">2.4 GB of 5 GB used</span>
          <div className="w-20 h-1 bg-neutral-200 rounded-full overflow-hidden">
            <div className="h-full w-[48%] bg-neutral-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
