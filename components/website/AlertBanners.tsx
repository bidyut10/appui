"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { X } from "@/icons/X";
import { Info } from "@/icons/Info";
import { Check } from "@/icons/Check";
import { Alert } from "@/icons/Alert";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type AlertBannerItem = {
  id?: string;
  type?: "info" | "success" | "warning" | "error";

  title: string;
  message: string;

  icon?: ReactNode;

  bgClass?: string;
  textClass?: string;
};

export type AlertBannersProps = {
  alerts?: AlertBannerItem[];

  defaultVisible?: boolean[];

  onDismiss?: (alert: AlertBannerItem, index: number) => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Alert Data                            */
/* -------------------------------------------------------------------------- */

const defaultAlerts: AlertBannerItem[] = [
  {
    type: "info",
    title: "New update available",
    message: "Version 2.4 is ready to install.",
  },
  {
    type: "success",
    title: "Payment successful",
    message: "Your subscription has been renewed.",
  },
  {
    type: "warning",
    title: "Storage almost full",
    message: "You have used 90% of your storage quota.",
  },
  {
    type: "error",
    title: "Connection failed",
    message: "Unable to reach the server. Try again.",
  },
];

/* -------------------------------------------------------------------------- */
/*                              Alert Variants                                */
/* -------------------------------------------------------------------------- */

const alertStyles = {
  info: {
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-800",
    icon: <Info className="text-blue-800" />,
  },

  success: {
    bg: "bg-emerald-50 border-emerald-200",
    text: "text-emerald-800",
    icon: <Check className="text-emerald-800" />,
  },

  warning: {
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-800",
    icon: <Alert className="text-amber-800" />,
  },

  error: {
    bg: "bg-red-50 border-red-200",
    text: "text-red-800",
    icon: <X className="text-red-800" />,
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                              Alert Banners                                 */
/* -------------------------------------------------------------------------- */

export const AlertBanners = forwardRef<HTMLDivElement, AlertBannersProps>(
  (
    {
      className,

      alerts = defaultAlerts,

      defaultVisible,

      onDismiss,

      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState<boolean[]>(
      defaultVisible ?? alerts.map(() => true),
    );

    const dismissAlert = (index: number) => {
      setVisible((current) => {
        const next = [...current];
        next[index] = false;
        return next;
      });

      onDismiss?.(alerts[index], index);
    };

    return (
      <div
        ref={ref}
        data-slot="alert-banners"
        className={cn("w-80 space-y-2 font-sans", className)}
        {...props}
      >
        {/* ---------------------------------------------------------------------- */}
        {/*                                 Alerts                                 */}
        {/* ---------------------------------------------------------------------- */}

        {alerts.map((alert, index) => {
          if (!visible[index]) return null;

          const variant = alertStyles[alert.type ?? "info"];

          return (
            <div
              key={alert.id ?? `${alert.title}-${index}`}
              data-slot="alert-banner"
              className={cn(
                "flex items-start gap-3 rounded-xl border p-3",
                alert.bgClass ?? variant.bg,
              )}
            >
              {/* -------------------------------------------------------------- */}
              {/* Icon                                                           */}
              {/* -------------------------------------------------------------- */}

              <span
                data-slot="alert-banner-icon"
                className="mt-0.5 shrink-0 text-sm"
              >
                {alert.icon ?? variant.icon}
              </span>

              {/* -------------------------------------------------------------- */}
              {/* Content                                                        */}
              {/* -------------------------------------------------------------- */}

              <div data-slot="alert-banner-content" className="min-w-0 flex-1">
                <p
                  data-slot="alert-banner-title"
                  className={cn(
                    "text-xs font-semibold",
                    alert.textClass ?? variant.text,
                  )}
                >
                  {alert.title}
                </p>

                <p
                  data-slot="alert-banner-message"
                  className={cn(
                    "mt-0.5 text-[11px] opacity-80",
                    alert.textClass ?? variant.text,
                  )}
                >
                  {alert.message}
                </p>
              </div>

              {/* -------------------------------------------------------------- */}
              {/* Close Button                                                   */}
              {/* -------------------------------------------------------------- */}

              <button
                type="button"
                data-slot="alert-banner-close"
                onClick={() => dismissAlert(index)}
                className="shrink-0 cursor-pointer text-neutral-400 transition-colors hover:text-neutral-600"
                aria-label={`Dismiss ${alert.title}`}
              >
                <X size={12} />
              </button>
            </div>
          );
        })}
      </div>
    );
  },
);

AlertBanners.displayName = "AlertBanners";
