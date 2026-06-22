import { NextResponse } from "next/server";

import { geoFromRequest } from "@/lib/analytics/geo";
import { trackEvents } from "@/lib/analytics/track-event";
import { parseTrackPayloads } from "@/lib/analytics/validate";
import { getAnalyticsDb } from "@/lib/analytics/db";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const payloads = parseTrackPayloads(body);
  if (payloads.length === 0) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const db = await getAnalyticsDb();
  if (!db) {
    return new NextResponse(null, { status: 204 });
  }

  const geo = geoFromRequest(request);

  try {
    await trackEvents(payloads, geo);
    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse(null, { status: 204 });
  }
}
