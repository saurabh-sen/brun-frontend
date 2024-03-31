import type { Metadata } from "next";
import "./globals.css";
import "./globalicons.css";

import ServiceProvider from "@components/Providers/ServiceProvider";
import Navbar from "@components/common/Navbar";
import Footer from "@components/common/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <body className="font-urbanist">
        <ServiceProvider>
          <Navbar />
            {children}
          <Footer />
        </ServiceProvider>
      </body>
    </html>
  );
}
