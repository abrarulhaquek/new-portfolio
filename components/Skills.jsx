import React from 'react'
import Spline from '@splinetool/react-spline';

export default function Skills() {
    return (
        <section className="mx-auto container my-20 px-7" id='skill'>
            <div className='md:text-6xl text-4xl font-black uppercase text-black mb-10 text-center relative'>
                my <span className=' text-primaryColor'>skills</span>
                <span className=' -translate-x-56 sm:-translate-x-64 -translate-y-5 sm:-translate-y-8 md:-translate-x-96 md:-translate-y-10 absolute text-7xl sm:text-8xl md:text-9xl text-primaryColor opacity-20 '> skills </span>
            </div>
            {/* <Spline scene="https://prod.spline.design/WHUHpv9mFfQ4exK6/scene.splinecode" /> */}
            <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-content-center">
                <Spline scene="https://prod.spline.design/LlpaXghnyNFOjie9/scene.splinecode" /> {/* html */}
                <Spline scene="https://prod.spline.design/7cBnvOYgqjrnERO7/scene.splinecode" />{/* Css */}
                <Spline scene="https://prod.spline.design/h8sUcPSjCCcOa96z/scene.splinecode" />{/* Js */}
                <Spline scene="https://prod.spline.design/q7NYle70WnvmmCuy/scene.splinecode" />{/* Bootstrap */}
                <Spline scene="https://prod.spline.design/WHUHpv9mFfQ4exK6/scene.splinecode" />
                <Spline scene="https://prod.spline.design/WHUHpv9mFfQ4exK6/scene.splinecode" />
                <Spline scene="https://prod.spline.design/WHUHpv9mFfQ4exK6/scene.splinecode" />
                <Spline scene="https://prod.spline.design/WHUHpv9mFfQ4exK6/scene.splinecode" />
                <Spline scene="https://prod.spline.design/WHUHpv9mFfQ4exK6/scene.splinecode" />
                <Spline scene="https://prod.spline.design/WHUHpv9mFfQ4exK6/scene.splinecode" />

            </div>
        </section>
    )
}
