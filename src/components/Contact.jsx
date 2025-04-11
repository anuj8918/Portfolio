import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id='contact' className="bg-[#0f0f2e] text-white py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Let's Discuss Your <span className="text-purple-500">Project</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-slate-400 mt-4"
        >
          Let's make something new, meaningful, and more visual or conceptual.
        </motion.p>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaPhone className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Call Me</p>
              <p>+91 92294 09080</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaEnvelope className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Email</p>
              <p>anujm8918@gmail.com</p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaMapMarkerAlt className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Address</p>
              <p>Scheme No.136, Indore, India</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-900 text-white p-4 rounded-md border border-purple-500 placeholder-slate-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-900 text-white p-4 rounded-md border border-purple-500 placeholder-slate-400"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-gray-900 text-white p-4 rounded-md border border-purple-500 placeholder-slate-400"
            />
            <input
              type="text"
              placeholder="Budget"
              className="bg-gray-900 text-white p-4 rounded-md border border-purple-500 placeholder-slate-400"
            />
          </div>
          <textarea
            placeholder="Message"
            className="bg-gray-900 text-white p-4 rounded-md w-full border border-purple-500 placeholder-slate-400"
            rows={4}
          ></textarea>

          {/* Centered Button */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition"
              type="submit"
            >
              Submit Message
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-24 border-t border-purple-500 pt-6 flex flex-col md:flex-row justify-between items-center text-lg px-4"
      >
        <p className="font-semibold text-white">&#169; 2025, All Rights Reserved</p>
        <p className="font-semibold text-white">Anuj Portfolio</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-purple-500"><FaFacebook className="w-6 h-6" /></a>
          <a href="#" className="hover:text-purple-500"><FaTwitter className="w-6 h-6" /></a>
          <a href="#" className="hover:text-purple-500"><FaLinkedin className="w-6 h-6" /></a>
          <a href="#" className="hover:text-purple-500"><FaInstagram className="w-6 h-6" /></a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
