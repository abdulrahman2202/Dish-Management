# Dish Management System 🍽️

A modern, real-time dish management application built with a full-stack architecture. This project allows for managing a menu of dishes, toggling their availability, and seeing updates reflected in real-time across users.

---

## 🚀 Features

- **Menu Management**: View all dishes with their images and status.
- **Real-time Status Toggling**: Instantly publish or unpublish dishes from the menu.
- **Live Updates**: Synchronized state across all connected clients using Socket.io.
- **Responsive Design**: Polished UI built with Tailwind CSS that works on all devices.
- **Robust Backend**: Type-safe API with Express and Prisma ORM.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **UI & Logic**: [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Communication**: Axios, Socket.io-client

### Backend
- **Engine**: [Node.js](https://nodejs.org/) with [Express 5](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Real-time**: Socket.io

---

## 📂 Project Structure

```text
dish-management/
├── backend/            # Express API & Prisma Schema
│   ├── prisma/         # Database models & migrations
│   ├── src/            # Server-side logic
│   └── .env            # Backend configuration
├── frontend/           # Next.js Application
│   ├── app/            # Next.js Pages & Layouts
│   ├── components/     # Reusable UI components
│   └── .env.local      # Frontend configuration
└── README.md           # This file
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL (running locally or via Docker)

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your environment variables in `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/dish_db?schema=public"
   PORT=5000
   ```
4. Push the database schema and seed data:
   ```bash
   npx prisma db push
   npm run seed
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
4. Start the application:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

---

## 📜 Author
    Abdul Rahman

