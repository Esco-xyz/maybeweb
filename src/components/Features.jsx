import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    title: 'Optimized Power',
    description: 'Advanced algorithms for maximum efficiency',
    icon: '⚡'
  },
  {
    title: 'Smart Processing',
    description: 'AI-powered real-time adjustments',
    icon: '🧠'
  },
  {
    title: 'Secure Platform',
    description: 'Enterprise-grade security built-in',
    icon: '🔒'
  }
]

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Powerful Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features