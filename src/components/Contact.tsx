'use client'

import React from 'react'
import { PiLineVerticalThin } from 'react-icons/pi'
import { useState } from 'react'
import { motion } from "framer-motion"

interface ITextInput 
{
    label : string,
    placeholder : string,
    value : string,
    onChange : (val : string) => void,
};

const Contact = () => {

    const submitForm = (e : React.FormEvent) =>
    {
        e.preventDefault();
        alert("Recieved\nName : " + name + " | Email : " + email + " | message : " + message + "\nNote: this is not connected to backend");
        // console.log("Name : " + name + " | Email : " + email + " | message : " + message);
        // If clearning not required then remove or comment line below
        setName("");setEmail("");setMessage("")
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

  return (
    <div className="min-h-[50vh] w-full flex md:flex-row flex-col justify-evently items-center text-theme-w bg-theme-w-alt" id="contact">
        <div className="md:w-[35%] w-full h-full flex flex-col justify-center items-center">
            <span className="text-title md:text-heading py-8 w-full text-center text-theme-b captalize font-bold">Want More Details?</span>
            <motion.a
                className="text-theme-w xl:text-heading text-title hover:bg-theme-b bg-theme-b-alt p-2 md:px-4 rounded-md font-bold font-main-alt transition-all duration-200 uppercase"
                initial={{ y: "50%", opacity: 0, scale: 0 }}
                whileInView={{ y: 0, opacity: 1, scale : "100%" }}
                viewport={{ once: false }} // Trigger animation only once
                transition={{ duration: 0.5 }}
                href="/files/Roshan Thapa CV.pdf"
            >
                Download CV
            </motion.a>
        </div>
        <PiLineVerticalThin className="xl:text-[18rem] text-[10rem] text-theme-b h-full md:rotate-0 rotate-90"/>
        <div className="md:w-[65%] w-full h-[50vh] flex flex-col justify-evenly items-center">
            <span className="text-theme-b text-heading font-extrabold font-main-alt uppercase m-8 underline">Get in Touch</span>
            <form className="flex flex-col justify-evenly items-center w-full h-full xl:px-[10%] px-4" onSubmit={(e)=>submitForm(e)}>
                <TextInput label="Name:" value={name} placeholder="Enter your name here.." onChange={setName}/>
                <TextInput label="Email:" value={email} placeholder="Enter your email here.." onChange={setEmail}/>
                <TextInput label="Message:" value={message} placeholder="Enter your message here.." onChange={setMessage}/>
                <button type="submit" className="bg-theme-b-alt text-theme-w p-2 px-4 font-bold rounded-xl hover:bg-theme-b">Submit</button>
            </form> 
        </div>
    </div>
  )
}

const TextInput = ({label, placeholder, value, onChange} : ITextInput) => {
    return (
        <div className="m-2 flex flex-row justify-between items-center w-full text-theme-w">
            <label className="text-theme-b font-bold">{label}</label>
            <input onChange={(e)=>onChange(e.target.value)} value={value} type={"text"} placeholder={placeholder} className={"p-2 w-[80%] rounded-md text-theme-b "}/>
        </div>
    )
}

export default Contact