/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Custom colors can be added here
        dark: '#1a1a1a',
        light: '#ffffff',
      },
    },
  },
  variants: {
    extend: {
      // Add additional variants for dark mode if needed
    },
  },
  plugins: [],
};