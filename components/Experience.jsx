import AnimatedElement from '@/pages/animation';
import Image from 'next/image'
import React from 'react'

export default function Experience() {
    const startDate = '2022-01-26';
    const calculateYearAndMonths = (startDate) => {
        const start = new Date(startDate);
        const end = new Date();

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months };
    };

    const { years, months } = calculateYearAndMonths(startDate);

    return (
        <section className="mx-auto container my-20 px-7" id='exp'>
            <AnimatedElement animationClass="animated-BT">
                <div className='text-3xl md:text-6xl sm:text-4xl font-black uppercase text-black mb-10 text-center relative'>
                    My <span className=' text-primaryColor'>Experience</span>
                    <span className=' -translate-x-[260px] -translate-y-2  sm:translate-x-[-330px] sm:-translate-y-3 md:translate-x-[-534px]  md:-translate-y-6 lg:translate-x-[-625px]  lg:-translate-y-9 absolute text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-primaryColor opacity-20 '> experience </span>
                </div>
            </AnimatedElement>
            <div className="container">

                <div className="grid lg:grid-cols-2 grid-cols-1 mt-20 gap-4 ">
                    <AnimatedElement animationClass="animated-LR">
                        <div className="border border-borderLight rounded-lg p-8 w-full  shadow-xl relative">
                            <div className="absolute bg-gradient-to-b from-[#eec443] to-[#d3a12e] right-4 h-12 -top-1 grid place-content-center w-16  after:absolute after:top-12 after:w-full after:border-l-[32px] after:border-l-[#d3a12e]  after:border-r-[32px] after:border-r-[#d3a12e]  after:border-b-[38px] after:border-b-[transparent] before:h-1 before:w-1 before:bg-[#eec443] before:absolute before:right-[-4px] ">
                                <Image src={'/img/glider-logo.svg'} className='' width={150} height={0} alt='img' />
                            </div>
                            <Image src={'/img/Logo-Updated.svg'} className='mb-3' width={150} height={100} alt='img' />
                            <h1 className='text-2xl font-bold uppercase mb-4' >Glider Technologies</h1>
                            <p className="text-md"><span className='text-primaryColor font-bold '> Experience </span>: 5 Month </p>
                            <p className="text-md"><span className='text-primaryColor font-bold '> Role </span>: Fronted Developer </p>
                            <p className="text-md"><span className='text-primaryColor font-bold '> Skills </span>: HTML, CSS, Sass, Bootstrap, JavaScript, Wordpress </p>
                            <p className="text-md"><span className='text-primaryColor font-bold '> Duration </span>: Aug 2021 - Dec 2021 </p>

                        </div>
                    </AnimatedElement>
                    <AnimatedElement animationClass="animated-RL">
                        <div className="border border-borderLight rounded-lg p-8 w-full  shadow-xl relative h-full">
                            <div className="absolute bg-gradient-to-b from-[#eec443] to-[#d3a12e] right-4 h-12 -top-1 grid place-content-center w-16  after:absolute after:top-12 after:w-full after:border-l-[32px] after:border-l-[#d3a12e]  after:border-r-[32px] after:border-r-[#d3a12e]  after:border-b-[38px] after:border-b-[transparent] before:h-1 before:w-1 before:bg-[#eec443] before:absolute before:right-[-4px] ">
                                <Image src={'/img/zydni-white.png'} className='' alt='img' width={50} height={0} />
                            </div>
                            <Image src={'/img/zydni-final-logo.png'} className='mb-3' alt='img' width={150} height={100} />
                            <h1 className='text-2xl font-bold uppercase mb-4' >Zydni Software Solutions</h1>
                            <p className="text-md"><span className='text-primaryColor font-bold '> Experience </span>: {years} Years {months} Months </p>
                            <p className="text-md"><span className='text-primaryColor font-bold '> Role </span>: React Developer </p>
                            <p className="text-md"><span className='text-primaryColor font-bold '> Skills </span>: Tailwind, Material UI, Figma, JQuery, PWA, React JS, Angular JS, NextJs  </p>
                            <p className="text-md"><span className='text-primaryColor font-bold '> Duration </span>: Jan 2022 - Till Now </p>

                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </section>
    )
}
