import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  const onSubmit = async(event) => {
    event.preventDefault()
    const formatData = new FormData(event.target)
  }
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20
             bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
        <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>

        <p className='text-center mb-12 mx-auto max-w-3xl mt-5 font-ovo'>
            I'd love to hear from you! Any comments you have, please use the form below.
        </p>
        <form onSubmit={onSubmit} className='max-w-3xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-8'>
                <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' 
                       type="text" placeholder='Enter your name' required name='name'
                />
                <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' 
                       type="email" placeholder='Enter your email' required name='email'
                />
            </div>
            <textarea className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' 
                      rows={6} placeholder='Enter your message' required name='message'
            />
            <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' 
                    type='submit'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/> </button>
        </form>
    </div>
  )
}

export default Contact