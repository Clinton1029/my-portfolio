import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // ✅ Here you can handle the data (log, save to DB, send to webhook, etc.)
    console.log("📩 New Contact Form Submission:", { name, email, message });

    // ✅ Example: pretend saving to DB
    // await db.contactMessages.create({ name, email, message });

    return NextResponse.json({
      success: true,
      message: "Message received successfully! 🚀",
    });
  } catch (err: any) {
    console.error("❌ API error:", err.message);
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}
