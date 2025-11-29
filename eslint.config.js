// eslint.config.js
import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default [
  // Which files to lint
  {
    files: ['src/**/*.{js,ts,vue}'],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript support
  ...tseslint.configs.recommended,

  // Vue support
  ...eslintPluginVue.configs['flat/recommended'],

  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
    ignores: ['dist/**', 'node_modules/**'],
  },
]
