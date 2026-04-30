/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00f5ff',
        'cyber-blue': '#0066ff',
        'cyber-purple': '#9b00ff',
        'cyber-green': '#00ff88',
        'cyber-dark': '#020408',
        'cyber-dark-2': '#040c14',
        'cyber-panel': 'rgba(0, 245, 255, 0.04)',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        exo: ['Exo 2', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 3s infinite',
        'scan': 'scan 3s linear infinite',
        'flicker': 'flicker 4s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(60px)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)', clipPath: 'none' },
          '92%': { transform: 'translate(-2px, 1px)', clipPath: 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)' },
          '94%': { transform: 'translate(2px, -1px)', clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)' },
          '96%': { transform: 'translate(-1px, 2px)', clipPath: 'polygon(0 10%, 100% 10%, 100% 30%, 0 30%)' },
          '98%': { transform: 'translate(0)', clipPath: 'none' },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.4' },
          '97%': { opacity: '0.9' },
          '98%': { opacity: '0.3' },
          '99%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 245, 255, 0.5), 0 0 60px rgba(0, 245, 255, 0.2)',
        'neon-purple': '0 0 20px rgba(155, 0, 255, 0.5), 0 0 60px rgba(155, 0, 255, 0.2)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.5), 0 0 60px rgba(0, 255, 136, 0.2)',
        'panel': 'inset 0 1px 0 rgba(0, 245, 255, 0.1), 0 4px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
