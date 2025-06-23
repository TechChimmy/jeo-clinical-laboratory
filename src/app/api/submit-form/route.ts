import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const scriptUrl = "https://script.google.com/macros/s/AKfycbzqrrYXIYayXwXgn0E46pVQU2k473C-IF5NJy2NWgN-NU1PI7vfk4BvC55vy_tCBLEK/exec"; // 🔁 Replace with your script URL

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Google Script error:", errText);
      return NextResponse.json({ success: false, error: errText }, { status: 500 });
    }

    const result = await response.text();
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
