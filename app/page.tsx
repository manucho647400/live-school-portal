import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, ShieldCheck, Users, DollarSign } from 'lucide-react';

const features = [
  {
    title: 'Student portal',
    description: 'Real-time access to grades, announcements, and schedules.',
    icon: GraduationCap,
  },
  {
    title: 'Teacher tools',
    description: 'Track attendance, manage classes, and publish updates fast.',
    icon: BookOpen,
  },
  {
    title: 'Finance management',
    description: 'Track fees, payments, expenses, and financial reports for the school.',
    icon: DollarSign,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 lg:px-10">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-brand-500 p-2 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-semibold">Northview Academy</p>
              <p className="text-xs text-slate-300">Live school portal</p>
            </div>
          </div>
          <Link
            href="/login"
            className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-brand-400 hover:text-brand-200"
          >
            Sign in
          </Link>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
              Built for modern schools
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
              A live portal that keeps the whole school connected.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-300">
              Manage attendance, assignments, announcements, student performance, and school finances from one centralized platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400"
              >
                Open dashboard <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:border-slate-500"
              >
                Demo portal
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-brand-950/30">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Today</p>
                <p className="mt-2 text-2xl font-bold">Academic summary</p>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-300">
                94.8% attendance
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'New announcements', value: '12' },
                { label: 'Assignments due', value: '42' },
                { label: 'Students active', value: '1,248' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="text-2xl font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-6 flex items-center gap-3">
            <Users className="h-5 w-5 text-brand-300" />
            <h2 className="text-2xl font-bold">Built for every role</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-4 inline-flex rounded-xl bg-brand-500/10 p-3 text-brand-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
                <p className="text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
