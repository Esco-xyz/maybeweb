import React, { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import OpeningAnimation from './components/OpeningAnimation'

function App() {
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      <OpeningAnimation onComplete={() => setShowContent(true)} />
      <div className={`min-h-screen bg-gradient-to-b from-gray-900 to-black text-white transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Features />
        <Pricing />
      </div>
    </>
  )
}

export default App