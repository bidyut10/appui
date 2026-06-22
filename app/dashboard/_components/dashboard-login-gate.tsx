"use client";

import { DashboardLoginForm } from "@/app/dashboard/_components/dashboard-login-form";

export function DashboardLoginGate() {
  return (
    <DashboardLoginForm onSuccess={() => window.location.reload()} />
  );
}
