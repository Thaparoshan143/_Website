'use client'

import React from 'react'
import { useState } from 'react'
import { _projectList } from '../../public/data/_projectList'
import { ProjectCard, IProjectCard } from './Cards'
import { EmblaCarouselProjects } from './embela/EmblaCarousel'

interface IProjectsItem
{
    type : string,
    items : IProjectCard[],
}

const Projects = () => {
  const [selectedType, setSelectedType] = useState<number>(0)

  const changeType = (typeIndex : number) => {
    console.log("Changing index to  : ", typeIndex);
    setSelectedType(typeIndex);
  }

  return (
    <div className="w-full text-theme-w bg-theme pt-24 " id="projects">
        <h1 className="text-large text-center text-theme-w font-bold uppercase mb-16">Hands on Projects</h1>
        <div className="flex flex-row justify-evenly items-center w-full">
            <div  className="flex flex-col justify-evenly items-center w-[75%]">
                {
                    _projectList.map((props, index) => {
                        if (index === selectedType)
                        {
                            return  <EmblaCarouselProjects key={index} projectItem={props.subItem} />
                        }
                        return;
                    })
                }
                
            </div>
            <div className="flex flex-col justify-evenly items-start w-[25%] text-theme-b text-center h-full">
                {
                    _projectList.map((props, index) => {
                        return <ProjectList key={props.type} activeType={selectedType} type={props.type} index={index} changeType={changeType} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

const ProjectList = (props : any) => {
    return (
        <div className={"py-10 px-4 w-full cursor-pointer text-stitle font-bold hover:bg-theme-b hover:text-theme-w ".concat((props.activeType === props.index) ? " bg-theme-b text-theme-w " : "  bg-theme-w text-theme-b ")} onClick={() => props.changeType(props.index)}>
            {props.type}
        </div>
    )
}

const ProjectItems = ({type, items} : IProjectsItem) => {
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