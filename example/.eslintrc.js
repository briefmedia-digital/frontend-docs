module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
      "new-cap": 0,
      "padded-blocks": 0,
      "no-else-return": 0,
      "no-underscore-dangle": 0,
      "arrow-body-style": 0,
      "react/jsx-no-bind": 0,
      "react/jsx-closing-bracket-location": 0,
      "no-useless-constructor": 0,
      "react/prefer-stateless-function": 0,
      "react/jsx-curly-spacing": [2, "always"],
      "import/no-absolute-path": "off",
      "import/extensions": [1, "never"],
      "import/no-unresolved": "off",
      "arrow-parens": [1, "as-needed"],
      "import/prefer-default-export": "off",
      "react/jsx-filename-extension": [1, {
        "extensions": [".js", ".jsx"],
      }],
    },
    "env": {
      "browser": true,
      "node": true,
    },
};
