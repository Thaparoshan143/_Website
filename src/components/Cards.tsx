import Link from "next/link"
import { FaExternalLinkSquareAlt } from "react-icons/fa"

interface IProjectCard
{
    item : string,
    description : string, 
    tools : string[],
    url : string,
};

const ProjectCard = ({item, description, tools, url} : IProjectCard) => {
    return (
        <div className="min-h-[15rem] min-w-[20rem] w-[22rem] border-2 border-theme-b rounded-md flex flex-col justify-between items-center hover:scale-105 transition-all duration-300">
            <h1 className="bg-theme-b w-full py-4 text-theme-w text-stitle uppercase font-bold font-main">{item}</h1>
            <p className="m-2">{description}</p>
            <div className="p-2 flex flex-row justify-evenly items-center">
                {
                    tools.map((item : string) => {
                        return <li key={item} className="mx-2 p-2 min-w-[3rem] bg-theme-b hover:bg-theme-b-alt text-theme-w rounded-md text-little list-none transition-all duration-200 cursor-pointer">{item}</li>
                    })
                }
            </div>
            <Link href={url} className="bg-theme-w m-2 p-2 text-theme font-bold rounded-sm hover:bg-theme-w-alt">Explore<FaExternalLinkSquareAlt className="w-5 h-5 ml-2 inline-block hover:scale-105"/></Link>
        </div>
    )
}

export { ProjectCard, type IProjectCard }