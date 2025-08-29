import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['esbuild.config.mjs'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    rules: {},
  },
];
