import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot spam protection
    if (body.honeypot && body.honeypot.trim()) {
      return NextResponse.json({ ok: true, message: "Received" });
    }

    // Basic validation
    const required = ["name", "email", "company", "role"];
    const missing = required.filter((f) => !body[f] || !String(body[f]).trim());
    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields", fields: missing },
        { status: 400 }
      );
    }

    // TODO: In production, integrate with your CRM (HubSpot, Salesforce, Zoho, etc.)
    // or send to a webhook endpoint. For now, log and return success.
    const lead = {
      name: body.name,
      email: body.email,
      company: body.company,
      role: body.role,
      volume: body.volume || "",
      message: body.message || "",
      source: "website-get-started",
      submittedAt: new Date().toISOString(),
    };

    // eslint-disable-next-line no-console
    console.log("[LEAD] New demo request:", lead);

    return NextResponse.json({ ok: true, message: "Lead received" });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[LEAD] Error processing lead:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
