import { useTheme } from '@/components/ThemeChanger';
import { FacebookRounded, GitHub, LinkedIn, Menu } from '@mui/icons-material';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <nav className="bg-white shadow dark:bg-gray blur-sm">
        <nav className="bg-slate-600/20
            } backdrop-blur-md bg-slate-600/20 shadow z-50 py-2 fixed w-full">
            <div className="container px-6 py-3 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="flex items-center justify-between pb-1">
                        <a href="#" className='w-12 top-2 h-12 absolute'>
                            <Image
                                src="/img/fav.jpg"
                                alt="imgss"
                                layout="fill"
                                className='rounded-full'
                            />
                        </a>

                        <div className="flex lg:hidden w-full justify-end">
                            <button
                                onClick={handleClick}
                                type="button"
                                className="text-white dark:text-white hover:text-gray-500 dark:hover:text-gray-500 focus:outline-none focus:text-white dark:focus:text-white"
                                aria-label="toggle menu"
                            >
                                <Menu />
                            </button>
                        </div>
                    </div>

                    <div
                        className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-slate-600/20  border-t-2 lg:border-none border-black mt-4 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
                    >
                        <div className="flex flex-col text-white capitalize dark:text-white lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                            <a
                                href="#hero"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                            >
                                About Us
                            </a>
                            <a
                                href="#exp"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                            >
                                Experience
                            </a>
                            <a
                                href="#edu"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                            >Education
                            </a>
                            <a
                                href="#contact"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2 gap-3">
                            <a
                                href="https://www.facebook.com/"
                                className=" text-white transition-colors duration-300 transform dark:text-white hover:text-gray-500 dark:hover:text-gray-500"
                                aria-label="Reddit"
                            >
                                <FacebookRounded />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/abrar-reactjs/"
                                className=" text-white transition-colors duration-300 transform dark:text-white hover:text-gray-500 dark:hover:text-gray-500"
                                aria-label="Facebook"
                            >
                                <LinkedIn />
                            </a>

                            <a
                                href="https://github.com/abrarulhaquek"
                                className=" text-white transition-colors duration-300 transform dark:text-white hover:text-gray-500 dark:hover:text-gray-500"
                                aria-label="Github"
                            >
                                <GitHub />
                            </a>
                            <button onClick={toggleTheme} className='w-6 h-6 m-auto bg-gradient-to-r from-white to-[#72b63b] animate-spin-slow  rounded-full'></button>
                            <button className='w-6 h-6 m-auto bg-gradient-to-r from-[#252525] to-red-700 animate-spin-slow  rounded-full'></button>
                            <input type="color" className='h-6 w-6 border-0 bg-transparent' name="" id="" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
