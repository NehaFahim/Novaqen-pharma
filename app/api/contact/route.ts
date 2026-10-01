import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get('email') || '').trim();
  const honeypot = String(form.get('website') || '').trim();
  const file = form.get('file');
  if (honeypot) return NextResponse.json({ ok: true, message: 'Received.' });
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ ok: false, message: 'Valid email is required.' }, { status: 400 });
  if (file instanceof File && file.size > 5 * 1024 * 1024) return NextResponse.json({ ok: false, message: 'Attachment must be 5MB or smaller.' }, { status: 400 });
  return NextResponse.json({ ok: true, demo: true, message: 'Demo enquiry accepted. Connect Nodemailer, reCAPTCHA v3 and admin notification credentials before production.' });
}
