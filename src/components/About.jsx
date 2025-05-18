import React from 'react';
import aboutImg from '../assets/avatar.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id='about' className='text-white py-16 bg-[#0f0f2e]'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24 text-center'>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className='text-3xl md:text-4xl font-bold mb-8 underline'
        >
          About Me
        </motion.h2>

        {/* Short Intro */}
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className='mb-10 text-gray-400 text-base sm:text-lg md:text-xl'
        >
          Passionate Full Stack Developer skilled in building fast, responsive, and scalable web applications using the MERN stack.
        </motion.p>

        {/* Image and Description */}
        <div className='flex flex-col md:flex-row justify-center items-center'>
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className='mb-8 md:mb-0 md:mr-8 flex justify-center'
          >
            <img
              src={aboutImg}
              alt="Avatar"
              className='w-40 sm:w-56 md:w-64 lg:w-72 rounded-full'
            />
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'
          >
            Hey, I'm Anuj Mishra — a B.Tech IT student and MERN stack developer. 
            I’ve built full-stack projects, explored AI integrations, and have a strong grip on JavaScript. 
            I’ve solved 250+ DSA problems across platforms like LeetCode and GFG. Always curious, always building!
          </motion.p>
        </div>

        {/* Counters */}
        <div className='flex flex-wrap justify-around items-center mt-12 gap-y-8'>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className='text-center px-4'
          >
            <h3 className='text-4xl md:text-6xl font-bold text-purple-500'>10+</h3>
            <p className='text-sm sm:text-base md:text-lg text-gray-300'>Projects Completed</p>
          </motion.div>

          {/* Techs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className='text-center px-4'
          >
            <h3 className='text-4xl md:text-6xl font-bold text-purple-500'>15+</h3>
            <p className='text-sm sm:text-base md:text-lg text-gray-300'>Technologies Used</p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className='text-center px-4'
          >
            <h3 className='text-4xl md:text-6xl font-bold text-purple-500'>5+</h3>
            <p className='text-sm sm:text-base md:text-lg text-gray-300'>Courses Completed</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
