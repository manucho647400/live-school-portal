import { NextResponse } from 'next/server';
import { portalOverview, adminMetrics, teacherAssignments, adminAlerts } from '@/lib/portal-data';

export async function GET() {
  return NextResponse.json({
    overview: portalOverview,
    adminMetrics,
    teacherAssignments,
    adminAlerts,
  });
}
