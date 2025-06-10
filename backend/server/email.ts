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
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: emailReceiver,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
