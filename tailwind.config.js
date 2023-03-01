/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-colour": "var(--primary-colour)",
      "primary-colour-mute": "var(--primary-colour-mute)",
      "opposite-colour": "var(--opposite-colour)",
      "opposite-colour-mute": "var(--opposite-colour-mute)",
      "secondary-colour": "var(--secondary-colour)",
    },
    fontFamily: {
      'welcome': 'Lato, sans-serif',
      'heading': 'Poppins, sans-serif',
      'body': 'Roboto, sans-serif',
    },
    extend: {},
  },
  plugins: [],

}
