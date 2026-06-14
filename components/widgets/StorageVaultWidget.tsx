"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Folder } from "@/icons/Folder";
import { File } from "@/icons/File";
import { Images } from "@/icons/Images";

const CATEGORIES = [
  { label: "Documents", used: 4.2, total: 10, icon: File, color: "bg-blue-500" },
  { label: "Photos", used: 6.8, total: 10, icon: Images, color: "bg-violet-500" },
  { label: "Projects", used: 2.1, total: 5, icon: Folder, color: "bg-amber-500" },
];

export type StorageVaultWidgetProps = {
  title?: string;
} & ComponentPropsWithoutRef<"div">;

export const StorageVaultWidget = forwardRef<
  HTMLDivElement,
  StorageVaultWidgetProps
>(({ className, title = "Storage vault", ...props }, ref) => (
  <div
    ref={ref}
    data-slot="storage-vault-widget"
    className={cn(
      "w-64 rounded-2xl border border-neutral-200 bg-white p-4 font-sans shadow-lg",
      className,
    )}
    {...props}
  >
    <p className="mb-4 text-sm font-bold text-neutral-900">{title}</p>
    <div className="space-y-3">
      {CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const pct = Math.round((cat.used / cat.total) * 100);
        return (
          <div key={cat.label}>
            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon size={14} className="text-neutral-500" />
                <span className="text-xs font-medium text-neutral-800">{cat.label}</span>
              </div>
              <span className="text-[10px] text-neutral-400">
                {cat.used} / {cat.total} GB
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
              <div
                className={cn("h-full rounded-full", cat.color)}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
));

StorageVaultWidget.displayName = "StorageVaultWidget";
