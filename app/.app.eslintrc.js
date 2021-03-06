module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'camelcase': 0,
    'no-unused-vars': 1,
    'spaced-comment': 1,
    'no-mixed-spaces-and-tabs': 1,
    'indent': 1,
    'brace-style': 0,
    'curly': 0
  }
}
