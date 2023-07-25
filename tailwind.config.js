/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        blender: ["var(--blender)"],
        inter: ["var(--inter)"],
      },
      colors: {
        "primary-color": "#33E092",
        "secondary-color": "#0CCE6B",
      },
    },
  },
  plugins: [],
};
