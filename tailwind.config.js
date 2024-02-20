/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '28rem',
        '120': '32rem',
        '130': '36rem',
        '140': '40rem',
        '150': '44rem',
        '160': '48rem',
        '170': '52rem',
      },
      colors: {
        'primary':'#d4a373',
        'secondary':'#457b9d',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

