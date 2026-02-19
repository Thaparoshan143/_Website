"use client";

import { useState } from "react";
import { _projectList } from "../../public/data/_projectList";
import { EmblaCarouselProjects } from "./embela/EmblaCarousel";

interface IProjectList {
    type: string;
    activeType: number;
    index: number;
    changeType: (ind: number) => void;
}

const Projects = () => {
    const [selectedType, setSelectedType] = useState<number>(0);

    const changeType = (typeIndex: number) => {
        console.log("Changing index to  : ", typeIndex);
        setSelectedType(typeIndex);
    };

    return (
        <div className="w-full text-theme-w bg-theme pt-24" id="projects">
            <h1 className="sm:text-large text-sup-heading text-center text-theme-w font-bold uppercase m-2 mb-16">
                Hands on Projects
            </h1>
            <div className="flex md:flex-row flex-col justify-evenly items-center w-full">
                <div className="flex flex-col justify-evenly items-center sm:w-[70%] w-full">
                    {_projectList.map((props, index) => {
                        if (index === selectedType) {
                            return (
                                <EmblaCarouselProjects
                                    key={index}
                                    subItem={props.subItem}
                                />
                            );
                        }
                        return;
                    })}
                </div>
                <div className="flex md:flex-col flex-row justify-evenly md:items-start items-center md:w-[30%] w-full text-theme-b text-center md:h-full md:m-0 mt-10">
                    {_projectList.map((props, index) => {
                        return (
                            <ProjectList
                                key={props.type}
                                activeType={selectedType}
                                type={props.type}
                                index={index}
                                changeType={changeType}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const ProjectList = (props: IProjectList) => {
    return (
        <div
            className={"md:py-20 py-10 px-1 w-full cursor-pointer md:text-title sm:text-stitle text-note font-bold hover:bg-theme-b hover:text-theme-w transition-all duration-500".concat(
                props.activeType === props.index
                    ? " bg-theme-b text-theme-w "
                    : "  bg-theme-w text-theme-b "
            )}
            onClick={() => props.changeType(props.index)}
        >
            {props.type}
        </div>
    );
};

export default Projects;
