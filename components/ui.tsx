import { ReactNode } from 'react';
import { BookOpen, CalendarClock, GraduationCap, Megaphone, Users } from 'lucide-react';

export function StatCard({
  title,
  value,
  trend,
  icon,
}: {
  title: string;
  value: string;
  trend: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-xl bg-brand-50 p-2 text-brand-700">{icon}</div>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
          {trend}
        </span>
      </div>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

export function NavigationPill({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={[
        'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition',
        active
          ? 'bg-brand-600 text-white shadow-lg shadow-brand-200'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
      ].join(' ')}
    >
      {icon}
      {label}
    </button>
  );
}

export const navItems = [
  { label: 'Overview', icon: <GraduationCap className="h-4 w-4" />, active: true },
  { label: 'Announcements', icon: <Megaphone className="h-4 w-4" /> },
  { label: 'Attendance', icon: <CalendarClock className="h-4 w-4" /> },
  { label: 'Classes', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'Students', icon: <Users className="h-4 w-4" /> },
];
