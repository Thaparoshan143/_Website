import React from 'react'
import { _aboutMe, _majorSkills } from '../../public/data/_info'

const Experience = () => {
  return (
    <div className="min-h-[100vh] w-full pt-24" id="knowme">
        <h1 className="text-large text-center text-theme-w font-bold uppercase font-main">Experience</h1>
        <span className="text-note font-bold w-[50%] my-10 m-auto text-theme-w block">{_aboutMe}</span>
        <div className="grid grid-cols-3 justify-items-center">
            {
                _majorSkills.map(({field, subItem}) => {
                    return <SkillItem field={field} subItem={subItem} />
                })
            }
        </div>
    </div>
  )
}

const SkillItem = ({field, subItem} : any) => {
    return (
        <div className="min-w-[20rem] w-[25rem] mx-auto my-10 rounded-md flex flex-col justify-evenly items-center text-center">
            <h1 className="bg-theme w-full py-4 text-theme-w text-stitle uppercase font-extrabold ">{field}</h1>
            <div className="p-2 bg-theme-b w-full flex flex-row flex-wrap justify-evenly items-center min-h-[10rem]">
                {
                    subItem.map((item : string) => {
                        return <li key={item} className="m-2 p-2 min-w-[6rem] rounded-md text-note font-bold list-none text-theme-w">{item}</li>
                    })
                }
            </div>
        </div>
    )
}

export default Experience