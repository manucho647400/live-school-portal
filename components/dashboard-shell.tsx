import Link from 'next/link';
import { AlertCircle, BarChart3, BookOpen, DollarSign, FileText, GraduationCap, LogOut, ShieldCheck, Users, WalletCards } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: GraduationCap },
  { label: 'Admin', href: '/admin', icon: ShieldCheck },
  { label: 'Accountant', href: '/accountant', icon: DollarSign },
  { label: 'Finance', href: '/finance', icon: BarChart3 },
  { label: 'Payroll', href: '/payroll', icon: WalletCards },
  { label: 'Invoices', href: '/invoices', icon: FileText },
  { label: 'Reports', href: '/reports', icon: BarChart3 },
  { label: 'Teacher', href: '/teachers', icon: BookOpen },
  { label: 'Students', href: '/students', icon: Users },
  { label: 'Alerts', href: '/accountant', icon: AlertCircle },
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
              <button
                type="button"
                onClick={async () => {
                  await fetch('/api/auth/logout', { method: 'POST' });
                  window.location.href = '/login';
                }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-950/30"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </header>

        {children}
      </div>
    </main>
  );
}
