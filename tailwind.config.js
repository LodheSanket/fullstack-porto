/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces. Deep navy-black rather than pure black, so the
        // page has a hint of temperature instead of feeling like a void.
        base: {
          DEFAULT: '#0A0D13',
          surface: '#11151D',
          raised: '#161B26',
          border: '#232938',
        },
        // Two accents used deliberately: teal reads as "system healthy /
        // online", indigo carries the gradient partner. Never mixed with
        // a third accent color.
        signal: {
          teal: '#4FD8C4',
          indigo: '#7C86F1',
        },
        ink: {
          primary: '#E9ECF2',
          muted: '#9AA3B5',
          faint: '#5C6478',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'signal-gradient': 'linear-gradient(135deg, #4FD8C4 0%, #7C86F1 100%)',
        'grid-fade':
          'linear-gradient(to bottom, rgba(10,13,19,0) 0%, #0A0D13 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.35)',
        glow: '0 0 40px rgba(79, 216, 196, 0.15)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
