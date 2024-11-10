import React from 'react'
import { _navItems } from '../../public/data/_navItems'
import Link from 'next/link'

interface INavItem
{
    title : string,
    url : string,
};

const Navbar = () => {
  return (
    <nav className="w-full z-10 p-2 py-3 flex flex-row justify-evenly items-center px-[20%] bg-theme-b backdrop-filter backdrop-blur-sm fixed top-0 left-0 shadow-xl ">
        {
            _navItems.map(({title, url}) => {
                return <NavItem key={title} title={title} url={url} />
            })
        }
        <Link href={"#contact"} className="bg-theme-w text-theme-b hover:bg-theme-w-alt py-1 px-2 rounded-xl font-bold font-main-alt ml-[25%] transition-all duration-300">Get in Touch</Link>
    </nav>
  )
}

const NavItem = ({title, url} : INavItem) =>
{
    return (
        <Link href={url} className="text-theme-w hover:text-theme-alt font-bold font-main text-note capitalize hover:underline transition-all duration-300">{title}</Link>
    )
}

export default Navbar