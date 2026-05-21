import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, phone, email, service, message } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1d4ed8, #4f46e5); padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
        <p style="color: #bfdbfe; margin: 6px 0 0; font-size: 14px;">Asees Passport & Visa Services Website</p>
      </div>
      <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 140px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${phone}</td>
          </tr>
          ${email ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${email}</td>
          </tr>` : ""}
          ${service ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Service</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${service}</td>
          </tr>` : ""}
          ${message ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #0f172a;">${message.replace(/\n/g, "<br>")}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top: 20px; padding: 12px; background: #dbeafe; border-radius: 8px; font-size: 13px; color: #1e40af;">
          📅 Received: ${new Date().toLocaleString("en-CA", { timeZone: "America/Toronto", dateStyle: "full", timeStyle: "short" })}
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Asees Website" <${process.env.GMAIL_USER}>`,
    to: "aseespvs@gmail.com",
    replyTo: email || undefined,
    subject: `New Inquiry: ${service || "General"} — ${name}`,
    html,
  });

  return NextResponse.json({ success: true });
}
