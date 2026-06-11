"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  useEffect,
  useState,
} from "react";

import { cn } from "@/lib/utils";

import { File } from "@/icons/File";

/*
| File upload progress card built with Next.js, React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo file information and upload logic
| with your own data source.
*/

export type FileUploadProgressProps = ComponentPropsWithoutRef<"div">;

export const FileUploadProgress = forwardRef<
  HTMLDivElement,
  FileUploadProgressProps
>(({ className, ...props }, ref) => {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(true);

  useEffect(() => {
    if (!uploading) return;

    const interval = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          setUploading(false);
          clearInterval(interval);

          return 100;
        }

        return previous + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [uploading]);

  const handleReset = () => {
    setProgress(0);
    setUploading(true);
  };

  return (
    <div
      ref={ref}
      data-slot="file-upload-progress"
      className={cn(
        "w-72 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div
        data-slot="file-upload-progress-header"
        className="mb-4 flex items-center gap-3"
      >
        <div
          data-slot="file-upload-progress-icon"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-50"
        >
          <File size={18} className="text-neutral-400" />
        </div>

        <div
          data-slot="file-upload-progress-details"
          className="min-w-0 flex-1"
        >
          <p className="truncate text-xs font-semibold text-neutral-900">
            design-system-v2.fig
          </p>

          <p className="text-[10px] text-neutral-400">4.2 MB · Figma file</p>
        </div>

        {uploading ? (
          <span
            data-slot="file-upload-progress-percentage"
            className="font-mono text-[10px] text-emerald-600"
          >
            {progress}%
          </span>
        ) : (
          <span
            data-slot="file-upload-progress-status"
            className="font-mono text-[10px] text-emerald-600"
          >
            Done
          </span>
        )}
      </div>

      {/* Progress Bar */}
      <div
        data-slot="file-upload-progress-track"
        className="h-1.5 overflow-hidden rounded-full bg-neutral-100"
      >
        <div
          data-slot="file-upload-progress-bar"
          className="h-full rounded-full bg-emerald-500 transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Action */}
      {!uploading && (
        <button
          type="button"
          aria-label="Upload another file"
          onClick={handleReset}
          data-slot="file-upload-progress-action"
          className="mt-3 h-8 w-full cursor-pointer rounded-lg border border-neutral-200 text-[11px] font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          Upload another
        </button>
      )}
    </div>
  );
});

FileUploadProgress.displayName = "FileUploadProgress";
