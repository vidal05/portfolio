import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <h1 className='text-4xl mx-auto mb-2'>David Castillo</h1>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} className='w-6' alt=''/>
                vidfloatson@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© {new Date().getFullYear()} David Castillo. All rights reserved.</p>
            <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/vidal05">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/david-castillo-0bab8863/">LinkedIn</a></li>
            </ul>

            
        </div>
    </div>
    
  )
}

export default Footer