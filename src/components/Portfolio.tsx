import React from 'react'
import { _MajorSkills, _ProjectsInfo } from '../Data';

interface ISkills
{
    field: String,
    subItem : ISkillsItem[]
};

interface ISkillsItem
{
    item : String,
    level : String
};

interface IProjects
{
    type : String,
    subItem : IProjectItem[]
};

interface IProjectItem
{
    item : String,
    description : String,
    tools : String[],
    url : String
};

const Portfolio : React.FC = () => {
    const bgPortfolio = require("../images/portfolio.png");
  return (
    <div className="min-h-[100vh] pt-[10rem] w-[100%] flex flex-col justify-center items-center p-[1rem]">
        <img className="absolute top-0 left-0 -z-10 w-[100vw] h-[100vh] min-h-full min-w-full" src={bgPortfolio} alt={"home image"} />
        <div id="skills" className="w-[100%]">
            <span className="text-6xl text-theme text-center block my-[2rem] font-bold">Skills</span>
            {_MajorSkills.map(({field, subItem})=>
            {
                return <SkillCard field={field} subItem={subItem} />
            })}
        </div>
        <div id="projects">
            <span className="text-6xl text-theme text-center block my-[2rem] font-bold">Projects</span>
            {_ProjectsInfo.map(({type, subItem})=>
            {
                return <ProjectCard type={type} subItem={subItem} />
            })}
        </div>
    </div>
  )
}

const SkillCard: React.FC<ISkills> = ({field, subItem} : ISkills) =>
{
    return (
        <div className="max-h-[50vh] w-[100%] flex flex-row flex-wrap justify-evenly items-center">
            {subItem.map(({item, level})=>
            {
                return <SkillSubItem item={item} level={level} />
            })}
        </div>
    )
}

const SkillSubItem : React.FC<ISkillsItem> = ({item, level} : ISkillsItem) =>
{
    return (
        <>
        {console.log(item+" "+level)}
        <div className="bg-theme rounded-xl m-[1rem] flex flex-col">
            <span className="text-white p-[1rem] m-[1rem]">{item}</span>
            <span className="text-white p-[1rem] m-[1rem]">{level}</span>
        </div>
        </>
    )
}

const ProjectCard : React.FC<IProjects> = ({type, subItem} : IProjects) =>
{
    return (
        <div className="max-h-[50vh] flex flex-row m-[1rem] flex-wrap">
            {subItem.map(({item, description, tools, url})=>
            {
                return <ProjectSubItem item={item} description={description} tools={tools} url={url} />
            })}
        </div>
    )
}

const ProjectSubItem : React.FC<IProjectItem> = ({item, description, tools, url } : IProjectItem) =>
{
    return (
        <>
        {console.log(item+" "+description)}
        <div className="bg-theme min-w-[30%] rounded-xl m-[1rem] flex flex-col">
            <span className="text-white px-[0.5rem] m-[1rem]">{item}</span>
            <span className="text-white px-[0.5rem] m-[1rem]">{description}</span>
        </div>
        </>
    )
}

export default Portfolio