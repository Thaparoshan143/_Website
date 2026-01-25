"use client";

import React from "react";
import {  _majorSkills } from "../../public/data/_info";
import { motion } from "framer-motion";

interface ISkillSubItem {
    item: string;
    iconpath: string;
}

interface ISkillItem {
    field: string;
    subItem: ISkillSubItem[];
}

const Technology = () => {
    return (
        <div className="min-h-[100vh] w-full py-24" id="technology">
            <h1 className="sm:text-large text-sup-heading text-center text-theme-w font-bold uppercase font-main">
                Technology
            </h1>
            <motion.div
                className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center"
                initial={{ y: "25%", opacity: 0, scale: "50%" }}
                whileInView={{ y: 0, opacity: 1, scale: "100%" }}
                viewport={{ once: false }} // Trigger animation only once
                transition={{ duration: 0.8 }}
            >
                {_majorSkills.map(({ field, subItem }) => {
                    return (
                        <SkillItem
                            key={field}
                            field={field}
                            subItem={subItem}
                        />
                    );
                })}
            </motion.div>
        </div>
    );
};

const SkillItem = ({ field, subItem }: ISkillItem) => {
    return (
        <div className="min-w-[20rem] bg-theme-w-alt w-[75%] md:w-[22rem] xl:w-[25rem] mx-auto rounded-md sm:my-4 my-1 flex flex-col justify-between items-center text-center hover:shadow-xl transition-all duration-300">
            <h1 className="bg-theme w-full py-4 text-theme-w text-stitle uppercase font-extrabold ">
                {field}
            </h1>
            <div className="p-2 w-full flex flex-row flex-wrap justify-evenly items-center min-h-[10rem]">
                {subItem.map((props: ISkillSubItem) => {
                    return (
                        <img
                            key={props.item}
                            src={props.iconpath}
                            title={props.item}
                            className="m-2 p-2 max-h-[4rem] rounded-md text-note font-bold list-none text-theme-w opacity-80 hover:scale-110 hover:opacity-100 transition-all duration-300"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Technology;
