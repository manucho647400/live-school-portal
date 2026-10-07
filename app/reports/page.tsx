import { redirect } from 'next/navigation';
import { BarChart3, TrendingUp } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { getSession } from '@/lib/auth';
import { financialReports } from '@/lib/finance-operations';

export default function ReportsPage() {
  const session = getSession();

  if (!session || (session.role !== 'admin' && session.role !== 'accountant')) {
    redirect('/login');
  }

  return (
    <DashboardShell title="Financial Reports">
      <div className="grid gap-6 lg:grid-cols-2">
        {financialReports.map((report) => (
          <div key={report.name} className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{report.period}</p>
                <h2 className="text-2xl font-bold text-slate-900">{report.name}</h2>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-slate-500">Current value</p>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{report.trend}</span>
              </div>
              <p className="mt-3 text-4xl font-bold text-slate-900">{report.value}</p>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-slate-700">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                <span className="font-medium">Performance summary</span>
              </div>
              <p className="text-sm text-slate-600">
                Reporting indicates consistent improvement in collections and operational efficiency across the current review period.
              </p>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
