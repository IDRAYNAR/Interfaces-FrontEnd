/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        whiteSmoke: '#F5F5F5',
        lightWhite: '#FEFEFE',
        lightGray: '#D3D3D3',
        lighterGray: '#F0F0F0',
        black: '#000000',
        semiTransparent: 'rgba(0, 0, 0, 0.5)',
        whiteBlue: 'rgba(153, 203, 238, 0.5)',
        lightpink: 'rgba(250, 169, 193, 0.3)',
      },
      semiTransparent: 'rgba(0, 0, 0, 0.5)',
      fontSize: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },

    },
  },
  plugins: [],
}