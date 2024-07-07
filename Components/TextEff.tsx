'use client'
import { TypeAnimation } from 'react-type-animation';

const Texteff = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web developer',
        2000,
        'Designer',
        2000,
        'Programmer',
        2000
      ]}
    //   wrapper="span"
      speed={50}
      className='text-3xl font-bold text-cyan-500'
      repeat={Infinity}
    />
  );
};

export default Texteff;