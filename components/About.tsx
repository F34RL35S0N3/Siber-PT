'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] orb bg-purple-600/6" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] orb bg-cyan-500/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <FadeIn className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-cyan-500/40" />
            <span className="font-mono text-xs text-cyan-500/50 tracking-[0.3em] uppercase">Mission Brief</span>
            <div className="h-px flex-1 bg-cyan-500/10" />
          </div>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white">
            WHO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">WE ARE</span>
          </h2>
        </FadeIn>

        {/* Two column layout — asymmetric */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          {/* Left panel — Biro Siber */}
          <FadeIn delay={0.2}>
            <div className="glass-panel rounded-lg p-8 h-full relative overflow-hidden circuit-bg card-glow transition-all duration-500">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-px bg-cyan-400/60" />
                <div className="absolute top-0 left-0 w-px h-full bg-cyan-400/60" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-full h-px bg-cyan-400/60" />
                <div className="absolute bottom-0 right-0 w-px h-full bg-cyan-400/60" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 border border-cyan-500/40 rounded-sm flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-cyan-500/50 tracking-widest">DIVISION 01</div>
                    <div className="font-orbitron font-bold text-lg text-white">Biro Siber</div>
                  </div>
                </div>

                <p className="font-exo text-cyan-100/60 leading-relaxed mb-6 text-sm sm:text-base">
                  Garis depan pertahanan digital Senat Korpstaruna. Biro Siber adalah biro elite yang bertugas
                  mengedukasi taruna terkait teknologi, menetralisir ancaman siber dalam ekosistem digital modern, dan wadah taruna daalam mengembangkan
                  bakat di bidang siber dan teknologi .
                </p>

                <p className="font-exo text-cyan-100/50 leading-relaxed text-sm">
                  Dari penetration testing hingga incident response — kami adalah penjaga arsitektur digital,
                  beroperasi dengan presisi intelijen tinggi di setiap lapisan keamanan.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Soceng', 'Penetration Testing', 'Reverse Engineering', 'Forensics'].map((tag) => (
                    <div
                      key={tag}
                      className="px-3 py-1.5 border border-cyan-500/20 rounded-sm font-mono text-[11px] text-cyan-400/70 tracking-wider"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right panel — Biro Pengembangan Teknologi */}
          <FadeIn delay={0.35}>
            <div className="glass-panel-purple rounded-lg p-8 h-full relative overflow-hidden circuit-bg card-glow transition-all duration-500">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-px bg-purple-400/60" />
                <div className="absolute top-0 left-0 w-px h-full bg-purple-400/60" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-full h-px bg-purple-400/60" />
                <div className="absolute bottom-0 right-0 w-px h-full bg-purple-400/60" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 border border-purple-500/40 rounded-sm flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-400">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-purple-500/50 tracking-widest">DIVISION 02</div>
                    <div className="font-orbitron font-bold text-lg text-white">Biro Pengembangan Teknologi</div>
                  </div>
                </div>

                <p className="font-exo text-purple-100/60 leading-relaxed mb-6 text-sm sm:text-base">
                  Mesin inovasi di balik sistem teknologi digitalisasi Senat Korpstaruna. Biro Pengembangan Teknologi membangun,
                  mengoptimalkan, megembangkan dan mengevolusi infrastruktur digital generasi berikutnya. Selalu terdepan dalam berinovasi
                  dengan teknologi terbaru, biro ini adalah pusat kreativitas teknis dan pengembangan solusi canggih.
                </p>
                <p className="font-exo text-purple-100/50 leading-relaxed text-sm">
                  Dari desain arsitektur sistem hingga deployment otomatis — kami adalah arsitek masa depan
                  digital yang memastikan setiap sistem berjalan dengan efisiensi maksimal dan skalabilitas tanpa batas.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Karya Senat Korpstaruna', 'AI Integration', 'Digitalisasi peminjaman device','Digitalisasi peminjaman Kunci kelas' ].map((tag) => (
                    <div
                      key={tag}
                      className="px-3 py-1.5 border border-purple-500/20 rounded-sm font-mono text-[11px] text-purple-400/70 tracking-wider"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom quote */}
        <FadeIn delay={0.5} className="mt-16 text-center">
          <blockquote className="font-exo italic text-lg sm:text-xl text-cyan-100/30 max-w-3xl mx-auto">
            &ldquo;In the digital age, sovereignty is defined by those who control the code and
            secure the networks. We train the ones who will define that sovereignty.&rdquo;
          </blockquote>
        </FadeIn>
      </div>
    </section>
  )
}
