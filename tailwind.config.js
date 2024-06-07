/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme  : {
    extend: {
      width: {
        "screen-1/3": "33vw",
      },
    },
  },
  plugins: [],
};