import type { Metadata } from "next";


import "./globals.css";
import "./globalicons.css";
import ServiceProvider from "@components/Providers/ServiceProvider";
<<<<<<< HEAD
import Navbar from "@components/common/Navbar";
import Footer from "@components/common/Footer";
=======
import ScollToTop from "@components/common/ScollToTop";
>>>>>>> 8a709429b5ae8961a8e7f44d5b2575f5d566d538

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
        <Navbar/>
        <ServiceProvider>
          {children}
        </ServiceProvider>
<<<<<<< HEAD
        <Footer/>
=======
        <ScollToTop />
>>>>>>> 8a709429b5ae8961a8e7f44d5b2575f5d566d538
      </body>
    </html>
  );
}
