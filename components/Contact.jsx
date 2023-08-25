import { FacebookRounded, GitHub, LinkedIn, Mail } from '@mui/icons-material'
import React from 'react';


export default function Contact() {

    return (
        <section className="mx-auto mt-20 px-7 bg-slate-900" id='contact'>
            <div className="container flex flex-col md:flex-row justify-between mx-auto py-7">
                <div>
                    <h1 className="text-3xl font-semibold text-primaryColor">DON&apos;T BE SHY !</h1>
                    <p className="text-1xl md:w-2/4 w-3/4 text-white">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <a href="mailto:abrarashm50@gmail.com" className=' text-white text-sm'><Mail className='text-4xl' /> abrarashm50@gmail.com</a>
                </div>
                <div className="flex gap-2 items-center text-white">
                    <a href="https://www.facebook.com/"><FacebookRounded className='text-3xl' /></a>
                    <a href="https://www.linkedin.com/in/abrar-reactjs/"><LinkedIn className='text-3xl' /></a>
                    <a href="https://github.com/abrarulhaquek"><GitHub className='text-3xl' /></a>
                </div>
            </div>
            <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="container mx-auto py-4">
                <p className='text-white'>Copyright © 2023 by Abrar Ul Haque. All rights reserved.</p>
            </div>

        </section>
    )
}
