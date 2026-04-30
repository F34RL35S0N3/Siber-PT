'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, MouseEvent } from 'react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function TiltCard({ children, glowColor }: { children: React.ReactNode; glowColor: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })
  const rotateX = useTransform(springY, [-100, 100], [6, -6])
  const rotateY = useTransform(springX, [-100, 100], [-6, 6])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-default"
    >
      {children}
    </motion.div>
  )
}

const DIVISIONS = [
  {
    id: '01',
    code: 'BIRO_SBR',
    name: 'Biro Siber',
    tagline: 'Digital Defense. Precision Strike.',
    description:
      'Biro Siber yang bertugas menjaga integritas sistem digital dari ancaman eksternal maupun internal. Beroperasi dalam kerahasiaan penuh dengan kapabilitas ofensif dan defensif yang seimbang.',
    color: 'cyan',
    glowColor: 'rgba(0, 245, 255, 0.4)',
    borderColor: 'border-cyan-500/30',
    accentColor: 'text-cyan-400',
    bgGlow: 'bg-cyan-500/5',
    capabilities: [
      { label: 'Social Engineering', value: 94 },
      { label: 'Reverse Engineering', value: 87 },
      { label: 'Penetration Testing', value: 91 },
      { label: 'Digital Forensics', value: 83 },
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-cyan-400">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: '02',
    code: 'BIRO_PKT',
    name: 'Biro Pengembangan Teknologi',
    tagline: 'Build Tomorrow. Code Today.',
    description:
      'Biro Pengembangan Teknologi yang bertugas merancang dan membangun sistem-sistem kritis organisasi. Inovasi tanpa batas, dengan standar kualitas yang tidak dapat dikompromikan.',
    color: 'purple',
    glowColor: 'rgba(155, 0, 255, 0.4)',
    borderColor: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    bgGlow: 'bg-purple-500/5',
    capabilities: [
      { label: 'Karya Senat Korpstaruna', value: 96 },
      { label: 'Digitalisasi Peminjaman Device', value: 89 },
      { label: 'AI/ML Integration', value: 78 },
      { label: 'Digitalisasai Peminjaman Kunci Kelas', value: 92 },
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-purple-400">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
  },
]

export default function Divisions() {
  return (
    <section id="divisions" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#040c14] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] orb bg-blue-600/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-purple-500/40" />
            <span className="font-mono text-xs text-purple-500/50 tracking-[0.3em] uppercase">Operational Units</span>
            <div className="h-px flex-1 bg-purple-500/10" />
          </div>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">DIVISIONS</span>
          </h2>
          <p className="mt-4 font-exo text-cyan-100/40 max-w-lg">
            Two elite units. One mission. Securing and advancing the digital frontier.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {DIVISIONS.map((div, idx) => (
            <FadeIn key={div.id} delay={idx * 0.2}>
              <TiltCard glowColor={div.glowColor}>
                <div
                  className={`relative rounded-lg p-8 border ${div.borderColor} ${div.bgGlow} backdrop-blur-sm overflow-hidden transition-all duration-500 group hover:border-opacity-70`}
                  style={{ background: `linear-gradient(135deg, rgba(4, 12, 20, 0.9), rgba(4, 12, 20, 0.6))` }}
                >
                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${div.glowColor.replace('0.4', '0.08')}, transparent 70%)` }}
                  />

                  {/* Top corner brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8">
                    <div className={`absolute top-0 left-0 w-full h-px ${div.color === 'cyan' ? 'bg-cyan-400/80' : 'bg-purple-400/80'}`} />
                    <div className={`absolute top-0 left-0 w-px h-full ${div.color === 'cyan' ? 'bg-cyan-400/80' : 'bg-purple-400/80'}`} />
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8">
                    <div className={`absolute top-0 right-0 w-full h-px ${div.color === 'cyan' ? 'bg-cyan-400/80' : 'bg-purple-400/80'}`} />
                    <div className={`absolute top-0 right-0 w-px h-full ${div.color === 'cyan' ? 'bg-cyan-400/80' : 'bg-purple-400/80'}`} />
                  </div>

                  {/* ID badge */}
                  <div className="absolute top-4 right-8">
                    <span className="font-mono text-xs opacity-20">#{div.id}</span>
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 border ${div.borderColor} rounded-sm flex-shrink-0 group-hover:shadow-[0_0_20px_var(--glow)] transition-shadow duration-500`}>
                        {div.icon}
                      </div>
                      <div>
                        <div className={`font-mono text-[10px] ${div.accentColor} opacity-60 tracking-[0.3em] mb-1`}>
                          {div.code}://online
                        </div>
                        <h3 className="font-orbitron font-bold text-xl text-white">{div.name}</h3>
                        <p className={`font-mono text-xs ${div.accentColor} mt-1`}>{div.tagline}</p>
                      </div>
                    </div>

                    <p className="font-exo text-sm text-white/50 leading-relaxed mb-8">
                      {div.description}
                    </p>

                    {/* Capability bars */}
                    <div className="space-y-3">
                      <div className="font-mono text-[10px] text-white/30 tracking-widest mb-4">CAPABILITY INDEX</div>
                      {div.capabilities.map((cap) => (
                        <div key={cap.label}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-mono text-[11px] text-white/40">{cap.label}</span>
                            <span className={`font-mono text-[11px] ${div.accentColor}`}>{cap.value}%</span>
                          </div>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${cap.value}%` }}
                              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                              viewport={{ once: true }}
                              className={`h-full rounded-full ${div.color === 'cyan' ? 'bg-gradient-to-r from-cyan-600 to-cyan-400' : 'bg-gradient-to-r from-purple-600 to-purple-400'}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 pt-6 border-t border-white/5">
                      <a
                        href="#join"
                        className={`inline-flex items-center gap-2 font-mono text-xs ${div.accentColor} hover:opacity-70 transition-opacity tracking-wider`}
                      >
                        <span>APPLY FOR THIS DIVISION</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
