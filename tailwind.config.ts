import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bhm-orange': {
          DEFAULT: '#F15A29',
          50: '#FDE8E0',
          100: '#FCDACF',
          200: '#F9BBAA',
          300: '#F69D86',
          400: '#F37B57',
          500: '#F15A29',
          600: '#D9400F',
          700: '#A5310B',
          800: '#712108',
          900: '#3D1204',
        },
        'bhm-navy': {
          DEFAULT: '#1A365D',
          50: '#E8EDF5',
          100: '#C5D1E6',
          200: '#8BA3CD',
          300: '#5175B4',
          400: '#2D4F89',
          500: '#1A365D',
          600: '#152C4D',
          700: '#10213A',
          800: '#0B1627',
          900: '#060B14',
          950: '#030509',
        },
        'bhm-dark': {
          DEFAULT: '#0F172A',
          50: '#1E293B',
          100: '#1A2332',
          200: '#151D2B',
          300: '#111824',
          400: '#0D121D',
          500: '#0F172A',
          600: '#0A0F1E',
          700: '#070A14',
          800: '#03050A',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'electric-flicker': 'electric-flicker 4s ease-in-out infinite',
        'circuit-flow': 'circuit-flow 2s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'electric-flicker': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
          '75%': { opacity: '0.5' },
        },
        'circuit-flow': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
