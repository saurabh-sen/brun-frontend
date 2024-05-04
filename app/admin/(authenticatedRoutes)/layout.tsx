"use client";

import type { Metadata } from "next";
import "../../globals.css";
import "../../globalicons.css";

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

  const { isLoading, isAuthError } = useSelector((state: RootState) => state.adminAuth);

  return (
    <>
      {
        isAuthError
          ? <AuthError />
          : isLoading
            ? <FullScreenLoader />
            : (
              <main className="flex w-full min-h-screen relative">
                <AdminSideNav />
                <section className="dashboard__outlet flex-1 px-8">
                  <AdminTopBar />
                  {children}
                </section>
              </main>
            )
      }
    </>
  );
}


const AuthError = () => {
  return (
    <div className="flex min-h-screen items-center justify-center h-full w-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Error</h1>
        <p className="text-lg">An error occurred while trying to authenticate you</p>
      </div>
    </div>
  );
}