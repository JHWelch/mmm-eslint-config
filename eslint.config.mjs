import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
  {files: ['**/*.mjs'], languageOptions: {sourceType: 'module'}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.jest,
        Log: 'readonly',
        nunjucks: 'writable',
        translate: 'writable',
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // Stylistic rules
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': ['error', {
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
      }],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
      }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/padding-line-between-statements': ['error', {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      }],

      // ESLint rules
      'no-console': ['error', {
        allow: ['warn', 'error'],
      }],
      'no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
    },
  },
];
