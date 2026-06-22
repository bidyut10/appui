import { NextResponse } from "next/server";

import { isValidAuthToken, readAuthCookie } from "@/lib/analytics/auth";
import { getMongoConnectionHint, getAnalyticsDb, isAnalyticsConfigured } from "@/lib/analytics/db";
import { parseDateRange } from "@/lib/analytics/date-range";
import { getDashboardStats } from "@/lib/analytics/get-stats";

export async function GET(request: Request) {
  if (!isAnalyticsConfigured()) {
    return NextResponse.json({ error: "Analytics not configured" }, { status: 503 });
  }

  const token = readAuthCookie(request.headers.get("cookie"));
  if (!isValidAuthToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const range = parseDateRange(searchParams);

  if (searchParams.has("from") || searchParams.has("to")) {
    if (!range) {
      return NextResponse.json({ error: "Invalid date range" }, { status: 400 });
    }
  }

  try {
    const db = await getAnalyticsDb();
    if (!db) {
      return NextResponse.json(
        { error: "Database unavailable", hint: getMongoConnectionHint() },
        { status: 503 },
      );
    }

    const stats = await getDashboardStats(range);
    if (!stats) {
      return NextResponse.json(
        { error: "Database unavailable", hint: getMongoConnectionHint() },
        { status: 503 },
      );
    }

    return NextResponse.json(stats);
  } catch {
    return NextResponse.json({ error: "Failed to load stats" }, { status: 500 });
  }
}
