module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest/globals": true,
  },
  "extends": [
    "eslint:recommended",
    'plugin:react/recommended',
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jest",
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ]
  }
};