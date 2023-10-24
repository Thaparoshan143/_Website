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
    progress : Number,
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
    const bgPortfolioSkills = require("../images/portfolioskills.png");
    const bgPortfolioProjects = require("../images/portfolioprojects.png");
  return (
    <div className="min-h-[100vh] lg:pt-[5rem] pt-[12rem] w-[100%] flex flex-col justify-center items-center">
        {/* <img className="absolute top-0 left-0 -z-10 w-[100vw] h-[100vh] min-h-full min-w-full" src={bgPortfolio} alt={"home image"} /> */}
        <div id="skills" className="w-[100%] min-h-[200vh] flex flex-row flex-wrap justify-center items-center pb-[15rem]">
            {/* <span className="text-6xl text-theme text-center block my-[2rem] font-bold">Hard Skills</span> */}
            <div className="absolute top-0 left-0 -z-10 h-[200vh] w-[100vw] opacity-50" style={{background:`url(${bgPortfolioSkills})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}} />
            {_MajorSkills.map(({field, subItem})=>
            {
                return <SkillCard field={field} subItem={subItem} />
            })}
        </div>
        <div id="projects" className="w-[100%] min-h-[200vh] flex flex-row flex-wrap justify-center items-center">
            {/* <span className="text-6xl text-theme text-center block my-[2rem] font-bold">Projects</span> */}
            <div className="absolute top-[200vh] left-0 -z-10 h-[200vh] w-[100vw] opacity-50" style={{background:`url(${bgPortfolioProjects})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}} />
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
        <div className="p-[1rem] m-[2rem] lg:w-[35%] w-[90%] rounded-xl bg-[#ffffff11] backdrop-blur-xl transition delay-250  ease-in-out hover:scale-[105%] hover:shadow-md hover:shadow-theme [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.2)] border-[1px] border-[rgba(255,255,255,0.1)] hover:bg-[#ffffff66]">
            <span className="text-2xl text-theme-hovd text-center block font-extrabold mb-[2rem]">{field}</span>
            <div className="w-[100%] flex flex-col justify-evenly items-center min-h-[8rem]">
                {subItem.map(({item, progress, level})=>
                {
                    return <SkillSubItem item={item} progress={progress} level={level} />
                })}
            </div>
        </div>
    )
}

const SkillSubItem : React.FC<ISkillsItem> = ({item, progress, level} : ISkillsItem) =>
{
    return (
        <>
        {console.log(item+" "+level)}
        <div className="flex flex-row w-[100%] justify-between items-center">
            <span className="text-theme m-[0.5rem] text-md font-bold">{item}</span>
            <div className="lg:w-[70%] w-[60%] block bg-transparent border-[0.1rem] border-theme rounded-xl overflow-hidden">
                <div className={`bg-theme h-[0.4rem] rounded-2xl w-[${(progress)}%]`}></div>
            </div>
            {/* <span className="text-black m-[0.5rem] text-sm">{level}</span> */}
        </div>
        </>
    )
}

const ProjectCard : React.FC<IProjects> = ({type, subItem} : IProjects) =>
{
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center">
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

        <div className="max-w-[25rem] min-h-[15rem] flex flex-col justify-evenly items-center delay-300 p-[1rem] m-[1rem] rounded-xl bg-[#ffffff88] backdrop-blur-xl transition delay-250  ease-in-out hover:scale-[105%] hover:shadow-md hover:shadow-theme [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.2)] border-[1px] border-[rgba(255,255,255,0.1)] hover:bg-[#ffffff11]">
            <span className="text-theme-hovd px-[0.5rem] font-extrabold text-xl">{item}</span>
            <div className="flex flex-row my-[1rem]">
            {tools.map((item)=>{
                return <li className="p-[0.5rem] list-none bg-theme-alt mx-[0.5rem] rounded-md lg:min-w-[4rem] text-center text-white">{item}</li>
            })}
            </div>
            <span className="text-black px-[0.5rem] mx-[2rem] text-justify text-sm font-light">{description}</span>
        </div>
        </>
    )
}

export default Portfolio