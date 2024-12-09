import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import BackgroundRays from './BackgroundRays'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <BackgroundRays />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
      
      <motion.div 
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Power Reimagined
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the next generation of power optimization with our revolutionary platform
        </motion.p>
        
        <motion.button
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero