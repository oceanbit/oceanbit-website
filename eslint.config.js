import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores(["dist/**", ".astro/**", ".wrangler/**"]),
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,astro}"],
    extends: [js.configs.recommended],
  },
  {
    files: ["**/*.{ts,mts,cts,tsx,astro}"],
    extends: [tseslint.configs.recommended],
  },
  {
    files: ["*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx,astro}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    extends: [reactHooks.configs.flat.recommended],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
  ...astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      globals: globals.node,
      parserOptions: { parser: tseslint.parser },
    },
  },
);
