'use client'
import "./globals.css";
import "./globalicons.css";
import ServiceProvider from "@components/Providers/ServiceProvider";
import Navbar from "@components/common/Navbar";
import Footer from "@components/common/Footer";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [homepage, setHomepage] = useState(false);
  const path = usePathname();

  useEffect(() => {
      setHomepage(path === '/');
  }, [path]);
  return (
    <html lang="en">
      <body className="font-urbanist">
      {homepage ? (
                <section className="w-full h-[720px] flex-1 relative bg-[url('/group-36@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
                    <Navbar />
                    <p className="max-w-lg h-[34px] absolute top-[510px] left-[60px] font-urbanist font-normal text-sm text-white">Experience clothing that transcends the predictable, offering styles that defy expectations and redefine fashion norms</p>
                </section>
            ) : (
                <Navbar />
            )}
        <ServiceProvider>
          {children}
        </ServiceProvider>
        <Footer/>
      </body>
    </html>
  );
}
