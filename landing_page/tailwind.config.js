/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e40af",
        button_video: "#93c5fd",
        
        //paleta de azules
        footer: "#172554",
        azul1: "#1e3a8a",
        azul2: "#1e40af",
        azul3: "#1d4ed8",
        azul4: "#2563eb",
        azul5: "#3b82f6",
        azul6: "#93c5fd",    
      }          
    },
  },
  plugins: [],
}