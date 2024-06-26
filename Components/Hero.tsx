import React from 'react'
import Particle from './Particle'



export default function Hero() {
  return (
    <div className="h-[88vh] bg-cover bg-center">
        <Particle/>
        <div className="w-[80%]  grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <div className="flex z-40 flex-col justify-center">
                <h1 className="text-5xl font-bold text-white">Hi, I'm Anass</h1>
                <p className="text-lg  text-white">I'm a full-stack developer based in Morocco. I specialize in building and designing exceptional digital experiences.</p>
                <div className="flex gap-4 mt-4">
                    <button className="btn">Hire Me</button>
                    <button className="btn">View Portfolio</button>
                </div>
            </div>
            <div className="flex justify-center">
                <img src="/images/hero.png" alt="hero" className="w-[80%]"/>
            </div>
        </div>
    </div>
  )
}
