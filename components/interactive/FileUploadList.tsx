"use client";
import React, { useState } from "react";
import { File } from "@/icons/File";
import { X } from "@/icons/X";
import { Check } from "@/icons/Check";

const initialFiles = [
  { name: "hero-banner.png", size: "2.4 MB", status: "done" as const },
  { name: "logo.svg", size: "48 KB", status: "done" as const },
  { name: "styles.css", size: "12 KB", status: "uploading" as const, progress: 67 },
];

export const FileUploadList = () => {
  const [files, setFiles] = useState(initialFiles);

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
      <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-neutral-900">Uploaded Files</h4>
        <span className="text-[10px] font-mono text-neutral-400">{files.length} files</span>
      </div>
      <div className="divide-y divide-neutral-50">
        {files.map((f) => (
          <div key={f.name} className="flex items-center gap-3 px-4 py-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${f.status === "done" ? "bg-emerald-50" : "bg-violet-50"}`}>
              {f.status === "done" ? <Check size={14} className="text-emerald-600" /> : <File size={14} className="text-violet-600" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-neutral-800 truncate">{f.name}</p>
              <p className="text-[10px] text-neutral-400">{f.size}</p>
              {f.status === "uploading" && "progress" in f && (
                <div className="h-1 bg-neutral-100 rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-violet-500 rounded-full" style={{ width: `${f.progress}%` }} />
                </div>
              )}
            </div>
            <button onClick={() => setFiles((prev) => prev.filter((x) => x.name !== f.name))} className="w-6 h-6 rounded-md flex items-center justify-center text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition-colors cursor-pointer shrink-0">
              <X size={12} />
            </button>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-neutral-100">
        <button className="w-full h-8 border border-dashed border-neutral-300 rounded-xl text-[11px] font-medium text-neutral-500 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50/50 transition-colors cursor-pointer">
          + Add more files
        </button>
      </div>
    </div>
  );
};
