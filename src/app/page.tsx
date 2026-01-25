import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Technology from "@/components/Technology";
import Projects from "@/components/Projects";
import Link from "next/link";
import { _description, _name } from "../../public/data/_info";

export default function App() {
    return (
        <main className="flex flex-col justify-evenly items-center h-full w-full font-main">
            <div className="flex flex-col justify-around items-center h-full w-full min-h-[100vh]">
                <div className="flex flex-col justify-evenly items-center my-[10%] h-[50vh]">
                    <h1 className="sm:text-extra-large text-sup-large text-theme font-bold uppercase text-center">
                        {_name}
                    </h1>
                    <span className="text-note font-light text-theme-w-alt my-10">
                        {_description}
                    </span>
                </div>
                <Link
                    href={"#projects"}
                    className="p-2 px-4 bg-theme-alt text-stitle text-theme-w hover:bg-theme rounded-md transition-all"
                >
                    Explore
                </Link>
            </div>
            <Projects />
            <Technology />
            <Certification />
            <Contact />
            <Footer />
        </main>
    );
}
