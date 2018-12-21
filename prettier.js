module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
    '@yproximite/base',
  ],
  rules: require('./includes/rules.js')
};
