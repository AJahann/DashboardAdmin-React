const { init } = require("@fullstacksjs/eslint-config/init");

module.exports = init({
  modules: {
    auto: true, // If you need auto module detection (refer to Auto Module Detection).
    // Modules configuration check (optional). (refer to Module API)
    tailwind: false,
  },
  // Other ESLint configurations
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf",
      },
    ],
  },
});
