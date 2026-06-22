"use client";

import { useState } from "react";

import { CrosshairFrame } from "@/app/crosshair-frame";

type DashboardLoginFormProps = Readonly<{
  onSuccess: () => void;
}>;

export function DashboardLoginForm({ onSuccess }: DashboardLoginFormProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/analytics/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Wrong password. Try again.");
        return;
      }

      onSuccess();
    } catch {
      setError("Could not sign in. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <CrosshairFrame pattern className="w-full">
        <form onSubmit={onSubmit} className="relative z-10 px-6 py-10 sm:px-10">
          <p className="font-mono text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
            Private
          </p>
          <h1 className="mt-2 font-serif text-2xl font-medium text-neutral-900">
            Analytics dashboard
          </h1>

          <label className="mt-8 block">
            <span className="font-mono text-xs text-neutral-500">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full border border-neutral-200 bg-white px-3 py-2.5 font-mono text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-400"
              autoComplete="current-password"
              required
            />
          </label>

          {error ? (
            <p className="mt-3 font-mono text-xs text-red-600">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-neutral-900 px-4 py-2.5 font-mono text-xs text-white transition-colors hover:bg-neutral-800 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </CrosshairFrame>
    </div>
  );
}
