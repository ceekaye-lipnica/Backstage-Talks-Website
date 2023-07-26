/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cyann' : '#00c1b5',
        'dilaw' : '#ffbe00',
        'pula' : '#e30512',
        'kahel' : '#ff651a',
        'porpol' : '#1d3fbb',
        'rose' : '#FF608C',
        'dark' : '#251d20',
      },
      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

