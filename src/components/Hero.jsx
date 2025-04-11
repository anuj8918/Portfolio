import React from 'react';
import avatar from '../assets/avatar.png';
import { motion } from 'framer-motion';
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div className='bg-[#0f0f2e] text-white min-h-[88vh] flex flex-col justify-center items-center px-4 pt-24'>
      {/* Avatar Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
        src={avatar}
        alt="Avatar"
        className='w-2/3 md:w-1/3 lg:w-1/4 mb-6'
      />

      {/* Hero Text Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className='text-center max-w-2xl'
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
          className='text-4xl md:text-5xl font-bold mb-4'
        >
          Your Story, Your Way
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
            className='block text-purple-500 mt-2'
          >
            Build Your Personal Portfolio
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
          className='text-gray-400 text-lg mb-8'
        >
          Showcase your journey by crafting a personal portfolio in minutes.
        </motion.p>

        {/* CTA Buttons */}
        <div className='flex justify-center space-x-4'>
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5, ease: 'easeOut' }}
            className='bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full text-white transition'
          >
            <Link
            to='contact'
            smooth={true}
            duration={500}
            offset={-70}
            >Hire Me
            </Link>
            
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5, ease: 'easeOut' }}
            className='border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition'
          >
            <Link
            to='about'
            smooth={true}
            duration={500}
            offset={-70}
            >My Story
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
