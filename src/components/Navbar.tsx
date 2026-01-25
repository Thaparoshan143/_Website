"use client";

import React from "react";
import { _navItems } from "../../public/data/_navItems";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface INavItem {
    title: string;
    url: string;
}

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(true);
    const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);

    const toggleNav = () => {
        setIsNavOpen((navVal) => !navVal);
    };

    const handleResize = () => {
        if (window.innerWidth < 640) {
            setIsMobileMenu(true);
            setIsNavOpen(false);
        } else if (window.innerWidth > 640) {
            setIsMobileMenu(false);
            setIsNavOpen(true);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <nav
                className={
                    "w-full z-10 p-2 py-3 md:px-[20%] bg-theme-b backdrop-filter backdrop-blur-sm fixed top-0 left-0 shadow-xl " +
                    (isNavOpen
                        ? " flex sm:flex-row flex-col justify-evenly items-center sm:h-fit h-screen "
                        : " hidden h-0 ")
                }
                onClick={() => setIsNavOpen(isMobileMenu ? false : true)}
            >
                {_navItems.map(({ title, url }) => {
                    return <NavItem key={title} title={title} url={url} />;
                })}
                <Link
                    href={"#contact"}
                    className="bg-theme-w text-theme-b hover:bg-theme-w-alt py-1 px-2 rounded-xl font-bold font-main-alt xl:ml-[25%] transition-all duration-300"
                >
                    Get in Touch
                </Link>
            </nav>
            {isMobileMenu ? (
                <button
                    onClick={() => toggleNav()}
                    className={
                        "bg-theme-w p-2 rounded-[50%] shadow-md shadow-gray-600 fixed top-4 right-4 z-20"
                    }
                >
                    {!isNavOpen ? (
                        <IoMdMenu className="text-title text-theme" />
                    ) : (
                        <IoMdClose className="text-title text-theme " />
                    )}
                </button>
            ) : (
                <></>
            )}
        </>
    );
};

const NavItem = ({ title, url }: INavItem) => {
    return (
        <Link
            href={url}
            className="text-theme-w hover:text-theme-alt font-bold font-main text-note capitalize hover:underline transition-all duration-300"
        >
            {title}
        </Link>
    );
};

export default Navbar;
