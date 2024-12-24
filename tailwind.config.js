/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the src folder for Tailwind classes
  ],
  theme: {
    extend: {}, // Add any custom themes or extensions here
  },
  plugins: [
    require("daisyui"), // Integrate DaisyUI as a plugin
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Specify DaisyUI themes
  },
};
