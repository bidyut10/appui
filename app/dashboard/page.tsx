import type { Metadata } from "next";
import { cookies } from "next/headers";

import { DashboardLoginGate } from "@/app/dashboard/_components/dashboard-login-gate";
import { DashboardShell } from "@/app/dashboard/_components/dashboard-shell";
import { DashboardView } from "@/app/dashboard/_components/dashboard-view";
import { AUTH_COOKIE } from "@/lib/analytics/constants";
import { isAnalyticsConfigured, isValidAuthToken } from "@/lib/analytics/server";

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  if (!isAnalyticsConfigured()) {
    return (
      <DashboardShell>
        <div className="mx-auto max-w-lg font-serif text-sm leading-relaxed text-neutral-500">
          Analytics is not configured yet. Add{" "}
          <code className="font-mono text-xs text-neutral-700">MONGODB_URI</code>{" "}
          and{" "}
          <code className="font-mono text-xs text-neutral-700">
            ANALYTICS_DASHBOARD_SECRET
          </code>{" "}
          to your environment, then redeploy.
        </div>
      </DashboardShell>
    );
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;
  const authed = isValidAuthToken(token);

  return (
    <DashboardShell>
      {authed ? <DashboardView /> : <DashboardLoginGate />}
    </DashboardShell>
  );
}
