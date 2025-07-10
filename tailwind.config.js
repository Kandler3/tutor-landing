/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'telegram': '#229ED9',
        'telegram-hover': '#1c8dbf',
        'bg-primary': '#0E0E10',
        'bg-card': '#1A1B1F',
        'bg-noise': '#131417',
        'text-primary': '#ffffff',
        'text-secondary': '#999999',
        'accent-main': '#5db921',
      },
      fontFamily: {
        'clash': ['Clash Display', 'Space Grotesk', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
