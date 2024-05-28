/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/page/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#232323',
      secondary: '#1d1d1d',
      success: '#18e351',
      white: '#ffffff',
      error: '#FF3333',
      black: '#000000',
      'gray-1': '#DCDCDC',
      'gray-2': 'rgba(255, 255, 255, 0.05)',
      'gray-3': 'rgba(255, 255, 255, 0.1)',
      'gray-4': 'rgba(255, 255, 255, 0.1)',
      'green-1': '#c8f31d',
    },
    screens: {
      xl: { max: '1367px' },
      lg: { max: '1023px' },
      md: { max: '980px' },
      sm: { max: '639px' },
      xs: { max: '480px' },
    },
  },
  plugins: [],
};
