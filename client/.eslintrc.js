module.export = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "rules": {
    "linebreak-style": "off",
    "semi": "off",
    "comma-dangle": "off",
    "indent": "off",
    "object-curly-spacing": "off",
    "no-array-constructor": "off",
    "operator-linebreak": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "require-jsdoc": "off",
    "no-console": "error",
    "prefer-promise-reject-errors": "off",
    "camelcase": "off",
    "curly": "off",
    "spaced-comment": "off",
    "no-undef": "off",
    "one-var": [
      "error",
      "never"
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ]
      }
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-use-before-define": [
      "error"
    ],
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "quote-props": "off",
    "max-len": "off",
    "new-cap": "off",
    "block-spacing": "off",
    "brace-style": "off",
    "global-require": "off",
    "@typescript-eslint/camelcase": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}