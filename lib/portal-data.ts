export const portalOverview = {
  schoolName: 'Northview Academy',
  liveStatus: 'All systems online',
  attendanceRate: 94.8,
  activeStudents: 1248,
  totalTeachers: 96,
  announcementsToday: 12,
  upcomingEvents: [
    'Science Fair registration closes Friday',
    'Parent-teacher meetings begin next Monday',
    'Sports week training schedule published',
  ],
};

export const adminMetrics = [
  { label: 'Enrollment', value: '1,248', trend: '+5.8%' },
  { label: 'Payments', value: '$142K', trend: '+12.4%' },
  { label: 'Staff online', value: '87%', trend: '+2.1%' },
  { label: 'Open issues', value: '18', trend: '-3.2%' },
];

export const teacherAssignments = [
  {
    id: 't1',
    teacher: 'Mrs. A. Nkosi',
    subject: 'Mathematics',
    class: 'Grade 10A',
    agenda: 'Algebra revision and quiz review',
    status: 'On track',
  },
  {
    id: 't2',
    teacher: 'Mr. J. Moyo',
    subject: 'Biology',
    class: 'Grade 11B',
    agenda: 'Lab reports and genetics activities',
    status: 'Needs follow-up',
  },
  {
    id: 't3',
    teacher: 'Ms. L. Patel',
    subject: 'English',
    class: 'Grade 9C',
    agenda: 'Essay drafting and comprehension checks',
    status: 'On track',
  },
];

export const adminAlerts = [
  'Library books due in 3 days',
  'Two students need attendance follow-up',
  'New transport list submitted for approval',
];

export const teacherSchedule = [
  { day: 'Monday', time: '08:00 - 09:00', subject: 'Mathematics', room: 'Room 12' },
  { day: 'Monday', time: '09:15 - 10:15', subject: 'Biology', room: 'Lab 3' },
  { day: 'Tuesday', time: '08:00 - 09:00', subject: 'English', room: 'Room 5' },
  { day: 'Wednesday', time: '10:00 - 11:00', subject: 'Physics', room: 'Lab 2' },
];

export const portalCards = [
  {
    title: 'Live attendance',
    value: '94.8%',
    description: 'Daily attendance is stable and improving.',
  },
  {
    title: 'Assignments',
    value: '42 due',
    description: 'Most submissions are on schedule this week.',
  },
  {
    title: 'Announcements',
    value: '12 new',
    description: 'School notices were published today.',
  },
];
