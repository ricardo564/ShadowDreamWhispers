require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/prettier",
    "@vue/eslint-config-prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-unused-expressions": "off",
    "vue/no-v-html": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/ban-types": ["off"],
    "@typescript-eslint/no-empty-function": ["off"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-useless-escape": "off",
    "no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        semi: true,
        quoteProps: "consistent",
        jsxSingleQuote: true,
        trailingComma: "all",
        singleQuote: true,
        printWidth: 75,
        tabWidth: 2,
        pluginSearchDirs: false,
        bracketSameLine: false,
        bracketSpacing: true,
        arrowParens: "always",
        singleAttributePerLine: true,
        vueIndentScriptAndStyle: true,
        jsxBracketSameLine: false,
        endOfLine: "auto",
        htmlWhitespaceSensitivity: "strict",
        proseWrap: "never",
        useTabs: false,
        plugins: ["prettier-plugin-tailwindcss"],
        parser: "typescript",
        embeddedLanguageFormatting: "auto",
      },
    ],
  },
  globals: {
    $nuxt: true,
  },
  overrides: [
    {
      files: [
        "./**/__tests__/*.{j,t}s?(x)",
        "./**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    "import/core-modules": ["windi.css"],
  },
};
