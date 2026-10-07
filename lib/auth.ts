// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma/schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  ADMIN
  TEACHER
  STUDENT
  PARENT
  ACCOUNTANT
}

enum InvoiceStatus {
  PENDING
  PARTIAL
  PAID
  OVERDUE
}

enum PayrollStatus {
  PENDING
  APPROVED
  PAID
}

enum AttendanceStatus {
  PRESENT
  ABSENT
  LATE
  EXCUSED
}

model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String
  role      Role     @default(STUDENT)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  student    Student?
  teacher    Teacher?
  parent     Parent?
  accountant Accountant?
  announcements Announcement[]
}

model Student {
  id              String   @id @default(cuid())
  user            User     @relation(fields: [userId], references: [id])
  userId          String   @unique
  admissionNumber String   @unique
  gradeLevel      String
  guardianName    String?
  guardianEmail   String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  enrollments       StudentClass[]
  attendance        Attendance[]
  assignments       AssignmentSubmission[]
  invoices          Invoice[]
  studentParents    StudentParent[]
}

model Teacher {
  id         String   @id @default(cuid())
  user       User     @relation(fields: [userId], references: [id])
  userId     String   @unique
  employeeId String   @unique
  department String
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  classes       Class[]
  assignments   Assignment[]
  announcements Announcement[]
}

model Parent {
  id           String   @id @default(cuid())
  user         User     @relation(fields: [userId], references: [id])
  userId       String   @unique
  relationship String?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  studentLinks StudentParent[]
}

model Accountant {
  id        String   @id @default(cuid())
  user      User     @relation(fields: [userId], references: [id])
  userId    String   @unique
  employeeId String   @unique
  department String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Class {
  id         String      @id @default(cuid())
  name       String
  gradeLevel String
  room       String?
  startTime  String?
  endTime    String?
  teacher    Teacher     @relation(fields: [teacherId], references: [id])
  teacherId  String
  createdAt  DateTime    @default(now())
  updatedAt  DateTime    @updatedAt

  students   StudentClass[]
  assignments Assignment[]
}

model StudentClass {
  id        String   @id @default(cuid())
  student   Student  @relation(fields: [studentId], references: [id])
  studentId String
  class     Class    @relation(fields: [classId], references: [id])
  classId   String
  createdAt DateTime @default(now())

  @@unique([studentId, classId])
}

model Announcement {
  id          String   @id @default(cuid())
  title       String
  content     String
  createdBy   User     @relation(fields: [createdById], references: [id])
  createdById String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  teacher     Teacher? @relation(fields: [teacherId], references: [id])
  teacherId   String?
}

model Assignment {
  id          String   @id @default(cuid())
  title       String
  description String
  dueDate     DateTime
  class       Class    @relation(fields: [classId], references: [id])
  classId     String
  teacher     Teacher  @relation(fields: [teacherId], references: [id])
  teacherId   String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  submissions AssignmentSubmission[]
}

model AssignmentSubmission {
  id          String    @id @default(cuid())
  assignment  Assignment @relation(fields: [assignmentId], references: [id])
  assignmentId String
  student     Student    @relation(fields: [studentId], references: [id])
  studentId   String
  submittedAt DateTime  @default(now())
  grade       Int?
  feedback    String?
  status      String    @default("SUBMITTED")

  @@unique([assignmentId, studentId])
}

model Attendance {
  id        String           @id @default(cuid())
  student   Student          @relation(fields: [studentId], references: [id])
  studentId String
  date      DateTime
  status    AttendanceStatus
  notes     String?
  createdAt DateTime         @default(now())

  @@unique([studentId, date])
}

model StudentParent {
  id           String   @id @default(cuid())
  student      Student  @relation(fields: [studentId], references: [id])
  studentId    String
  parent       Parent   @relation(fields: [parentId], references: [id])
  parentId     String
  relationship String?
  createdAt    DateTime @default(now())

  @@unique([studentId, parentId])
}

model Invoice {
  id        String        @id @default(cuid())
  student   Student       @relation(fields: [studentId], references: [id])
  studentId String
  amount    Decimal       @db.Decimal(10, 2)
  status    InvoiceStatus @default(PENDING)
  dueDate   DateTime
  createdAt DateTime      @default(now())
  updatedAt DateTime      @updatedAt

  payments Payment[]
}

model Payment {
  id        String   @id @default(cuid())
  invoice   Invoice  @relation(fields: [invoiceId], references: [id])
  invoiceId String
  amount    Decimal  @db.Decimal(10, 2)
  method    String
  paidAt    DateTime @default(now())
}

model Payroll {
  id            String        @id @default(cuid())
  employeeName  String
  role          String
  basicSalary   Decimal       @db.Decimal(10, 2)
  overtime      Decimal       @db.Decimal(10, 2)
  deductions    Decimal       @db.Decimal(10, 2)
  netPay        Decimal       @db.Decimal(10, 2)
  status        PayrollStatus @default(PENDING)
  payrollMonth  DateTime
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
}

model Expense {
  id        String   @id @default(cuid())
  category  String
  amount    Decimal  @db.Decimal(10, 2)
  status    String   @default("PENDING")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
