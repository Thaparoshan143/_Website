import React from 'react'
import { _AboutMe } from '../Data'

const AboutMe : React.FC = () => {
    const me = require("../images/me.png");
    // const bgAboutMe= require("../images/aboutme.png");
  return (
    <>
    <div className="h-[100vh] flex flex-row justify-evenly items-center">
        {/* <img className="absolute top-0 left-0 -z-10 w-[100vw] h-[100vh] min-h-full min-w-full" src={bgAboutMe} alt={"home image"} /> */}
        {/* <img className="-z-10 w-[30vw] h-[30vw] rounded-[50%]" src={me} alt={"home image"} /> */}
        <p className="p-[3rem] text-xl w-[50%] text-justify text-white bg-theme-alt rounded-xl">
            <span className="mb-[1rem] block">{_AboutMe}</span>
            <a href={"/contact"} className="inline-block bg-white hover:bg-theme-hovd hover:text-white text-theme font-bold text-xl p-[0.8rem] rounded-xl my-[1rem]">Get In Touch</a>
        </p>
        <img className="w-[25vw] h-[25vw] rounded-[50%] shadow-2xl shadow-theme-hovd" src={me} alt="author photo" />
    </div>
    </>
  )
}

export default AboutMe