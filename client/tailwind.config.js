/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}