/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      SSP: ['"Source Sans Pro"', 'sans-serif'],
      rubikDirt: ['"Rubik Dirt"'],
      rubik80s: ['"Rubik 80s Fade"'],
      rubikWet: ['"Rubik Wet Paint"'],
    },
    extend: {
      colors: {
        'main-color': '#b55329', //orange
        'main-color-darker': '#7f3219', // orange
        dark: '#091419',
        text: '#0f1a1e', // black
        'white-text': '#8894A5',
        'light-gray': '#181f24',
        sidebar: '#8e3e1c',
        messages: '#3e4042',
        'not-owner-text': '#3e4042',
        hover: '#343142',
        'home-search': '#3a3b3c',
        'placeholder-chat': '#e4e6eb',
        'tippy-hover': '#a2a2a2',
        modals: '#000000bf',
        'modals-close-btn': '#171616',
      },
    },
  },
  plugins: [],
};
