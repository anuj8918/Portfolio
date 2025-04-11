import React from 'react'
import { motion } from 'framer-motion'

const Companies = () => {
  const companies = [
    'Capegimini',
    "LinkedIn",
    'Swiggy',
    "Zepto",
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
    "Deloitte",
    'Coginzant',
    "Impetus"
  ];

  const scrollVarient1 = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 15,
          ease: "linear",
        }
      }
    }
  };

  const scrollVarient2 = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 15,
          ease: "linear",
        }
      }
    }
  };

  const companiesList = [...companies, ...companies];

  return (
    <div className='text-white py-16'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>Companies I've Worked with</h2>

        <div className='overflow-hidden relative w-full'>
          <motion.div
            variants={scrollVarient1}
            animate="animate"
            className='whitespace-nowrap flex space-x-10'
          >
            {companiesList.map((company, index) => (
              <div
                key={index}
                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>

        <div className='overflow-hidden relative w-full mt-5'>
          <motion.div
            variants={scrollVarient2}
            animate="animate"
            className='whitespace-nowrap flex space-x-10'
          >
            {companiesList.map((company, index) => (
              <div
                key={index}
                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
