import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'iife'
  },
  plugins: [nodeResolve(), babel(), uglify()]
}
