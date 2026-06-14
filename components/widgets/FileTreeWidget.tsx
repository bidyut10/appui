"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Folder } from "@/icons/Folder";
import { File } from "@/icons/File";
import { ChevronRight } from "@/icons/ChevronRight";
import { ChevronDown } from "@/icons/ChevronDown";

type TreeNode = {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: TreeNode[];
};

const TREE: TreeNode[] = [
  {
    id: "src",
    name: "src",
    type: "folder",
    children: [
      {
        id: "app",
        name: "app",
        type: "folder",
        children: [
          { id: "page", name: "page.tsx", type: "file" },
          { id: "layout", name: "layout.tsx", type: "file" },
        ],
      },
      {
        id: "components",
        name: "components",
        type: "folder",
        children: [
          {
            id: "cards",
            name: "cards",
            type: "folder",
            children: [{ id: "card", name: "ProfileCard.tsx", type: "file" }],
          },
        ],
      },
    ],
  },
  { id: "readme", name: "README.md", type: "file" },
];

function TreeItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 1);
  const isFolder = node.type === "folder";

  return (
    <div>
      <button
        type="button"
        onClick={() => isFolder && setOpen(!open)}
        className="flex w-full items-center gap-1.5 rounded-lg py-1.5 pr-2 text-left hover:bg-neutral-50"
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        {isFolder ? (
          open ? (
            <ChevronDown size={12} className="text-neutral-400" />
          ) : (
            <ChevronRight size={12} className="text-neutral-400" />
          )
        ) : (
          <span className="w-3" />
        )}
        {isFolder ? (
          <Folder size={14} className="shrink-0 text-amber-500" />
        ) : (
          <File size={14} className="shrink-0 text-blue-500" />
        )}
        <span className="truncate text-xs font-medium text-neutral-800">
          {node.name}
        </span>
      </button>
      {isFolder &&
        open &&
        node.children?.map((child) => (
          <TreeItem key={child.id} node={child} depth={depth + 1} />
        ))}
    </div>
  );
}

export type FileTreeWidgetProps = {
  title?: string;
} & ComponentPropsWithoutRef<"div">;

export const FileTreeWidget = forwardRef<HTMLDivElement, FileTreeWidgetProps>(
  ({ className, title = "Project files", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="file-tree-widget"
      className={cn(
        "w-64 rounded-2xl border border-neutral-100 bg-white p-3 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <p className="mb-2 px-2 text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
        {title}
      </p>
      {TREE.map((node) => (
        <TreeItem key={node.id} node={node} />
      ))}
    </div>
  ),
);

FileTreeWidget.displayName = "FileTreeWidget";
