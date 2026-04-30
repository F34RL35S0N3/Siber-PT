'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const PLACEHOLDERS = [
  { label: 'Jonathan Kevin — Biro Siber', role: 'Divisi Strategi dan Operasional Siber', color: 'cyan', image: '/images/team/jonathan.jpg' },
  { label: 'Donny Rusdiansyah — Biro Siber', role: 'Divisi Pengembangan Riset dan Inovasi Digital', color: 'purple', image: '/images/team/donny.jpg' },
  { label: 'Niswatun Nur — Biro Siber ', role: 'Divisi Administrasi dan Manajemen Sumber Daya Siber Taruna', color: 'green', image: '/images/team/niswatun.jpg' },
  { label: 'Nufri Rafif — Biro Pengembangan Teknologi', role: 'Divisi Pengembangan Layanan Teknologi', color: 'cyan', image: '/images/team/nufri.jpg' },
  { label: 'Muhammad Agung — Biro Pengembangan Teknologi', role: 'Divisi Pemeliharaan Infrastruktur Teknologi', color: 'purple', image: '/images/team/agung.jpg' },
  { label: 'Dini Riyani — Biro Pengembangan Teknologi', role: 'Divisi Pengembangan Layanan Teknologi', color: 'green', image: '/images/team/dini.jpg' },
]

const OVERLAY_COLORS = {
  cyan: 'from-cyan-900/80 via-cyan-900/40 to-transparent',
  purple: 'from-purple-900/80 via-purple-900/40 to-transparent',
  green: 'from-green-900/80 via-green-900/40 to-transparent',
}

const BORDER_COLORS = {
  cyan: 'border-cyan-500/20 hover:border-cyan-500/60',
  purple: 'border-purple-500/20 hover:border-purple-500/60',
  green: 'border-green-500/20 hover:border-green-500/60',
}

const TEXT_COLORS = {
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
  green: 'text-green-400',
}

// SVG placeholder avatars
function AvatarPlaceholder({ color }: { color: string }) {
  const colors = {
    cyan: { bg: '#001a1f', grid: '#00f5ff', accent: '#00f5ff' },
    purple: { bg: '#0d001a', grid: '#9b00ff', accent: '#9b00ff' },
    green: { bg: '#001a0d', grid: '#00ff88', accent: '#00ff88' },
  }[color] ?? { bg: '#001a1f', grid: '#00f5ff', accent: '#00f5ff' }

  return (
    <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="200" fill={colors.bg} />
      {/* Grid pattern */}
      {Array.from({ length: 6 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 40} x2="280" y2={i * 40} stroke={colors.grid} strokeWidth="0.3" opacity="0.3" />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="200" stroke={colors.grid} strokeWidth="0.3" opacity="0.3" />
      ))}
      {/* Center figure silhouette */}
      <ellipse cx="140" cy="70" rx="28" ry="28" fill={colors.accent} opacity="0.12" />
      <ellipse cx="140" cy="70" rx="18" ry="18" fill={colors.accent} opacity="0.2" />
      <ellipse cx="140" cy="70" rx="10" ry="10" fill={colors.accent} opacity="0.4" />
      {/* Body */}
      <path d="M110 130 Q140 115 170 130 L175 165 H105 Z" fill={colors.accent} opacity="0.1" />
      {/* Corner brackets */}
      <path d="M10 10 H30 M10 10 V30" stroke={colors.accent} strokeWidth="1.5" opacity="0.6" fill="none" />
      <path d="M270 10 H250 M270 10 V30" stroke={colors.accent} strokeWidth="1.5" opacity="0.6" fill="none" />
      <path d="M10 190 H30 M10 190 V170" stroke={colors.accent} strokeWidth="1.5" opacity="0.6" fill="none" />
      <path d="M270 190 H250 M270 190 V170" stroke={colors.accent} strokeWidth="1.5" opacity="0.6" fill="none" />
      {/* Status dots */}
      <circle cx="20" cy="185" r="3" fill={colors.accent} opacity="0.8" />
      <text x="28" y="188" fill={colors.accent} fontSize="8" opacity="0.5" fontFamily="monospace">ID://classified</text>
    </svg>
  )
}

export default function Gallery() {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020608] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] orb bg-cyan-500/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-cyan-500/40" />
            <span className="font-mono text-xs text-cyan-500/50 tracking-[0.3em] uppercase">Field Operatives</span>
            <div className="h-px flex-1 bg-cyan-500/10" />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">TEAM</span>
            </h2>
            <div className="glass-panel px-4 py-2 rounded-sm inline-flex items-center gap-3">
              <span className="font-mono text-[10px] text-cyan-500/50 tracking-widest">CLEARANCE LEVEL: RESTRICTED</span>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </div>
          </div>
        </FadeIn>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {PLACEHOLDERS.map((item, idx) => (
            <FadeIn key={item.label} delay={idx * 0.08}>
              <div
                className={`group relative rounded-lg border ${BORDER_COLORS[item.color as keyof typeof BORDER_COLORS]} overflow-hidden transition-all duration-500`}
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] relative overflow-hidden bg-[#030912]">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.label} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <AvatarPlaceholder color={item.color} />
                  )}

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${OVERLAY_COLORS[item.color as keyof typeof OVERLAY_COLORS]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4`}>
                    <div className={`font-orbitron font-bold text-sm text-white mb-1`}>{item.label}</div>
                    <div className={`font-mono text-xs ${TEXT_COLORS[item.color as keyof typeof TEXT_COLORS]}`}>{item.role}</div>
                  </div>

                  {/* Scan line on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scanline pointer-events-none" />
                </div>

                {/* Bottom info */}
                <div className="p-3 bg-[#020408]">
                  <div className="font-mono text-[11px] text-white/50 truncate">{item.label}</div>
                  <div className={`font-mono text-[10px] ${TEXT_COLORS[item.color as keyof typeof TEXT_COLORS]} opacity-60`}>{item.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Classified notice */}
        <FadeIn delay={0.4} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-red-500/20 rounded-sm bg-red-500/5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="font-mono text-xs text-red-400/70 tracking-wider">
              IDENTITY DATA CLASSIFIED — CLEARANCE REQUIRED
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
