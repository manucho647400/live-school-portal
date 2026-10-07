import { BookOpen } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { classSchedule } from '@/lib/data';

export default function ClassesPage() {
  return (
    <DashboardShell title="Classes">
      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Schedule</p>
            <h2 className="text-2xl font-bold text-slate-900">Class Timetable</h2>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left">
            <thead className="bg-slate-50 text-sm text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Day</th>
                <th className="px-4 py-3 font-semibold">Time</th>
                <th className="px-4 py-3 font-semibold">Subject</th>
                <th className="px-4 py-3 font-semibold">Room</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {classSchedule.map((item) => (
                <tr key={`${item.day}-${item.time}`} className="text-sm text-slate-700">
                  <td className="px-4 py-3 font-medium">{item.day}</td>
                  <td className="px-4 py-3">{item.time}</td>
                  <td className="px-4 py-3">{item.subject}</td>
                  <td className="px-4 py-3">{item.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
