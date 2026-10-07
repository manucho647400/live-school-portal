import { cookies } from 'next/headers';

export type PortalUserRole = 'admin' | 'teacher' | 'student' | 'parent';

export type PortalSession = {
  email: string;
  name: string;
  role: PortalUserRole;
};

export const demoUsers: Record<
  string,
  { name: string; role: PortalUserRole; password: string }
> = {
  'admin@northview.edu': {
    name: 'Alicia Mukami',
    role: 'admin',
    password: 'password123',
  },
  'teacher@northview.edu': {
    name: 'Daniel Moyo',
    role: 'teacher',
    password: 'password123',
  },
  'student@northview.edu': {
    name: 'Mia Njeri',
    role: 'student',
    password: 'password123',
  },
  'parent@northview.edu': {
    name: 'Grace Njeri',
    role: 'parent',
    password: 'password123',
  },
};

export function getSession(): PortalSession | null {
  const cookieStore = cookies();
  const raw = cookieStore.get('school_portal_session')?.value;

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as PortalSession;
  } catch {
    return null;
  }
}

export function isAllowed(session: PortalSession | null, roles: PortalUserRole[]) {
  return !!session && roles.includes(session.role);
}
