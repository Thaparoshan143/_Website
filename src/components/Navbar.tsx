import React from 'react'
import { _NavItems } from '../Data'

interface NavItem
{
    title : string,
    url? : string
};

const Navbar : React.FC = () =>
{
    return (
        <nav className="w-[100vw] flex flex-row justify-evenly items-center px-16 ">
            {
                _NavItems.map(({title, url} : NavItem)=>{
                    return <Item title={title} url={url}/>
                })
            }
        </nav>
    )   
}

const Item : React.FC<NavItem> = ({title, url}) =>
{
    return (
        <a className="font-bold text-2xl mx-[1rem] text-violet-500 p-[1rem] hover:underline underline-offset-8 transition delay-250" href={url}>
            {title}
        </a>
    )
}

export default Navbar;