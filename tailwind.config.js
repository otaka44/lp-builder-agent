/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F4F5F0',
          dark: '#2B2B2B',
          accent: '#E6A817',
          muted: '#6B7280',
          card: '#FFFFFF',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '"Noto Sans JP"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 12px 32px -4px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 25px -5px rgba(230, 168, 23, 0.3)',
      }
    },
  },
  plugins: [],
}
