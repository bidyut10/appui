"use client";

import { LockKeyhole } from "lucide-react";
import { useState, type SubmitEvent } from "react";

import { AnnotatedText } from "@/components/underlines/AnnotatedText";
import { BOX_PATTERN } from "@/lib/shared";

type DashboardLoginFormProps = Readonly<{
  onSuccess: () => void;
}>;

export function DashboardLoginForm({ onSuccess }: DashboardLoginFormProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
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
      <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
        Dashboard / Private
      </p>

      <h1 className="mt-3 font-serif text-2xl text-neutral-900 md:text-3xl">
        Analytics{" "}
        <AnnotatedText variant="underline" color="text-cyan-200">
          overview
        </AnnotatedText>
      </h1>

      <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-neutral-500">
        Sign in to view live traffic, component clicks, and visitor geography.
      </p>

      <form
        onSubmit={onSubmit}
        className="relative mt-8 overflow-hidden rounded-xl border border-neutral-100 bg-white"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={BOX_PATTERN}
        />

        <div className="relative z-10 p-6 md:p-8">
          <div className="mb-6 flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-neutral-900 text-white">
              <LockKeyhole size={16} aria-hidden />
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-neutral-900">
                Protected access
              </p>
              <p className="font-mono text-[10px] text-neutral-400">
                Dashboard password required
              </p>
            </div>
          </div>

          <label className="block">
            <span className="font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 font-sans text-sm text-neutral-900 transition-colors outline-none focus:border-neutral-300 focus:bg-white"
              autoComplete="current-password"
              required
            />
          </label>

          {error ? (
            <p className="mt-3 font-sans text-sm text-red-600">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-lg bg-neutral-900 px-4 py-2.5 font-sans text-sm text-white transition-colors hover:bg-neutral-800 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
}
