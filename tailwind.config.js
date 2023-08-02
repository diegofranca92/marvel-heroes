/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pontua:{
          primary: "#00113d",
          orange: {
            400: "#f43724",
            500: "#f21a05"
          }
        }
      }
    },
  },
  plugins: [],
})

