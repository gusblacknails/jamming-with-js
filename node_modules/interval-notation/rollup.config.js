import uglify from "rollup-plugin-uglify"

export default {
  entry: './index.js',
  dest: './dist/interval-notation.js',
  moduleName: 'IntervalNotation',
  format: 'umd',
  preferConst: false,
  plugins: [
    uglify({
      compress: {
        collapse_vars: true,
        pure_funcs: ["Object.defineProperty"]
      }
    })
  ]
}