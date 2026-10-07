import { CalendarClock } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';

const attendance = [
  { name: 'Math', rate: '96%', status: 'Excellent' },
  { name: 'Science', rate: '92%', status: 'Strong' },
  { name: 'English', rate: '94%', status: 'Excellent' },
  { name: 'History', rate: '89%', status: 'On track' },
];

export default function AttendancePage() {
  return (
    <DashboardShell title="Attendance">
      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
            <CalendarClock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Records</p>
            <h2 className="text-2xl font-bold text-slate-900">Attendance Summary</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {attendance.map((subject) => (
            <div key={subject.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-lg font-semibold text-slate-900">{subject.name}</p>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{subject.status}</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-200">
                <div className="h-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700" style={{ width: subject.rate }} />
              </div>
              <p className="mt-3 text-2xl font-bold text-slate-900">{subject.rate}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
