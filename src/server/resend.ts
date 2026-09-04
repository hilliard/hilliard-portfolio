import { Resend } from 'resend';

const resendApiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  const recipient = process.env.CONTACT_TO_EMAIL || 'hilliards@gmail.com';
  const sender = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  if (!resend) {
    console.info('[Mock Email Delivery] Resend not configured. Message received:', {
      to: recipient,
      from: `${data.name} <${data.email}>`,
      subject: data.subject || 'New Contact from Portfolio',
      message: data.message,
    });
    return { success: true, mock: true };
  }

  try {
    const result = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: data.email,
      subject: data.subject ? `[Portfolio] ${data.subject}` : `[Portfolio Inquiry] From ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject || 'N/A'}\n\nMessage:\n${data.message}`,
      html: `
        <div style="font-family: monospace; background: #0f172a; color: #f8fafc; padding: 24px; border-radius: 8px;">
          <h2 style="color: #f59e0b; margin-top: 0;">New Contact Inquiry: Hilliard Portfolio</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #38bdf8;">${data.email}</a></p>
          <p><strong>Subject:</strong> ${data.subject || 'Portfolio Inquiry'}</p>
          <hr style="border: 1px solid #1e293b; margin: 20px 0;" />
          <div style="white-space: pre-wrap; background: #020617; padding: 16px; border-radius: 6px; color: #e2e8f0;">
            ${data.message}
          </div>
        </div>
      `,
    });
    return { success: true, id: result.data?.id };
  } catch (err: any) {
    console.error('Failed to send email via Resend:', err);
    return { success: false, error: err.message };
  }
}
