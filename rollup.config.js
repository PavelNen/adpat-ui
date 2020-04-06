// import svgr from '@svgr/rollup'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
// import external from 'rollup-plugin-peer-deps-external'
// import postcss from 'rollup-plugin-postcss'
// import typescript from 'rollup-plugin-typescript2'
// import url from 'rollup-plugin-url'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    }
  ],
  external: [
    'react',
    'react-dom',
    '@emotion/core',
    '@emotion/styled',
    'emotion-theming',
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    // typescript({
    //   rollupCommonJSResolveHack: true,
    //   clean: true,
    //   exclude: ['src/**/*.stories.tsx', 'src/**/examples.tsx', 'src/**/*.test.(tsx|ts)']
    // }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/prop-types/index.js": [
          "object",
          "func",
          "number",
          "oneOfType",
          "oneOf",
          "node",
          "string",
          "bool",
        ],
        "node_modules/@react-spring/shared/index.js": [
          "is",
          "createInterpolator",
          "useForceUpdate",
          "useOnce",
          "usePrev",
        ],
      },
    }),
  ]
}
