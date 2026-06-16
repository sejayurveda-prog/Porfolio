/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#ff2a2a',
          dark: '#cc1a1a',
        },
        dark: {
          DEFAULT: '#111111',
          card: '#1a1a1a',
        },
        light: {
          DEFAULT: '#f4f4f4',
          muted: '#d4d4d4',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
