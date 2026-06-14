"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { File } from "@/icons/File";
import { Images } from "@/icons/Images";
import { Check } from "@/icons/Check";

type QueueFile = {
  id: string;
  name: string;
  size: string;
  type: "image" | "doc";
  progress: number;
};

const INITIAL: QueueFile[] = [
  {
    id: "1",
    name: "hero-final.png",
    size: "1.2 MB",
    type: "image",
    progress: 100,
  },
  { id: "2", name: "brief-v3.pdf", size: "840 KB", type: "doc", progress: 68 },
  {
    id: "3",
    name: "team-photo.jpg",
    size: "2.1 MB",
    type: "image",
    progress: 24,
  },
];

export type FileUploadQueueCardProps = ComponentPropsWithoutRef<"div">;

export const FileUploadQueueCard = forwardRef<
  HTMLDivElement,
  FileUploadQueueCardProps
>(({ className, ...props }, ref) => {
  const [files, setFiles] = useState(INITIAL);

  return (
    <div
      ref={ref}
      data-slot="file-upload-queue-card"
      className={cn(
        "w-64 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <p className="mb-3 text-sm font-bold text-neutral-900">
        Uploading 3 files
      </p>
      <div className="space-y-3">
        {files.map((file) => {
          const Icon = file.type === "image" ? Images : File;
          const done = file.progress >= 100;
          return (
            <div key={file.id}>
              <div className="mb-1 flex items-center gap-2">
                <Icon size={14} className="shrink-0 text-neutral-400" />
                <p className="min-w-0 flex-1 truncate text-xs font-medium text-neutral-900">
                  {file.name}
                </p>
                {done ? (
                  <Check size={12} className="text-emerald-500" />
                ) : (
                  <span className="text-[10px] text-neutral-400">
                    {file.progress}%
                  </span>
                )}
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-neutral-100">
                <div
                  className={cn(
                    "h-full rounded-full transition-all",
                    done ? "bg-emerald-500" : "bg-neutral-900",
                  )}
                  style={{ width: `${file.progress}%` }}
                />
              </div>
              <p className="mt-0.5 text-[9px] text-neutral-400">{file.size}</p>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() =>
          setFiles((prev) =>
            prev.map((f) => ({
              ...f,
              progress: Math.min(100, f.progress + 20),
            })),
          )
        }
        className="mt-4 w-full rounded-xl border border-neutral-200 py-2 text-[11px] font-semibold text-neutral-700"
      >
        Simulate progress
      </button>
    </div>
  );
});

FileUploadQueueCard.displayName = "FileUploadQueueCard";
