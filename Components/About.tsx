import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <div className="bg-black pb-[3rem] pt-[4rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
            <div>
                <h1 className="text-[35px] md:text-[50px] uppercase font-bold text-blue-400">About Me</h1>
                <div className="mb-1 flex items-center md:space-x-10">
                    <span className='w-[200px] hidden md:block h-[5px] bg-slate-600 rounded-sm'></span>
                <p className="text-lg w-[80%] text-white">I'm a full-stack developer based in Morocco. I specialize in building and designing exceptional digital experiences. I have a passion for web development and love to create for web and mobile devices.I have a passion for web development and love to create for web and mobile devices. I have a passion for web development and love to create for web and mobile devices.</p>
                {/* <p className="text-lg text-white mt-4">I have a passion for web development and love to create for web and mobile devices. I have a passion for web development and love to create for web and mobile devices.</p> */}
                </div>
            </div>
            <div className="lg:w-[500px] mx-auto md:mx-0 mt-8 lg:mt-0 lg:h-[500px] w-52 h-52 relative">
                <Image
                    src="/Anass_bsela.jpg"
                    alt="Anass Bsela"
                    layout='fill'
                    objectFit='contain'
                    className="relative z-10 w-[100%] h-[100%] rounded-none object-contain"
                />
            </div>
        </div>
    </div>
  )
}
