import type { Metadata } from "next";
import "./globals.css";
import "./embla.css";
import bg from "../../public/images/bg.jpeg"
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio - CG",
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
        {/* <Image alt="bg" className="-z-50 opacity-50 brightness-[30%] absolute top-0 left-0 bg-repeat bg-center h-full object-fill" src={bg}  /> */}
        <div className={"-z-50 opacity-50 brightness-[30%] absolute top-0 left-0 bg-repeat bg-center h-full object-fill "} style={{background : `url(${bg.src})`, height : "100%", width : "100vw", backgroundSize : "contain", backgroundRepeat : "repeat", backgroundPosition : "left top"}}  />
        {children}
      </body>
    </html>
  );
}
