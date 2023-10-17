import React from 'react';
import { _FooterItems, _CopyrightMessage } from '../Data';

interface IFooterItem
{
    item : string,
    subitems : IFooterSubItem[],
};

interface IFooterSubItem
{
    title : string,
    url? : string
}

const Footer: React.FC = () => {
  return (
    <footer className="min-h-[20rem] bg-theme-alt flex flex-col justify-evenly w-[100%] border-t-theme-hovd border-t-8 rounded-xl">
        <div className="flex flex-row w-[100%] justify-evenly">
            {
                _FooterItems.map(({item, subitems})=>
                {
                    return <FooterItem item={item} subitems={subitems} />
                })
            }
        </div>
        <span className="text-white font-md text-center">{_CopyrightMessage}</span>
    </footer>
  )
}

const FooterItem : React.FC<IFooterItem> = ({item, subitems} : IFooterItem) => {
    return (
        <ul className="flex flex-col">
            <span className="text-2xl text-white font-bold underline underline-offset-8 decoration-2 my-[1rem]">{item}</span>
            {subitems.map(({title, url})=>{
                return <FooterSubItem title={title} url={url} />
            })}
        </ul>
    )
}

const FooterSubItem : React.FC<IFooterSubItem> = ({title, url} : IFooterSubItem) => {
    return (
        <li>
            <a className="text-white text-ms hover:text-black" href={url}>{title}</a>
        </li>
    )
}

export default Footer