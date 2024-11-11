'use client'

import Link from "next/link"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import { motion } from "framer-motion"

interface IProjectCard
{
    item : string,
    description : string, 
    tools : string[],
    url : string,
};

const ProjectCard = ({item, description, tools, url} : IProjectCard) => {
    return (
        <motion.div 
            initial={{ y: "-50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }} // Trigger animation only once
            transition={{ duration: 0.6 }}
        >
        <div className="min-h-[18rem] min-w-[20rem] w-[50%] mx-auto bg-theme-b rounded-md flex flex-col justify-between items-center text-center">
            <h1 className="bg-theme-w w-full py-4 text-theme-b text-stitle uppercase font-extrabold ">{item}</h1>
            <p className="m-2 mx-5 font-light text-justify">{description}</p>
            <div className="p-2 flex flex-row justify-evenly items-center">
                {
                    tools.map((item : string) => {
                        return <li key={item} className="mx-2 p-2 min-w-[3rem] bg-theme-alt hover:bg-theme text-theme-w rounded-md text-little list-none transition-all duration-200 cursor-pointer">{item}</li>
                    })
                }
            </div>
            <Link href={url} className="bg-theme-w m-4 p-2 text-theme font-bold rounded-sm hover:bg-theme-w-alt">Explore<FaExternalLinkSquareAlt className="w-5 h-5 ml-2 inline-block hover:scale-105"/></Link>
        </div>
        </motion.div>
    )
}

export { ProjectCard, type IProjectCard }