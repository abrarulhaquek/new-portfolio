import React from 'react'

export default function About() {
    return (
        <section className="mx-auto container my-20 px-7" id='about'>
            <div className='md:text-6xl text-4xl font-black uppercase text-black mb-10 text-center relative'>
                About <span className=' text-primaryColor'>Me</span>
                <span className=' -translate-x-56 sm:-translate-x-64 -translate-y-5 sm:-translate-y-8 md:-translate-x-96 md:-translate-y-10 absolute text-7xl sm:text-8xl md:text-9xl text-primaryColor opacity-20 '> About </span>
            </div>
            <div className="flex flex-col-reverse lg:flex-row ">
                <div className=" text-lg  leading-tight basis-3/5 lg:pr-10 flex items-center text-justify">
                    As a Next.js developer, I possess a deep understanding of modern web technologies and best practices. My expertise lies in building fast and scalable web applications that cater to the specific needs of clients and end-users. I am well-versed in JavaScript and React, which are the core technologies used in Next.js development.
                    <br /><br />
                    Furthermore, I have a keen eye for designing responsive and mobile-friendly user interfaces. I ensure that the applications adapt seamlessly to various devices and screen sizes, offering an optimal experience across platforms.

                    API integration is another area where my expertise shines. With Next.js, I can easily integrate with external APIs and backend services, allowing me to fetch and display dynamic data for users. This capability enables me to build interactive and data-driven applications that keep users engaged.
                    <br /><br />
                    Throughout my development process, I place a strong emphasis on code quality, maintainability, and scalability. I follow best practices and design patterns to ensure that the codebase is organized, readable, and easy to maintain, making it efficient for collaboration with other developers on the project.

                    Overall, my extensive experience with Next.js and front-end development enables me to deliver high-quality, performant, and user-friendly web applications that align with modern web standards. I am passionate about creating exceptional user experiences and am always eager to stay updated with the latest advancements in the field to consistently deliver cutting-edge solutions to my clients.</div>
                <div className="  basis-2/5">
                    <img src="/img/next-js.svg" className='h-40 lg:p-0 pb-9 lg:h-80 m-auto' alt="" srcset="" />
                </div>
            </div>
        </section>
    )
}
