import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, organisation, country, enquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    const sql = getDb();
    await sql`
      INSERT INTO contact_submissions (name, email, phone, organisation, country, enquiry_type, message)
      VALUES (${name}, ${email}, ${phone ?? null}, ${organisation ?? null}, ${country ?? null}, ${enquiryType ?? null}, ${message})
    `;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
