import React from 'react'
import { motion } from 'framer-motion'
import NetworkBackground from './NetworkBackground'

const BackgroundRays = () => {
  const rays = Array(12).fill(null)
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <NetworkBackground />
      {rays.map((_, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 left-1/2 h-[200vh] w-[2px] origin-top"
          style={{
            background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)',
            rotate: `${index * 30}deg`,
            transformOrigin: '50% 0%',
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ 
            scaleY: [0, 1, 0.5],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  )
}

export default BackgroundRays