import { NextResponse } from 'next/server';
import { payrollRecords, invoiceRecords, financialReports } from '@/lib/finance-operations';

export async function GET() {
  return NextResponse.json({
    payrollRecords,
    invoiceRecords,
    financialReports,
  });
}
