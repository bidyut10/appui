"use client";
import React, { useState } from "react";

export const CloudUploadCard = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="w-72 font-sans">
      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className={`relative rounded-2xl overflow-hidden border-2 border-dashed transition-all duration-300 cursor-pointer ${hovering ? "border-blue-400 bg-blue-50/50" : "border-neutral-200 bg-linear-to-br from-blue-50/30 to-violet-50/30"}`}
      >
        <div className="p-6 text-center">
          <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-colors ${hovering ? "bg-blue-100" : "bg-white shadow-sm"}`}>
            <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.5} className={hovering ? "text-blue-600" : "text-neutral-400"}>
              <path d="M12 16V4m0 0l-4 4m4-4l4 4"/><path d="M3 20h18"/><path d="M7 20a5 5 0 0110 0"/>
            </svg>
          </div>
          <h4 className="text-sm font-semibold text-neutral-900 mb-1">Upload to Cloud</h4>
          <p className="text-[11px] text-neutral-500 leading-relaxed mb-4">
            Drag files here or click to browse.<br />Supports up to 50MB per file.
          </p>
          <button className="h-9 px-5 bg-blue-600 text-white text-xs font-medium rounded-xl hover:bg-blue-700 transition-colors cursor-pointer shadow-sm shadow-blue-200">
            Choose Files
          </button>
        </div>
        <div className="px-6 py-3 bg-white/60 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-[10px] text-neutral-400">2.4 GB of 5 GB used</span>
          <div className="w-20 h-1 bg-neutral-200 rounded-full overflow-hidden">
            <div className="h-full w-[48%] bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
