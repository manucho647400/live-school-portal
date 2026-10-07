import { redirect } from 'next/navigation';
import { CreditCard, FileText, Landmark, Wallet } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { getSession } from '@/lib/auth';
import { payrollRecords } from '@/lib/finance-operations';

export default function PayrollPage() {
  const session = getSession();

  if (!session || (session.role !== 'admin' && session.role !== 'accountant')) {
    redirect('/login');
  }

  return (
    <DashboardShell title="Payroll Management">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
              <Wallet className="h-5 w-5" />
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
                  <th className="px-4 py-3 font-semibold">Basic</th>
                  <th className="px-4 py-3 font-semibold">Deductions</th>
                  <th className="px-4 py-3 font-semibold">Net</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {payrollRecords.map((record) => (
                  <tr key={record.id} className="text-sm text-slate-700">
                    <td className="px-4 py-3 font-medium">{record.employee}</td>
                    <td className="px-4 py-3">{record.role}</td>
                    <td className="px-4 py-3">{record.basicSalary}</td>
                    <td className="px-4 py-3">{record.deductions}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-600">{record.netPay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Payroll actions</h3>
            </div>
            <div className="space-y-3">
              {['Approve batch', 'Generate payslips', 'Export payroll', 'Review deductions'].map((action) => (
                <button key={action} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                  {action}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
                <Landmark className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Payroll snapshot</h3>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Gross payroll</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">$22,200</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Net payroll</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">$20,260</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
