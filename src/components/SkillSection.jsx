import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-300" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-100" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Database', icon: <FaDatabase className="text-purple-400" /> },
];

const SkillSection = () => {
  return (
    <section id="skills" className="bg-[#0f0f2e] text-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center underline"
      >
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-[#1a1a3c] rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillSection;
