import React from 'react'
import { _projectList } from '../../public/data/_projectList'
import { ProjectCard, IProjectCard } from './Cards'

interface IProjectsItem
{
    type : string,
    items : IProjectCard[],
}

const Projects = () => {
  return (
    <div className="min-h-[100vh] w-full text-theme-w" id="projects">
        <h1 className="text-extra-large text-center text-theme-o font-bold uppercase font-main-alt">Projects</h1>
        <div className="flex flex-col justify-evenly items-center w-full">
            {
                _projectList.map(({type, subItem}) => {
                    return <ProjectItem key={type} type={type} items={subItem} />
                })
            }
        </div>
    </div>
  )
}

const ProjectItem = ({type, items} : IProjectsItem) => {
    return (
        <div className="w-full text-center">
            <h1 className="text-heading uppercase my-4">{type}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                {
                    items.map(({item, description, tools, url}) => {
                        return <ProjectCard key={item} item={item} description={description} tools={tools} url={url}/>
                    })
                }
            </div>
            <hr className="border-2 border-theme-b w-[50%] m-auto my-8"/>
        </div>
    )
}

export default Projects