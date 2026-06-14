"use client";

import {
  forwardRef,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import previewImg from "@/public/dithar.png";

import { X } from "@/icons/X";

/**
 * Image upload preview card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo image, metadata, and upload logic
 * with your own image upload implementation.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type ImageUploadPreviewProps = {
  previewImage?: StaticImageData | string;
  imageAlt?: string;
  fileName?: string;
  fileMeta?: string;
  uploadLabel?: string;
  uploadHint?: string;
} & ComponentPropsWithoutRef<"div">;

export const ImageUploadPreview = forwardRef<
  HTMLDivElement,
  ImageUploadPreviewProps
>(
  (
    {
      className,
      previewImage = previewImg,
      imageAlt = "Preview",
      fileName = "profile-photo.jpg",
      fileMeta = "1.2 MB · 1920×1080",
      uploadLabel = "Upload image",
      uploadHint = "PNG, JPG up to 5MB",
      ...props
    },
    ref,
  ) => {
    const [preview, setPreview] = useState(true);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpenFilePicker = () => {
      inputRef.current?.click();
    };

    const handleRemovePreview = () => {
      setPreview(false);
    };

    const handleFileChange = () => {
      setPreview(true);
    };

    return (
      <div
        ref={ref}
        data-slot="image-upload-preview"
        className={cn("w-72 font-sans", className)}
        {...props}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {preview ? (
          <div
            data-slot="image-upload-preview-card"
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 shadow-lg"
          >
            <div
              data-slot="image-upload-preview-image-container"
              className="relative h-44"
            >
              <Image
                src={previewImage}
                alt={imageAlt}
                fill
                sizes="288px"
                className="object-cover"
              />

              <div
                data-slot="image-upload-preview-overlay"
                className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20"
              />

              <button
                type="button"
                aria-label="Remove image"
                onClick={handleRemovePreview}
                data-slot="image-upload-preview-remove"
                className="absolute top-2 right-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
              >
                <X size={12} />
              </button>
            </div>

            <div
              data-slot="image-upload-preview-footer"
              className="flex items-center justify-between bg-white p-3"
            >
              <div data-slot="image-upload-preview-details">
                <p className="text-xs font-medium text-neutral-900">
                  {fileName}
                </p>

                <p className="text-[10px] text-neutral-400">{fileMeta}</p>
              </div>

              <button
                type="button"
                aria-label="Replace image"
                onClick={handleOpenFilePicker}
                data-slot="image-upload-preview-replace"
                className="cursor-pointer text-[10px] font-medium text-neutral-600 hover:underline"
              >
                Replace
              </button>
            </div>
          </div>
        ) : (
          <div
            role="button"
            tabIndex={0}
            data-slot="image-upload-preview-dropzone"
            onClick={handleOpenFilePicker}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleOpenFilePicker();
              }
            }}
            aria-label={uploadLabel}
            className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-neutral-200 transition-all hover:border-neutral-300 hover:bg-neutral-50/30"
          >
            <div
              data-slot="image-upload-preview-upload-icon"
              className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100"
            >
              <svg
                viewBox="0 0 24 24"
                width={20}
                height={20}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="text-neutral-400"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>

            <p className="text-xs font-medium text-neutral-600">{uploadLabel}</p>

            <p className="mt-0.5 text-[10px] text-neutral-400">{uploadHint}</p>
          </div>
        )}
      </div>
    );
  },
);

ImageUploadPreview.displayName = "ImageUploadPreview";
