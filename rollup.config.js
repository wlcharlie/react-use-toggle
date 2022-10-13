import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { babel } from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser"

const packageJson = require("./package.json")

export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    // nodeResolve(),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    terser(),
  ],
  external: ["react"],
}
