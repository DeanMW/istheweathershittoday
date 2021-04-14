module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'always',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'space-before-function-paren': ['error', 'never'],
  },
};
