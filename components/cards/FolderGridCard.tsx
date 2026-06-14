"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Folder } from "@/icons/Folder";
import { File } from "@/icons/File";
import { Images } from "@/icons/Images";

type FolderItem = {
  id: string;
  name: string;
  count: number;
  kind: "folder" | "docs" | "photos";
};

const ITEMS: FolderItem[] = [
  { id: "1", name: "Design System", count: 24, kind: "folder" },
  { id: "2", name: "Brand Assets", count: 18, kind: "photos" },
  { id: "3", name: "Contracts", count: 6, kind: "docs" },
  { id: "4", name: "Archive 2024", count: 42, kind: "folder" },
];

const kindIcon = {
  folder: Folder,
  docs: File,
  photos: Images,
};

export type FolderGridCardProps = {
  title?: string;
  onSelect?: (item: FolderItem) => void;
} & ComponentPropsWithoutRef<"div">;

export const FolderGridCard = forwardRef<HTMLDivElement, FolderGridCardProps>(
  ({ className, title = "My folders", onSelect, ...props }, ref) => {
    const [active, setActive] = useState("1");

    return (
      <div
        ref={ref}
        data-slot="folder-grid-card"
        className={cn(
          "w-64 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="mb-3 text-sm font-bold text-neutral-900">{title}</p>
        <div className="grid grid-cols-2 gap-2">
          {ITEMS.map((item) => {
            const Icon = kindIcon[item.kind];
            const selected = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActive(item.id);
                  onSelect?.(item);
                }}
                className={cn(
                  "rounded-xl border p-3 text-left transition-all",
                  selected
                    ? "border-neutral-900 bg-neutral-50 shadow-sm"
                    : "border-neutral-100 bg-white hover:border-neutral-200",
                )}
              >
                <Icon
                  size={18}
                  className={cn(
                    item.kind === "folder" && "text-amber-500",
                    item.kind === "docs" && "text-blue-500",
                    item.kind === "photos" && "text-violet-500",
                  )}
                />
                <p className="mt-2 truncate text-xs font-semibold text-neutral-900">
                  {item.name}
                </p>
                <p className="text-[10px] text-neutral-400">
                  {item.count} items
                </p>
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);

FolderGridCard.displayName = "FolderGridCard";
