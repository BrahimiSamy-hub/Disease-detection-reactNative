// tailwind.config.js

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        freestyle: ['"Freestyle Script"', 'cursive'],
        display: ['Oswald'],
        body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
}
