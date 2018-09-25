// Rollup plugins
// import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/scripts/main.js',
  output: {
    file: 'build/js/main.min.js',
    format: 'iife',
    sourceMap: 'inline'
  },
  plugins: [
    // resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};