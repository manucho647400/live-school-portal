import { redirect } from 'next/navigation';
import { BarChart3, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { accountantMetrics, feeStructure, studentPayments, expenseCategories, financialAlerts } from '@/lib/accountant-data';
import { getSession } from '@/lib/auth';

export default function AccountantPage() {
  const session = getSession();

  if (!session || (session.role !== 'admin' && session.role !== 'accountant')) {
    redirect('/login');
  }

  return (
    <DashboardShell title="Finance & Accounts">
      <div className="space-y-6">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {accountantMetrics.map((metric, index) => (
            <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-xl bg-emerald-50 p-2 text-emerald-700">
                  {index === 0 ? (
                    <DollarSign className="h-5 w-5" />
                  ) : index === 1 ? (
                    <AlertCircle className="h-5 w-5" />
                  ) : index === 2 ? (
                    <TrendingUp className="h-5 w-5" />
                  ) : (
                    <BarChart3 className="h-5 w-5" />
                  )}
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{metric.trend}</span>
              </div>
              <p className="text-sm text-slate-500">{metric.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{metric.value}</p>
            </div>
          ))}
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Financial overview</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Fee Structure by Grade</h2>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-50 text-sm text-slate-600">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Level</th>
                      <th className="px-4 py-3 font-semibold">Tuition</th>
                      <th className="px-4 py-3 font-semibold">Facilities</th>
                      <th className="px-4 py-3 font-semibold">Transport</th>
                      <th className="px-4 py-3 font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {feeStructure.map((fee) => (
                      <tr key={fee.level} className="text-sm text-slate-700">
                        <td className="px-4 py-3 font-medium">{fee.level}</td>
                        <td className="px-4 py-3">{fee.tuition}</td>
                        <td className="px-4 py-3">{fee.facilities}</td>
                        <td className="px-4 py-3">{fee.transport}</td>
                        <td className="px-4 py-3 font-semibold text-emerald-600">{fee.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Expense tracking</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Budget Allocation</h2>
                </div>
              </div>

              <div className="space-y-4">
                {expenseCategories.map((expense) => (
                  <div key={expense.category} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-medium text-slate-900">{expense.category}</p>
                      <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                        {expense.status}
                      </span>
                    </div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-600">{expense.amount}</span>
                      <span className="text-slate-500">{expense.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700"
                        style={{ width: `${expense.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Financial Alerts</h3>
              </div>
              <div className="space-y-3">
                {financialAlerts.map((alert) => (
                  <div key={alert} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    {alert}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-slate-900">Quick Actions</h3>
              <div className="mt-4 space-y-3">
                {['Generate invoice', 'Process payments', 'View reports', 'Export statement'].map((action) => (
                  <button
                    key={action}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Payment records</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Student Fee Status</h2>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50 text-sm text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Student Name</th>
                  <th className="px-4 py-3 font-semibold">Grade</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Amount</th>
                  <th className="px-4 py-3 font-semibold">Due Date</th>
                  <th className="px-4 py-3 font-semibold">Last Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {studentPayments.map((payment) => (
                  <tr key={payment.id} className="text-sm text-slate-700">
                    <td className="px-4 py-3 font-medium">{payment.name}</td>
                    <td className="px-4 py-3">{payment.grade}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-semibold ${
                          payment.status === 'Paid'
                            ? 'bg-emerald-50 text-emerald-700'
                            : payment.status === 'Partial'
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-red-50 text-red-700'
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{payment.amount}</td>
                    <td className="px-4 py-3">{payment.dueDate}</td>
                    <td className="px-4 py-3 text-slate-500">{payment.lastPayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
