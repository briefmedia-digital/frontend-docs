module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
      "no-useless-constructor": "off",
      "react/prefer-stateless-function": "off",
      "react/jsx-curly-spacing": [2, "always"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "env": {
      "browser": true,
      "node": true,
    },
};
