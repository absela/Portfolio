import { About } from '@/Components/About';
import Hero from '@/Components/Hero';
import Nav from '@/Components/Nav';
import React from 'react';

export default function HomePage() {
  return (
    <div className='overflow-x-hidden'>
      <div>
        <Nav />
        <Hero />
        <div className="relative z-[30] ">
          <About />
        </div>
      </div>
    </div>
  );
}
