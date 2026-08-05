import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['docs/**', 'node_modules/**'],
  },
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ['src/**/*.js', '__tests__/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
      },
    },
    rules: {
      'import/prefer-default-export': 'off',
      'import/extensions': ['error', 'always'],
    },
  },
  prettierRecommended,
];
