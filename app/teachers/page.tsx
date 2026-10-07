import { BookOpenText, LayoutDashboard, ShieldCheck, Users } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { adminMetrics, adminAlerts, portalOverview } from '@/lib/portal-data';

export default function AdminPage() {
  return (
    <DashboardShell title="Admin Overview">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-6">
          <section className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Live status</p>
                <h2 className="text-2xl font-bold text-slate-900">{portalOverview.liveStatus}</h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {adminMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">{metric.label}</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">{metric.value}</p>
                  <p className="mt-1 text-sm font-medium text-emerald-600">{metric.trend}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Upcoming school events</h3>
            </div>
            <div className="space-y-3">
              {portalOverview.upcomingEvents.map((event) => (
                <div key={event} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  {event}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Admin alerts</h3>
            </div>
            <div className="space-y-3">
              {adminAlerts.map((alert) => (
                <div key={alert} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  {alert}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <BookOpenText className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Quick actions</h3>
            </div>
            <div className="space-y-3">
              {['Publish announcement', 'Review attendance', 'Approve transport', 'Manage fees'].map((action) => (
                <button
                  key={action}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
