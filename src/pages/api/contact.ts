import type { APIRoute } from 'astro';
import { query, isDbConnected } from '../../server/db';
import { sendContactEmail } from '../../server/resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let name = '';
    let email = '';
    let subject = '';
    let message = '';

    if (contentType.includes('application/json')) {
      const data = await request.json();
      name = (data.name || '').trim();
      email = (data.email || '').trim();
      subject = (data.subject || '').trim();
      message = (data.message || '').trim();
    } else {
      const formData = await request.formData();
      name = (formData.get('name')?.toString() || '').trim();
      email = (formData.get('email')?.toString() || '').trim();
      subject = (formData.get('subject')?.toString() || '').trim();
      message = (formData.get('message')?.toString() || '').trim();
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name, email, and message are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please enter a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 1. Persist to Postgres if configured
    try {
      if (isDbConnected()) {
        const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';
        await query(
          'INSERT INTO contact_submissions (name, email, subject, message, ip_address, user_agent) VALUES ($1, $2, $3, $4, $5, $6)',
          [name, email, subject, message, clientIp, userAgent]
        );
      }
    } catch (dbErr) {
      console.warn('Database insert failed, continuing to email dispatch:', dbErr);
    }

    // 2. Dispatch email notification via Resend
    const emailResult = await sendContactEmail({ name, email, subject, message });

    // Check if client expects Turbo Stream or JSON
    const acceptHeader = request.headers.get('accept') || '';
    if (acceptHeader.includes('text/vnd.turbo-stream.html')) {
      const streamHtml = `
        <turbo-stream action="replace" target="contact-form-frame">
          <template>
            <div class="glass-card bg-emerald-950/40 border-emerald-500/50 p-8 rounded-2xl text-center space-y-4 animate-slide-in">
              <div class="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <h3 class="text-xl font-bold font-mono text-emerald-300">Message Received!</h3>
              <p class="text-sm text-mono-200 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <span class="font-bold text-mono-50">${name}</span>. I've received your note and will reply directly to <span class="font-bold text-mono-50">${email}</span> promptly.
              </p>
              <div class="pt-4">
                <a href="/contact" class="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg bg-mono-900 border border-mono-700 text-mono-300 hover:text-mono-50">
                  <span>Send Another Message</span>
                </a>
              </div>
            </div>
          </template>
        </turbo-stream>
      `;
      return new Response(streamHtml, {
        status: 200,
        headers: { 'Content-Type': 'text/vnd.turbo-stream.html' },
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your message has been received! I will get back to you shortly.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('Contact form submission error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'An unexpected error occurred. Please try again or email directly.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
