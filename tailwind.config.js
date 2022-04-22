module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 13px 30px rgb(0 0 0 / 11%)",
      },
      animation: {
        bounce: "1.5s bounce infinite ease-in-out both",
      },
    },
  },
  plugins: [],
};
