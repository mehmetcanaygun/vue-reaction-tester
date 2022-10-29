/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shape: "0 0 16px 0 rgba(255, 255, 255, 0.3)",
      },
      dropShadow: {
        shape: "0 0 10px rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
