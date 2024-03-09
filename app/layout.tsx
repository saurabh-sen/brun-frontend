import type { Metadata } from "next";


import "./globals.css";
import "./globalicons.css";
import ServiceProvider from "@components/Providers/ServiceProvider";
import ScollToTop from "@components/common/ScollToTop";

export const metadata: Metadata = {
  title: "Brun an one stop shop for latest fashion trends and styles.",
  description: "Brun is a one stop shop for latest fashion trends and styles. We offer a wide range of clothing, accessories and more. Shop now and get huge discounts on your favorite products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-urbanist">
        <ServiceProvider>
          {children}
        </ServiceProvider>
        <ScollToTop />
      </body>
    </html>
  );
}
