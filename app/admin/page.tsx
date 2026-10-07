import { redirect } from 'next/navigation';
import { DashboardShell } from '@/components/dashboard-shell';
import { assignmentData, dashboardStats, gradeData, mockAnnouncements } from '@/lib/data';
import { BookOpenCheck, CalendarClock, Megaphone, Sparkles, Users } from 'lucide-react';
import { getSession } from '@/lib/auth';

export default function DashboardPage() {
  const session = getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <DashboardShell title="Dashboard">
      <div className="mb-6 rounded-3xl bg-white p-5 shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Welcome back</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">{session.name}</h2>
        <p className="mt-1 text-sm text-slate-600">Role: {session.role}</p>
      </div>

      <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-brand-50 p-2 text-brand-700">
                {index === 0 ? <Users className="h-5 w-5" /> : index === 1 ? <BookOpenCheck className="h-5 w-5" /> : index === 2 ? <CalendarClock className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{stat.trend}</span>
            </div>
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Academic Snapshot</h2>
            </div>
            <div className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">Term 2</div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-brand-100 p-2 text-brand-700"><BookOpenCheck className="h-5 w-5" /></div>
                <p className="font-semibold text-slate-900">Assignments</p>
              </div>
              <div className="space-y-3">
                {assignmentData.slice(0, 3).map((assignment) => (
                  <div key={assignment.title} className="flex items-center justify-between border-b border-slate-200 pb-2 last:border-none last:pb-0">
                    <div>
                      <p className="font-medium text-slate-800">{assignment.title}</p>
                      <p className="text-sm text-slate-500">{assignment.subject}</p>
                    </div>
                    <span className="text-xs font-medium text-slate-500">{assignment.due}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700"><Sparkles className="h-5 w-5" /></div>
                <p className="font-semibold text-slate-900">Performance</p>
              </div>
              <div className="space-y-3">
                {gradeData.map((item) => (
                  <div key={item.subject}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-700">{item.subject}</span>
                      <span className="font-semibold text-slate-900">{item.grade}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-200">
                      <div className="h-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700" style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-amber-100 p-2 text-amber-700"><Megaphone className="h-5 w-5" /></div>
              <h3 className="text-xl font-bold text-slate-900">Announcements</h3>
            </div>
            <div className="space-y-4">
              {mockAnnouncements.map((announcement) => (
                <div key={announcement.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-800">{announcement.title}</p>
                    <span className="text-xs font-medium text-slate-500">{announcement.date}</span>
                  </div>
                  <p className="text-sm text-slate-600">{announcement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </DashboardShell>
  );
}
