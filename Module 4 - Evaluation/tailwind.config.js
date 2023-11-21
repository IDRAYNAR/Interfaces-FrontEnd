/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'ltGray': '#F7F7F7',
        'ltBlue': '#D9EAFD',
        'ltYellow': '#FFF089',
        'White': '#FFFFFF',
        'Black': '#141414',
        'ltOrange': '#FFA500',
        'ltDark': '#293548',
        'Midnight': '#1E293B',
        'DarkModeText': '#94A3B8',
        'ltBlueDark': '#0E1A2B',
        'ltYellowDark': '#B3A800',
        'ltOrangeDark': '#CC6600',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '2xs': '.5rem',
        's': '.75rem',
        'm': '.875rem',
        'l': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      'rounded': {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      }
    },
  },
  plugins: [],
}