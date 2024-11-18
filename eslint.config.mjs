import typescriptEslint from '@typescript-eslint/eslint-plugin'
import parser from 'vue-eslint-parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import stylistic from '@stylistic/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [{
  ignores: [
    '**/node_modules',
    '**/dist',
  ],
}, ...compat.extends(
  'eslint:recommended',
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:vue/vue3-recommended',
), {
  plugins: {
    '@typescript-eslint': typescriptEslint,
    '@stylistic': stylistic,
  },

  languageOptions: {
    parser: parser,
    ecmaVersion: 5,
    sourceType: 'script',

    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
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
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/quotes': ['error', 'single', {
      avoidEscape: true,
    }],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/space-before-function-paren': ['error', 'always'],
    '@stylistic/padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    }],
    '@stylistic/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],

    // Functional rules
    'no-console': ['error', {
      allow: ['warn', 'error'],
    }],

    // TypeScript rules
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    }],

    // Vue rules
    'vue/multi-word-component-names': 'off',
    'vue/comma-dangle': ['error', 'always-multiline'],
  },
}, {
  files: ['**/*.vue'],

  rules: {
    '@stylistic/max-len': 'off',
  },
}]
