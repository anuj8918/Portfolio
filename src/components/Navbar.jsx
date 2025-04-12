import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Navbar = () => {
  const variants = {
    open: {
      clipPath: "circle(1200px at 43px 43px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transition: {
        type: "spring",
        duration: 1
      }
    }
  };

  const [menu, setMenu] = useState(false);

  const items = [
    { id: 1, text: "About", to: 'about' },
    { id: 2, text: "Skills", to: 'skills' },
    { id: 3, text: "Projects", to: 'projects' },
    { id: 4, text: "Contact", to: 'contact' },
  ];

  return (
    <div className='bg-[#0f0f2e] fixed w-full top-0 z-50 shadow-md'>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='container mx-auto px-4 md:flex hidden justify-between items-center py-6'
      >
        <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
          <span className='text-white'>ANUJ</span>
          <span className='text-purple-500'>PORTFOLIO</span>
        </div>
        <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white'>
          {items.map(({ id, text, to }) => (
            <li key={id} className='hover:text-purple-500 duration-200 cursor-pointer'>
              <Link to={to} smooth={true} duration={500} offset={-70}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className='md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full'
        >
          Download CV
        </a>

      </motion.div>

      {/* Mobile Navbar */}
      <div className='flex md:hidden justify-between'>
        {/* Animated Sidebar Menu */}
        <motion.div animate={menu ? 'open' : 'closed'}>
          <motion.div
            variants={variants}
            onClick={() => setMenu(prev => !prev)}
            className='fixed top-0 left-0 w-2/3 h-screen bg-[#0f0f2e] z-40 text-white'
          >
            <div className='px-7 py-6'>
              {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            {menu && (
              <div className='flex flex-col justify-center items-center'>
              <ul className='space-y-6 text-lg'>
                {items.map(({ id, text, to }) => (
                  <li key={id} className='hover:text-purple-500 duration-200 cursor-pointer'>
                    <Link
                      to={to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => setMenu(false)}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            
              {/* Show Download CV only after 'Contact' */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className='text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-8 rounded-full'
              >
                Download CV
              </a>
            </div>
            
            )}
          </motion.div>
        </motion.div>

        {/* Logo for Mobile */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-xl font-bold flex items-center gap-2 py-6 px-4'
        >
          <span className='text-white'>ANUJ</span>
          <span className='text-purple-500'>PORTFOLIO</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
