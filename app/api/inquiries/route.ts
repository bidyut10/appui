import { NextResponse } from "next/server";

import { parseInquiryBody, submitInquiry } from "@/lib/inquiries/server";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = parseInquiryBody(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const result = await submitInquiry(parsed.data);
  if (!result.ok) {
    const status = result.error.includes("recently") ? 429 : 503;
    return NextResponse.json({ error: result.error }, { status });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
