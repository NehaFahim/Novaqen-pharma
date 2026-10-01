import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = String(body.email || '').trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ ok: false, message: 'Valid email is required.' }, { status: 400 });
  return NextResponse.json({ ok: true, demo: true, message: 'Demo subscription accepted. Connect Mailchimp credentials server-side for production.' });
}
