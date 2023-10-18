import React from 'react'

const Contact: React.FC = () => {
  const bgContact = require("../images/contact.png");
  return (
    <div className="h-[100vh] pt-[8rem] flex flex-row justify-evenly">
        <img className="absolute top-0 left-0 -z-10 w-[100vw] h-[100vh] min-h-full min-w-full" src={bgContact} alt={"contact image"} />
        <div className="w-[40vw] text-center">
          <span className="text-theme text-6xl font-extrabold">Let's Chat.</span>
        </div>
        <div className="rounded-xl w-[50vw]">
          <form className="px-[2rem] flex flex-col justify-evenly items-center">
            <span className="text-theme text-3xl font-extrabold mb-[1rem]">Send me message.</span>
            <div className="flex flex-row w-[100%] justify-between m-[1rem] items-center">
              <label className="text-theme font-bold">Name : </label><input className="text-theme p-[0.5rem] m-[1rem[ rounded-md w-[80%]" type="text" placeholder="Enter your name here.."/>
            </div>
            <div className="flex flex-row w-[100%] justify-between m-[1rem] items-center">
              <label className="text-theme font-bold">Email : </label><input className="text-theme p-[0.5rem] m-[1rem[ rounded-md w-[80%]" type="text" placeholder="Enter your email here.."/>
            </div>
            <div className="flex flex-row w-[100%] justify-between m-[1rem] items-center">
              <label className="text-theme font-bold">Message : </label><input className="text-theme p-[0.5rem] m-[1rem[ rounded-md w-[80%] h-[10rem]" type="text" placeholder="Enter your message here.."/>
            </div>
           <a className="bg-theme p-[0.6rem] my-[1rem] rounded-md text-white hover:bg-theme-hovd cursor-pointer transition delay-300 ease hover:scale-110">Message</a>
          </form>
        </div>
    </div>
  )
}

export default Contact