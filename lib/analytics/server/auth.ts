/**
 * Password gate for /dashboard.
 *
 * The cookie stores a SHA-256 hash of ANALYTICS_DASHBOARD_SECRET — not the raw
 * password — so a leaked cookie value still doesn't reveal the secret.
 */
import { createHash, timingSafeEqual } from "node:crypto";

import { AUTH_COOKIE } from "@/lib/analytics/constants";

function authToken(): string | null {
  const secret = process.env.ANALYTICS_DASHBOARD_SECRET;
  if (!secret) return null;
  return createHash("sha256").update(secret).digest("hex");
}

export function verifyDashboardPassword(password: string): boolean {
  const secret = process.env.ANALYTICS_DASHBOARD_SECRET;
  if (!secret || !password) return false;

  try {
    const a = Buffer.from(secret, "utf8");
    const b = Buffer.from(password, "utf8");
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function isValidAuthToken(token: string | undefined): boolean {
  const expected = authToken();
  if (!expected || !token) return false;

  try {
    const a = Buffer.from(expected, "utf8");
    const b = Buffer.from(token, "utf8");
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function readAuthCookie(
  cookieHeader: string | null | undefined,
): string | undefined {
  if (!cookieHeader) return undefined;

  for (const part of cookieHeader.split(";")) {
    const [name, ...rest] = part.trim().split("=");
    if (name === AUTH_COOKIE) {
      return rest.join("=");
    }
  }

  return undefined;
}

export function authCookieOptions() {
  return {
    name: AUTH_COOKIE,
    value: authToken() ?? "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}
