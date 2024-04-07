import type { Metadata } from "next";
import "./globals.css";
import "./globalicons.css";

import ServiceProvider from "@components/Providers/ServiceProvider";
import AdminSideNav from "@components/admin/common/AdminSideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="font-urbanist">
        <ServiceProvider>
          <AdminSideNav />
            {children}
        </ServiceProvider>
      </body>
    </html>
  );
}
