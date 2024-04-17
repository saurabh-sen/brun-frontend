"use client";

import type { Metadata } from "next";
import "../globals.css";
import "../globalicons.css";

import AdminSideNav from "@components/admin/common/AdminSideNav";
import AdminTopBar from "@components/admin/common/AdminTopBar";
import { useSelector } from "react-redux";
import { RootState } from "@libs/store";
import FullScreenLoader from "@components/common/FullScreenLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isLoading } = useSelector((state: RootState) => state.adminAuth);

  return (
    <html lang="en">
      <body className="font-urbanist">
        {
          isLoading
            ? <FullScreenLoader />
            : (<main className="flex w-full min-h-screen relative">
              <AdminSideNav />
              <section className="dashboard__outlet flex-1 min-h-[200vh] bg-green-400">
                <AdminTopBar />
                {children}
              </section>
            </main>)}
      </body>
    </html>
  );
}
