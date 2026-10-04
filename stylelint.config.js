/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-recommended-scss", "stylelint-config-html/astro"],
  ignoreFiles: ["dist/**", ".astro/**", "node_modules/**"],
  rules: {
    // Astro scoped styles and CSS Modules both support :global(...).
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
  },
};
