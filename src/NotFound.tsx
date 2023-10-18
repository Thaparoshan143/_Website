import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  const bg404 = require("./images/404.png");
  return (
    <div className="flex flex-col justify-evenly items-center h-[100vh] py-[10rem] ps-10 w-[80vw]">
        <img className="absolute top-0 left-0 -z-10 w-[100vw] min-h-[100vh] h-[100vh]" src={bg404} alt={"Error image"} />
        <span className="text-violet-600 text-15xl m-[2rem] font-extrabold">Oops!</span>
        <span className="text-5xl text-black">404 - Page Not Found</span>
        <Link to="/home" className="bg-theme text-2xl p-[0.8rem] m-[4rem] rounded-md text-white hover:bg-theme-hovd transition delay-250 ease-in-out">Go to Home</Link>
    </div>
  )
}

export default NotFound