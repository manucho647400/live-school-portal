export const mockAnnouncements = [
  {
    id: 'a1',
    title: 'Science Fair Registration Open',
    description: 'Students in grades 7-12 can register before Friday.',
    date: 'Today',
  },
  {
    id: 'a2',
    title: 'Parent-Teacher Conference',
    description: 'Conference slots are now available for booking online.',
    date: 'Tomorrow',
  },
  {
    id: 'a3',
    title: 'Inter-school Debate Finals',
    description: 'The finals are scheduled for next Thursday at 10:00 AM.',
    date: 'This Week',
  },
];

export const dashboardStats = [
  { label: 'Total Students', value: '1,248', trend: '+8.2%' },
  { label: 'Teachers', value: '96', trend: '+3.4%' },
  { label: 'Attendance Rate', value: '94.8%', trend: '+1.1%' },
  { label: 'Assignments Due', value: '42', trend: '-6.2%' },
];

export const assignmentData = [
  { title: 'Algebra Quiz', subject: 'Mathematics', due: 'Tue, 9:00 AM' },
  { title: 'Lab Report', subject: 'Science', due: 'Wed, 2:00 PM' },
  { title: 'Essay Draft', subject: 'English', due: 'Thu, 5:00 PM' },
  { title: 'History Presentation', subject: 'Social Studies', due: 'Fri, 10:30 AM' },
];

export const gradeData = [
  { subject: 'Mathematics', score: 92, grade: 'A' },
  { subject: 'Science', score: 88, grade: 'A-' },
  { subject: 'English', score: 95, grade: 'A' },
  { subject: 'History', score: 84, grade: 'B+' },
];

export const studentDirectory = [
  { id: 1, name: 'Alicia Johnson', grade: 'Grade 10', className: 'Biology 101', status: 'Present' },
  { id: 2, name: 'Marcus Lee', grade: 'Grade 12', className: 'Physics 202', status: 'Present' },
  { id: 3, name: 'Sophia Patel', grade: 'Grade 9', className: 'Creative Writing', status: 'Present' },
  { id: 4, name: 'Daniel Kim', grade: 'Grade 11', className: 'Economics', status: 'Late' },
];

export const classSchedule = [
  { day: 'Monday', time: '08:00 - 09:00', subject: 'Mathematics', room: 'Room 12' },
  { day: 'Monday', time: '09:15 - 10:15', subject: 'Biology', room: 'Lab 3' },
  { day: 'Tuesday', time: '08:00 - 09:00', subject: 'English', room: 'Room 5' },
  { day: 'Tuesday', time: '10:30 - 11:30', subject: 'History', room: 'Room 8' },
  { day: 'Wednesday', time: '08:00 - 09:00', subject: 'Physics', room: 'Lab 2' },
];

export const parentSummary = [
  { label: 'Student', value: 'Alicia Johnson' },
  { label: 'Grade', value: 'Grade 10' },
  { label: 'Guardian', value: 'Maya Johnson' },
  { label: 'Next review', value: 'Thursday, 4:00 PM' },
  { label: 'Tuition status', value: 'Paid' },
  { label: 'Report card', value: 'Available' },
];

export const navItems = [
  { label: 'Overview', icon: 'overview', active: true },
  { label: 'Announcements', icon: 'announcements', active: false },
  { label: 'Attendance', icon: 'attendance', active: false },
  { label: 'Classes', icon: 'classes', active: false },
  { label: 'Students', icon: 'students', active: false },
];
