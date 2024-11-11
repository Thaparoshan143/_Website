'use client'

import React from 'react'
import { PiLineVerticalThin } from 'react-icons/pi'
import { useState } from 'react'

interface ITextInput 
{
    label : string,
    placeholder : string,
    value : string,
    onChange : (val : string) => void,
};

const Contact = () => {

    const submitForm = (e : any) =>
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
    <div className="min-h-[50vh] h-[50vh] w-full flex flex-row text-theme-w bg-theme-w-alt" id="contact">
        <div className="w-[30%] h-full flex flex-col justify-center items-center">
            <span className="text-title p-8 text-theme-b captalize font-bold">Want More Details?</span>
            <button className="text-theme-w text-heading hover:bg-theme-b bg-theme-b-alt p-2 px-4 rounded-md font-bold font-main-alt transition-all duration-200 uppercase">Download CV</button>
        </div>
        <PiLineVerticalThin className="text-[18rem] text-theme-b h-full"/>
        <div className="w-[60%] h-full flex flex-col justify-evenly items-center">
            <span className="text-theme-b text-heading font-extrabold font-main-alt uppercase m-8 underline">Get in Touch</span>
            <form className="flex flex-col justify-evenly items-center w-full h-full px-[10%]" onSubmit={(e)=>submitForm(e)}>
                <TextInput label="Name:" value={name} placeholder="Enter your name here.." onChange={setName}/>
                <TextInput label="Email:" value={email} placeholder="Enter your email here.." onChange={setEmail}/>
                <TextInput label="Message:" value={message} placeholder="Enter your message here.." onChange={setMessage}/>
                <button type="submit" className="bg-theme-b-alt text-theme-w p-2 px-4 rounded-xl hover:bg-theme-b">Submit</button>
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