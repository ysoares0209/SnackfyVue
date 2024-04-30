const vue = require("rollup-plugin-vue");
const nodeResolve = require("@rollup/plugin-node-resolve").nodeResolve;
const serve = require("rollup-plugin-serve");
const livereload = require("rollup-plugin-livereload");
const terser = require("rollup-plugin-terser").terser;

const isDev = process.env.ROLLUP_WATCH;

module.exports = {
  input: isDev ? "local/main.ts" : "src/index.ts",
  output: {
    file: isDev ? "dist/bundle.js" : "dist/my-library.js",
    format: "iife",
    sourcemap: true,
    globals: {
      vue: "Vue",
    },
  },
  plugins: [
    nodeResolve(),
    vue(),
    isDev &&
      serve({
        open: true,
        contentBase: ["local", "dist"],
        host: "localhost",
        port: 3000,
      }),
    isDev && livereload("dist"),
    !isDev && terser(),
  ],
  external: ["vue"],
};
