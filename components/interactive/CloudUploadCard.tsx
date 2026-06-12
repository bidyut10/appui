"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { File } from "@/icons/File";

/*
| Cloud upload card built with Next.js, React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo storage information and upload
| functionality with your own cloud storage system.
*/

export type CloudUploadCardProps = ComponentPropsWithoutRef<"div">;

export const CloudUploadCard = forwardRef<HTMLDivElement, CloudUploadCardProps>(
  ({ className, ...props }, ref) => {
    const [hovering, setHovering] = useState(false);

    return (
      <div
        ref={ref}
        data-slot="cloud-upload-card"
        className={cn("w-72 font-sans", className)}
        {...props}
      >
        <div
          data-slot="cloud-upload-card-container"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={cn(
            "relative cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300",
            hovering
              ? "border-neutral-400 bg-neutral-50/50"
              : "border-neutral-200 bg-linear-to-br from-neutral-50/30 to-teal-50/30",
          )}
        >
          {/* Content */}
          <div
            data-slot="cloud-upload-card-content"
            className="p-6 text-center"
          >
            <div
              data-slot="cloud-upload-card-icon"
              className={cn(
                "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors",
                hovering ? "bg-neutral-100" : "bg-white shadow-sm",
              )}
            >
              <File />
            </div>

            <h4
              data-slot="cloud-upload-card-title"
              className="mb-1 text-sm font-semibold text-neutral-900"
            >
              Upload to Cloud
            </h4>

            <p
              data-slot="cloud-upload-card-description"
              className="mb-4 text-[11px] leading-relaxed text-neutral-500"
            >
              Drag files here or click to browse.
              <br />
              Supports up to 50MB per file.
            </p>

            <button
              type="button"
              aria-label="Choose files"
              data-slot="cloud-upload-card-button"
              className="h-9 cursor-pointer rounded-lg bg-neutral-600 px-5 text-xs font-medium text-white shadow-sm shadow-neutral-200 transition-colors hover:bg-neutral-700"
            >
              Choose Files
            </button>
          </div>

          {/* Storage Footer */}
          <div
            data-slot="cloud-upload-card-footer"
            className="flex items-center justify-between border-t border-neutral-100 bg-white/60 px-6 py-3"
          >
            <span
              data-slot="cloud-upload-card-storage-text"
              className="text-[10px] text-neutral-400"
            >
              2.4 GB of 5 GB used
            </span>

            <div
              data-slot="cloud-upload-card-progress-track"
              className="h-1 w-20 overflow-hidden rounded-full bg-neutral-200"
            >
              <div
                data-slot="cloud-upload-card-progress-bar"
                className="h-full w-[48%] rounded-full bg-neutral-500"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

CloudUploadCard.displayName = "CloudUploadCard";
