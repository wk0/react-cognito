module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "no-unused-vars": 0, //useful for boilerplate
    "no-underscore-dangle": 0, //don't like this rule
    "jsx-a11y/anchor-is-valid": 0, // material ui links broker, will be fixed >16.1.0
    "react/forbid-prop-types": 0, // does not work with existig auth structure
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "react/prefer-stateless-function": 0,
    "class-methods-use-this": 0,
    "jsx-a11y/href-no-hash": "off", // Bugged with "eslint-plugin-jsx-a11y": "^6.0.3",
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
};
