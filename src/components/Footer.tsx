import React from 'react'
import { FaFacebook, FaGithub, FaHeartbeat, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    const socialIconStyle = "text-heading mx-4 hover:text-theme hover:cursor-pointer transition-all duration-200"

  return (
    <footer className="bg-theme-b text-white min-h-[25vh] w-full text-center flex flex-col justify-around items-center">
        <hr className="w-[30%] border-theme " />
        <div className="flex flex-row justify-evenly items-center mx-[35%]">
            <FaFacebook className={socialIconStyle} />
            <FaYoutube className={socialIconStyle} />
            <FaLinkedin className={socialIconStyle} />
            <FaGithub className={socialIconStyle} />
        </div>
        <hr className="w-[60%] border-theme " />
        <span className="font-light text-note">Designed with <FaHeartbeat className="inline-block text-theme font-bold text-title"/> | All copyright reserved @2024 </span>
        <span className="text-[0.7rem]">Powered by Next.js | Hosted on Vercel</span>
    </footer>
  )
}

export default Footer