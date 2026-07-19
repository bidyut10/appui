"use client";

import { useState, type SubmitEvent } from "react";
import { Eye, EyeOff, Loader } from "lucide-react";

import { LogoIcon } from "@/app/(marketing)/_components/Logo";
import { siteConfig } from "@/lib/site";

type DashboardLoginFormProps = Readonly<{
  onSuccess: () => void;
}>;

export function DashboardLoginForm({ onSuccess }: DashboardLoginFormProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="relative flex min-h-dvh w-full flex-col bg-neutral-50">
      <header className="relative z-10 flex items-center gap-2.5 px-5 py-5 md:px-8">
        <LogoIcon className="w-5 text-neutral-900" fill="currentColor" />
        <span className="font-sans text-sm font-medium text-neutral-800">
          {siteConfig.displayName}
        </span>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-16 md:px-8">
        <div className="w-full max-w-88">
          <p className="font-mono text-[10px] tracking-[0.18em] text-neutral-400 uppercase">
            Private analytics
          </p>
          <h1 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-neutral-900 md:text-[1.75rem]">
            Sign in
          </h1>
          <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-500">
            Enter the dashboard password to view traffic, components, and
            inbox.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <label className="block">
              <span className="sr-only">Password</span>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-3 pr-11 font-sans text-sm text-neutral-900 outline-none ring-0 transition-colors placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0"
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-lg p-1.5 text-neutral-400 transition-colors hover:text-neutral-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={16} aria-hidden />
                  ) : (
                    <Eye size={16} aria-hidden />
                  )}
                </button>
              </div>
            </label>

            {error ? (
              <p
                role="alert"
                className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 font-sans text-sm text-rose-700"
              >
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading || !password.trim()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <>
                  <Loader size={15} className="animate-spin" aria-hidden />
                  Signing in…
                </>
              ) : (
                "Continue"
              )}
            </button>
          </form>
        </div>
      </main>

      <footer className="relative z-10 px-5 py-5 text-center md:px-8">
        <p className="font-mono text-[10px] tracking-wide text-neutral-400">
          Authorized access only
        </p>
      </footer>
    </div>
  );
}
