import React from 'react'
import { _AboutMe } from '../Data'

const AboutMe : React.FC = () => {
    const me = require("../images/me.png");
  return (
    <>
    <div className="min-h-[100vh] flex lg:flex-row flex-col justify-evenly items-center p-[0.5rem]">
        <p className="lg:p-[3rem] mt-[10rem] lg:mt-[0rem] p-[1rem] text-xl lg:w-[50%] w-[100%] text-justify text-white bg-theme-alt rounded-xl">
            <span className="mb-[1rem] block">{_AboutMe}</span>
            <a href={"/contact"} className="inline-block bg-white hover:bg-theme-hovd hover:text-white text-theme font-bold text-xl p-[0.8rem] rounded-xl my-[1rem]">Get In Touch</a>
        </p>
        <img className="w-[25rem] h-[25rem] m-[1rem] rounded-[50%] shadow-2xl shadow-theme-hovd" src={me} alt="author photo" />
    </div>
    </>
  )
}

export default AboutMe