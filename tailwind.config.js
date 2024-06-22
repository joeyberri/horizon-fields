module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.js",
    './static/**/*.{jpg,jpeg,png,svg,gif}'
  ],
  theme: {
    colors: {
      green: '#C4F041',
      white: '#FFFFFF',
      black: '#000000'
    },
    extend: {},
  },
  plugins: [
    require('flowbite')
  ],
}