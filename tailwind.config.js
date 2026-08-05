/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:        '#030712',
          card:      '#111827',
          primary:   '#0F172A',
          secondary: '#1E3A8A',
          accent:    '#FBBF24',
          'accent-h':'#FCD34D',
          muted:     '#94A3B8',
          border:    'rgba(255,255,255,0.06)',
        },
        accent: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
      },
      keyframes: {
        fadeInUp:   { from: { opacity:'0', transform:'translateY(40px)' }, to: { opacity:'1', transform:'translateY(0)' } },
        fadeIn:     { from: { opacity:'0' }, to: { opacity:'1' } },
        float:      { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-12px)' } },
        shimmer:    { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        scalePulse: { '0%,100%': { transform:'scale(1)' }, '50%': { transform:'scale(1.04)' } },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in':    'fadeIn 0.6s ease both',
        'float':      'float 4s ease-in-out infinite',
        'shimmer':    'shimmer 3s linear infinite',
        'scale-pulse':'scalePulse 3s ease-in-out infinite',
      },
      boxShadow: {
        'gold':    '0 0 40px rgba(251,191,36,0.12)',
        'card':    '0 20px 60px rgba(0,0,0,0.6)',
        'glass':   '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'glow':    '0 0 60px rgba(251,191,36,0.15)',
      },
    },
  },
  plugins: [],
};
