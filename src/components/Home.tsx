import React from 'react';
import { _Name, _Description } from '../Data';

const Home: React.FC = () => {
  const bgHome = require("../images/home.png");
  return (
    <main className="h-[100vh] relative flex items-center text-4xl font-[roboto] uppercase">
        <div className="absolute top-0 left-0 -z-10 h-[100vh] w-[100vw] lg:opacity-100 opacity-50" style={{background:`url(${bgHome})`, backgroundRepeat:'no-repeat', backgroundPosition:'right', backgroundSize:'cover'}} />
        <div className="lg:h-[50%] h-[100%] lg:w-[65%] w-[100%] flex flex-col items-center justify-evenly lg:pt-[0rem] pt-[15rem]">
          <span className="text-theme text-center lg:text-8xl text-6xl font-sans font-extrabold">{_Name}</span>
          <span className="lg:text-xl text-[0.7rem] text-black hover:text-theme-hovl opacity-40 hover:opacity-100 cursor-default transition delay-300 ease-in-out font-sans capitalize hover:scale-110">{_Description}</span>
        </div>
    </main>
  )
}

export default Home