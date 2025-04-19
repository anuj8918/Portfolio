import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div id="education" className="text-white py-16 bg-[#0f0f2e]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-8 underline"
        >
          Education
        </motion.h2>

        {/* College Name */}
        <motion.h3
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-2xl md:text-3xl font-semibold mt-6"
        >
          SUSHILA DEVI BANSAL COLLEGE OF TECHNOLOGY
        </motion.h3>

        {/* Degree + Duration */}
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-gray-400 text-lg md:text-xl mt-2"
        >
          B.Tech in Computer Science · Aug 2021 – Aug 2025
        </motion.p>

        {/* Coursework Title */}
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-lg font-semibold mt-6 mb-4"
        >
          Course Work
        </motion.p>

        {/* Coursework Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 mt-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          {[
            'Object Oriented Programming',
            'Data Structure & Algorithm',
            'Operating System',
            'Database Management System',
          ].map((course, index) => (
            <motion.span
              key={index}
              className="px-6 py-3 border border-white rounded-full text-sm md:text-base hover:bg-white hover:text-black transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {course}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
