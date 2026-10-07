const path = require('path');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d8f0ff',
          200: '#bfe5ff',
          300: '#8fd3ff',
          400: '#58b6ff',
          500: '#2f99ff',
          600: '#1c7cd7',
          700: '#1a60ad',
          800: '#1d4d8a',
          900: '#1f4270',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
