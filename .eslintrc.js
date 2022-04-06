module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "settings": {
    "react": {
      "version": 'detect'
    }
  },
  "extends": [ 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'standard', 'eslint-config-prettier' ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": 'module'
  },
  "plugins": [ 'react' ],
  "rules": {
    'semi': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'eqeqeq': [ 'error', 'smart' ],
    'quote-props': [ 'error', 'always' ],
    'no-multiple-empty-lines': [ 'error', { "max": 1 } ]
  }
};
