/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      xs: "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
      sm: "0 1px 3px 0 rgba(16, 24, 40, 0.1)",
    },
    extend: {},
  },
  plugins: [],
};
