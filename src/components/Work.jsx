import React from 'react';
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Companies from './Companies';

const Work = () => {
  const project = [
    { id: 1, title: "Ahuse", description: "Lorem ipsum...", image: project1, link: "#" },
    { id: 2, title: "App Dashboard", description: "Lorem ipsum...", image: project2, link: "#" },
    { id: 3, title: "Easy Rent", description: "Lorem ipsum...", image: project3, link: "#" }
  ];

  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: companiesRef, inView: companiesInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id='work' className='py-12 bg-[#0f0f2e]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 100 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-4xl text-white underline font-bold text-center mb-12'>
          My Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='mb-12 text-gray-400 text-center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, maxime sit!
        </motion.p>

        <div ref={gridRef} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {
            project.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'
              >
                <img src={project.image} className='w-full h-48 object-cover' alt={project.title} />
                <div className='p-6'>
                  <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
                  <p className='text-slate-400 mb-4'>{project.description}</p>
                  <button className='border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition'>
                    Details
                  </button>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>

      <motion.div
        ref={companiesRef}
        initial={{ opacity: 0, y: 100 }}
        animate={companiesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Companies />
      </motion.div>
    </div>
  );
};

export default Work;
