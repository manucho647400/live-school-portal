import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 });
}

export async function POST() {
  const response = NextResponse.json({ ok: true });

  response.cookies.set('school_portal_session', '', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
  });

  return response;
}
