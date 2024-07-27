/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#65A694',
          50: '#F2F7F6',
          100: '#E6F0EE',
          200: '#CCE0DC',
          300: '#B6D3CD',
          400: '#9DC3BC',
          500: '#83B4AA',
          600: '#5E9C8F',
          700: '#47766C',
          800: '#2E4C46',
          900: '#172623',
          950: '#0C1312',
        },
        secondary: {
          100: "#e37021"
        },

        default: {
          0: '#FFFFFF',
          100: '#F9FAFB',
          200: '#F4F6F8',
          300: '#DFE3E8',
          400: '#C4CDD5',
          500: '#919EAB',
          600: '#637381',
          700: '#454F5B',
          800: '#212B36',
          900: '#161C24',
        },
      },

    },
  },
  plugins: [],
}

