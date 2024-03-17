/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#8c52fe',
        'green-primary': '#43a724',
        'text-primary': '#717275',
      },
      fontFamily: {
        'league': "League Spartan, sans-serif",
        
      },
    },
  },
  plugins: [],
}