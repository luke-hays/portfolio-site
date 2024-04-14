/** @type {import('tailwindcss').Config} */


import plugin from 'tailwindcss/plugin'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {    
      colors: {
        space: '#464746',
        night: '#242423',
        jet: '#333533',
        ash: '#9BABA4',
        alabaster: "#E8EDDF"
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { 
          fontSize: theme('fontSize.5xl'), 
          fontWeight: theme('fontWeight.semibold')
        },
        'h2': { 
          fontSize: theme('fontSize.3xl'), 
          fontWeight: theme('fontWeight.semibold')
        },
      })
    })
  ],
}

