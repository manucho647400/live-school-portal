import { redirect } from 'next/navigation';
import { BookOpenText } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { teacherAssignments, teacherSchedule } from '@/lib/portal-data';
import { getSession } from '@/lib/auth';

export default function TeachersPage() {
  const session = getSession();

  if (!session || (session.role !== 'teacher' && session.role !== 'admin')) {
    redirect('/login');
  }

  return (
    <DashboardShell title="Teacher Portal">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
              <BookOpenText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Teaching schedule</p>
              <h2 className="text-2xl font-bold text-slate-900">Class agenda</h2>
            </div>
          </div>

          <div className="space-y-4">
            {teacherAssignments.map((assignment) => (
              <div key={assignment.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{assignment.teacher}</h3>
                    <p className="text-sm text-slate-500">{assignment.subject} · {assignment.class}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                    {assignment.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{assignment.agenda}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Today&apos;s timetable</h3>
          <div className="mt-4 space-y-3">
            {teacherSchedule.map((slot) => (
              <div key={`${slot.day}-${slot.time}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{slot.subject}</p>
                <p className="mt-1 text-sm text-slate-600">{slot.day} · {slot.time}</p>
                <p className="mt-1 text-sm text-slate-500">{slot.room}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
