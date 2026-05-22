import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, company, phone, interest, message } = body;

  // --- Validation ---
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // --- Transporter ---
  // In development, use Ethereal (fake SMTP) since residential ISPs block outbound SMTP ports.
  // In production (Vercel), use the real GreenGeeks SMTP credentials from env vars.
  let transporter: nodemailer.Transporter;
  let previewUrl: string | false = false;
  let recipientAddress: string;

  if (process.env.NODE_ENV !== "production") {
    const testAccount = await nodemailer.createTestAccount();
    recipientAddress = testAccount.user;   // Ethereal captures it in its own inbox
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });
  } else {
    recipientAddress = process.env.CONTACT_EMAIL ?? process.env.SMTP_USER!;
    const port = Number(process.env.SMTP_PORT ?? 587);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="background:#0f172a;color:#fff;padding:20px 24px;margin:0;font-size:18px;">
        New Inquiry — HIGHTECH Vending Machine
      </h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr style="background:#f8fafc;"><td style="padding:12px 24px;font-weight:bold;width:140px;">Name</td><td style="padding:12px 24px;">${name}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;">Email</td><td style="padding:12px 24px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr style="background:#f8fafc;"><td style="padding:12px 24px;font-weight:bold;">Company</td><td style="padding:12px 24px;">${company || "—"}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;">Phone</td><td style="padding:12px 24px;">${phone || "—"}</td></tr>
        <tr style="background:#f8fafc;"><td style="padding:12px 24px;font-weight:bold;">Interest</td><td style="padding:12px 24px;">${interest || "—"}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:12px 24px;white-space:pre-wrap;">${message}</td></tr>
      </table>
      <p style="background:#f1f5f9;padding:12px 24px;margin:0;font-size:12px;color:#64748b;">
        Sent via hightechvendingmachine.com contact form
      </p>
    </div>
  `;

  const fromAddress =
    process.env.NODE_ENV !== "production"
      ? undefined                          // Ethereal fills this automatically
      : `"HIGHTECH Contact Form" <${process.env.SMTP_USER}>`;

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: recipientAddress,
      replyTo: email,
      subject: `New Inquiry from ${name}${interest ? ` — ${interest}` : ""}`,
      html,
    });

    if (process.env.NODE_ENV !== "production") {
      previewUrl = nodemailer.getTestMessageUrl(info);
      console.log("📧 Ethereal preview URL:", previewUrl);
    }

    return NextResponse.json({
      success: true,
      ...(previewUrl ? { previewUrl } : {}),
    });
  } catch (err: unknown) {
    const e = err as { code?: string; message?: string; command?: string };
    console.error("SMTP error:", err);
    // TODO: remove debug fields before final launch
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
        _debug: { code: e.code, message: e.message, command: e.command },
      },
      { status: 500 }
    );
  }
}
