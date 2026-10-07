import { redirect } from 'next/navigation';
import { FileText, ReceiptText } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { getSession } from '@/lib/auth';
import { invoiceRecords } from '@/lib/finance-operations';

export default function InvoicesPage() {
  const session = getSession();

  if (!session || (session.role !== 'admin' && session.role !== 'accountant')) {
    redirect('/login');
  }

  return (
    <DashboardShell title="Invoice Management">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
              <ReceiptText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Invoices</p>
              <h2 className="text-2xl font-bold text-slate-900">Fee Invoices</h2>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50 text-sm text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Invoice</th>
                  <th className="px-4 py-3 font-semibold">Student</th>
                  <th className="px-4 py-3 font-semibold">Grade</th>
                  <th className="px-4 py-3 font-semibold">Amount</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {invoiceRecords.map((invoice) => (
                  <tr key={invoice.id} className="text-sm text-slate-700">
                    <td className="px-4 py-3 font-medium">{invoice.id}</td>
                    <td className="px-4 py-3">{invoice.student}</td>
                    <td className="px-4 py-3">{invoice.grade}</td>
                    <td className="px-4 py-3">{invoice.amount}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-700' : invoice.status === 'Partial' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'}`}>
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="rounded-3xl bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Invoice actions</h3>
          </div>
          <div className="space-y-3">
            {['Create invoice', 'Send reminder', 'Download PDF', 'Track payment'].map((action) => (
              <button key={action} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700">
                {action}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
