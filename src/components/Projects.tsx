'use client'

import React from 'react'
import { useState } from 'react'
import { _projectList } from '../../public/data/_projectList'
import { EmblaCarouselProjects } from './embela/EmblaCarousel'

interface IProjectList
{
    type : string, 
    activeType : number,
    index : number,
    changeType : (ind : number) => void
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
            <div  className="flex flex-col justify-evenly items-center w-[70%]">
                {
                    _projectList.map((props, index) => {
                        if (index === selectedType)
                        {
                            return  <EmblaCarouselProjects key={index} subItem={props.subItem} />
                        }
                        return;
                    })
                }
                
            </div>
            <div className="flex flex-col justify-evenly items-start w-[30%] text-theme-b text-center h-full">
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

const ProjectList = (props : IProjectList) => {
    return (
        <div className={"py-20 px-4 w-full cursor-pointer text-title font-bold hover:bg-theme-b hover:text-theme-w transition-all duration-500 ".concat((props.activeType === props.index) ? " bg-theme-b text-theme-w " : "  bg-theme-w text-theme-b ")} onClick={() => props.changeType(props.index)}>
            {props.type}
        </div>
    )
}

export default Projects