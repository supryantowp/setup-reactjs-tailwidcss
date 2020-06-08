const tailwindCss = require("tailwindcss");
module.exports = {
  plugins: [tailwindCss("./tailwind.config.js"), require("autoprefixer")],
};
