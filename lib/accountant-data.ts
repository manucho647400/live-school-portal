export const accountantMetrics = [
  { label: 'Total Revenue', value: '$456,320', trend: '+12.5%' },
  { label: 'Pending Fees', value: '$23,450', trend: '+2.1%' },
  { label: 'Paid Students', value: '1,120 / 1,248', trend: '+5.3%' },
  { label: 'Outstanding Balance', value: '$12,890', trend: '-3.2%' },
];

export const feeStructure = [
  { level: 'Grade 9-10', tuition: '$2,500', facilities: '$300', transport: '$200', total: '$3,000' },
  { level: 'Grade 11-12', tuition: '$3,000', facilities: '$350', transport: '$200', total: '$3,550' },
  { level: 'Special programs', tuition: '$3,500', facilities: '$400', transport: '$250', total: '$4,150' },
];

export const studentPayments = [
  { id: 1, name: 'Alicia Johnson', grade: 'Grade 10', status: 'Paid', amount: '$3,000', dueDate: '2024-01-31', lastPayment: '2024-01-15' },
  { id: 2, name: 'Marcus Lee', grade: 'Grade 12', status: 'Partial', amount: '$2,250 / $3,550', dueDate: '2024-02-28', lastPayment: '2024-01-20' },
  { id: 3, name: 'Sophia Patel', grade: 'Grade 9', status: 'Outstanding', amount: '$3,000', dueDate: '2023-12-31', lastPayment: '2023-11-30' },
  { id: 4, name: 'Daniel Kim', grade: 'Grade 11', status: 'Paid', amount: '$3,550', dueDate: '2024-02-29', lastPayment: '2024-02-10' },
];

export const expenseCategories = [
  { category: 'Staff Salaries', amount: '$145,000', percentage: 45, status: 'Paid' },
  { category: 'Utilities', amount: '$32,000', percentage: 10, status: 'Paid' },
  { category: 'Maintenance', amount: '$18,500', percentage: 6, status: 'Pending' },
  { category: 'Supplies', amount: '$12,300', percentage: 4, status: 'Paid' },
  { category: 'Infrastructure', amount: '$25,600', percentage: 8, status: 'In Progress' },
];

export const financialAlerts = [
  'Outstanding fees: 128 students have pending balances.',
  'Salary processing due this Friday.',
  'Quarterly budget review meeting scheduled.',
  'Insurance renewal payment due next month.',
];
