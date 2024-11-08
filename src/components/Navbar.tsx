import React from 'react'
import { _navItems } from '../../public/data/_navItems'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full p-2 py-3 flex flex-row justify-evenly items-center px-[20%] bg-theme-b backdrop-filter backdrop-blur-sm fixed top-0 left-0">
        {
            _navItems.map(({title, url}) => {
                return <NavItem key={title} title={title} url={url} />
            })
        }
        <Link href={"#contact"} className="bg-theme text-theme-w hover:text-theme-w-alt p-2 px-2 rounded-xl font-bold font-main-alt ml-[20%] transition-all duration-200">Get in Touch</Link>
    </nav>
  )
}

const NavItem = ({title, url} : any) =>
{
    return (
        <Link href={url} className="text-theme-w hover:text-theme-alt font-bold font-main text-note hover:underline transition-all duration-300">{title}</Link>
    )
}

export default Navbar