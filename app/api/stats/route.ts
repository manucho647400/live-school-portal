import { NextResponse } from 'next/server';

const announcements = [
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
];

export async function GET() {
  return NextResponse.json({ announcements });
}
