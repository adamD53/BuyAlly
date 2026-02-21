import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactNative from "eslint-plugin-react-native";
import prettier from "eslint-config-prettier";

export default [
  // Ignore generated / build output
  {
    ignores: ["node_modules/", "dist/", "build/", ".expo/", "**/*.d.ts"],
  },

  js.configs.recommended,

  // TypeScript + TSX
  ...tseslint.configs.recommended,

  // React / Hooks / React Native
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-native": reactNative,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Common RN rules (you can tune these)
      "react-native/no-unused-styles": "warn",
      "react-native/split-platform-components": "warn",
      "react-native/no-inline-styles": "off", // many Expo projects allow inline styles
    },
  },

  prettier,
];