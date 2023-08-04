import React from 'react'
import TimeDifference from './exp_cal'
import Image from 'next/image'

export default function Hero() {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font" id='hero'>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-screen xl:w-2/4 lg:w-3/4 w-screen">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h4 className='text-2xl md:1xl text-primaryColor'>Hi There ! I&apos;m </h4>
                        <h1 className="title-font md:text-5xl text-3xl mb-4 font-medium text-white">Abrar Ul Haque
                        </h1>
                        <p className="mb-8 leading-relaxed md:text-4xl text-primaryColor text-2xl">React Developer</p>

                    </div>
                    <div className=" w-60 sm:w-80  ">
                        <Image layout='fill' objectFit='contain' className='object-center rounded-full !relative' loading='lazy' alt="hero" src="/img/fav.jpg" />
                    </div>
                </div>
                <TimeDifference />
            </section>
        </>
    )
}
