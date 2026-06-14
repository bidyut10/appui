"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { File } from "@/icons/File";
import { Folder } from "@/icons/Folder";
import { Images } from "@/icons/Images";

export type RecentFile = {
  id: string;
  name: string;
  modified: string;
  size: string;
  type: "doc" | "sheet" | "image" | "folder";
  shared?: boolean;
};

/**
 * Recent files widget — Google Drive / Dropbox style.
 *
 * Replace the demo files with your own file list data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type RecentFilesWidgetProps = {
  title?: string;
  storageUsed?: string;
  storageTotal?: string;
  files?: RecentFile[];
  onFileClick?: (file: RecentFile) => void;
} & ComponentPropsWithoutRef<"div">;

const typeIcons: Record<RecentFile["type"], ReactNode> = {
  doc: <File size={16} className="text-blue-500" />,
  sheet: <File size={16} className="text-emerald-500" />,
  image: <Images size={16} className="text-violet-500" />,
  folder: <Folder size={16} className="text-amber-500" />,
};

const defaultFiles: RecentFile[] = [
  {
    id: "1",
    name: "Q2 Roadmap.fig",
    modified: "Edited 1h ago",
    size: "4.2 MB",
    type: "doc",
    shared: true,
  },
  {
    id: "2",
    name: "Component Library",
    modified: "Edited 3h ago",
    size: "—",
    type: "folder",
  },
  {
    id: "3",
    name: "Hero-banner.png",
    modified: "Yesterday",
    size: "890 KB",
    type: "image",
  },
  {
    id: "4",
    name: "Metrics-export.csv",
    modified: "Jun 4",
    size: "128 KB",
    type: "sheet",
  },
];

export const RecentFilesWidget = forwardRef<
  HTMLDivElement,
  RecentFilesWidgetProps
>(
  (
    {
      className,
      title = "Recent files",
      storageUsed = "12.4 GB",
      storageTotal = "15 GB",
      files = defaultFiles,
      onFileClick,
      ...props
    },
    ref,
  ) => {
    const usedPercent = 82;

    return (
      <div
        ref={ref}
        data-slot="recent-files-widget"
        className={cn(
          "w-sm rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-bold text-neutral-900">{title}</p>
          <span className="text-[10px] text-neutral-400">
            {storageUsed} of {storageTotal}
          </span>
        </div>

        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-500 transition-all"
            style={{ width: `${usedPercent}%` }}
          />
        </div>

        <div className="space-y-0.5">
          {files.map((file) => (
            <button
              key={file.id}
              type="button"
              onClick={() => onFileClick?.(file)}
              data-slot="recent-files-widget-item"
              className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-neutral-50"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-50">
                {typeIcons[file.type]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="truncate text-[13px] font-medium text-neutral-900">
                    {file.name}
                  </p>
                  {file.shared && (
                    <span className="shrink-0 rounded bg-blue-50 px-1 py-0.5 text-[8px] font-bold text-blue-600">
                      SHARED
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-neutral-400">
                  {file.modified} · {file.size}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  },
);

RecentFilesWidget.displayName = "RecentFilesWidget";
