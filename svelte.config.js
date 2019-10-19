// SCSS preprocessing must be enabled here as well to get
// support inside .svelte files
const sveltePreprocess = require('svelte-preprocess');
module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src'],
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
  }),
};