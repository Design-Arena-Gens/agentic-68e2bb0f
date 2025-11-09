import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    // In a real app, integrate email (Resend, SES) or store in DB.
    // Here, we just simulate success without external services to keep deploy simple.
    console.log("Contact message:", { name, email, message });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
