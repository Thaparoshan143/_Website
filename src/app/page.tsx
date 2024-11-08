import Link from "next/link";

export default function App() {
  return (
    <main className="flex flex-col justify-evenly items-center h-full min-h-[80vh] w-full">
      <div className="flex flex-col justify-evenly items-center">
        <h1 className="text-extra-large text-theme font-bold uppercase font-main-alt">Roshan Thapa</h1>
        <span className="text-note font-light text-theme-w-alt font-main">An Energetic Computer Engineering Student</span>
      </div>
      <Link href={"/home"} className="p-2 px-4 bg-theme-alt text-r-stitle text-theme-w hover:bg-theme font-main rounded-md my-[1rem] transition-all">Home</Link>
    </main>
  );
}
