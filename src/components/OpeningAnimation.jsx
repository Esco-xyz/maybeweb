import React from 'react'
import { motion } from 'framer-motion'

const OpeningAnimation = ({ onComplete }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative w-full h-full">
        {/* Diagonal line */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 h-[1px] bg-orange-500 origin-left"
            style={{ width: '100vw' }}
            initial={{ scaleX: 0, rotate: -45 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* Logo reveal */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <svg
            className="w-12 h-12 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M13 10V3L4 14h7v7l9-11h-7z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />
          </svg>
        </motion.div>

        {/* Additional diagonal lines */}
        <motion.div
          className="absolute top-1/2 left-1/2 h-[1px] bg-blue-500/30 origin-left"
          style={{ width: '100vw' }}
          initial={{ scaleX: 0, rotate: 45 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[1px] bg-purple-500/30 origin-left"
          style={{ width: '100vw' }}
          initial={{ scaleX: 0, rotate: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export default OpeningAnimation