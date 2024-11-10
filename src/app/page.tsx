import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Link from "next/link";
import { _description, _name } from "../../public/data/_info";

export default function App() {
  return (
    <main className="flex flex-col justify-evenly items-center h-full w-full font-main">
      <div className="flex flex-col justify-around items-center h-full w-full min-h-[100vh]">
        <div className="flex flex-col justify-evenly items-center my-[10%]">
          <h1 className="text-extra-large text-theme font-bold uppercase -alt">{_name}</h1>
          <span className="text-note font-light text-theme-w-alt ">{_description}</span>
        </div>
        <Link href={"#home"} className="p-2 px-4 bg-theme-alt text-r-stitle text-theme-w hover:bg-theme  rounded-md my-[1rem] transition-all">Explore</Link>
      </div>
      <Projects />
      <Experience />
      <Certification />
      <Contact />
      <Footer />
    </main>
  );
}
