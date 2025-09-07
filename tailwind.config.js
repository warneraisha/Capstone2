/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import flowbite from 'flowbite/plugin'   

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: { extend: {} },
  plugins: [flowbite, daisyui],           
  daisyui: {
    themes: ['light', 'dark', 'cupcake'], // <-- DaisyUI themes go here
  },
}

