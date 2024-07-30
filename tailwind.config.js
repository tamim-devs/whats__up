/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
       'nilKali': '#1C1E53',
       'sky': "#0366FF",
      },
      maxWidth: {
        'container': '1170px',
      },
     
    },
  },
  plugins: [],
}

