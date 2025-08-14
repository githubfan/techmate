/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'atkinson': ['var(--font-atkinson)', 'sans-serif'],
      },
      colors: {
        'cream': '#FAF9F6',
        'teal': '#2AB7CA',
        'charcoal': '#2F2F2F',
        'yellow': '#FFD166',
        'orange': '#F46036',
        'primary': '#2AB7CA',
        'secondary': '#2F2F2F',
        'accent': '#FFD166',
        'cta': '#F46036',
      },
    },
  },
  plugins: [],
}
