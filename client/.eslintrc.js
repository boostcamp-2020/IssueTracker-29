module.exports = {
  plugins: ['prettier'],
  extends: ['react-app', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'class-methods-use-this': 'warn',
  },
};
