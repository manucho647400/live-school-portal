import Link from 'next/link';
import { ArrowLeft, Eye, LockKeyhole, UserCircle2 } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-soft">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-brand-700 to-brand-500 p-8 text-white">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-brand-100 transition hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="mt-16">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-100">Portal access</p>
              <h1 className="mt-4 text-4xl font-bold">Welcome back.</h1>
              <p className="mt-4 max-w-sm text-brand-50">
                Sign in to manage lessons, student records, attendance, and school announcements.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Login</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">School portal</h2>
            </div>

            <form className="space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <UserCircle2 className="h-4 w-4 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    defaultValue="admin@northview.edu"
                    className="w-full border-none bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="you@school.edu"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <LockKeyhole className="h-4 w-4 text-slate-400" />
                  <input
                    id="password"
                    type="password"
                    defaultValue="password123"
                    className="w-full border-none bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                  Remember me
                </label>
                <Link href="/" className="font-medium text-brand-600 hover:text-brand-700">
                  Forgot password?
                </Link>
              </div>

              <Link
                href="/dashboard"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-500"
              >
                <Eye className="h-4 w-4" />
                Sign in to dashboard
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
