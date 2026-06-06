"use client";
import React, { useState, useEffect } from "react";
import { File } from "@/icons/File";

export const FileUploadProgress = () => {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(true);

  useEffect(() => {
    if (!uploading) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { setUploading(false); clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [uploading]);

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl p-4 font-sans">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center shrink-0">
          <File size={18} className="text-neutral-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-neutral-900 truncate">
            design-system-v2.fig
          </p>
          <p className="text-[10px] text-neutral-400">4.2 MB · Figma file</p>
        </div>
        {uploading ? (
          <span className="text-[10px] font-mono text-emerald-600">
            {progress}%
          </span>
        ) : (
          <span className="text-[10px] font-mono text-emerald-600">Done</span>
        )}
      </div>
      <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${uploading ? "bg-emerald-500" : "bg-emerald-500"}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {!uploading && (
        <button
          onClick={() => {
            setProgress(0);
            setUploading(true);
          }}
          className="w-full mt-3 h-8 text-[11px] font-medium text-neutral-600 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          Upload another
        </button>
      )}
    </div>
  );
};
