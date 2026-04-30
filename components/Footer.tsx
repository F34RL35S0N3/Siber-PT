export default function Footer() {
  const socials = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'Twitter / X',
      href: '#',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4l16 16M4 20L20 4" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: '#',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.493 1.806 1.678 6.07 1.932 6.95.211.69.564 1.68 1.334 1.95.756.22 1.127-.236 1.625-.783l2.067-2.165 4.268 3.316c.498.456 1.006.689 1.537.689.556 0 1.075-.267 1.414-.726.375-.504.518-1.174.42-1.915l-2.397-15.175c-.161-1.01-.72-1.638-1.616-1.639z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="relative border-t border-cyan-500/10 bg-[#010306]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border-2 border-cyan-400 rotate-45" />
                <div className="absolute inset-1.5 border border-purple-500 rotate-12" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-cyan-400 font-mono">SB</span>
                </div>
              </div>
              <div>
                <div className="font-orbitron text-sm font-bold text-white tracking-[0.2em]">
                  SIBER<span className="text-cyan-400">BIRO</span>
                </div>
                <div className="font-mono text-[9px] text-cyan-500/40 tracking-[0.3em]">TECH DIVISION</div>
              </div>
            </div>
            <p className="font-exo text-sm text-white/30 leading-relaxed">
              Bergabung ke barisan terdepan pertahanan dan pengembangan digital.
              Kami tidak hanya melatih — kami membentuk pemimpin teknologi masa depan.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-mono text-xs text-cyan-500/40 tracking-widest mb-5">NAVIGATION</div>
            <nav className="space-y-3">
              {[
                { label: 'Mission Brief', href: '#about' },
                { label: 'Divisions', href: '#divisions' },
                { label: 'Why Join', href: '#why-join' },
                { label: 'Team', href: '#team' },
                { label: 'Join Now', href: '#join' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-mono text-xs text-white/40 hover:text-cyan-400 tracking-widest uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials & Contact */}
          <div>
            <div className="font-mono text-xs text-cyan-500/40 tracking-widest mb-5">CONNECT</div>
            <div className="flex gap-3 mb-6">
              {socials.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 border border-cyan-500/20 rounded-sm flex items-center justify-center text-cyan-500/40 hover:text-cyan-400 hover:border-cyan-500/60 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <div className="font-mono text-[11px] text-white/20">birosiber@gmail.com</div>
              <div className="font-mono text-[11px] text-white/20">biropt@gmail.com</div>
            </div>
            {/* System status */}
            <div className="mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[10px] text-green-500/50 tracking-widest">ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] text-white/20 tracking-widest">
            © 2026 BIRO SIBER & BIRO PENGEMBANGAN TEKNOLOGI — ALL RIGHTS RESERVED
          </div>
          <div className="font-mono text-[10px] text-white/15 tracking-widest">
            SYS_BUILD: v4.2.1 — CLASSIFIED
          </div>
        </div>
      </div>
    </footer>
  )
}
