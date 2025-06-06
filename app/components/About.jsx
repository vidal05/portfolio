import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center text-5xl font-ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.nice_photo} alt='user' className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-3xl font-ovo'>
                    I am an experienced developer with over six years of professional expertise in the field. 
                    Throughout my career, I have had the privilege of working with great companies, contributing to their success and growth.
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl'>
                    {
                        infoList.map(({icon, iconDark, title, description}, index) => (
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
                                           hover:-translate-y-1 duration-500 hover:shadow-blackCustom
                                           dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </li>
                        ))
                    }
                </ul>

                <h4 className='my-6 text-gray-700 font-ovo dark:text-white/80'>
                    Tools I use
                </h4>
                <ul className='flex gap-3 sm:gap-5 items-center '>
                    {
                        toolsData.map((tool, index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About