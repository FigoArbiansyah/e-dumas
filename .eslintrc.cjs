module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb-base',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/extensions": [
      "error",
      "never",
      {
          "svg": "always"
      }
    ],
    "global-require": 0,
    "no-debugger": 0,
    "import/no-named-as-default": 0,
    "react/jsx-indent": [
        2,
        2
    ],
    "react/jsx-indent-props": [
        2,
        2
    ],
    "react/prefer-stateless-function": 0,
    "react/no-unused-state": 1,
    "no-unused-vars": 1,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": 0,
    "react/no-danger": 0,
    "camelcase": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/img-redundant-alt": 0,
    // "jsx-a11y/label-has-associated-control": [
    //     2,
    //     {
    //         "labelAttributes": [
    //             "label"
    //         ],
    //         "depth": 3
    //     }
    // ],
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-filename-extension": [
        1,
        {
            "extensions": [
                ".js",
                ".jsx",
                ".web.js",
                ".electron.js",
                ".android.js",
                ".ios.js"
            ]
        }
    ],
    // "jsx-a11y/label-has-for": [
    //     2,
    //     {
    //         "components": [
    //             "label"
    //         ],
    //         "required": {
    //             "every": [
    //                 "nesting",
    //                 "id"
    //             ]
    //         },
    //         "allowChildren": false
    //     }
    // ],
    "no-console": 0,
    "linebreak-style": 0
  },
}
