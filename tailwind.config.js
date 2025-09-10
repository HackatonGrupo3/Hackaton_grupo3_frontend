/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales
        primary: {
          light: '#FFB74D', // Naranja más claro
          DEFAULT: '#FF9800',   // Naranja vibrante
          dark: '#F57C00',  // Naranja más oscuro
        },
        secondary: '#4FC3F7', // Azul cielo

        // Colores de acento
        accent: '#9C27B0',      // Morado mágico
        success: '#8BC34A',     // Verde claro

        // Colores neutros
        'background-light': '#F5F5F5',
        'text-primary': '#333333',
        'text-secondary': '#757575',
        'dark-background': '#1F2937',
      },
      fontFamily: {
        display: ['Fredoka One', 'sans-serif'], // Fuente para títulos y elementos destacados
        body: ['Inter', 'sans-serif'],         // Fuente para texto general
      },
    },
  },
  plugins: [],
};