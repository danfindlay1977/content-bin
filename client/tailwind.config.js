/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "layout-desktop": "1fr 3fr",
      },
    },
  },
  plugins: [],
};
