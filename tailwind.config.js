/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Outfit': ['Outfit', 'sans-serif'],
        'Inter' :['Inter','sans-serif']
      },
      fontWeight: {
        '400': 400,
        '600': 600,
        '500': 500
        // You can add more weights as needed
      },
      screens: {
        'mg': '501px', // Example custom breakpoint
      },
    },
  },
  plugins: [],
}

