/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#1e3a8a",
        button_video: "#c7d2fe",
        footer: "#2E3E5C",
      }
    },
  },
  plugins: [],
}