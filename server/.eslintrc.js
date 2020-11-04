module.exports = {
  plugins: ['prettier'],
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'script',
  },
  env: {
    node: true,
    es6: true,
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'class-methods-use-this': ' warn',
  },
};
