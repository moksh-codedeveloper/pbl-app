// app/dashboard/page.tsx
"use client";
import { currentUser } from "@clerk/nextjs/server";

export async function Dashboard() {
  const user = await currentUser();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome, {user?.firstName || user?.emailAddresses[0].emailAddress}!</p>
    </div>
  );
}
