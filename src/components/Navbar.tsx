import React from 'react'
import { _NavItems } from '../Data'
import {useEffect, useState} from 'react';


interface NavItem
{
    title : string,
    url? : string
};

const Navbar : React.FC = () =>
{
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [scrollTopDelay, setScrollTopDelay] = useState<number>(0);
    const [navHidden, setNavHidden] = useState<boolean>(false);

    useEffect(()=>
    {
        const handleScroll = (event : any) => {
            setScrollTop(window.scrollY);
            setTimeout(()=>setScrollTopDelay(window.scrollY), 500);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(scrollTop);

    useEffect(()=>{
        if(scrollTop-scrollTopDelay>2)
        {
            setNavHidden(true);
        }
        if(scrollTop-scrollTopDelay<-1)
        {
            setNavHidden(false);
        }
    },[scrollTop]);

    return (
        <nav style={navHidden?{display:'none'}:{display:'flex'}} className="w-[100vw] bg-[#ffffffaa] flex flex-col justify-evenly fixed z-10 lg:pr-[40vw] lg:flex-row backdrop-blur-xl items-center">
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