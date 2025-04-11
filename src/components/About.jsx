import React from 'react';
import aboutImg from '../assets/avatar.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id='about' className='text-white py-16 bg-[#0f0f2e]'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24 text-center'>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold mb-8 underline'
        >
          About Me
        </motion.h2>

        {/* Short Intro */}
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='mb-12 text-gray-400 text-base sm:text-lg md:text-xl'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cum, beatae doloremque alias dicta cupiditate magni dolor porro,
          in accusamus, deserunt iste libero laudantium necessitatibus quasi
          qui animi tenetur harum! Necessitatibus.
        </motion.p>

        {/* Image and Description */}
        <div className='flex flex-col md:flex-row justify-center items-center'>
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.6, duration: 0.5 }}
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
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'
          >
            Hey there! I'm Anuj, a passionate UI/UX designer armed with creativity and a love for problem-solving.
            With a blend of design thinking and user-centric approach, I'm on a mission to create digital experiences
            that leave a lasting impression. So let's collaborate and bring your vision to life!
          </motion.p>
        </div>

        {/* Counters */}
        <div className='flex flex-wrap justify-around items-center mt-12 gap-y-8'>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 1.2, duration: 0.3 }}
            className='text-center px-4'
          >
            <h3 className='text-4xl md:text-6xl lg:text-8xl font-bold text-purple-500'>5+</h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className='text-sm sm:text-base md:text-lg text-gray-300'
            >
              Years of Design Experience
            </motion.p>
          </motion.div>

          {/* Customers */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 1.4, duration: 0.3 }}
            className='text-center px-4'
          >
            <h3 className='text-4xl md:text-6xl lg:text-8xl font-bold text-purple-500'>50+</h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className='text-sm sm:text-base md:text-lg text-gray-300'
            >
              Overall Global Customers
            </motion.p>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 1.6, duration: 0.3 }}
            className='text-center px-4'
          >
            <h3 className='text-4xl md:text-6xl lg:text-8xl font-bold text-purple-500'>90+</h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className='text-sm sm:text-base md:text-lg text-gray-300'
            >
              Projects I have Made
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
