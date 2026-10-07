import Link from 'next/link';
import { BookOpen, CalendarClock, GraduationCap, ShieldCheck, Users } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: GraduationCap },
  { label: 'Student', href: '/student', icon: Users },
  { label: 'Parent', href: '/parent', icon: ShieldCheck },
  { label: 'Teacher', href: '/teachers', icon: BookOpen },
  { label: 'Admin', href: '/admin', icon: ShieldCheck },
  { label: 'Announcements', href: '/announcements', icon: CalendarClock },
];

export function DashboardShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <header className="mb-6 rounded-3xl bg-gradient-to-r from-brand-700 to-brand-500 p-6 text-white shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Northview Academy</p>
              <h1 className="mt-2 text-3xl font-bold">{title}</h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {navItems.map(({ label, href, icon: Icon }) => (
                <Link key={label} href={href} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        {children}
      </div>
    </main>
  );
}
