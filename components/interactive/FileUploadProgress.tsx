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
        if (p >= 100) {
          setUploading(false);
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [uploading]);

  return (
    <div className="w-72 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-50">
          <File size={18} className="text-neutral-400" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold text-neutral-900">
            design-system-v2.fig
          </p>
          <p className="text-[10px] text-neutral-400">4.2 MB · Figma file</p>
        </div>
        {uploading ? (
          <span className="font-mono text-[10px] text-emerald-600">
            {progress}%
          </span>
        ) : (
          <span className="font-mono text-[10px] text-emerald-600">Done</span>
        )}
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
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
          className="mt-3 h-8 w-full cursor-pointer rounded-lg border border-neutral-200 text-[11px] font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          Upload another
        </button>
      )}
    </div>
  );
};
