// email.ts
import nodemailer from "nodemailer";

type EmailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendEmail({ name, email, subject, message }: EmailPayload) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpUser = process.env.EMAIL_USER;
  const smtpPass = process.env.EMAIL_PASS;
  const emailReceiver = process.env.EMAIL_RECEIVER;

  if (!smtpHost || !smtpUser || !smtpPass || !emailReceiver) {
    throw new Error("SMTP or email configuration missing in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${smtpUser}>`, 
    to: emailReceiver,
    subject: subject,
    replyTo: email,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
