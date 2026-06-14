import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Churn risk card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo at-risk accounts, risk scores, and activity labels with your own retention data.
 */
export type ChurnAccount = {
  name: string;
  plan: string;
  risk: number;
  lastActive: string;
};

export type ChurnRiskCardProps = {
  title?: string;
  atRiskCount?: number;
  accountsLabel?: string;
  accounts?: ChurnAccount[];
} & ComponentPropsWithoutRef<"div">;

const defaultAccounts: ChurnAccount[] = [
  { name: "Nova Labs", plan: "Pro", risk: 87, lastActive: "14d ago" },
  { name: "Pixel Co", plan: "Team", risk: 72, lastActive: "8d ago" },
  { name: "Flow Studio", plan: "Pro", risk: 65, lastActive: "5d ago" },
];

export const ChurnRiskCard = forwardRef<HTMLDivElement, ChurnRiskCardProps>(
  (
    {
      className,
      title = "Churn risk",
      atRiskCount = 7,
      accountsLabel = "accounts",
      accounts = defaultAccounts,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="churn-risk-card"
      className={cn(
        "w-sm rounded-[1.25rem] border border-rose-100 bg-linear-to-b from-rose-50/50 to-white p-5 font-sans shadow-lg ring-1 ring-rose-100/50",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <span className="rounded-lg bg-white px-2 py-1 text-[11px] font-bold text-rose-600 tabular-nums shadow-sm">
          {atRiskCount.toLocaleString()} {accountsLabel}
        </span>
      </div>

      {/* Accounts */}
      <div className="space-y-2">
        {(accounts ?? []).map((account) => {
          const safeRisk = Math.max(0, Math.min(100, account.risk));

          return (
            <div
              key={account.name}
              className="flex items-center gap-3 rounded-xl border border-white bg-white/80 px-3 py-2.5 shadow-sm"
            >
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold tabular-nums",
                  safeRisk >= 80
                    ? "bg-rose-100 text-rose-700"
                    : "bg-amber-100 text-amber-700",
                )}
              >
                {safeRisk}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-neutral-900">
                  {account.name}
                </p>
                <p className="text-[10px] text-neutral-400">
                  {account.plan} · {account.lastActive}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
);

ChurnRiskCard.displayName = "ChurnRiskCard";
