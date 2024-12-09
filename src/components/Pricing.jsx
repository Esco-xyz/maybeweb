import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const plans = [
  {
    name: 'Starter',
    price: '29',
    features: ['Basic power optimization', '24/7 monitoring', 'Email support']
  },
  {
    name: 'Pro',
    price: '79',
    features: ['Advanced optimization', 'Real-time analytics', 'Priority support', 'Custom alerts']
  },
  {
    name: 'Enterprise',
    price: '199',
    features: ['Full optimization suite', 'Dedicated support', 'API access', 'Custom integration']
  }
]

const Pricing = () => {
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
          Choose Your Plan
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">${plan.price}<span className="text-lg font-normal text-gray-400">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing