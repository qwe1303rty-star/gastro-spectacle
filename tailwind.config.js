/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0B',
        graphite: '#131313',
        smoke: '#1A1A1A',
        line: '#242424',
        pearl: '#F5F5F0',
        bone: '#E8E6DF',
        mute: '#8A8A85',
        gold: '#D4AF37',
        goldSoft: '#B8952E',
        goldLight: '#E8CC70'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      letterSpacing: {
        luxe: '0.28em',
        soft: '0.08em'
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
}
