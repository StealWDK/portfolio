import nodemailer from 'nodemailer';
import { renderEmailTemplate } from '../utils/emailTemplates';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

interface SendEmailOptions {
  to: string;
  subject: string;
  template: string;
  data: any;
}

export const sendEmail = async ({ to, subject, template, data }: SendEmailOptions) => {
  // In development, we might not want to actually send emails if not configured
  if (process.env.NODE_ENV === 'development' && !process.env.SMTP_HOST) {
    console.log(`[EMAIL DEV] To: ${to}, Subject: ${subject}, Template: ${template}`);
    return;
  }

  const html = renderEmailTemplate(template, data);
  
  await transporter.sendMail({
    from: `"Home Repair Company" <${process.env.EMAIL_FROM}>`,
    to,
    subject,
    html
  });
};
