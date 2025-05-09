import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  {
    rules: {
      'no-unused-vars': 'warn',
      'arrow-body-style': ['error', 'always'],
      'capitalized-comments': ['warn', 'always'],
    },
  },
];
