'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, direction = 'up', className = '' }: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const initial = {
    up: { opacity: 0, y: 40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
  }[direction]

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const REASONS = [
  {
    num: '01',
    title: 'Karya Senat Korpstaruna',
    description: 'Berinovasi dalam membentuk dan membuat website Senat Korpstaruna menjadi platform digital yang inovatif.',
    color: 'cyan',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Sanapati CyberStorm',
    description: 'Mengikuti perkembangan dunia siber terutama dalam Capture The Flag, Cyberstorm terus mewadahi Taruna yang berbakat.',
    color: 'purple',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'GDGOC',
    description: 'Google Development Group On Campus selalu menjadi wadah inovatif dan edukatif dalam perkembangan teknologi.',
    color: 'green',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Wreck It',
    description: 'Event terbesar di Poltek SSN dalam bidang Capture The Flag dan Hackathon yang diikuti oleh ratusan peserta dari seluruh Indonesia.',
    color: 'cyan',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Keluarga Siber dan PT',
    description: 'Asas kekeluargaan di dalam seksie 4 sangat hangat dan nyaman, membantu meningkatkan jenjang karier dari alumni seksie 4 yang sangat berprestasi.',
    color: 'purple',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Intel & Knowledge',
    description: 'Akses ke intel, tools, dan metodologi yang tidak tersedia di publik. Knowledge yang membuat kamu selangkah lebih maju dari siapa pun.',
    color: 'green',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
]

const COLOR_MAP = {
  cyan: {
    border: 'border-cyan-500/20',
    icon: 'text-cyan-400',
    bg: 'bg-cyan-500/5',
    num: 'text-cyan-500/20',
    hover: 'hover:border-cyan-500/50 hover:bg-cyan-500/8',
    glow: 'group-hover:shadow-[0_0_30px_rgba(0,245,255,0.15)]',
  },
  purple: {
    border: 'border-purple-500/20',
    icon: 'text-purple-400',
    bg: 'bg-purple-500/5',
    num: 'text-purple-500/20',
    hover: 'hover:border-purple-500/50 hover:bg-purple-500/8',
    glow: 'group-hover:shadow-[0_0_30px_rgba(155,0,255,0.15)]',
  },
  green: {
    border: 'border-green-500/20',
    icon: 'text-green-400',
    bg: 'bg-green-500/5',
    num: 'text-green-500/20',
    hover: 'hover:border-green-500/50 hover:bg-green-500/8',
    glow: 'group-hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]',
  },
}

export default function WhyJoin() {
  return (
    <section id="why-join" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030810] to-transparent" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] orb bg-green-500/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-green-500/40" />
            <span className="font-mono text-xs text-green-500/50 tracking-[0.3em] uppercase">Strategic Advantages</span>
            <div className="h-px flex-1 bg-green-500/10" />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white">
              WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">JOIN US</span>
            </h2>
            <p className="font-exo text-cyan-100/40 max-w-md text-sm lg:text-right">
              Bergabung bukan sekadar pilihan karir.
              Ini adalah keputusan untuk mendefinisikan ulang batas kemampuanmu.
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric grid: 3-2-1 layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((item, idx) => {
            const c = COLOR_MAP[item.color as keyof typeof COLOR_MAP]
            const directions = ['left', 'up', 'right', 'left', 'up', 'right'] as const
            return (
              <FadeIn key={item.num} delay={idx * 0.1} direction={directions[idx % 3]}>
                <div
                  className={`group relative p-6 border ${c.border} ${c.bg} rounded-lg ${c.hover} ${c.glow} transition-all duration-400 h-full`}
                >
                  {/* Number */}
                  <div className={`font-orbitron font-black text-5xl ${c.num} absolute top-4 right-5 select-none`}>
                    {item.num}
                  </div>

                  {/* Icon */}
                  <div className={`${c.icon} mb-4`}>{item.icon}</div>

                  {/* Content */}
                  <h3 className="font-orbitron font-bold text-sm text-white mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-exo text-sm text-white/40 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
