import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST() {
  try {
    const userCount = await prisma.user.count();

    if (userCount > 0) {
      return NextResponse.json({ ok: true, message: 'Database already seeded.' });
    }

    const adminUser = await prisma.user.create({
      data: {
        name: 'Alicia Mukami',
        email: 'admin@northview.edu',
        password: 'password123',
        role: 'ADMIN',
      },
    });

    const teacherUser = await prisma.user.create({
      data: {
        name: 'Daniel Moyo',
        email: 'teacher@northview.edu',
        password: 'password123',
        role: 'TEACHER',
      },
    });

    const studentUser = await prisma.user.create({
      data: {
        name: 'Mia Njeri',
        email: 'student@northview.edu',
        password: 'password123',
        role: 'STUDENT',
      },
    });

    const parentUser = await prisma.user.create({
      data: {
        name: 'Grace Njeri',
        email: 'parent@northview.edu',
        password: 'password123',
        role: 'PARENT',
      },
    });

    const accountantUser = await prisma.user.create({
      data: {
        name: 'James Kariuki',
        email: 'accountant@northview.edu',
        password: 'password123',
        role: 'ACCOUNTANT',
      },
    });

    await prisma.teacher.create({
      data: {
        userId: teacherUser.id,
        employeeId: 'EMP-1001',
        department: 'Mathematics',
      },
    });

    await prisma.student.create({
      data: {
        userId: studentUser.id,
        admissionNumber: 'STU-1001',
        gradeLevel: 'Grade 10',
        guardianName: parentUser.name,
        guardianEmail: parentUser.email,
      },
    });

    await prisma.parent.create({
      data: {
        userId: parentUser.id,
        relationship: 'Mother',
      },
    });

    await prisma.accountant.create({
      data: {
        userId: accountantUser.id,
        employeeId: 'ACC-1001',
        department: 'Finance',
      },
    });

    await prisma.announcement.create({
      data: {
        title: 'Welcome to the new term',
        content: 'All students should complete registration before Friday.',
        createdById: adminUser.id,
      },
    });

    return NextResponse.json({ ok: true, message: 'Seed completed successfully.' });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error while seeding',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'Use POST to seed the database.' });
}
