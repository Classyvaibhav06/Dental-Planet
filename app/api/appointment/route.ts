export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, date, time, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "amanrajput79644@gmail.com",
        pass: "rpymvxsxekkciiuh",
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Dental Planet" <amanrajput79644@gmail.com>`,
      to: "kbdentalplanet@gmail.com",
      subject: "🦷 New Appointment Booking",
      html: `
        <h2>New Appointment</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Dental Planet" <amanrajput79644@gmail.com>`,
      to: email,
      subject: "✅ Appointment Confirmed",
      html: `
        <p>Hello <b>${name}</b>,</p>
        <p>Your dental appointment has been successfully booked.</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p>We look forward to seeing you 😊</p>
        <br/>
        <p>— Dental Planet</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR ❌", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
