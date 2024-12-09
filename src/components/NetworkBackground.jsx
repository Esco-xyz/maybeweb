import React, { useEffect, useRef } from 'react'

const NetworkBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let points = []
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initPoints()
    }

    // Initialize points
    const initPoints = () => {
      points = Array(50).fill().map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      }))
    }

    // Draw lines between points
    const drawLines = (point, index) => {
      points.forEach((p2, i) => {
        if (i <= index) return
        
        const dx = point.x - p2.x
        const dy = point.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 150) {
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(100, 149, 237, ${1 - dist / 150})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      points.forEach((point, index) => {
        // Update position
        point.x += point.vx
        point.y += point.vy
        
        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1
        
        // Draw point
        ctx.beginPath()
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(100, 149, 237, 0.5)'
        ctx.fill()
        
        // Draw connections
        drawLines(point, index)
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  )
}

export default NetworkBackground