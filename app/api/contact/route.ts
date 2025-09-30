// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, message }: ContactFormData = await request.json();

    // 1. Validate required input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 2. Validate environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error(
        "Environment variables EMAIL_USER and EMAIL_PASS are not set."
      );
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,         // ✅ use 587 instead of 465
  secure: false,     // false = STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // must be an app password
  },
});

    // Email options for the admin
    const mailOptionsToAdmin = {
      from: emailUser,
      to: emailUser,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f7f9fc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 600px; margin: auto;">
          <div style="background-color: #007bff; color: #fff; padding: 15px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 20px;">
            <p>You have received a new message from your website contact form:</p>
            <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; margin-top: 15px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; word-wrap: break-word;">${message}</p>
            </div>
            <p style="margin-top: 25px; font-size: 14px; color: #777;">This message was sent from the Prescripto contact page.</p>
          </div>
        </div>
      `,
    };

    // Email options for the user
    const mailOptionsToUser = {
      from: emailUser,
      to: email,
      subject: "We Received Your Message!",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f7f9fc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 600px; margin: auto;">
          <div style="background-color: #28a745; color: #fff; padding: 15px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">Message Received!</h2>
          </div>
          <div style="padding: 20px;">
            <p>Hello ${name},</p>
            <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
            <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; margin-top: 15px;">
              <p><strong>Your Message:</strong></p>
              <p style="white-space: pre-wrap; word-wrap: break-word;">${message}</p>
            </div>
            <p style="margin-top: 25px; font-size: 14px; color: #777;">Best regards,<br>CLINTON YADE OTIENO</p>
          </div>
        </div>
      `,
    };

    // 4. Send both emails concurrently
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