import type { Metadata } from "next";
import "./globals.css";
import "./embla.css";
import Image from "next/image";
import bg from "../../public/images/bg.jpeg"
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Roshan Thapa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className="min-h-screen w-full flex flex-col justify-evenly items-center relative">
        <Navbar />
        <Image alt="bg" fill={false} className="-z-50 opacity-50 brightness-[30%] absolute top-0 left-0 bg-repeat bg-center h-screen" src={bg}  />
        {children}
      </body>
    </html>
  );
}
