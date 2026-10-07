import { redirect } from 'next/navigation';
import { BookOpenText, CalendarClock, CheckCircle2, Star } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { assignmentData, gradeData, mockAnnouncements } from '@/lib/data';
import { getSession } from '@/lib/auth';

export default function StudentPage() {
  const session = getSession();

  if (!session || session.role !== 'student') {
    redirect('/login');
  }

  return (
    <DashboardShell title="Student Portal">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
                <Star className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Student overview</p>
                <h2 className="text-2xl font-bold text-slate-900">My learning progress</h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {gradeData.map((item) => (
                <div key={item.subject} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-slate-800">{item.subject}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                      {item.grade}
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-200">
                    <div className="h-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700" style={{ width: `${item.score}%` }} />
                  </div>
                  <p className="mt-3 text-2xl font-bold text-slate-900">{item.score}%</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                <BookOpenText className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Assignments</h3>
            </div>
            <div className="space-y-3">
              {assignmentData.map((assignment) => (
                <div key={assignment.title} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div>
                    <p className="font-semibold text-slate-900">{assignment.title}</p>
                    <p className="text-sm text-slate-500">{assignment.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Due</p>
                    <p className="text-sm font-medium text-slate-700">{assignment.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Achievement</h3>
            </div>
            <div className="space-y-3">
              {[
                'Attendance is above target this month.',
                'Three assignments completed this week.',
                'Science project presentation is scheduled for Friday.',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
                <CalendarClock className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Announcements</h3>
            </div>
            <div className="space-y-3">
              {mockAnnouncements.slice(0, 2).map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
