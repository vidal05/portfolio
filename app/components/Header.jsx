import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
            Hi! I'm David Castillo
            <Image src={assets.hand_icon} alt='' className='w-6' />
        </h3> 
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Developer based in Mexico.</h1>
        <p className='max-w-2xl mx-auto font-ovo'>
            Software/Web Developer from Mexico with 7 years of experience.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2
                          dark:bg-transparent' href="#contact">
                contact me 
                <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </a>
            <a className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white' href="/sample-resume.pdf" download>
                resume 
                <Image src={assets.download_icon} alt='' className='w-4' />
            </a>
        </div>
    </div>
  )
}

export default Header