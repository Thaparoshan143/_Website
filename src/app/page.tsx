import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import KnowMe from "@/components/KnowMe";
import Projects from "@/components/Projects";
import Link from "next/link";

export default function App() {
  return (
    <main className="flex flex-col justify-evenly items-center h-full w-full font-main">
      <div className="flex flex-col justify-around items-center h-full w-full min-h-[100vh]">
        <div className="flex flex-col justify-evenly items-center my-[10%]">
          <h1 className="text-extra-large text-theme font-bold uppercase -alt">Roshan Thapa</h1>
          <span className="text-note font-light text-theme-w-alt ">An Energetic Computer Engineering Student</span>
        </div>
        <Link href={"#home"} className="p-2 px-4 bg-theme-alt text-r-stitle text-theme-w hover:bg-theme  rounded-md my-[1rem] transition-all">Explore</Link>
      </div>
      <Projects />
      <KnowMe />
      <Certification />
      <Contact />
      <Footer />
    </main>
  );
}
