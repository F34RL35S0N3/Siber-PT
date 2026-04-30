'use client'

import { useEffect, useRef } from 'react'

export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let offset = 0
    let animId: number

    const GRID = 60
    const particles: Array<{ x: number; y: number; size: number; speed: number; opacity: number; color: string }> = []

    const colors = ['#00f5ff', '#9b00ff', '#00ff88', '#0066ff']

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Moving grid
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.06)'
      ctx.lineWidth = 1
      ctx.beginPath()
      const startY = -(offset % GRID)
      for (let y = startY; y < canvas.height; y += GRID) {
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }
      for (let x = 0; x < canvas.width; x += GRID) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
      }
      ctx.stroke()

      // Bright intersection dots
      ctx.fillStyle = 'rgba(0, 245, 255, 0.15)'
      const startYDot = -(offset % GRID)
      for (let y = startYDot; y < canvas.height + GRID; y += GRID) {
        for (let x = 0; x < canvas.width; x += GRID) {
          ctx.beginPath()
          ctx.arc(x, y, 1.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Floating particles
      particles.forEach(p => {
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color
        ctx.shadowBlur = 6
        ctx.shadowColor = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        p.y -= p.speed
        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }
      })
      ctx.globalAlpha = 1

      offset += 0.5
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
