import type { Metadata } from "next";
import { cookies } from "next/headers";

import { DashboardLoginGate } from "./_components/dashboard-login-gate";
import { DashboardShell } from "./_components/dashboard-shell";
import { DashboardView } from "./_components/dashboard-view";
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
        <div className="mx-auto max-w-lg">
          <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
            Dashboard / Setup
          </p>
          <h1 className="mt-3 font-serif text-2xl text-neutral-900">
            Analytics not configured
          </h1>
          <p className="mt-3 font-sans text-sm leading-relaxed text-neutral-500">
            Add{" "}
            <code className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-mono text-xs text-neutral-700">
              MONGODB_URI
            </code>{" "}
            and{" "}
            <code className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-mono text-xs text-neutral-700">
              ANALYTICS_DASHBOARD_SECRET
            </code>{" "}
            to your environment, then redeploy.
          </p>
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
