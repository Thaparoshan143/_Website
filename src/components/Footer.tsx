import React from 'react'
import { FaFacebook, FaGithub, FaHeartbeat, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { _socialHandles } from '../../public/data/_info'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-theme text-white min-h-[25vh] w-full text-center flex flex-col justify-around items-center py-6">
        <div className="flex flex-row justify-evenly items-center mx-[35%]">
            {
                _socialHandles.map(({media, url}) => {
                    return <SocialIcons media={media} url={url} />
                })
            }
        </div>
        <hr className="w-[60%] border-theme-b " />
        <span className="font-light text-note">Designed with <FaHeartbeat className="inline-block text-red-700 font-bold text-title"/> | All copyright reserved @2024 </span>
        <span className="text-little font-light">Powered by <b>Next.js</b> | Hosted on <b>Vercel</b></span>
    </footer>
  )
}

const SocialIcons = ({media, url} : any) => {
    const socialIconStyle = "text-title mx-4 hover:scale-110 hover:cursor-pointer transition-all duration-300"

    if (media == "Facebook")
    {
        return (
            <Link href={url}><FaFacebook className={socialIconStyle + " hover:text-blue-600" } /></Link>
        )
    }
    else if (media == "Youtube")
    {
        return (
            <Link href={url}><FaYoutube className={socialIconStyle  + " hover:text-red-600"} /></Link>
        )
    }
    else if (media == "Linkedin")
    {
        return (
            <Link href={url}><FaLinkedin className={socialIconStyle + " hover:text-blue-400"} /></Link>
        )
    }
    else if (media == "Github")
    {
        return (
            <Link href={url}><FaGithub className={socialIconStyle + " hover:text-theme-w-alt"} /></Link>
        )
    }
}

export default Footer