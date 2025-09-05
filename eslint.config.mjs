import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  { ignores: ["node_modules", "public", "src/donate"] },
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["esbuild.config.mjs"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
