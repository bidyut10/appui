"use client";
import React, { useState } from "react";
import { File } from "@/icons/File";
import { X } from "@/icons/X";
import { Check } from "@/icons/Check";

const initialFiles = [
  { name: "hero-banner.png", size: "2.4 MB", status: "done" as const },
  { name: "logo.svg", size: "48 KB", status: "done" as const },
  {
    name: "styles.css",
    size: "12 KB",
    status: "uploading" as const,
    progress: 67,
  },
];

export const FileUploadList = () => {
  const [files, setFiles] = useState(initialFiles);

  return (
    <div className="w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
      <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
        <h4 className="text-sm font-semibold text-neutral-900">
          Uploaded Files
        </h4>
        <span className="font-mono text-[10px] text-neutral-400">
          {files.length} files
        </span>
      </div>
      <div className="divide-y divide-neutral-50">
        {files.map((f) => (
          <div key={f.name} className="flex items-center gap-3 px-4 py-3">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${f.status === "done" ? "bg-neutral-50" : "bg-neutral-50"}`}
            >
              {f.status === "done" ? (
                <Check size={14} className="text-emerald-600" />
              ) : (
                <File size={14} className="text-neutral-600" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-neutral-800">
                {f.name}
              </p>
              <p className="text-[10px] text-neutral-400">{f.size}</p>
              {f.status === "uploading" && "progress" in f && (
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${f.progress}%` }}
                  />
                </div>
              )}
            </div>
            <button
              onClick={() =>
                setFiles((prev) => prev.filter((x) => x.name !== f.name))
              }
              className="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
            >
              <X size={12} />
            </button>
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-100 px-4 py-3">
        <button className="h-8 w-full cursor-pointer rounded-lg border border-dashed border-neutral-300 text-[11px] font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:bg-neutral-50/50 hover:text-neutral-600">
          + Add more files
        </button>
      </div>
    </div>
  );
};
