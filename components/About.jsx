import { AnimatedElement } from '@/pages/animation';
import Image from 'next/image'
import React, { useState } from 'react'
export default function About() {
    const [bgPosition, setBgPosition] = useState({ left: 0, top: 0 });

    const handleOrigin = (e) => {
        setBgPosition({
            left: e.pageX - e.currentTarget.offsetLeft,
            top: e.pageY - e.currentTarget.offsetTop
        });
    };
    return (
        <section className="mx-auto container my-20 px-7" id='about'>
            <AnimatedElement animationClass="animated-BT">
                <div className='md:text-6xl text-4xl font-black uppercase text-black mb-10 text-center relative'>
                    About <span className=' text-primaryColor'>Me</span>
                    <span className=' -translate-x-56 sm:-translate-x-64 -translate-y-5 sm:-translate-y-8 md:-translate-x-96 md:-translate-y-10 absolute text-7xl sm:text-8xl md:text-9xl text-primaryColor opacity-20 '> About </span>
                </div>
            </AnimatedElement>
            <div className="flex flex-col-reverse lg:flex-row ">
                <div className=" text-lg  leading-tight basis-3/5 lg:pr-10 flex flex-col  text-justify">
                    As a Next.js developer, I possess a deep understanding of modern web technologies and best practices. My expertise lies in building fast and scalable web applications that cater to the specific needs of clients and end-users. I am well-versed in JavaScript and React, which are the core technologies used in Next.js development.
                    <br /><br />
                    Furthermore, I have a keen eye for designing responsive and mobile-friendly user interfaces. I ensure that the applications adapt seamlessly to various devices and screen sizes, offering an optimal experience across platforms.

                    API integration is another area where my expertise shines. With Next.js, I can easily integrate with external APIs and backend services, allowing me to fetch and display dynamic data for users. This capability enables me to build interactive and data-driven applications that keep users engaged.
                    <br /><br />
                    Throughout my development process, I place a strong emphasis on code quality, maintainability, and scalability. I follow best practices and design patterns to ensure that the codebase is organized, readable, and easy to maintain, making it efficient for collaboration with other developers on the project.

                    Overall, my extensive experience with Next.js and front-end development enables me to deliver high-quality, performant, and user-friendly web applications that align with modern web standards. I am passionate about creating exceptional user experiences and am always eager to stay updated with the latest advancements in the field to consistently deliver cutting-edge solutions to my clients.
                    <a href='/img/ABRAR UL HAQUE K.pdf' className="hover_btn relative mt-3 bg-white px-[24px] py-3 overflow-hidden w-fit cursor-pointer border border-primaryColor rounded-md" onMouseEnter={handleOrigin} onMouseLeave={handleOrigin} >

                        <span className="hover_label relative font-bold uppercase z-10 text-primaryColor">Resume</span>
                        <span className="hover_bg absolute top-0 left-0 min-w-[255%] min-h-[255%] aspect-square bg-[#72b63b] rounded-[50%]" style={{
                            left: `${bgPosition.left}px`,
                            top: `${bgPosition.top}px`
                        }}></span>
                    </a>
                </div>

                <div className="  basis-2/5 relative lg:p-4 py-[200px]  ">

                    <div className=" line-animation"></div>
                    <Image src="/img/icons/html-1.svg" className='img-animation anime-1  m-auto  !w-8 sm:!w-10 !-top-[90px]  !-left-[250px] sm:!-left-[301px] sm:!-top-[102px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/css-3 (1).svg" className='img-animation anime-2  m-auto  !w-8 sm:!w-10 !-left-[170px] sm:!-left-[190px] !-top-[200px] sm:!-top-[245px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/sass-1 (2).svg" className='img-animation anime-1  m-auto  !w-8 sm:!w-10  !-top-[260px] sm:!-top-[300px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/bootstrap-5-1.svg" className='img-animation anime-2  m-auto  !w-10 sm:!w-12 !left-[170px] !-top-[200px] sm:!-top-[245px] sm:!left-[185px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/tailwind-css-2.svg" className='img-animation anime-1  m-auto  !w-8 sm:!w-10 !left-[240px] sm:!left-[308px] !-top-[80px] sm:!-top-[100px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/figma-5.svg" className='img-animation anime-2  m-auto  !w-11 sm:!w-12 !left-[240px] sm:!left-[315px] !top-7 sm:!top-9' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/jquery.svg" className='img-animation anime-1  m-auto  !w-11 sm:!w-12 !left-[220px] sm:!left-[280px] !top-[140px] sm:!top-[180px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/git-icon.svg" className='img-animation anime-2  m-auto  !w-8 sm:!w-10 !left-[130px] sm:!left-[160px] !top-[240px] sm:!top-[260px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/angular-icon-1.svg" className='img-animation anime-1  m-auto  !w-8 sm:!w-10  !top-[280px] sm:!top-[310px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/react-2 (1).svg" className='img-animation anime-2  m-auto  !w-8 sm:!w-10 !-left-[130px] sm:!-left-[150px] !top-[230px] sm:!top-[260px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/logo-javascript.svg" className='img-animation anime-1  m-auto  !w-8 sm:!w-10 !-left-[220px] sm:!-left-[260px] !top-[150px] sm:!top-[180px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    <Image src="/img/icons/material-ui-1.svg" className='img-animation anime-2  m-auto  !w-8 sm:!w-10 !-left-[250px] sm:!-left-[321px] !top-7 sm:!top-9' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />
                    {/* <Image src="/img/icons/npm-square-red-1.svg" className='img-animation  m-auto  !w-8 sm:!w-10 !-left-[] sm:!-left-[350px] !-top-[200px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" /> */}
                    <Image src="/img/icons/next-js (1).svg" className='drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] !h-fit m-auto absolute !w-[150px] ' layout='fill' objectFit='contain' alt="imgss" loading="lazy" />

                </div>
            </div>
        </section>
    )
}
