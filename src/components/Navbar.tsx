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
        <nav className="w-[100vw] bg-[#ffffffaa] flex flex-row justify-evenly fixed z-10 pr-[40vw] backdrop-blur-xl">
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
        <a className="font-medium text-xl mx-[1rem] text-theme p-[1rem] hover:underline underline-offset-8 transition delay-500 decoration-4" href={url}>
            {title}
        </a>
    )
}

export default Navbar;