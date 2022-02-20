export default {
  entry: 'src/index.ts',
  // esm: {
  //   type: 'babel',
  // },
  esm: 'rollup',
  cjs: 'rollup',

  extractCSS: true,
};
