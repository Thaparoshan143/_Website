import React from 'react'
import { _navItems } from '../../public/data/_navItems'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full p-2 my-5 flex flex-row justify-evenly items-center px-[25%] backdrop-filter backdrop-blur-sm fixed top-0 left-0">
        {
            _navItems.map(({title, url}) => {
                return <NavItem key={title} title={title} url={url} />
            })
        }
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