import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type SecurityItem = {
  label: string;
  description: string;
  actionLabel: string;
  onAction?: () => void;
};

export type SecuritySettingsCardProps = {
  title?: string;

  description?: string;

  statusTitle?: string;

  statusDescription?: string;

  statusActionLabel?: string;

  onStatusAction?: () => void;

  items?: SecurityItem[];
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultItems: SecurityItem[] = [
  {
    label: "Password",
    description: "Last changed 30 days ago",
    actionLabel: "Update",
  },
  {
    label: "Active sessions",
    description: "3 devices logged in",
    actionLabel: "View",
  },
  {
    label: "API keys",
    description: "2 active keys",
    actionLabel: "Manage",
  },
];

/* -------------------------------------------------------------------------- */
/*                           Security Settings Card                           */
/* -------------------------------------------------------------------------- */

export const SecuritySettingsCard = forwardRef<
  HTMLDivElement,
  SecuritySettingsCardProps
>(
  (
    {
      className,

      title = "Security",

      description = "Protect your account",

      statusTitle = "2FA Enabled",

      statusDescription = "Authenticator app",

      statusActionLabel = "Manage",

      onStatusAction,

      items = defaultItems,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="security-settings-card"
      className={cn(
        "w-84 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* ---------------------------------------------------------------------- */}
      {/* Header                                                                 */}
      {/* ---------------------------------------------------------------------- */}

      <div
        data-slot="security-settings-card-header"
        className="border-b border-neutral-100 px-4 py-3"
      >
        <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>

        <p className="mt-0.5 text-[11px] text-neutral-400">{description}</p>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Content                                                                */}
      {/* ---------------------------------------------------------------------- */}

      <div data-slot="security-settings-card-content" className="space-y-3 p-4">
        {/* ------------------------------------------------------------------ */}
        {/* 2FA Status                                                         */}
        {/* ------------------------------------------------------------------ */}

        <div
          data-slot="security-settings-card-status"
          className="flex items-center justify-between rounded-lg border border-emerald-100 bg-emerald-50 p-3"
        >
          <div className="flex items-center gap-2">
            <Check size={14} className="text-emerald-600" />

            <div>
              <p className="text-xs font-medium text-emerald-800">
                {statusTitle}
              </p>

              <p className="text-[10px] text-emerald-600">
                {statusDescription}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onStatusAction}
            className="cursor-pointer text-[10px] font-medium text-emerald-700 hover:underline"
          >
            {statusActionLabel}
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Settings                                                           */}
        {/* ------------------------------------------------------------------ */}

        {items.map((item) => (
          <div
            key={item.label}
            data-slot="security-settings-card-item"
            className="flex items-center justify-between py-2"
          >
            <div>
              <p className="text-xs font-medium text-neutral-800">
                {item.label}
              </p>

              <p className="mt-0.5 text-[10px] text-neutral-400">
                {item.description}
              </p>
            </div>

            <button
              type="button"
              onClick={item.onAction}
              className="cursor-pointer text-[10px] font-medium text-neutral-800 hover:underline"
            >
              {item.actionLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  ),
);

SecuritySettingsCard.displayName = "SecuritySettingsCard";
