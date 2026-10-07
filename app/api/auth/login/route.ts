import { NextResponse } from 'next/server';

const validUsers = {
  'admin@northview.edu': { name: 'Alicia Mukami', role: 'admin', password: 'password123' },
  'teacher@northview.edu': { name: 'Daniel Moyo', role: 'teacher', password: 'password123' },
  'student@northview.edu': { name: 'Mia Njeri', role: 'student', password: 'password123' },
  'parent@northview.edu': { name: 'Grace Njeri', role: 'parent', password: 'password123' },
  'accountant@northview.edu': { name: 'James Kariuki', role: 'accountant', password: 'password123' },
} as const;

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = validUsers[email as keyof typeof validUsers];

  if (!user || user.password !== password) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
  }

  const session = {
    email,
    name: user.name,
    role: user.role,
  };

  const redirectMap: Record<string, string> = {
    admin: '/admin',
    teacher: '/teachers',
    student: '/student',
    parent: '/parent',
    accountant: '/accountant',
  };

  const response = NextResponse.json({
    ok: true,
    redirectTo: redirectMap[user.role] || '/dashboard',
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
