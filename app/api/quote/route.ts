import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, organisation, country, product, quantity, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const sql = getDb();
    await sql`
      INSERT INTO quote_requests (name, email, phone, organisation, country, product, quantity, message)
      VALUES (${name}, ${email}, ${phone ?? null}, ${organisation ?? null}, ${country ?? null}, ${product ?? null}, ${quantity ?? null}, ${message ?? null})
    `;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote request error:", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
