"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { File } from "@/icons/File";
import { MoveDown } from "@/icons/MoveDown";
import { Trash } from "@/icons/Trash";

export type FilePreviewCardProps = {
  name?: string;
  size?: string;
  type?: string;
  modified?: string;
  onDownload?: () => void;
  onDelete?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const FilePreviewCard = forwardRef<HTMLDivElement, FilePreviewCardProps>(
  (
    {
      className,
      name = "Product-spec.pdf",
      size = "2.4 MB",
      type = "PDF Document",
      modified = "Modified today",
      onDownload,
      onDelete,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="file-preview-card"
      className={cn(
        "w-64 overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="flex h-28 items-center justify-center bg-neutral-50">
        <div className="flex h-16 w-14 flex-col overflow-hidden rounded-md border border-neutral-200 bg-white shadow-sm">
          <div className="h-3 bg-red-500" />
          <div className="flex flex-1 flex-col gap-1 p-2">
            <span className="h-0.5 w-full rounded bg-neutral-200" />
            <span className="h-0.5 w-4/5 rounded bg-neutral-200" />
            <span className="h-0.5 w-full rounded bg-neutral-200" />
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50">
            <File size={16} className="text-red-500" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-neutral-900">{name}</p>
            <p className="text-[11px] text-neutral-500">
              {type} · {size}
            </p>
            <p className="text-[10px] text-neutral-400">{modified}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onDownload}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-neutral-900 py-2 text-[11px] font-semibold text-white"
          >
            <MoveDown size={12} />
            Download
          </button>
          <button
            type="button"
            onClick={onDelete}
            aria-label="Delete file"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500"
          >
            <Trash size={14} />
          </button>
        </div>
      </div>
    </div>
  ),
);

FilePreviewCard.displayName = "FilePreviewCard";
