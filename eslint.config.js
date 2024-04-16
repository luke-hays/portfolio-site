import eslintPluginAstro from 'eslint-plugin-astro';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  {
    plugins: {
      stylistic: stylistic
    },
    rules: {
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error",
      "nonblock-statement-body-position": "error",
      "object-curly-spacing": "error",
      "operator-linebreak": ['error', "before"],
      "padded-blocks": ["error", { "blocks": "never" }],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "semi": "error",
      "spaced-comment": ["error", "always"],
      "switch-colon-spacing": "error",
      "@typescript-eslint/type-annotation-spacing": "error",
      "stylistic/type-generic-spacing": ["error"],
      "wrap-iife": ["error", "outside"]
    }
  },
];
