import { NextResponse } from "next/server";

const TO = process.env.CONTACT_TO ?? "robin@swivelstudio.com";
// Until swivelstudio.com is verified in Resend, their shared sender works.
const FROM = process.env.CONTACT_FROM ?? "Swivel Studio <onboarding@resend.dev>";

type Body = { name?: string; email?: string; message?: string; company?: string };

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Could not read that request." }, { status: 400 });
  }

  // Honeypot: real people leave this alone. Answer 200 so bots learn nothing.
  if (body.company) return NextResponse.json({ ok: true });

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Add your name so I know who I'm replying to.";
  if (!email) errors.email = "Add an email address so I can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "That email address doesn't look right.";
  if (!message) errors.message = "Tell me a little about the project.";
  if (message.length > 5000) errors.message = "That's longer than this form can take — email it instead.";

  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY is not set — contact form cannot send.");
    return NextResponse.json(
      { error: "The form isn't connected yet. Please email robin@swivelstudio.com." },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Project enquiry from ${name}`,
      text: `${name}\n${email}\n\n${message}\n`,
    }),
  });

  if (!res.ok) {
    console.error("Resend rejected the send:", res.status, await res.text().catch(() => ""));
    return NextResponse.json(
      { error: "That didn't send. Please email robin@swivelstudio.com." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
