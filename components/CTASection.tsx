'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function CTASection() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')

  const handleJoinClick = () => {
    setIsOpen(true)
  }

  const handleSubmit = () => {
    if (!name.trim()) {
      alert('Silakan masukkan nama Anda')
      return
    }

    const message = `Selamat pagi Abang dan Mba dengan taruna pratama ${name}, mohon izin arahanya untuk bergabung ke dalam Biro Siber dan Pengembangan Teknologi, terima kasih Abang dan Mba`
    
    // Copy message to clipboard
    navigator.clipboard.writeText(message).then(() => {
      // Open Telegram
      window.open('https://t.me/Jonathan_kevin30', '_blank')
      
      setIsOpen(false)
      setName('')
      
      // Show notification
      setTimeout(() => {
        alert('Pesan sudah dicopy ke clipboard. Silakan paste di chat Telegram dan kirim!')
      }, 500)
    }).catch(() => {
      // Fallback: manual copy
      alert('Pesan:\n\n' + message + '\n\nSilakan copy dan kirim ke Telegram @Jonathan_kevin30')
    })
  }

  const handleClose = () => {
    setIsOpen(false)
    setName('')
  }
  return (
    <section id="join" className="relative py-40 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020610] to-[#020408]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] orb bg-cyan-500/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb bg-purple-600/8" />

      {/* Scanline */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Circuit bg */}
      <div className="absolute inset-0 circuit-bg opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status indicator */}
        <FadeIn>
          <div className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 border border-cyan-500/20 rounded-full bg-cyan-500/5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400/70 tracking-[0.3em]">RECRUITMENT WINDOW: OPEN</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </FadeIn>

        {/* Main CTA headline */}
        <FadeIn delay={0.15}>
          <h2 className="font-orbitron font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-6">
            <span className="text-white">BE THE NEXT</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              CYBER DEFENDER
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="font-exo text-lg sm:text-xl text-cyan-100/40 max-w-2xl mx-auto mb-4 leading-relaxed">
            The digital frontier doesn&apos;t wait. Neither should you.
          </p>
          <p className="font-exo text-base text-cyan-100/30 max-w-xl mx-auto mb-12">
            Bergabunglah bersama barisan terdepan pertahanan dan pengembangan digital.
            Satu keputusan. Satu langkah. Satu generasi perubahan.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.45}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <motion.button
              onClick={handleJoinClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-cyber group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-orbitron font-bold text-sm tracking-[0.2em] rounded-sm hover:shadow-[0_0_40px_rgba(0,245,255,0.4)] transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">JOIN WITH US</span>
            </motion.button>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-cyber px-12 py-5 border border-purple-500/40 text-purple-300 font-orbitron font-bold text-sm tracking-[0.2em] rounded-sm hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-300"
            >
              LEARN MORE
            </motion.a>
          </div>
        </FadeIn>

        {/* Final manifesto */}
        <FadeIn delay={0.6}>
          <div className="glass-panel rounded-lg p-8 max-w-3xl mx-auto">
            <div className="font-mono text-[10px] text-cyan-500/30 tracking-[0.4em] mb-4">// MANIFESTO</div>
            <blockquote className="font-exo italic text-lg text-cyan-100/50 leading-relaxed">
              &ldquo;Join the frontline of digital defense. Where intelligence meets precision,
              and every line of code is a weapon, a shield, a declaration of sovereignty.
              This is not just a program — this is an identity.&rdquo;
            </blockquote>
            <div className="mt-4 font-mono text-xs text-cyan-500/30">— Biro Siber & Biro Pengembangan Teknologi</div>
          </div>
        </FadeIn>

        {/* Modal Input Nama */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#020408] border border-cyan-500/30 rounded-lg p-8 max-w-md w-full mx-4"
            >
              <h3 className="font-orbitron font-bold text-xl text-white mb-4">MASUKKAN IDENTITAS ANDA</h3>
              <p className="font-exo text-sm text-cyan-100/40 mb-2">Silakan masukkan nama taruna pratama Anda</p>
              <p className="font-mono text-xs text-cyan-500/50 mb-6">Pesan akan dikirim ke Telegram @Jonathan_kevin30</p>
              
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Nama Anda"
                className="w-full px-4 py-3 bg-[#030912] border border-cyan-500/20 text-white font-mono text-sm rounded-sm mb-6 placeholder:text-cyan-500/30 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20"
                autoFocus
              />

              <div className="flex gap-3">
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-orbitron font-bold text-sm rounded-sm hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300"
                >
                  BUKA TELEGRAM
                </button>
                <button
                  onClick={handleClose}
                  className="flex-1 px-4 py-2 border border-purple-500/40 text-purple-300 font-orbitron font-bold text-sm rounded-sm hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-300"
                >
                  BATAL
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
