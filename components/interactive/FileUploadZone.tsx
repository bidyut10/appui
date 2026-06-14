"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { File } from "@/icons/File";
import { Check } from "@/icons/Check";

/**
 * File upload zone built with React, TypeScript,
 * and Tailwind CSS.
 *
 * Supports drag and drop uploads, click to browse,
 * upload success state, and accepted file badges.
 *
 * Replace the demo file name and accepted file
 * formats with your own content.
 */
export type FileUploadZoneProps = {
  successFileName?: string;
  acceptedTypes?: string[];
  maxFileSize?: string;

  uploadText?: string;
  dropText?: string;
  successText?: string;

  autoResetDuration?: number;

  onFileSelect?: (file: File | null) => void;
} & ComponentPropsWithoutRef<"div">;

export const FileUploadZone = forwardRef<HTMLDivElement, FileUploadZoneProps>(
  (
    {
      className,

      successFileName = "design-system-v2.fig",

      acceptedTypes = ["PNG", "SVG", "PDF", "FIG"],

      maxFileSize = "10MB",

      uploadText = "Drag & drop files",
      dropText = "Drop to upload",
      successText = "Upload complete!",

      autoResetDuration = 2500,

      onFileSelect,

      ...props
    },
    ref,
  ) => {
    const [dragging, setDragging] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (!uploaded) return;

      const timeout = setTimeout(() => setUploaded(false), autoResetDuration);

      return () => clearTimeout(timeout);
    }, [uploaded, autoResetDuration]);

    const handleFile = (file: File | null) => {
      onFileSelect?.(file);
      setUploaded(true);
    };

    return (
      <div
        ref={ref}
        data-slot="file-upload-zone"
        className={cn("w-64 font-sans", className)}
        {...props}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
        />

        {uploaded ? (
          <div
            data-slot="file-upload-zone-success"
            className="flex h-44 flex-col items-center justify-center rounded-2xl border-2 border-neutral-50 bg-neutral-400/50"
          >
            <div
              data-slot="file-upload-zone-success-icon"
              className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-black/10"
            >
              <Check size={20} className="text-neutral-800" />
            </div>

            <p className="text-sm font-medium text-neutral-800">
              {successText}
            </p>

            <p className="mt-1 text-[11px] text-neutral-800">
              {successFileName}
            </p>
          </div>
        ) : (
          <div
            data-slot="file-upload-zone-drop-area"
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();

              setDragging(false);

              handleFile(e.dataTransfer.files?.[0] ?? null);
            }}
            onClick={() => inputRef.current?.click()}
            role="button"
            tabIndex={0}
            aria-label="Upload file"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                inputRef.current?.click();
              }
            }}
            className={cn(
              "flex h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300",
              dragging
                ? "scale-[1.02] border-neutral-400 bg-neutral-50"
                : "border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 hover:bg-neutral-50",
            )}
          >
            <div
              data-slot="file-upload-zone-icon"
              className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 transition-colors"
            >
              <File
                size={20}
                className={dragging ? "text-neutral-600" : "text-neutral-400"}
              />
            </div>

            <p className="text-sm font-medium text-neutral-700">
              {dragging ? dropText : uploadText}
            </p>

            <p className="mt-1 text-[11px] text-neutral-400">
              or <span className="font-medium text-neutral-600">browse</span> ·
              Max {maxFileSize}
            </p>
          </div>
        )}

        <div
          data-slot="file-upload-zone-types"
          className="mt-3 flex items-center gap-2 px-1"
        >
          {acceptedTypes.map((type) => (
            <span
              key={type}
              className="rounded-md bg-neutral-100 px-2 py-0.5 font-mono text-[9px] text-neutral-500"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    );
  },
);

FileUploadZone.displayName = "FileUploadZone";
