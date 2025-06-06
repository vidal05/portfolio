import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>What I offer</h4>
        <h2 className='text-center text-5xl font-ovo'>My Services</h2>

        <p className='text-center mb-12 mx-auto max-w-3xl mt-5 font-ovo'>
            I am an experienced developer with over six years of professional expertise in the field. 
            Throughout my career, I have had the privilege of working with great companies, contributing to their success and growth.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10'>
            {
                serviceData.map(({icon,title,description, link}, index) => (
                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-blackCustom 
                                                cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                                                dark:hover:bg-darkHover dark:hover:shadow-whiteCustom'>
                        <Image src={icon} alt='' className='w-10'/>
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more 
                            <Image src={assets.right_arrow} alt='' className='w-4'/>
                        </a>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services