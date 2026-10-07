import { redirect } from 'next/navigation';
import { AlertCircle, FileText, PiggyBank, WalletCards } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { payrollRecords, invoiceRecords, financialReports } from '@/lib/finance-operations';
import { getSession } from '@/lib/auth';

export default function AccountantOperationsPage() {
  const session = getSession();

  if (!session || (session.role !== 'admin' && session.role !== 'accountant')) {
    redirect('/login');
  }

  return (
    <DashboardShell title="Finance Operations">
      <div className="space-y-6">
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-soft lg:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Finance overview</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">Financial Reports</h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {financialReports.map((report) => (
                <div key={report.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">{report.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{report.value}</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">{report.trend}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{report.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Report notes</h3>
            </div>
            <div className="space-y-3">
              {['Revenue is ahead of plan for this month.', 'Expenses remain in budget expectation.', 'Collections improved after reminder cycle.'].map((note) => (
                <div key={note} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">{note}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <WalletCards className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Payroll</p>
                <h2 className="text-2xl font-bold text-slate-900">Salary Sheet</h2>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-slate-50 text-sm text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Employee</th>
                    <th className="px-4 py-3 font-semibold">Role</th>
                    <th className="px-4 py-3 font-semibold">Net Pay</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {payrollRecords.map((record) => (
                    <tr key={record.id} className="text-sm text-slate-700">
                      <td className="px-4 py-3 font-medium">{record.employee}</td>
                      <td className="px-4 py-3">{record.role}</td>
                      <td className="px-4 py-3">{record.netPay}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${record.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Invoices</p>
                <h2 className="text-2xl font-bold text-slate-900">Fee Invoices</h2>
              </div>
            </div>

            <div className="space-y-3">
              {invoiceRecords.map((invoice) => (
                <div key={invoice.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">{invoice.student}</p>
                      <p className="text-sm text-slate-500">{invoice.id} · {invoice.grade}</p>
                    </div>
                    <span className={`rounded-full px-2 py-1 text-xs font-semibold ${invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-700' : invoice.status === 'Partial' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'}`}>
                      {invoice.status}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                    <span>{invoice.amount}</span>
                    <span>{invoice.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
