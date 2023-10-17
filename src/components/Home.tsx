import React from 'react';
import { _Name, _Description } from '../Data';

const Home: React.FC = () => {
  const bgHome = require("../images/home.png");
  return (
    <main className="h-[100vh] relative flex items-center text-4xl font-[roboto] uppercase">
        <img className="absolute top-0 left-0 -z-10 w-[100vw] h-[100vh] min-h-full min-w-full" src={bgHome} alt={"home image"} />
        <div className="h-[50%] w-[65%] flex flex-col items-center justify-evenly">
          <span className="text-theme text-8xl font-sans font-extrabold">{_Name}</span>
          <span className="text-black hover:text-theme-hovl opacity-40 hover:opacity-100 cursor-default transition delay-300 ease-in-out text-sm font-sans font-extrabold capitalize hover:scale-110">{_Description}</span>
        </div>
    </main>
  )
}

export default Home