// import React from 'react'

// export default function Nav() {
//   return (
//     <div className='w-full top-0 h-[12vh] bg-slate-800 shadow-md '>
//         <div className='flex items-center justify-between w-[80%]  mx-auto h-full'>
//             <h1 className='flex-[0.7] cursor-pointer text-[25px] redb text-black font-bold'>Anass.
//                 <span className='text-orange-400'>dev</span>
//             </h1>
//             <div className='nav-animated'>Home</div>
//             <div className='nav-animated'>ABOUT</div>
//             <div className='nav-animated'>PROJECT</div>
//             <div className='nav-animated'>CONTACT</div>
//         </div>
//     </div>
//   )
// }
'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl  ml-2">
          <a
            className=""
            href=""
          >
            ANASS BSELA
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer  font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
            onClick={() => router.push(`/${link}`)}
          >
            <a>{link}</a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer  py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
