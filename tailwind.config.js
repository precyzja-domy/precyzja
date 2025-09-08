/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // add this line
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntuMono: ['"Ubuntu Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
