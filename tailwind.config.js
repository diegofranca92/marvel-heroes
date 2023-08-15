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
        custom:{
          primary: "#3A1F73",
          orange: {
            400: "#8C2c5a",
            500: "#8C1C5A"
          }
        }
      }
    },
  },
  plugins: [],
})

