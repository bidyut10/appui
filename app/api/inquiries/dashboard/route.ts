import { NextResponse } from "next/server";

import {
  getMongoConnectionHint,
  isAnalyticsConfigured,
  isValidAuthToken,
  readAuthCookie,
} from "@/lib/analytics/server";
import { getInquiries } from "@/lib/inquiries/server";

export async function GET(request: Request) {
  if (!isAnalyticsConfigured()) {
    return NextResponse.json(
      { error: "Dashboard not configured" },
      { status: 503 },
    );
  }

  const token = readAuthCookie(request.headers.get("cookie"));
  if (!isValidAuthToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const inquiries = await getInquiries();
    return NextResponse.json({ inquiries });
  } catch {
    return NextResponse.json(
      { error: "Failed to load messages", hint: getMongoConnectionHint() },
      { status: 500 },
    );
  }
}
