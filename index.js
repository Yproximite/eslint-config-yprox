module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb-base'),
    require.resolve('eslint-plugin-vue/lib/configs/recommended'),
    require.resolve('@yproximite/eslint-config-base'),
  ],
  rules: require('./includes/rules.js'),
};
