// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;
    const { name, email, message } = body;

    // 1. Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 2. Validate env vars
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS in environment.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // 3. Setup transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, // ✅ use STARTTLS instead of 465
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // 4. Email options
    const mailOptionsToAdmin = {
      from: emailUser,
      to: emailUser,
      subject: `New Inquiry from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    };

    const mailOptionsToUser = {
      from: emailUser,
      to: email,
      subject: "We Received Your Message!",
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for reaching out. We’ll get back to you shortly.</p>
        <p><b>Your message:</b><br/>${message}</p>
      `,
    };

    // 5. Send both emails concurrently
    await Promise.all([
      transporter.sendMail(mailOptionsToAdmin),
      transporter.sendMail(mailOptionsToUser),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
