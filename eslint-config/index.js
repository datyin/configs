module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  env: {
    es6: true,
    es2021: true,
    browser: true,
    node: true
  },
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly"
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended"
  ],
  ignorePatterns: [
    "**/.eslintrc*",
    "*.min.*",
    "CHANGELOG.md",
    "dist",
    "release",
    "LICENSE*",
    "output",
    "coverage",
    "public",
    "temp",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode"
  ],
  plugins: [
    "import",
    "n",
    "promise",
    "html",
    "unicorn"
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".mjs", ".cjs", ".node"]
      }
    }
  },
  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/array-bracket-spacing": ["error", "never"],
        "jsonc/comma-dangle": ["error", "never"],
        "jsonc/comma-style": ["error", "last"],
        "jsonc/indent": ["error", 2],
        "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
        "jsonc/no-octal-escape": "error",
        "jsonc/object-curly-newline": ["error", { multiline: true, consistent: true }],
        "jsonc/object-curly-spacing": ["error", "always"],
        "jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }]
      }
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      rules: {
        "spaced-comment": "off"
      }
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": ["error",
          {
            pathPattern: "^$",
            order: [
              "publisher",
              "name",
              "displayName",
              "type",
              "version",
              "private",
              "packageManager",
              "description",
              "author",
              "license",
              "funding",
              "homepage",
              "repository",
              "bugs",
              "keywords",
              "categories",
              "sideEffects",
              "exports",
              "main",
              "module",
              "unpkg",
              "jsdelivr",
              "types",
              "typesVersions",
              "bin",
              "icon",
              "files",
              "engines",
              "activationEvents",
              "contributes",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies",
              "pnpm",
              "overrides",
              "resolutions",
              "husky",
              "simple-git-hooks",
              "lint-staged",
              "eslintConfig"
            ]
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" }
          },
          {
            pathPattern: "^exports.*$",
            order: ["types", "require", "import"]
          }
        ]
      }
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off"
      }
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["scripts/**/*.*", "cli.*"],
      rules: {
        "no-console": "off"
      }
    },
    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
        "no-new-func": "off",
        "no-new-object": "off",
        "no-new-symbol": "off",
        "no-new-wrappers": "off",
        "no-sparse-arrays": "off",
        "no-array-constructor": "off",
        "no-console": "off",
        "no-debugger": "off",
        "@typescript-eslint/no-array-constructor": "off",
        "prefer-regex-literals": "off",
        "unicorn/error-message": "off"
      }
    },
    {
      // Code blocks in markdown file
      files: ["**/*.md/*.*"],
      rules: {
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "import/no-unresolved": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-restricted-imports": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off"
      }
    }
  ],
  rules: {
    "accessor-pairs": ["error", { setWithoutGet: true, enforceForClassMembers: true }],
    "array-bracket-spacing": ["error", "never"],
    "array-callback-return": "error",
    "arrow-parens": ["error", "always", { requireForBlockBody: true }],
    "arrow-spacing": ["error", { before: true, after: true }],
    "block-scoped-var": "error",
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "camelcase": "off",
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "complexity": ["off", 11],
    "computed-property-spacing": ["error", "never", { enforceForClassMembers: true }],
    "consistent-return": "off",
    "constructor-super": "error",
    "curly": ["error", "multi-line"],
    "default-case-last": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "off",
    "eol-last": "error",
    "eqeqeq": ["error", "smart"],
    "eslint-comments/disable-enable-pair": "off",
    "func-call-spacing": ["error", "never"],
    "generator-star-spacing": ["error", { before: true, after: true }],
    "import/export": "error",
    "import/first": "error",
    "import/namespace": "off",
    "import/no-absolute-path": "off",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-default": "error",
    "import/no-unresolved": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/order": "error",
    "indent": ["error", 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "keyword-spacing": ["error", { before: true, after: true }],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "multiline-ternary": ["error", "always-multiline"],
    "n/handle-callback-err": ["error", "^(err|error)$"],
    "n/no-callback-literal": "error",
    "n/no-deprecated-api": "error",
    "n/no-exports-assign": "error",
    "n/no-new-require": "error",
    "n/no-path-concat": "error",
    "n/process-exit-as-throw": "error",
    "new-cap": ["error", { newIsCap: true, capIsNew: false, properties: true }],
    "new-parens": "error",
    "no-alert": "warn",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "always"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-const-assign": "error",
    "no-constant-condition": "warn",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": ["error", "functions"],
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    "no-lone-blocks": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-mixed-operators": ["error", {
      groups: [
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      allowSamePrecedence: true
    }],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": ["error", { builtinGlobals: false }],
    "no-regex-spaces": "error",
    "no-restricted-syntax": ["error", "DebuggerStatement", "LabeledStatement", "WithStatement"],
    "no-return-assign": "off",
    "no-return-await": "off",
    "no-self-assign": ["error", { props: true }],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-use-before-define": ["error", { functions: false, classes: false, variables: false }],
    "no-useless-backreference": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "off",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-newline": ["error", { multiline: true, consistent: true }],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
    "object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],
    "one-var": ["error", { initialized: "never" }],
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
    "padded-blocks": ["error", { blocks: "never", switches: "never", classes: "never" }],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: false, allowUnboundThis: true }],
    "prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: true }],
    "prefer-exponentiation-operator": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "promise/param-names": "error",
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "double"],
    "require-await": "off",
    "rest-spread-spacing": ["error", "never"],
    "semi": ["error", "always"],
    "semi-spacing": ["error", { before: false, after: true }],
    "sort-imports": ["error", {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      allowSeparatedGroups: false
    }],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "spaced-comment": ["error", "always", {
      line: { markers: ["/"], exceptions: ["/", "#"] },
      block: { markers: ["!"], exceptions: ["*"], balanced: true }
    }],
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/throw-new-error": "error",
    "use-isnan": ["error", { enforceForSwitchCase: true, enforceForIndexOf: true }],
    "valid-typeof": ["error", { requireStringLiterals: true }],
    "vars-on-top": "error",
    "wrap-iife": ["error", "any", { functionPrototypeMethods: true }],
    "yield-star-spacing": ["error", "both"],
    "yml/no-empty-document": "off",
    "yml/quotes": ["error", { prefer: "double", avoidEscape: false }],
    "yoda": ["error", "never"]
  }
};
