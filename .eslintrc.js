module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-shadow': [0, { allow: ['state'] }],
    'max-len': [1, { code: 140 }],
    'import/extensions': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
