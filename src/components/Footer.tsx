import React from 'react'
import { FaFacebook, FaGithub, FaHeartbeat, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { _socialHandles } from '../../public/data/_info'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-theme-b text-white min-h-[25vh] w-full text-center flex flex-col justify-around items-center">
        <hr className="w-[30%] border-theme " />
        <div className="flex flex-row justify-evenly items-center mx-[35%]">
            {
                _socialHandles.map(({media, url}) => {
                    return <SocialIcons media={media} url={url} />
                })
            }
        </div>
        <hr className="w-[60%] border-theme " />
        <span className="font-light text-note">Designed with <FaHeartbeat className="inline-block text-theme font-bold text-title"/> | All copyright reserved @2024 </span>
        <span className="text-little">Powered by Next.js | Hosted on Vercel</span>
    </footer>
  )
}

const SocialIcons = ({media, url} : any) => {
    const socialIconStyle = "text-heading mx-4 hover:text-theme hover:cursor-pointer transition-all duration-200"

    if (media == "Facebook")
    {
        return (
            <Link href={url}><FaFacebook className={socialIconStyle} /></Link>
        )
    }
    else if (media == "Youtube")
    {
        return (
            <Link href={url}><FaYoutube className={socialIconStyle} /></Link>
        )
    }
    else if (media == "Linkedin")
    {
        return (
            <Link href={url}><FaLinkedin className={socialIconStyle} /></Link>
        )
    }
    else if (media == "Github")
    {
        return (
            <Link href={url}><FaGithub className={socialIconStyle} /></Link>
        )
    }
}

export default Footer