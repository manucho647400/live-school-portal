# Live School Portal

A modern starter for a live school portal built with Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL.

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL

## Features in the starter

- Role-based dashboard layouts
- Student, teacher, and admin quick cards
- Announcements panel
- Attendance summary
- Grade overview
- Assignment list
- Responsive design

## Getting started

1. Install dependencies

```bash
npm install
```

2. Create a PostgreSQL database and set the `DATABASE_URL` in a `.env` file

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/live_school_portal?schema=public"
```

3. Generate Prisma client

```bash
npx prisma generate
```

4. Run the app

```bash
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/` — app routes and pages
- `components/` — reusable UI components
- `lib/` — helper functions and app data
- `prisma/` — database schema

## Roadmap

- authentication and protected routes
- live announcements and notifications
- attendance management
- assignment upload flow
- parent/student communication center
- deployment to Vercel
