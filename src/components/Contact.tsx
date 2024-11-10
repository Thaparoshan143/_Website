import React from 'react'
import { PiLineVerticalThin } from 'react-icons/pi'

interface ITextInput 
{
    label : string,
    placeholder : string,
};

const Contact = () => {
  return (
    <div className="min-h-[50vh] h-[50vh] w-full flex flex-row text-theme-w bg-theme-w-alt" id="contact">
        <div className="w-[30%] h-full flex flex-col justify-center items-center">
            <span className="text-title p-8 text-theme-b captalize font-bold">Want More Details?</span>
            <button className="text-theme-w text-heading hover:bg-theme-b bg-theme-b-alt p-2 px-4 rounded-md font-bold font-main-alt transition-all duration-200 uppercase">Download CV</button>
        </div>
        <PiLineVerticalThin className="text-[18rem] text-theme-b h-full"/>
        <div className="w-[60%] h-full flex flex-col justify-evenly items-center">
            <span className="text-theme-b text-heading font-extrabold font-main-alt uppercase m-8 underline">Get in Touch</span>
            <form className="flex flex-col justify-evenly items-center w-full h-full px-[10%]">
                <TextInput label="Name:" placeholder="Enter your name here.." />
                <TextInput label="Email:" placeholder="Enter your email here.." />
                <TextInput label="Message:" placeholder="Enter your message here.."/>
            </form> 
        </div>
    </div>
  )
}

const TextInput = ({label, placeholder} : ITextInput) => {
    return (
        <div className="m-2 flex flex-row justify-between items-center w-full text-theme-w">
            <label className="text-theme-b font-bold">{label}</label>
            <input type={"text"} placeholder={placeholder} className={"p-2 w-[80%] rounded-md text-theme-b "}/>
        </div>
    )
}

export default Contact