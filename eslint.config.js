// eslint.config.js
import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tseslint from "typescript-eslint";

export default [
  // ignore stuff (old .eslintignore)
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  // Base JS rules
  js.configs.recommended,

  // Vue rules
  ...vue.configs["flat/recommended"],

  // TypeScript rules (for .ts + .vue <script lang="ts">)
  ...tseslint.configs.recommended,

  // Make sure .vue files use vue-eslint-parser + TS parser
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        // Use TypeScript inside <script lang="ts">
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },

  // For standalone .ts files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];
