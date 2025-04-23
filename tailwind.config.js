/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ecebe0',
        text: '#1a1a1a',
        primary: {
          DEFAULT: '#EB5F1E',
          light: '#F5D63A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['"fp-head-pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 