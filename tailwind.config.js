/** @type {import('tailwindcss').Config} */
module.exports = {
  // The path to your Tailwind config file.
  configPath: "./tailwind.config.js",
  // Whether to expose the Tailwind CSS classes in your JavaScript code.
  exposeConfig: true,
  // The level of tree-shaking to apply to the Tailwind CSS classes.
  exposeLevel: 3,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
