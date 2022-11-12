module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "@datyin/eslint-config-ts"
  ],
  settings: {
    react: {
      version: "16.0"
    }
  },
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    "react/react-in-jsx-scope": "off"
  }
};
