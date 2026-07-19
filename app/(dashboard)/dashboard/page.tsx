import type { Metadata } from "next";
import { cookies } from "next/headers";

import { DashboardLoginGate } from "./_components/dashboard-login-gate";
import { DashboardView } from "./_components/dashboard-view";
import { AUTH_COOKIE } from "@/lib/analytics/constants";
import {
  isAnalyticsConfigured,
  isValidAuthToken,
} from "@/lib/analytics/server";

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  if (!isAnalyticsConfigured()) {
    return (
      <div className="flex h-dvh items-center justify-center bg-white px-4">
        <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
          <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
            Dashboard / Setup
          </p>
          <h1 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-neutral-900">
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
      </div>
    );
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;
  const authed = isValidAuthToken(token);

  if (authed) {
    return <DashboardView />;
  }

  return <DashboardLoginGate />;
}
