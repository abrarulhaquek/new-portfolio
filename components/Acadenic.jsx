import React from 'react'

export default function Acadenic() {
    return (
        <section className="mx-auto container my-20 px-7" id='edu'>
            <div className='text-3xl md:text-6xl sm:text-4xl font-black uppercase text-black mb-10 text-center relative'>
                My <span className=' text-primaryColor'>academic</span>
                <span className=' -translate-x-[260px] sm:-translate-x-3/4 -translate-y-2 sm:-translate-y-5 md:-translate-y-10 absolute text-5xl sm:text-7xl md:text-9xl text-primaryColor opacity-20 '> education </span>
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-medium">SRM University</h3>
                <h4 className=" text-lg md:text-xl leading-10">— Pursuing Master's in Computer Application</h4>
                <h6 className="text-sm float-right p-3">2023 - </h6>
                <hr className='h-px my-5 bg-gray-200 border-0 dark:bg-gray-400' />
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-medium">Islamiah College (Autonomous)</h3>
                <h4 className=" text-lg md:text-xl leading-10">— Bachelorette in Computer Science</h4>
                <h6 className="text-sm float-right p-3">2019-2022</h6>
                <hr className='h-px my-5 bg-gray-200 border-0 dark:bg-gray-400' />
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-medium">Wisdom Higher Secondary School</h3>
                <h4 className=" text-lg md:text-xl leading-10">— Higher Secondary</h4>
                <h6 className="text-sm float-right p-3">2017-2019</h6>
                <hr className='h-px my-5 bg-gray-200 border-0 dark:bg-gray-400' />
            </div>
        </section>
    )
}
