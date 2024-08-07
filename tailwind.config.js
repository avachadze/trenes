/** @type {import('tailwindcss').Config} */

module.exports = ({
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        'primary': '#6366f1',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
})
