import React from 'react'

const Contact: React.FC = () => {
  const bgContact = require("../images/contact.png");
  return (
    <div className="min-h-[100vh] lg:pt-[8rem] pt-[12rem] flex lg:flex-row flex-col justify-evenly">
        <div className="absolute top-0 left-0 -z-10 lg:h-[100vh] w-[100vw] opacity-50 lg:opacity-100 h-[120vh]" style={{background:`url(${bgContact})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'left'}} />
        <div className="lg:w-[40vw] w-[100%] text-center">
          <span className="text-theme text-6xl font-extrabold">Let's Chat.</span>
        </div>
        <div className="rounded-xl lg:w-[50vw] w-[100%]">
          <form className="px-[2rem] flex flex-col justify-evenly items-center">
            <span className="text-theme text-3xl font-extrabold m-[1rem]">Send me message.</span>
            <div className="flex m-[1rem] lg:flex-row flex-col w-[100%] justify-between items-center">
              <label className="text-theme font-bold">Name : </label><input className="text-theme p-[0.5rem] m-[1rem[ rounded-md lg:w-[80%] w-[100%]" type="text" placeholder="Enter your name here.."/>
            </div>
            <div className="flex m-[1rem] lg:flex-row flex-col w-[100%] justify-between items-center">
              <label className="text-theme font-bold">Email : </label><input className="text-theme p-[0.5rem] m-[1rem[ rounded-md lg:w-[80%] w-[100%]" type="text" placeholder="Enter your email here.."/>
            </div>
            <div className="flex m-[1rem] lg:flex-row flex-col w-[100%] justify-between items-center">
              <label className="text-theme font-bold">Message : </label><input className="text-theme p-[0.5rem] m-[1rem[ rounded-md lg:w-[80%] w-[100%] h-[10rem] shadow-sm shadow-theme-alt" type="text" placeholder="Enter your message here.."/>
            </div>
           <a className="bg-theme p-[0.6rem] my-[1rem] rounded-md text-white hover:bg-theme-hovd cursor-pointer transition delay-300 ease hover:scale-110">Message</a>
          </form>
        </div>
    </div>
  )
}

export default Contact