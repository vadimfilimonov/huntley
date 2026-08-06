import js from '@eslint/js';
import globals from 'globals';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['docs/**'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.js', '__tests__/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.es2021,
        ...globals.jest,
      },
    },
    rules: {
      'no-duplicate-imports': 'error',
    },
  },
  prettierRecommended,
];
