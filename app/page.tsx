'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Divisions from '@/components/Divisions'
import WhyJoin from '@/components/WhyJoin'
import Gallery from '@/components/Gallery'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

// Lazy load the canvas (client-only)
const CyberGrid = dynamic(() => import('@/components/CyberGrid'), { ssr: false })

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020408] text-white overflow-x-hidden">
      {/* Animated background canvas */}
      <CyberGrid />

      {/* Fixed gradient background layers */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#020408] via-transparent to-[#020408] pointer-events-none" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Divisions />
        <WhyJoin />
        <Gallery />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
