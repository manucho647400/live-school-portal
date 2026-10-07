import { BookOpenCheck, GraduationCap, Megaphone, Sparkles, Users } from 'lucide-react';
import { StatCard, navItems, NavigationPill } from '@/components/ui';
import { assignmentData, dashboardStats, gradeData, mockAnnouncements } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <header className="mb-8 rounded-3xl bg-gradient-to-r from-brand-700 to-brand-500 p-6 text-white shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-brand-100">School Portal</p>
              <h1 className="text-3xl font-bold md:text-4xl">Northview Academy</h1>
            </div>
            <div className="flex flex-wrap gap-3">
              {navItems.map((item) => (
                <NavigationPill
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  active={item.active}
                />
              ))}
            </div>
          </div>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatCard
              key={stat.label}
              title={stat.label}
              value={stat.value}
              trend={stat.trend}
              icon={<GraduationCap className="h-5 w-5" />}
            />
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Overview</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">Academic Snapshot</h2>
              </div>
              <div className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                Term 2
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-xl bg-brand-100 p-2 text-brand-700">
                    <BookOpenCheck className="h-5 w-5" />
                  </div>
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
                  <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                    <Sparkles className="h-5 w-5" />
                  </div>
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
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
                          style={{ width: `${item.score}%` }}
                        />
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
                <div className="rounded-xl bg-amber-100 p-2 text-amber-700">
                  <Megaphone className="h-5 w-5" />
                </div>
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

            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-violet-100 p-2 text-violet-700">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Quick Actions</h3>
              </div>
              <div className="grid gap-3">
                {['View timetable', 'Submit assignment', 'Check grades', 'Message mentor'].map((action) => (
                  <button
                    key={action}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
