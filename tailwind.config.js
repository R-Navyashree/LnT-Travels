/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:        '#FFFFFF',
          card:      '#F8FAFC',
          navy:      '#0D1B2A',
          primary:   '#0F172A',
          secondary: '#1E3A8A',
          accent:    '#FBBF24',
          'accent-h':'#F59E0B',
          muted:     '#94A3B8',
          border:    '#E5E7EB',
        },
        orange: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FBBF24',
          600: '#F59E0B',
          700: '#D97706',
          800: '#B45309',
          900: '#92400E',
        },
      },
      fontFamily: {
        sans:    ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
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
        'orange':  '0 0 40px rgba(251,191,36,0.15)',
        'card':    '0 4px 24px rgba(15,23,42,0.08)',
        'card-lg': '0 20px 60px rgba(15,23,42,0.12)',
        'glow':    '0 0 60px rgba(251,191,36,0.2)',
      },
    },
  },
  plugins: [],
};
