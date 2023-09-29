/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js, jsx}',
    './components/**/*.{html,js, jsx}',
    './index.html',
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "rgba(178, 248, 108, 1)",
        "custom-gray": "rgba(173, 173, 173, 1)",
        "custom-black": "rgba(30, 30, 30, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
