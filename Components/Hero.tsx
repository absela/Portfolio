import React from 'react'
import Particle from './Particle'
import Image from 'next/image'
import Texteff from './TextEff'
import { IconCloudDemo } from './magic'



export default function Hero() {
  return (
    // <div className="h-[88vh] bg-[url('/banner.jpg')] bg-cover bg-center text-white">
    <div className="h-[88vh] back  bg-cover bg-center text-white">
        <Particle/>
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <div>
                <h1 className="text-[35px] md:text-[50px] font-bold text-white">Hi, I'm Anass</h1>
                <Texteff/>
                <p className="text-lg mt-[2rem] text-white">I'm a full-stack developer based in Morocco. I specialize in building and designing exceptional digital experiences.</p>
                <div className="flex gap-4 mt-4">
                    <button className="text-blue-400">Hire Me</button>
                    <button className="text-blue-400">My Resume</button>
                </div>
            </div>
            <div className="w-[1000px] h-[1000px] hidden  relative lg:flex items-center">
                <IconCloudDemo/>
                {/* <Image
                    src="/Anass_bsela.jpg"
                    alt="Anass Bsela"
                    layout='fill'
                    objectFit='cover'
                    className="rounded-full"
                /> */}
            </div>
        </div>
    </div>
  )
}
