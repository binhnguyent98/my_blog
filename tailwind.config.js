/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/modules/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/containers/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#232323',
      success: '#18e351',
      white: '#ffffff',
      error: '#FF3333',
      black: '#000000',
      'gray-1': '#DCDCDC',
    },
    screens: {
      xl: { max: '1367px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },
  plugins: [],
};
