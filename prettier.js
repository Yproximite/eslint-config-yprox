module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb-base'),
    require.resolve('eslint-plugin-vue/lib/configs/recommended'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/vue'),
    require.resolve('@yproximite/eslint-config-base'),
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    ...require('./includes/rules'),
    'prettier/prettier': 'error',
    indent: 'off', // Rule defined by prettier, but was overriden by @yproximite/eslint-config-base
  }
};
