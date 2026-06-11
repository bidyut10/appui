"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { File } from "@/icons/File";
import { X } from "@/icons/X";
import { Check } from "@/icons/Check";

/*
| File upload list card built with Next.js, React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo file data with your own upload
| state and backend integration.
*/

const initialFiles = [
  {
    name: "hero-banner.png",
    size: "2.4 MB",
    status: "done" as const,
  },
  {
    name: "logo.svg",
    size: "48 KB",
    status: "done" as const,
  },
  {
    name: "styles.css",
    size: "12 KB",
    status: "uploading" as const,
    progress: 67,
  },
];

export type FileUploadListProps = ComponentPropsWithoutRef<"div">;

export const FileUploadList = forwardRef<HTMLDivElement, FileUploadListProps>(
  ({ className, ...props }, ref) => {
    const [files, setFiles] = useState(initialFiles);

    const handleRemoveFile = (fileName: string) => {
      setFiles((previous) => previous.filter((file) => file.name !== fileName));
    };

    return (
      <div
        ref={ref}
        data-slot="file-upload-list"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Header */}
        <div
          data-slot="file-upload-list-header"
          className="flex items-center justify-between border-b border-neutral-100 px-4 py-3"
        >
          <h4 className="text-sm font-semibold text-neutral-900">
            Uploaded Files
          </h4>

          <span className="font-mono text-[10px] text-neutral-400">
            {files.length} files
          </span>
        </div>

        {/* Files */}
        <div
          data-slot="file-upload-list-content"
          className="divide-y divide-neutral-50"
        >
          {files.map((file) => (
            <div
              key={file.name}
              data-slot="file-upload-list-item"
              className="flex items-center gap-3 px-4 py-3"
            >
              <div
                data-slot="file-upload-list-icon"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-50"
              >
                {file.status === "done" ? (
                  <Check size={14} className="text-emerald-600" />
                ) : (
                  <File size={14} className="text-neutral-600" />
                )}
              </div>

              <div
                data-slot="file-upload-list-details"
                className="min-w-0 flex-1"
              >
                <p className="truncate text-xs font-medium text-neutral-800">
                  {file.name}
                </p>

                <p className="text-[10px] text-neutral-400">{file.size}</p>

                {file.status === "uploading" && "progress" in file && (
                  <div
                    data-slot="file-upload-list-progress-track"
                    className="mt-1.5 h-1 overflow-hidden rounded-full bg-neutral-100"
                  >
                    <div
                      data-slot="file-upload-list-progress-bar"
                      className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                      style={{
                        width: `${file.progress}%`,
                      }}
                    />
                  </div>
                )}
              </div>

              <button
                type="button"
                aria-label={`Remove ${file.name}`}
                onClick={() => handleRemoveFile(file.name)}
                data-slot="file-upload-list-remove"
                className="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          data-slot="file-upload-list-footer"
          className="border-t border-neutral-100 px-4 py-3"
        >
          <button
            type="button"
            aria-label="Add more files"
            data-slot="file-upload-list-add"
            className="h-8 w-full cursor-pointer rounded-lg border border-dashed border-neutral-300 text-[11px] font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:bg-neutral-50/50 hover:text-neutral-600"
          >
            + Add more files
          </button>
        </div>
      </div>
    );
  },
);

FileUploadList.displayName = "FileUploadList";
