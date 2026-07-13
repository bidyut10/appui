"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import Link from "next/link";

import {
  Download,
  Plus,
  Upload,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/cn";

export type QuickActionItem = Readonly<{
  id: string;
  label: string;
  description?: string;
  href?: string;
  icon?: LucideIcon;
}>;

export type QuickActionsPanelProps = Readonly<
  {
    title?: string;
    subtitle?: string;
    actions?: readonly QuickActionItem[];
  } & ComponentPropsWithoutRef<"section">
>;

const DEFAULT_ACTIONS: readonly QuickActionItem[] = [
  {
    id: "invite",
    label: "Invite member",
    description: "Add someone to your workspace",
    href: "#",
    icon: UserPlus,
  },
  {
    id: "create",
    label: "Create report",
    description: "Start from a dashboard template",
    href: "#",
    icon: Plus,
  },
  {
    id: "import",
    label: "Import data",
    description: "Upload CSV or connect a source",
    href: "#",
    icon: Upload,
  },
  {
    id: "export",
    label: "Export summary",
    description: "Download the latest metrics",
    href: "#",
    icon: Download,
  },
];

function QuickActionButton({
  action,
}: Readonly<{ action: QuickActionItem }>) {
  const Icon = action.icon ?? Plus;
  const content = (
    <>
      <div className="flex size-8 shrink-0 items-center justify-center bg-neutral-50 text-neutral-700">
        <Icon size={15} aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-neutral-900">{action.label}</p>
        {action.description ? (
          <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">
            {action.description}
          </p>
        ) : null}
      </div>
    </>
  );

  const className =
    "flex w-full items-start gap-3 border border-neutral-200 bg-white p-3 text-left transition-colors hover:border-neutral-300 hover:bg-neutral-50";

  if (!action.href || action.href === "#") {
    return (
      <button type="button" className={className}>
        {content}
      </button>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {content}
    </Link>
  );
}

// Quick actions panel — common dashboard shortcuts in a compact action grid.
export const QuickActionsPanel = forwardRef<HTMLElement, QuickActionsPanelProps>(
  (
    {
      className,
      title = "Quick actions",
      subtitle = "Frequently used dashboard tasks",
      actions = DEFAULT_ACTIONS,
      ...props
    },
    ref,
  ) => (
    <section
      ref={ref}
      data-slot="quick-actions-panel"
      className={cn(
        "w-full min-w-0 border border-neutral-200 bg-white p-4 font-sans md:p-5",
        className,
      )}
      {...props}
    >
      <header className="mb-4 border-b border-neutral-100 pb-3">
        <h2 className="text-sm font-medium text-neutral-900">{title}</h2>
        <p className="font-mono text-[10px] text-neutral-400">{subtitle}</p>
      </header>

      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {actions.map((action) => (
          <li key={action.id}>
            <QuickActionButton action={action} />
          </li>
        ))}
      </ul>
    </section>
  ),
);

QuickActionsPanel.displayName = "QuickActionsPanel";
