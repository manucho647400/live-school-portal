import { Megaphone } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { mockAnnouncements } from '@/lib/data';

export default function AnnouncementsPage() {
  return (
    <DashboardShell title="Announcements">
      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
            <Megaphone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">School updates</p>
            <h2 className="text-2xl font-bold text-slate-900">Latest Announcements</h2>
          </div>
        </div>

        <div className="space-y-4">
          {mockAnnouncements.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{item.date}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
