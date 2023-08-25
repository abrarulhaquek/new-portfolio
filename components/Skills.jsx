import React from 'react'
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { AnimatedElement } from '@/pages/animation';

export default function Skills() {
    return (
        <section className="mx-auto container my-20 px-7" id='skill'>
            <AnimatedElement animationClass="animated-BT"> <div className='md:text-6xl text-4xl font-black uppercase text-black mb-10 text-center relative'>
                my <span className=' text-primaryColor'>skills</span>
                <span className=' -translate-x-56 sm:-translate-x-64 -translate-y-5 sm:-translate-y-8 md:-translate-x-96 md:-translate-y-10 absolute text-7xl sm:text-8xl md:text-9xl text-primaryColor opacity-20 '> skills </span>
            </div></AnimatedElement>
            <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-content-center gap-y-5">
                {/* <Spline scene="https://prod.spline.design/LlpaXghnyNFOjie9/scene.splinecode" />
                <Spline scene="https://prod.spline.design/7cBnvOYgqjrnERO7/scene.splinecode" />
                <Spline scene="https://prod.spline.design/h8sUcPSjCCcOa96z/scene.splinecode" />
                <Spline scene="https://prod.spline.design/q7NYle70WnvmmCuy/scene.splinecode" />
                <Spline scene="https://prod.spline.design/WHUHpv9mFfQ4exK6/scene.splinecode" /> */}
                <Image height={80} width={80} className='m-auto ' src="/img/icons/html-1.svg" alt="skill" />
                <Image height={100} width={80} className='m-auto ' src="/img/icons/css-3 (1).svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/sass-1 (2).svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/bootstrap-5-1.svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/material-ui-1.svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/tailwind-css-2.svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/figma-5.svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/pwa-icon.svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/git-icon.svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/logo-javascript.svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/jquery.svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/react-2 (1).svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/angular-icon-1.svg" alt="skill" />
                <Image height={100} width={100} className='m-auto ' src="/img/icons/next-js (1).svg" alt="skill" />
                {/* <img src="../public/img/icons" alt="skill" /> */}

            </div>
        </section>
    )
}
