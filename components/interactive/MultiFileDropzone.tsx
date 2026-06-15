"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { X } from "@/icons/X";

/**
 * Multi-file upload preview card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo files with your own uploaded images.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type MultiFileItem = {
  id: number;
  src: string;
  name: string;
};

export type MultiFileDropzoneProps = {
  initialFiles?: MultiFileItem[];
  maxFiles?: number;
  onAdd?: () => void;
  onRemove?: (file: MultiFileItem) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultFiles: MultiFileItem[] = [
  {
    id: 1,
    src: "/boy.png",
    name: "avatar.png",
  },
  {
    id: 2,
    src: "/dithar.png",
    name: "cover.jpg",
  },
];

export const MultiFileDropzone = forwardRef<
  HTMLDivElement,
  MultiFileDropzoneProps
>(
  (
    {
      className,
      initialFiles = defaultFiles,
      maxFiles = 6,
      onAdd,
      onRemove,
      ...props
    },
    ref,
  ) => {
    const [files, setFiles] = useState(initialFiles);

    const handleRemove = (file: MultiFileItem) => {
      setFiles((prev) => prev.filter((item) => item.id !== file.id));
      onRemove?.(file);
    };

    return (
      <div
        ref={ref}
        data-slot="multi-file-dropzone"
        className={cn("w-72 font-sans", className)}
        {...props}
      >
        <div
          data-slot="multi-file-dropzone-container"
          className="overflow-hidden rounded-2xl border-2 border-dashed border-neutral-200 bg-white shadow-lg transition-colors hover:border-neutral-300"
        >
          <div className="p-3">
            <div
              data-slot="multi-file-dropzone-grid"
              className="mb-3 grid grid-cols-3 gap-2"
            >
              {files.map((file) => (
                <div
                  key={file.id}
                  data-slot="multi-file-dropzone-item"
                  className="group relative aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={file.src}
                    alt={file.name}
                    fill
                    sizes="88px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <button
                    type="button"
                    aria-label={`Remove ${file.name}`}
                    onClick={() => handleRemove(file)}
                    className="absolute top-1 right-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 hover:bg-black/80"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}

              {files.length < maxFiles && (
                <button
                  type="button"
                  aria-label="Add file"
                  data-slot="multi-file-dropzone-add-button"
                  onClick={onAdd}
                  className="group flex aspect-square cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-neutral-200 text-neutral-400 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-500"
                >
                  <span className="text-lg leading-none transition-transform duration-200 group-hover:scale-110">
                    +
                  </span>

                  <span className="mt-0.5 text-[8px] font-medium">Add</span>
                </button>
              )}
            </div>
          </div>

          <div
            data-slot="multi-file-dropzone-footer"
            className="border-t border-neutral-100 bg-neutral-50/50 px-3 py-2.5"
          >
            <p className="text-center text-[10px] font-medium text-neutral-500">
              {files.length} of {maxFiles} files uploaded
            </p>
          </div>
        </div>
      </div>
    );
  },
);

MultiFileDropzone.displayName = "MultiFileDropzone";
