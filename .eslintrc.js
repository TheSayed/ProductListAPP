/* global module */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-native'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // <-- disable needing React import
    'react-native/no-inline-styles': 'off', // optional
    '@typescript-eslint/no-explicit-any': 'warn', // optional
    'react-native/sort-styles': 'off', // <-- disable style property sorting
    'react-native/no-color-literals': 'off', // <-- disable color literal warnings
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
