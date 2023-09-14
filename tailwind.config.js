/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgnek: "url('../src/assets/img/bgrain.gif')",
      },

      fontFamily: {
        Yomogi: ["Yomogi", "cursive"],
        iawriter: ["iawriter-mono", "monospace"],
        Nitti: ["Nitti", "monospace"],
        Melo: ["Melo", "monospace"],
        Courier: ["Courier", "monospace"],
      },
    },
  },
  plugins: [],
};
