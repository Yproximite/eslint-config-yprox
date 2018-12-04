module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
    '@yproximite/base',
  ],
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'max-len': ['error', 180],
    'no-param-reassign': ['error', { 'props': false }],
    'func-names': 'off',
    // Import
    'import/prefer-default-export': 'off',
    // Vue
    'vue/max-attributes-per-line': [2, { 'singleline': 3, 'multiline': { 'max': 1, 'allowFirstLine': false } }],
    'vue/html-closing-bracket-newline': ['error', { 'multiline': 'always' }],
  },
};
