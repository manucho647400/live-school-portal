import { Users } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { parentSummary } from '@/lib/data';

export default function ParentsPage() {
  return (
    <DashboardShell title="Parent Portal">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Guardian view</p>
              <h2 className="text-2xl font-bold text-slate-900">Student Summary</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {parentSummary.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Parent Notes</h3>
          <div className="mt-4 space-y-4">
            {[
              'Student performance is improving in mathematics and science.',
              'Next parent meeting is on Thursday at 4:00 PM.',
              'Tuition account is fully up to date.',
            ].map((note) => (
              <div key={note} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                {note}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
