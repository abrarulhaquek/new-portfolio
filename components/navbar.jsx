import { Facebook, FacebookRounded, GitHub, LinkedIn, Menu } from '@mui/icons-material';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <nav className="bg-white shadow dark:bg-gray blur-sm">
        <nav className="bg-white shadow z-50 py-2 fixed w-full">
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
                                className="text-black dark:text-black hover:text-gray-500 dark:hover:text-gray-500 focus:outline-none focus:text-black dark:focus:text-black"
                                aria-label="toggle menu"
                            >
                                <Menu />
                            </button>
                        </div>
                    </div>

                    <div
                        className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white border-t-2 lg:border-none border-black mt-4 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
                    >
                        <div className="flex flex-col text-black capitalize dark:text-black lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
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

                            {/* <div className="relative mt-4 lg:mt-0 lg:mx-4">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Search />
                                </span>

                                <input
                                    type="text"
                                    className="w-full py-1 pl-10 pr-4 text-black placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-black focus:outline-none focus:border-gray-600"
                                    placeholder="Search"
                                />
                            </div> */}
                        </div>

                        <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                            <a
                                href="#"
                                className="mx-2 text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-gray-500"
                                aria-label="Reddit"
                            >
                                <FacebookRounded />
                            </a>

                            <a
                                href="#"
                                className="mx-2 text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-gray-500"
                                aria-label="Facebook"
                            >
                                <LinkedIn />
                            </a>

                            <a
                                href="#"
                                className="mx-2 text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-gray-500"
                                aria-label="Github"
                            >
                                <GitHub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
