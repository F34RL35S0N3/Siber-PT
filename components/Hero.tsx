'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const GLITCH_CHARS = '!@#$%^&*<>[]{}|0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function GlitchText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    let iteration = 0
    let interval: NodeJS.Timeout

    const scramble = () => {
      interval = setInterval(() => {
        setDisplay(
          text.split('').map((char, idx) => {
            if (char === ' ') return ' '
            if (idx < iteration) return text[idx]
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          }).join('')
        )
        iteration += 0.5
        if (iteration >= text.length) {
          clearInterval(interval)
          setDisplay(text)
          setTimeout(scramble, 6000 + Math.random() * 4000)
        }
      }, 40)
    }

    const timeout = setTimeout(scramble, 1000)
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text])

  return <span className={className}>{display}</span>
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] orb bg-cyan-500/8 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] orb bg-purple-600/8 translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] orb bg-green-500/5" />

      {/* Scanline */}
      <div className="absolute inset-0 scanline pointer-events-none z-10" />

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 font-mono text-[10px] text-cyan-500/30 hidden lg:block">
        <div>SYS_VER: 4.2.1</div>
        <div>SEC_LEVEL: CLASSIFIED</div>
        <div className="progress-bar w-32 mt-2" />
      </div>
      <div className="absolute top-20 right-8 font-mono text-[10px] text-cyan-500/30 text-right hidden lg:block">
        <div>BIRO_SBR://active</div>
        <div>BIRO_PKT://active</div>
        <div className="progress-bar w-32 mt-2 ml-auto" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-cyan-500/20 rounded-full bg-cyan-500/5"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-400/70 tracking-[0.3em] uppercase">
            Recruitment Protocol Active — 2025
          </span>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="font-orbitron font-black leading-none tracking-tight">
            <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white mb-2">
              <GlitchText text="SIBER &" />
            </div>
            <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                TECHNOLOGY
              </span>
            </div>
            <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white mt-2">
              <GlitchText text="DEVELOPMENT" />
            </div>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-exo text-base sm:text-lg lg:text-xl text-cyan-100/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Upgrade your intelligence. Join the vanguard of digital defense.
          <br />
          <span className="text-cyan-400/70">
            Elite cadets. Real threats. Maximum impact.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#join"
            className="btn-cyber group relative px-10 py-4 bg-cyan-400 text-[#020408] font-orbitron font-bold text-sm tracking-[0.2em] rounded-sm hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
          >
            <span className="relative z-10">JOIN WITH US</span>
          </a>
          <a
            href="#divisions"
            className="btn-cyber group relative px-10 py-4 border border-cyan-500/40 text-cyan-400 font-orbitron font-bold text-sm tracking-[0.2em] rounded-sm hover:border-cyan-400 hover:bg-cyan-500/5 transition-all duration-300"
          >
            EXPLORE DIVISIONS
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { value: '2', label: 'Elite Divisions', suffix: '' },
            { value: '47', label: 'Active Projects', suffix: '+' },
            { value: '98', label: 'Skill Uplift', suffix: '%' },
            { value: '24', label: 'Ops Active', suffix: '/7' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400 tabular-nums">
                {stat.value}<span className="text-purple-400">{stat.suffix}</span>
              </div>
              <div className="font-mono text-[10px] text-cyan-500/40 tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-cyan-500/30 tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-cyan-500/30 to-transparent" />
      </motion.div>
    </section>
  )
}
