import { NextRequest, NextResponse } from 'next/server';
import { demoUsers } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  const user = demoUsers[email as string];

  if (!user || user.password !== password) {
    return NextResponse.json(
      { error: 'Invalid email or password.' },
      { status: 401 }
    );
  }

  const session = {
    email,
    name: user.name,
    role: user.role,
  };

  const response = NextResponse.json({
    ok: true,
    redirectTo: user.role === 'admin' ? '/admin' : user.role === 'teacher' ? '/teachers' : '/dashboard',
  });

  response.cookies.set('school_portal_session', JSON.stringify(session), {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 8,
  });

  return response;
}
