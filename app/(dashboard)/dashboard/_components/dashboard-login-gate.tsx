"use client";

import { DashboardLoginForm } from "./dashboard-login-form";

export function DashboardLoginGate() {
  return <DashboardLoginForm onSuccess={() => globalThis.location.reload()} />;
}
