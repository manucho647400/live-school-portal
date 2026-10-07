export const payrollRecords = [
  {
    id: 1,
    employee: 'Alicia Mukami',
    role: 'Administrator',
    basicSalary: '$4,500',
    overtime: '$320',
    deductions: '$180',
    netPay: '$4,640',
    status: 'Approved',
  },
  {
    id: 2,
    employee: 'Daniel Moyo',
    role: 'Teacher',
    basicSalary: '$3,200',
    overtime: '$210',
    deductions: '$140',
    netPay: '$3,270',
    status: 'Pending',
  },
  {
    id: 3,
    employee: 'James Kariuki',
    role: 'Accountant',
    basicSalary: '$3,800',
    overtime: '$180',
    deductions: '$160',
    netPay: '$3,820',
    status: 'Approved',
  },
  {
    id: 4,
    employee: 'Grace Njeri',
    role: 'Support Staff',
    basicSalary: '$2,500',
    overtime: '$150',
    deductions: '$110',
    netPay: '$2,540',
    status: 'Pending',
  },
];

export const invoiceRecords = [
  {
    id: 'INV-1001',
    student: 'Alicia Johnson',
    grade: 'Grade 10',
    amount: '$3,000',
    status: 'Paid',
    date: '2024-02-12',
  },
  {
    id: 'INV-1002',
    student: 'Marcus Lee',
    grade: 'Grade 12',
    amount: '$2,250',
    status: 'Partial',
    date: '2024-02-18',
  },
  {
    id: 'INV-1003',
    student: 'Sophia Patel',
    grade: 'Grade 9',
    amount: '$3,000',
    status: 'Outstanding',
    date: '2024-01-30',
  },
  {
    id: 'INV-1004',
    student: 'Daniel Kim',
    grade: 'Grade 11',
    amount: '$3,550',
    status: 'Paid',
    date: '2024-02-10',
  },
];

export const financialReports = [
  {
    name: 'Cash Flow Summary',
    period: 'February 2024',
    value: '$210,000',
    trend: '+8.4%',
  },
  {
    name: 'Budget Variance',
    period: 'Q1 2024',
    value: '$18,500',
    trend: '+4.1%',
  },
  {
    name: 'Revenue vs Expense',
    period: '2024 YTD',
    value: '1.42x',
    trend: '+6.6%',
  },
  {
    name: 'Outstanding Receivables',
    period: 'Current month',
    value: '$23,450',
    trend: '-3.2%',
  },
];
