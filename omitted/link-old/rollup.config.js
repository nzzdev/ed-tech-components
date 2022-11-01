import svelte from "rollup-plugin-svelte";
import autoPreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.ts",
  plugins: [
    svelte({
      preprocess: autoPreprocess(),
    }),
    typescript({
      sourceMap: !production,
      postcss: {
        plugins: [require("autoprefixer")()],
      },
    }),
  ],
};

/* export default [
  {
    input: "dist/index.js",
    output: {
      file: "index.js",
    },
  },
  {
    input: "dist/index.d.ts",
    output: {
      file: "index.d.ts",
    },
    plugins: [dts()],
  },
];
 */
