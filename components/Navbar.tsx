'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Mission', href: '#about' },
  { label: 'Divisions', href: '#divisions' },
  { label: 'Why Join', href: '#why-join' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('id-ID', { hour12: false }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#020408]/80 backdrop-blur-xl border-b border-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/images/logo.png" alt="Siber Biro" className="w-20 h-20 object-contain" />
        </a>

        {/* Center status */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-cyan-500/40">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>SYS:ONLINE</span>
          <span className="text-cyan-500/20 mx-2">|</span>
          <span>{time}</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-cyan-300/60 hover:text-cyan-300 tracking-[0.15em] uppercase transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#join"
            className="btn-cyber px-5 py-2 text-xs text-cyan-900 bg-cyan-400 rounded-sm hover:bg-cyan-300 transition-colors duration-300"
          >
            Join Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-cyan-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-cyan-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-cyan-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#020408]/95 backdrop-blur-xl border-b border-cyan-500/10 overflow-hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm text-cyan-300/70 hover:text-cyan-300 tracking-widest uppercase py-2 border-b border-cyan-500/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setMenuOpen(false)}
                className="mt-2 btn-cyber px-5 py-3 text-sm text-center text-cyan-900 bg-cyan-400 rounded-sm"
              >
                Join Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
